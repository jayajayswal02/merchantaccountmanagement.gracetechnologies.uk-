import type { Metadata } from 'next';
import BlogLanding from '@/components/sections/BlogLanding/BlogLanding';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema, getBlogIndexSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { BLOG_POSTS, isMerchantAccountPost } from '@/data/blog';
import styles from './blog.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Blog & Insights | Merchant Account Management',
  description:
    'Insights on merchant account administration, payment operations, e-commerce account management, and business operations.',
  canonicalPath: '/blog',
  keywords: [
    'Grace Technologies blog',
    'Merchant account management insights UK',
    'Payment operations guidance',
    'E-commerce account management insights',
    'Merchant account operations management',
    'Payment gateway operations support',
  ],
});

export default function BlogPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Blog', url: `${SEO_CONFIG.siteUrl}/blog` },
  ]);

  const blogCollectionSchema = getBlogIndexSchema(
    BLOG_POSTS.filter(isMerchantAccountPost).map((post) => ({
      title: post.title,
      url: `${SEO_CONFIG.siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt,
    }))
  );

  return (
    <>
      <div className={styles.page}>
        <JsonLd data={[breadcrumbSchema, blogCollectionSchema]} />
        <Breadcrumb items={[{ label: 'Blog' }]} backHref="/" backLabel="Back to Home" />
        <BlogLanding />
      </div>
    </>
  );
}
