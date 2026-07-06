import type { Locale } from '@/i18n-config'

const ORG_DESCRIPTION: Record<Locale, string> = {
  tr: 'Finans, Savunma, Perakende ve Telekom sektörleri için lider teknoloji ortağı. 25 yılı aşkın deneyimle, 1,400+ mühendis ile dijital dönüşüm çözümleri sunuyoruz.',
  eng: 'Leading technology partner for Finance, Defense, Retail, and Telecom sectors. With 25+ years of experience and 1,400+ engineers, we deliver digital transformation solutions.',
}

export function OrganizationStructuredData({ locale }: { locale: Locale }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BGTS - Business & Global Technology Solutions',
    url: 'https://bgts.com.tr',
    logo: 'https://bgts.com.tr/BGTS_logo.png',
    description: ORG_DESCRIPTION[locale],
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

export function WebSiteStructuredData({ locale }: { locale: Locale }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BGTS - Business & Global Technology Solutions',
    url: 'https://bgts.com.tr',
    description: ORG_DESCRIPTION[locale],
    inLanguage: ['tr', 'en'],
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
    telephone: '+90 444 3330',
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

interface ArticleSchemaProps {
  title: string
  author: string
  date: string
  excerpt: string
  coverImage: string
  url: string
}

export function ArticleStructuredData({ title, author, date, excerpt, coverImage, url }: ArticleSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished: date,
    description: excerpt,
    image: coverImage,
    url: `https://bgts.com.tr${url}`,
    publisher: {
      '@type': 'Organization',
      name: 'BGTS - Business & Global Technology Solutions',
      url: 'https://bgts.com.tr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bgts.com.tr/BGTS_logo.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
