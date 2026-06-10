import { MetadataRoute } from 'next'
import { i18n } from '@/i18n-config'
import { SITE_URL } from '@/lib/seo'

const ROUTES: { path: string; priority: number; changeFrequency: 'monthly' | 'weekly' | 'daily' }[] = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },

  // Kurumsal
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/partnerships', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/social-contribution', priority: 0.5, changeFrequency: 'monthly' },

  // Hizmetler
  { path: '/services/software-development', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/managed-services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/devops', priority: 0.9, changeFrequency: 'monthly' },

  // Sektorler
  { path: '/industries/banking', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/defense', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/retail', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/retail-telecom', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries/telecommunications', priority: 0.8, changeFrequency: 'monthly' },

  // Urunler
  { path: '/products', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/ai-hiring-assistant', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products/cortex', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products/cv-converter', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products/doc2bot', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products/docmind', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products/hcm', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products/meetsense', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products/praxila', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/meetsense-viewer', priority: 0.4, changeFrequency: 'monthly' },

  // Kariyer
  { path: '/career-paths', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/culture', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/learning', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/genc-muhendis-programi', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/yetenek-gelisim-modeli', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/hr', priority: 0.6, changeFrequency: 'monthly' },

  // Kaynaklar
  { path: '/resources/success-stories', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/infographics', priority: 0.5, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.flatMap(({ path, priority, changeFrequency }) => {
    const normalized = path === '/' ? '' : path
    const languages: Record<string, string> = {}
    for (const locale of i18n.locales) {
      languages[locale] = `${SITE_URL}/${locale}${normalized}`
    }

    return i18n.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${normalized}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }))
  })
}
