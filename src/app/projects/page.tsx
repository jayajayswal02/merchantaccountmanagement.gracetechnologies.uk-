import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import ProjectsClientView from './ProjectsClientView';
import projectsConfig from '@/config/projects.json';
import { ProjectItem } from '@/data/projects';
import styles from './projects.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Merchant Account Management Work | Grace Technologies',
  description:
    'Explore merchant account management work covering account support, transaction monitoring and payment operations.',
  canonicalPath: '/projects',
  keywords: [
    'Grace Technologies projects',
    'Merchant account management case studies',
    'Payment operations projects',
    'E-commerce account support portfolio',
  ],
});

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Projects', url: `${SEO_CONFIG.siteUrl}/projects` },
  ]);

  // Pass project data directly from the centralized JSON configuration
  const projectsData = projectsConfig.projects as ProjectItem[];

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'Projects' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Header section */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <SectionHeading
            label="OUR PORTFOLIO"
            title="Merchant Account Management in Practice"
            description="Explore selected work focused on merchant account support, transaction oversight and payment reconciliation."
            align="center"
            headingLevel="h1"
          />
        </Container>
      </section>

      {/* Interactive Filterable Projects Grid */}
      <section className={styles.gridSection}>
        <ProjectsClientView initialProjects={projectsData} />
      </section>

 
      {/* Conversion CTA with modal trigger */}
      <ServiceCTASection
        title="Need Support With Your Merchant Accounts?"
        description="Talk with our UK team about account administration, payment workflows, and e-commerce operations."
        primaryCtaText="Get a Quote"
        serviceTitle="Merchant Account Management"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
