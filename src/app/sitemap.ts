import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/lib/seo/config';
import { BLOG_POSTS, isMerchantAccountPost } from '@/data/blog';
import { getAllServiceConfigs } from '@/config/services';
import { cities, normalizeSegment } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.siteUrl;

  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2026-11-10'),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-11-10'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/merchant-account-management`,
      lastModified: new Date('2026-11-10'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partnership`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  const blogRoutes = BLOG_POSTS.filter(isMerchantAccountPost).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate dynamic location landing pages for all UK cities across all active services
  const services = getAllServiceConfigs();
  const locationRoutes: MetadataRoute.Sitemap = [];

  for (const s of services) {
    for (const item of cities) {
      const cSlug = normalizeSegment(item.city);
      const sSlug = normalizeSegment(item.state);
      const coSlug = normalizeSegment(item.country);

      locationRoutes.push({
        url: `${baseUrl}/services/${s.slug}/${cSlug}/${sSlug}/${coSlug}`,
        lastModified: new Date('2026-11-09'),
        changeFrequency: 'weekly' as const,
        priority: 0.75,
      });
    }
  }

  return [...staticRoutes, ...blogRoutes, ...locationRoutes];
}
