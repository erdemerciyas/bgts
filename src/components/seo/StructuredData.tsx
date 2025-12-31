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
      telephone: '+90-212-XXX-XXXX',
      contactType: 'customer service',
      email: 'info@bgts.com.tr',
    },
    sameAs: [
      'https://www.linkedin.com/company/bgts',
      'https://twitter.com/bgts',
      'https://www.instagram.com/bgts',
    ],
    numberOfEmployees: 1400,
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
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bgts.com.tr/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
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
