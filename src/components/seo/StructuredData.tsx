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
