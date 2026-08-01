import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://devsaha.tech',
      lastModified: '2026-08-01',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://devsaha.tech/privacy',
      lastModified: '2026-08-01',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://devsaha.tech/terms',
      lastModified: '2026-08-01',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
