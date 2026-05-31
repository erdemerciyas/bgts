export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BGTS - Business & Global Technology Solutions',
    url: 'https://bgts.com.tr',
    logo: 'https://bgts.com.tr/BGTS_logo.png',
    description: 'Finans, Savunma, Perakende ve Telekom sektörleri için lider teknoloji ortağı. 25 yılı aşkın deneyimle, 1,400+ mühendis ile dijital dönüşüm çözümleri sunuyoruz.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Maslak Mahallesi',
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@bgts.com.tr',
      availableLanguage: ['Turkish', 'English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/bgts',
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 1400,
    },
    foundingDate: '1997',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebSiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BGTS - Business & Global Technology Solutions',
    url: 'https://bgts.com.tr',
    description: 'Finans, Savunma, Perakende ve Telekom sektörleri için lider teknoloji ortağı. 25 yılı aşkın deneyimle, 1,400+ mühendis ile dijital dönüşüm çözümleri sunuyoruz.',
    inLanguage: 'tr',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface BreadcrumbProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbStructuredData({ items }: BreadcrumbProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://bgts.com.tr${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface ProductSchemaProps {
  name: string
  description: string
  url: string
}

export function SoftwareApplicationStructuredData({ name, description, url }: ProductSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: `https://bgts.com.tr${url}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY',
      availability: 'https://schema.org/OnlineOnly',
    },
    creator: {
      '@type': 'Organization',
      name: 'BGTS',
      url: 'https://bgts.com.tr',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
}

export function ServiceStructuredData({ name, description, url }: ServiceSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://bgts.com.tr${url}`,
    provider: {
      '@type': 'Organization',
      name: 'BGTS - Business & Global Technology Solutions',
      url: 'https://bgts.com.tr',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function LocalBusinessStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'BGTS - Business & Global Technology Solutions',
    description: 'Finans, Savunma, Perakende ve Telekom sektörleri için lider teknoloji ortağı. 25 yılı aşkın deneyimle, 1,400+ mühendis ile dijital dönüşüm çözümleri sunuyoruz.',
    url: 'https://bgts.com.tr',
    telephone: '+90 212 555 0000',
    email: 'info@bgts.com.tr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Maslak Mahallesi, Büyükdere Caddesi No:128',
      addressLocality: 'İstanbul',
      addressRegion: 'İstanbul',
      postalCode: '34398',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.1097,
      longitude: 29.0209,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'Country',
        name: 'Turkey',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'Germany',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
    sameAs: [
      'https://www.linkedin.com/company/bgts',
      'https://twitter.com/bgts',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface FAQPageSchemaProps {
  questions: { question: string; answer: string }[]
}

export function FAQPageStructuredData({ questions }: FAQPageSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: { name: string; text: string }[]
}

export function HowToStructuredData({ name, description, steps }: HowToSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime: 'PT30M',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    provider: {
      '@type': 'Organization',
      name: 'BGTS - Business & Global Technology Solutions',
      url: 'https://bgts.com.tr',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface VideoSchemaProps {
  name: string
  description: string
  uploadDate: string
  thumbnailUrl: string
  contentUrl: string
}

export function VideoStructuredData({ name, description, uploadDate, thumbnailUrl, contentUrl }: VideoSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    uploadDate,
    thumbnailUrl,
    contentUrl,
    publisher: {
      '@type': 'Organization',
      name: 'BGTS - Business & Global Technology Solutions',
      url: 'https://bgts.com.tr',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
