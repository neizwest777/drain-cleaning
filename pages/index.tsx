import { jsx } from "@app/html-jsx"
import { GlobalStyles, TailwindConfig } from './styles'
import MainPage from './pages/MainPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import PricingPage from './pages/PricingPage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import AboutPage from './pages/AboutPage.vue'
import PrivacyPage from './pages/PrivacyPage.vue'
import TermsPage from './pages/TermsPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import CookieBanner from './components/layout/CookieBanner.vue'

// Main page route
// @shared-route
export const indexRoute = app.get('/', async (ctx, req) => {
  const host = ctx.account.customDomain || 'ummistustelikvideerimine.ee'
  const url = `https://${host}${req.path}`
  
  return (
    <html lang="et">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ummistuste Likvideerimine Tallinnas 24/7 | Kiire Kanalisatsiooni Puhastus ja Survepesu</title>
        <meta name="description" content="Professionaalne ummistuste likvideerimine Tallinnas ja Harjumaal 24/7. WC ummistus, kanalisatsiooni survepesu, torupuhastus. Saabume 30 min. Garantii ja õiglane hind. ☎️ +372 5368 4587" />
        <meta name="keywords" content="ummistuste likvideerimine Tallinnas, kanalisatsiooni puhastus, kanalisatsiooni survepesu, WC ummistus, toruabi, torupuhastus, kraanikausi ummistus, Tallinn, Harjumaa, kiirabi kanalisatsioonile" />
        
        {/* Canonical */}
        <link rel="canonical" href={url} />
        
        {/* Language alternates */}
        <link rel="alternate" hreflang="et" href={url} />
        <link rel="alternate" hreflang="ru" href={url} />
        <link rel="alternate" hreflang="x-default" href={url} />
        
        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ummistuste Likvideerimine Tallinnas 24/7" />
        <meta property="og:description" content="Kiire ja professionaalne kanalisatsiooni puhastus. Saabume 30 minutiga. ☎️ +372 5368 4587" />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="et_EE" />
        <meta property="og:locale:alternate" content="ru_RU" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ummistuste Likvideerimine Tallinnas 24/7" />
        <meta name="twitter:description" content="Kiire ja professionaalne kanalisatsiooni puhastus. Saabume 30 minutiga." />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://usa.cdn-chatium.io" />
        <link rel="dns-prefetch" href="https://usa.cdn-chatium.io" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload Hero Image for LCP optimization */}
        <link rel="preload" as="image" href="https://usa.cdn-chatium.io/get/image_usa_lFWgnlczt9.1408x768.jpeg" fetchpriority="high" />
        
        {/* Tailwind CSS */}
        <script src="/s/static/lib/tailwind.3.4.16.min.js"></script>
        <TailwindConfig />
        <GlobalStyles />
        
        {/* Font Awesome */}
        <link href="/s/static/lib/fontawesome/6.7.2/css/all.min.css" rel="stylesheet" />
        
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}</script>
        
        {/* Clarity Analytics */}
        <script src="/s/metric/clarity.js"></script>
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="google-site-verification=fChC3pURnxEFZdTaW_4QYyoP-ANqZwZKzaJC9eqbU1I" />
        
        {/* JSON-LD Structured Data - LocalBusiness */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Plumber',
          'name': 'Ummistuste Likvideerimine Tallinnas',
          '@id': url,
          'url': url,
          'telephone': '+37253684587',
          'email': 'info@prism.ee',
          'description': 'Professionaalne kanalisatsiooni puhastus ja ummistuste likvideerimine Tallinnas ja Harjumaal. 24/7 kiirabi, survepesu, videoinspektsioon. Garantii ja läbipaistev hind.',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Tallinn',
            'addressRegion': 'Harjumaa',
            'postalCode': '10111',
            'addressCountry': 'EE'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 59.4370,
            'longitude': 24.7536
          },
          'openingHoursSpecification': [{
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'opens': '00:00',
            'closes': '23:59'
          }],
          'priceRange': '€€-€€€',
          'areaServed': [
            { '@type': 'City', 'name': 'Tallinn' },
            { '@type': 'City', 'name': 'Kesklinn' },
            { '@type': 'City', 'name': 'Kristiine' },
            { '@type': 'City', 'name': 'Lasnamäe' },
            { '@type': 'City', 'name': 'Mustamäe' },
            { '@type': 'City', 'name': 'Nõmme' },
            { '@type': 'City', 'name': 'Pirita' },
            { '@type': 'City', 'name': 'Põhja-Tallinn' },
            { '@type': 'City', 'name': 'Haabersti' },
            { '@type': 'City', 'name': 'Viimsi' },
            { '@type': 'City', 'name': 'Maardu' },
            { '@type': 'City', 'name': 'Keila' },
            { '@type': 'City', 'name': 'Saue' },
            { '@type': 'State', 'name': 'Harjumaa' }
          ],
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '47'
          },
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Kanalisatsiooni teenused',
            'itemListElement': [
              {
                '@type': 'Offer',
                'itemOffered': { '@type': 'Service', 'name': 'WC ummistuste likvideerimine' }
              },
              {
                '@type': 'Offer',
                'itemOffered': { '@type': 'Service', 'name': 'Kanalisatsiooni survepesu' }
              },
              {
                '@type': 'Offer',
                'itemOffered': { '@type': 'Service', 'name': 'Videoinspektsioon' }
              },
              {
                '@type': 'Offer',
                'itemOffered': { '@type': 'Service', 'name': 'Ennetav hooldus 24/7' }
              }
            ]
          }
        })}</script>
        
        {/* JSON-LD - Organization */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'Ummistuste Likvideerimine Tallinnas',
          'url': url,
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+37253684587',
            'contactType': 'customer service',
            'email': 'info@prism.ee',
            'availableLanguage': ['et', 'ru']
          }
        })}</script>
      </head>
      <body>
        <MainPage />
        <CookieBanner />
      </body>
    </html>
  )
})

// Services page
// @shared-route
export const servicesRoute = app.get('/teenused', async (ctx, req) => {
  const host = ctx.account.customDomain || 'ummistustelikvideerimine.ee'
  const url = `https://${host}${req.path}`
  
  return (
    <html lang="et">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Teenused - Kanalisatsiooni Survepesu, WC Ummistuste Likvideerimine | Tallinn</title>
        <meta name="description" content="Täielik teenuste valik: WC ummistuste likvideerimine, kanalisatsiooni survepesu, videoinspektsioon, torupuhastus Tallinnas ja Harjumaal. 24/7 kiirabi. Garantii ja professionaalne varustus. ☎️ +372 5368 4587" />
        
        <link rel="canonical" href={url} />
        <link rel="alternate" hreflang="et" href={url} />
        <link rel="alternate" hreflang="ru" href={url} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Teenused - Ummistuste Likvideerimine" />
        <meta property="og:description" content="WC puhastus, kanalisatsiooni survepesu, videoinspektsioon. Professionaalne teenus Tallinnas." />
        <meta property="og:url" content={url} />
        
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>" />
        
        <script src="/s/static/lib/tailwind.3.4.16.min.js"></script>
        <TailwindConfig />
        <GlobalStyles />
        <link href="/s/static/lib/fontawesome/6.7.2/css/all.min.css" rel="stylesheet" />
        <script src="/s/metric/clarity.js"></script>
        
        {/* JSON-LD - Service Schema */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          'serviceType': 'Kanalisatsiooni Survepesu ja Ummistuste Likvideerimine',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Ummistuste Likvideerimine Tallinnas'
          },
          'areaServed': {
            '@type': 'City',
            'name': 'Tallinn, Harjumaa'
          },
          'description': 'Täielik teenuste valik kanalisatsioonisüsteemide hoolduseks ja remondiks. WC ummistuste likvideerimine, kanalisatsiooni survepesu, videoinspektsioon.',
          'url': url,
          'availableChannel': {
            '@type': 'ServiceChannel',
            'serviceUrl': url,
            'servicePhone': '+37253684587',
            'availableLanguage': ['et', 'ru']
          }
        })}</script>
        
        {/* JSON-LD - BreadcrumbList */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [{
            '@type': 'ListItem',
            'position': 1,
            'name': 'Pealeht',
            'item': `https://${host}/`
          }, {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Teenused',
            'item': url
          }]
        })}</script>
      </head>
      <body>
        <ServicesPage />
        <CookieBanner />
      </body>
    </html>
  )
})

// Pricing page
// @shared-route
export const pricingRoute = app.get('/hinnad', async (ctx, req) => {
  const host = ctx.account.customDomain || 'ummistustelikvideerimine.ee'
  const url = `https://${host}${req.path}`
  
  return (
    <html lang="et">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hinnad - Ummistuste Likvideerimine ja Kanalisatsiooni Survepesu Hinnad Tallinnas</title>
        <meta name="description" content="Läbipaistvad hinnad kanalisatsiooni puhastusele ja survepesule Tallinnas. Alates €100. Lõplik hind pärast diagnostikat. Mitte mingeid varjatud kulusid. Garantii. ☎️ +372 5368 4587" />
        
        <link rel="canonical" href={url} />
        <link rel="alternate" hreflang="et" href={url} />
        <link rel="alternate" hreflang="ru" href={url} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hinnad - Ummistuste Likvideerimine" />
        <meta property="og:description" content="Läbipaistvad ja õiglased hinnad. Diagnostika enne töö alustamist." />
        <meta property="og:url" content={url} />
        
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>" />
        
        <script src="/s/static/lib/tailwind.3.4.16.min.js"></script>
        <TailwindConfig />
        <GlobalStyles />
        <link href="/s/static/lib/fontawesome/6.7.2/css/all.min.css" rel="stylesheet" />
        <script src="/s/metric/clarity.js"></script>
      </head>
      <body>
        <PricingPage />
        <CookieBanner />
      </body>
    </html>
  )
})

// Contacts page
// @shared-route
export const contactsRoute = app.get('/kontakt', async (ctx, req) => {
  const host = ctx.account.customDomain || 'ummistustelikvideerimine.ee'
  const url = `https://${host}${req.path}`
  
  return (
    <html lang="et">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kontakt - Kanalisatsiooni Kiirabi 24/7 Tallinnas | +372 5368 4587</title>
        <meta name="description" content="Kanalisatsiooni hädaabi Tallinnas ja Harjumaal 24/7. Võtke ühendust ummistuste likvideerimiseks. ☎️ +372 5368 4587 📧 info@prism.ee. Saabume 30 min. FAQ ja kiire kontaktvorm." />
        
        <link rel="canonical" href={url} />
        <link rel="alternate" hreflang="et" href={url} />
        <link rel="alternate" hreflang="ru" href={url} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kontakt - Ummistuste Likvideerimine" />
        <meta property="og:description" content="☎️ +372 5368 4587 | 📧 info@prism.ee | 24/7 teenindus Tallinnas" />
        <meta property="og:url" content={url} />
        
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>" />
        
        <script src="/s/static/lib/tailwind.3.4.16.min.js"></script>
        <TailwindConfig />
        <GlobalStyles />
        <link href="/s/static/lib/fontawesome/6.7.2/css/all.min.css" rel="stylesheet" />
        <script src="/s/metric/clarity.js"></script>
        
        {/* JSON-LD - FAQPage Schema */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'Kui kiiresti te saabute?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Tavaliselt saabume 30 minuti jooksul pärast kõnet Tallinnas ja Harjumaal. Töötame 24/7, seega oleme alati valmis kiireks reageerimiseks.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Kui palju maksavad teie teenused?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Hinnad algavad alates €100, lõplik maksumus sõltub probleemi keerukusest. Anname täpse hinnapakkumise pärast diagnostikat. Mitte mingeid varjatud kulusid.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Kas pakute garantiid?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Jah, anname garantii kõigile tehtud töödele. Kasutame professionaalset varustust ja kvaliteetseid materjale. Garantiiperiood sõltub teenuse tüübist.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Millistes piirkondades te töötate?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Teenindame Tallinna kõiki linnaosi (Kesklinn, Kristiine, Lasnamäe, Mustamäe, Nõmme, Pirita, Põhja-Tallinn, Haabersti) ning Harjumaa piirkondi (Viimsi, Maardu, Keila, Saue, Paldiski, Loksa).'
              }
            },
            {
              '@type': 'Question',
              'name': 'Mida ma peaksin tegema enne teie saabumist?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Lõpetage vee kasutamine, et vältida üleujutust. Võimalusel määrake probleemi asukoht. Puhastage juurdepääs kanalisatsioonisüsteemile.'
              }
            }
          ]
        })}</script>
        
        {/* JSON-LD - BreadcrumbList */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [{
            '@type': 'ListItem',
            'position': 1,
            'name': 'Pealeht',
            'item': `https://${host}/`
          }, {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Kontakt',
            'item': url
          }]
        })}</script>
      </head>
      <body>
        <ContactsPage />
        <CookieBanner />
      </body>
    </html>
  )
})

// About page
// @shared-route
export const aboutRoute = app.get('/meist', async (ctx, req) => {
  const host = ctx.account.customDomain || 'ummistustelikvideerimine.ee'
  const url = `https://${host}${req.path}`
  
  return (
    <html lang="et">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Meist - Pikaajaline Kogemus Kanalisatsiooni Survepesus ja Ummistuste Likvideerimisel</title>
        <meta name="description" content="Aastatepikkune kogemus kanalisatsioonisüsteemide hoolduses Tallinnas. Professionaalne meeskond, kaasaegne survepesu tehnika, videoinspektsioon. Garantii ja läbipaistev hind. Tutvuge meie tööportfoolioga." />
        
        <link rel="canonical" href={url} />
        <link rel="alternate" hreflang="et" href={url} />
        <link rel="alternate" hreflang="ru" href={url} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Meist - Ummistuste Likvideerimine" />
        <meta property="og:description" content="Professionaalne kanalisatsiooni teenus. Kogemus, kaasaegne tehnika, garantii." />
        <meta property="og:url" content={url} />
        
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>" />
        
        <script src="/s/static/lib/tailwind.3.4.16.min.js"></script>
        <TailwindConfig />
        <GlobalStyles />
        <link href="/s/static/lib/fontawesome/6.7.2/css/all.min.css" rel="stylesheet" />
        <script src="/s/metric/clarity.js"></script>
      </head>
      <body>
        <AboutPage />
        <CookieBanner />
      </body>
    </html>
  )
})

// Privacy page
// @shared-route
export const privacyRoute = app.get('/privaatsus', async (ctx, req) => {
  const host = ctx.account.customDomain || 'ummistustelikvideerimine.ee'
  const url = `https://${host}${req.path}`
  
  return (
    <html lang="et">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Privaatsuspoliitika - Andmekaitse ja Privaatsus</title>
        <meta name="description" content="Privaatsuspoliitika. Kuidas me kogume, kasutame ja kaitseme teie isikuandmeid. GDPR nõuetele vastav andmetöötlus." />
        <meta name="robots" content="noindex, follow" />
        
        <link rel="canonical" href={url} />
        
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>" />
        
        <script src="/s/static/lib/tailwind.3.4.16.min.js"></script>
        <TailwindConfig />
        <GlobalStyles />
        <link href="/s/static/lib/fontawesome/6.7.2/css/all.min.css" rel="stylesheet" />
      </head>
      <body>
        <PrivacyPage />
        <CookieBanner />
      </body>
    </html>
  )
})

// Terms page
// @shared-route
export const termsRoute = app.get('/tingimused', async (ctx, req) => {
  const host = ctx.account.customDomain || 'ummistustelikvideerimine.ee'
  const url = `https://${host}${req.path}`
  
  return (
    <html lang="et">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kasutustingimused - Teenuse Tingimused</title>
        <meta name="description" content="Meie teenuste kasutustingimused. Palun tutvuge enne teenuse tellimist." />
        <meta name="robots" content="noindex, follow" />
        
        <link rel="canonical" href={url} />
        
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>" />
        
        <script src="/s/static/lib/tailwind.3.4.16.min.js"></script>
        <TailwindConfig />
        <GlobalStyles />
        <link href="/s/static/lib/fontawesome/6.7.2/css/all.min.css" rel="stylesheet" />
      </head>
      <body>
        <TermsPage />
        <CookieBanner />
      </body>
    </html>
  )
})

// 404 page - catch all unmatched routes
// @shared-route
export const notFoundRoute = app.get('/*', async (ctx, req) => {
  const host = ctx.account.customDomain || 'ummistustelikvideerimine.ee'
  const url = `https://${host}${req.path}`
  
  ctx.resp.statusCode = 404
  
  return (
    <html lang="et">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lehte Ei Leitud - 404</title>
        <meta name="robots" content="noindex, follow" />
        
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>" />
        
        <script src="/s/static/lib/tailwind.3.4.16.min.js"></script>
        <TailwindConfig />
        <GlobalStyles />
        <link href="/s/static/lib/fontawesome/6.7.2/css/all.min.css" rel="stylesheet" />
      </head>
      <body>
        <NotFoundPage />
        <CookieBanner />
      </body>
    </html>
  )
})
