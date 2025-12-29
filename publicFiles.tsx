// Routes for serving public static files

// Robots.txt
app.get('/robots.txt', async (ctx) => {
  ctx.resp.headers['Content-Type'] = 'text/plain';
  
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://ummistustelikvideerimine.ee/sitemap.xml

# Disallow admin and API endpoints
Disallow: /api/
Disallow: /s/

# Crawl-delay for polite crawlers
Crawl-delay: 1`;
});

// Sitemap.xml
app.get('/sitemap.xml', async (ctx) => {
  ctx.resp.headers['Content-Type'] = 'application/xml';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Home Page -->
  <url>
    <loc>https://ummistustelikvideerimine.ee/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="et" href="https://ummistustelikvideerimine.ee/" />
    <xhtml:link rel="alternate" hreflang="ru" href="https://ummistustelikvideerimine.ee/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://ummistustelikvideerimine.ee/" />
  </url>
  
  <!-- Services Page -->
  <url>
    <loc>https://ummistustelikvideerimine.ee/teenused</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="et" href="https://ummistustelikvideerimine.ee/teenused" />
    <xhtml:link rel="alternate" hreflang="ru" href="https://ummistustelikvideerimine.ee/teenused" />
  </url>
  
  <!-- Pricing Page -->
  <url>
    <loc>https://ummistustelikvideerimine.ee/hinnad</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="et" href="https://ummistustelikvideerimine.ee/hinnad" />
    <xhtml:link rel="alternate" hreflang="ru" href="https://ummistustelikvideerimine.ee/hinnad" />
  </url>
  
  <!-- About Page -->
  <url>
    <loc>https://ummistustelikvideerimine.ee/meist</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="et" href="https://ummistustelikvideerimine.ee/meist" />
    <xhtml:link rel="alternate" hreflang="ru" href="https://ummistustelikvideerimine.ee/meist" />
  </url>
  
  <!-- Contacts Page -->
  <url>
    <loc>https://ummistustelikvideerimine.ee/kontakt</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="et" href="https://ummistustelikvideerimine.ee/kontakt" />
    <xhtml:link rel="alternate" hreflang="ru" href="https://ummistustelikvideerimine.ee/kontakt" />
  </url>
  
  <!-- Privacy Policy -->
  <url>
    <loc>https://ummistustelikvideerimine.ee/privaatsus</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <!-- Terms of Service -->
  <url>
    <loc>https://ummistustelikvideerimine.ee/tingimused</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
</urlset>`;
});
