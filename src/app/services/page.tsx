import React from 'react';
import type { Metadata } from 'next';
import ServicesOverview from '@/components/sections/ServicesOverview/ServicesOverview';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import styles from './services.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Merchant Account Management Services UK',
  description:
    'Explore merchant account management support from Grace Technologies, helping businesses manage merchant accounts, payment processes and account operations.',
  canonicalPath: '/services',
  keywords: [
    'Merchant Account Management Services UK',
    'Merchant Account Management UK',
    'Merchant Account Support UK',
    'Merchant Account Setup Support',
    'Payment Gateway Support',
    'Payment Processing Support',
    'E-commerce Payment Support',
    'Transaction Monitoring',
    'Payment Reconciliation Services',
    'Chargeback Management Support',
    'Merchant Account Reporting',
    'Online Payment Management',
  ],
});

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'Services' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Alternating Services Showcase Matching the Homepage */}
      <ServicesOverview headingLevel="h1" />

      {/* Conversion CTA */}
      <ServiceCTASection
        title="Ready to Simplify Your Merchant Account Operations?"
        description="Talk with our UK team about account setup, payment workflows, or ongoing e-commerce account support."
        primaryCtaText="Get a Quote"
        serviceTitle="Merchant Account Management"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
