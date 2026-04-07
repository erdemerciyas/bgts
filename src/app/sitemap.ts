import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bgts.com.tr'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },

    // Kurumsal
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/partnerships`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/social-contribution`, lastModified, changeFrequency: 'monthly', priority: 0.5 },

    // Hizmetler
    { url: `${baseUrl}/services/software-development`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/managed-services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/devops`, lastModified, changeFrequency: 'monthly', priority: 0.9 },

    // Sektorler
    { url: `${baseUrl}/industries/banking`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries/defense`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries/retail`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries/retail-telecom`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries/telecommunications`, lastModified, changeFrequency: 'monthly', priority: 0.8 },

    // Urunler
    { url: `${baseUrl}/products`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products/ai-hiring-assistant`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/cortex`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/cv-converter`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/doc2bot`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/docmind`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/hcm`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/meetsense`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/praxila`, lastModified, changeFrequency: 'monthly', priority: 0.7 },

    // Kariyer
    { url: `${baseUrl}/career-paths`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/culture`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/learning`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/genc-muhendis-programi`, lastModified, changeFrequency: 'monthly', priority: 0.7 },

    // Kaynaklar
    { url: `${baseUrl}/resources/success-stories`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/infographics`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
