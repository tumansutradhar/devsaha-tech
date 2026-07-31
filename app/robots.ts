import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/rds/', '/api/'],
    },
    sitemap: 'https://www.devsaha.tech/sitemap.xml',
  }
}
