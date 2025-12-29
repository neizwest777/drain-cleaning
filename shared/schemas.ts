// @shared

export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  image?: string;
  '@id': string;
  url: string;
  telephone: string;
  email: string;
  description: string;
  address: {
    '@type': string;
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: {
    '@type': string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  priceRange: string;
  areaServed: Array<{
    '@type': string;
    name: string;
  }>;
  sameAs?: string[];
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
  };
  hasOfferCatalog?: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
      };
    }>;
  };
}

export function getLocalBusinessSchema(url: string, lang: 'et' | 'ru'): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    'name': lang === 'et' ? 'Ummistuste Likvideerimine Tallinnas' : 'Устранение Засоров в Таллине',
    '@id': url,
    'url': url,
    'telephone': '+37253684587',
    'email': 'info@prism.ee',
    'description': lang === 'et' 
      ? 'Professionaalne kanalisatsiooni puhastus ja ummistuste likvideerimine Tallinnas ja Harjumaal. 24/7 kiirabi, survepesu, videoinspektsioon. Garantii ja läbipaistev hind.'
      : 'Профессиональная прочистка канализации и устранение засоров в Таллине и Харьюмаа. Срочная помощь 24/7, гидродинамическая промывка, видеоинспекция. Гарантия и прозрачная цена.',
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
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59'
      }
    ],
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
      'name': lang === 'et' ? 'Kanalisatsiooni teenused' : 'Услуги канализации',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': lang === 'et' ? 'WC ummistuste likvideerimine' : 'Устранение засоров унитаза'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': lang === 'et' ? 'Kanalisatsiooni survepesu' : 'Гидродинамическая прочистка канализации'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': lang === 'et' ? 'Videoinspektsioon' : 'Видеоинспекция'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': lang === 'et' ? 'Ennetav hooldus 24/7' : 'Профилактическое обслуживание 24/7'
          }
        }
      ]
    }
  };
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  description: string;
}

export function getServiceSchema(serviceType: string, description: string, url: string, lang: 'et' | 'ru' = 'et'): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': serviceType,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Ummistuste Likvideerimine Tallinnas'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Tallinn, Harjumaa'
    },
    'description': description,
    'url': url,
    'availableChannel': {
      '@type': 'ServiceChannel',
      'serviceUrl': url,
      'servicePhone': '+37253684587',
      'availableLanguage': ['et', 'ru']
    }
  };
}

export interface FAQItem {
  '@type': string;
  name: string;
  acceptedAnswer: {
    '@type': string;
    text: string;
  };
}

export interface FAQPageSchema {
  '@context': string;
  '@type': string;
  mainEntity: FAQItem[];
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export interface BreadcrumbItem {
  '@type': string;
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbListSchema {
  '@context': string;
  '@type': string;
  itemListElement: BreadcrumbItem[];
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo?: string;
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
    availableLanguage: string[];
  };
}

export function getOrganizationSchema(url: string): OrganizationSchema {
  return {
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
  };
}
