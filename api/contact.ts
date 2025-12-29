import { s } from '@start/schema'
import { sendNotificationToUsers } from '@user-notifier/sdk'
import { findUsers } from '@app/auth'

// Rate limiting map - stores IP addresses and their request counts
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  
  if (!limit || now > limit.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 }); // 10 minutes
    return true;
  }
  
  if (limit.count >= 3) {
    return false; // Rate limit exceeded
  }
  
  limit.count++;
  return true;
}

// Contact form API
// @shared-route
export const contactFormRoute = app
  .body(s => ({
    name: s.string().min(2).max(100),
    phone: s.string().min(7).max(20),
    email: s.string().email().or(s.literal('')).optional(), // Allow empty string or valid email
    message: s.string().min(10).max(1000),
    honeypot: s.string().optional(), // Anti-spam honeypot field
  }))
  .post('/submit', async (ctx, req) => {
    try {
      // Honeypot check - if filled, it's a bot
      if (req.body.honeypot) {
        return { success: false, error: 'Invalid request' };
      }
      
      // Rate limiting
      const clientIp = ctx.req.headers['x-forwarded-for'] || ctx.req.headers['x-real-ip'] || 'unknown';
      if (!checkRateLimit(clientIp as string)) {
        return { success: false, error: 'Too many requests. Please try again later.' };
      }
      
      // Validation passed, data is already validated by schema
      const { name, phone, message } = req.body;
      const email = req.body.email && req.body.email.trim() ? req.body.email : undefined;
      
      // Log the request
      ctx.account.log('Contact form submitted', {
        level: 'info',
        json: { name, phone, email: email || 'not provided', message }
      });
      
      // Get users with specific roles (Owner, Admin, Developer)
      const targetUsers = await findUsers(ctx, {
        where: {
          accountRole: ['Admin', 'Staff'] // Owner typically has Admin role, Developer has Staff role
        }
      });
      
      if (targetUsers.length === 0) {
        ctx.account.log('No target users found for notification', { level: 'warn' });
      }
      
      const targetUserIds = targetUsers.map(user => user.id);
      
      // Send email notification to info@prism.ee and target users
      if (targetUserIds.length > 0) {
        await sendNotificationToUsers(ctx, targetUserIds, {
          title: `🔔 Новая заявка: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">📋 Новая заявка с сайта</h2>
            <table style="width: 100%; margin: 20px 0;">
              <tr>
                <td style="padding: 8px; font-weight: bold; width: 120px;">👤 Имя:</td>
                <td style="padding: 8px;">${name}</td>
              </tr>
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 8px; font-weight: bold;">📞 Телефон:</td>
                <td style="padding: 8px;"><a href="tel:${phone}" style="color: #1e40af;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">📧 Email:</td>
                <td style="padding: 8px;">${email ? `<a href="mailto:${email}" style="color: #1e40af;">${email}</a>` : '-'}</td>
              </tr>
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 8px; font-weight: bold; vertical-align: top;">💬 Сообщение:</td>
                <td style="padding: 8px;">${message}</td>
              </tr>
            </table>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 10px;">
              Отправлено с сайта ummistustelikvideerimine.ee<br>
              Дата: ${new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })}
            </p>
          </div>
        `,
        plain: `🔔 Новая заявка с сайта\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📧 Email: ${email || '-'}\n💬 Сообщение:\n${message}\n\n---\nОтправлено: ${new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })}`,
        md: `## 📋 Новая заявка с сайта\n\n**👤 Имя:** ${name}  \n**📞 Телефон:** [${phone}](tel:${phone})  \n**📧 Email:** ${email ? `[${email}](mailto:${email})` : '-'}  \n\n**💬 Сообщение:**\n${message}\n\n---\n*Отправлено: ${new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })}*`,
        });
      }
      
      return { success: true, message: 'Thank you! We will contact you soon.' };
    } catch (error) {
      ctx.account.log('Contact form error', {
        level: 'error',
        json: { 
          error: String(error),
          stack: error instanceof Error ? error.stack : undefined,
          requestData: req.body
        }
      });
      
      return { 
        success: false, 
        error: 'An error occurred. Please try again or call us directly at +372 5368 4587' 
      };
    }
  });
