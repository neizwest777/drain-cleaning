import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Простая защита от спама/частых запросов (в serverless может сбрасываться)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextApiRequest) {
  const xff = req.headers["x-forwarded-for"];
  const ip =
    (Array.isArray(xff) ? xff[0] : xff)?.split(",")[0]?.trim() ||
    (req.headers["x-real-ip"] as string | undefined) ||
    req.socket.remoteAddress ||
    "unknown";
  return ip;
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 }); // 10 минут
    return true;
  }

  if (limit.count >= 3) return false;
  limit.count++;
  return true;
}

// очень простая валидация без сторонних пакетов
function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ success: false, error: "Method not allowed" });

  try {
    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return res.status(429).json({ success: false, error: "Too many requests. Please try again later." });
    }

    const { name, phone, email, message, honeypot } = (req.body ?? {}) as {
      name?: string;
      phone?: string;
      email?: string;
      message?: string;
      honeypot?: string;
    };

    // Honeypot
    if (honeypot) return res.status(400).json({ success: false, error: "Invalid request" });

    // Валидация
    if (!name || name.trim().length < 2 || name.trim().length > 100)
      return res.status(400).json({ success: false, error: "Invalid name" });

    if (!phone || phone.trim().length < 7 || phone.trim().length > 20)
      return res.status(400).json({ success: false, error: "Invalid phone" });

    if (!message || message.trim().length < 10 || message.trim().length > 1000)
      return res.status(400).json({ success: false, error: "Invalid message" });

    const emailClean = (email ?? "").trim();
    if (emailClean && !isEmail(emailClean))
      return res.status(400).json({ success: false, error: "Invalid email" });

    // SMTP отправка
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true для 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO || "info@prism.ee";
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER || to;

    const subject = `🔔 Новая заявка: ${name.trim()}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">📋 Новая заявка с сайта</h2>
        <table style="width: 100%; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 120px;">👤 Имя:</td>
            <td style="padding: 8px;">${escapeHtml(name.trim())}</td>
          </tr>
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 8px; font-weight: bold;">📞 Телефон:</td>
            <td style="padding: 8px;"><a href="tel:${escapeAttr(phone.trim())}" style="color: #1e40af;">${escapeHtml(phone.trim())}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">📧 Email:</td>
            <td style="padding: 8px;">${emailClean ? `<a href="mailto:${escapeAttr(emailClean)}" style="color: #1e40af;">${escapeHtml(emailClean)}</a>` : "-"}</td>
          </tr>
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 8px; font-weight: bold; vertical-align: top;">💬 Сообщение:</td>
            <td style="padding: 8px; white-space: pre-wrap;">${escapeHtml(message.trim())}</td>
          </tr>
        </table>
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 10px;">
          Отправлено с сайта<br>
          Дата: ${new Date().toLocaleString("et-EE", { timeZone: "Europe/Tallinn" })}
        </p>
      </div>
    `;

    const plain =
      `🔔 Новая заявка с сайта\n\n` +
      `👤 Имя: ${name.trim()}\n` +
      `📞 Телефон: ${phone.trim()}\n` +
      `📧 Email: ${emailClean || "-"}\n` +
      `💬 Сообщение:\n${message.trim()}\n\n` +
      `---\n` +
      `Отправлено: ${new Date().toLocaleString("et-EE", { timeZone: "Europe/Tallinn" })}`;

    await transporter.sendMail({
      from,
      to,
      subject,
      text: plain,
      html,
      replyTo: emailClean || undefined,
    });

    return res.status(200).json({ success: true, message: "Thank you! We will contact you soon." });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "An error occurred. Please try again or call us directly at +372 5368 4587",
      details: process.env.NODE_ENV === "development" ? String(e) : undefined,
    });
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
function escapeAttr(s: string) {
  return escapeHtml(s).replace(/`/g, "&#96;");
}
