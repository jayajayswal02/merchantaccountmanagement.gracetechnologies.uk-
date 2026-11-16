import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import LocationNavigation from '@/components/sections/LocationNavigation/LocationNavigation';
import JsonLd from '@/components/seo/JsonLd';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { getServiceConfig, getAllServiceConfigs } from '@/config/services';
import { getCityFromSegments, cities, normalizeSegment } from '@/data/cities';
import { getLocationStatus } from '@/config/locationSeo';
import { SEO_CONFIG } from '@/lib/seo/config';
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import styles from './location-page.module.css';

interface LocationPageProps {
  params: Promise<{
    service: string;
    city: string;
    state: string;
    country: string;
  }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug, state: stateSlug, country: countrySlug } =
    await params;

  const service = getServiceConfig(serviceSlug);
  const cityData = getCityFromSegments([citySlug, stateSlug, countrySlug]);

  if (!service || !cityData) {
    return {
      title: 'Location Not Found | Grace Technologies',
      robots: { index: false, follow: false },
    };
  }

  const status = getLocationStatus(serviceSlug, citySlug, stateSlug, countrySlug);
  const canonicalUrl = `${SEO_CONFIG.siteUrl}/services/${service.slug}/${cityData.citySlug}/${cityData.stateSlug}/${cityData.countrySlug}`;

  const metaTitle = `${service.name} in ${cityData.city}, ${cityData.state}`;
  const socialMetaTitle = `${metaTitle} | ${SEO_CONFIG.siteName}`;
  const metaDescription = `Looking for ${service.name.toLowerCase()} in ${cityData.city}, ${cityData.state}? Grace Technologies supports account setup, payment workflows, transaction monitoring, and e-commerce operations.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: socialMetaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      locale: SEO_CONFIG.locale,
      type: 'website',
      images: [
        {
          url: SEO_CONFIG.defaultOgImage,
          alt: `${SEO_CONFIG.siteName} logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialMetaTitle,
      description: metaDescription,
      images: [SEO_CONFIG.defaultOgImage],
    },
    robots: status.isIndexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function LocationServicePage({ params }: LocationPageProps) {
  // Indicate rendering should wait for an incoming user request, making the route fully dynamic on demand
  await connection();

  const { service: serviceSlug, city: citySlug, state: stateSlug, country: countrySlug } =
    await params;

  const service = getServiceConfig(serviceSlug);
  const cityData = getCityFromSegments([citySlug, stateSlug, countrySlug]);

  // Validate all segments: 404 on invalid service, city, state, or country
  if (!service || !cityData) {
    notFound();
  }

  const status = getLocationStatus(serviceSlug, citySlug, stateSlug, countrySlug);
  if (!status.isPublished) {
    notFound();
  }

  const canonicalUrl = `${SEO_CONFIG.siteUrl}/services/${service.slug}/${cityData.citySlug}/${cityData.stateSlug}/${cityData.countrySlug}`;

  // Structured schemas
  const serviceSchema = getServiceSchema({
    name: `${service.name} Services - ${cityData.city}`,
    description: `Professional ${service.name.toLowerCase()} provided to businesses in ${cityData.city}, ${cityData.state}, ${cityData.country}.`,
    url: canonicalUrl,
    serviceType: service.name,
    areaServedName: `${cityData.city}, ${cityData.state}, ${cityData.country}`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
    { name: service.name, url: `${SEO_CONFIG.siteUrl}/services/${service.slug}` },
    { name: cityData.city, url: canonicalUrl },
  ]);

  // Location-tailored FAQs
  const locationFaqs = [
    {
      question: `How much does ${service.name.toLowerCase()} cost for businesses in ${cityData.city}?`,
      answer: `Pricing depends on your accounts, providers, transaction workflows, and the level of ongoing support required. Grace Technologies provides a clear estimate after reviewing your operational needs.`,
    },
    {
      question: `Can businesses in ${cityData.city} work with Grace Technologies remotely?`,
      answer: `Yes. Grace Technologies supports businesses across ${cityData.city}, ${cityData.state}, and nationwide through remote consultations and clear UK-led communication.`,
    },
    {
      question: `How does the UK leadership and India delivery model benefit ${cityData.city} enterprises?`,
      answer: `Our client communication and account support are led from the UK, with delivery collaboration from Ank Square in India.`,
    },
    {
      question: `Can you provide ongoing merchant account support?`,
      answer: `Yes. Support can include account maintenance, transaction follow-up, payment reconciliation, and coordination with relevant providers.`,
    },
  ];

  const faqSchema = getFaqSchema(locationFaqs);

  return (
    <div className={styles.page}>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: service.name, href: `/services/${service.slug}` },
          { label: cityData.city },
        ]}
        backHref={`/services/${service.slug}`}
        backLabel={`Back to ${service.name}`}
      />

      {/* Dynamic Location Hero */}
      <ServiceDetailHero
        serviceId={service.slug}
        number="01"
        tagline={`${cityData.city.toUpperCase()}, ${cityData.country.toUpperCase()}`}
        headline={`${service.primaryKeyword} in ${cityData.city}`}
        description={`Grace Technologies supports businesses in ${cityData.city}, ${cityData.state} with merchant account setup, payment operations, and e-commerce account management.`}
        serviceTitle={service.name}
      />

      <Container size="wide">
        {/* Section 1: Strategic Regional Context */}
        <section className={styles.section}>
          <div className={styles.introGrid}>
            <div className={styles.introCopy}>
              <span className={styles.highlightTag}>REGIONAL EXPERTISE & DELIVERY</span>
              <h2 className={styles.introTitle}>
                {service.name} Solutions Engineered for {cityData.city} Businesses
              </h2>
              <p className={styles.introParagraph}>
                Whether your organisation is an established enterprise in {cityData.state} or a growing business, our UK-led team can help organise merchant account and payment operations.
              </p>
              <p className={styles.introParagraph}>
                We provide clear communication and practical support for account configuration, transaction monitoring, settlement records, and provider follow-up.
              </p>
            </div>

            <div className={styles.locationHighlightBox}>
              <span className={styles.highlightTag}>LOCATION SNAPSHOT</span>
              <h3 className={styles.highlightTitle}>{cityData.city}, {cityData.country}</h3>
              <ul className={styles.highlightList}>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Region: {cityData.state}</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Jurisdiction: United Kingdom</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Support Model: UK Consultation & Account Support</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Support: Remote Video, Phone & 1-Click WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Service Capabilities */}
        <section className={styles.section}>
          <SectionHeading
            label="WHAT WE DELIVER"
            title={`${service.name} Capabilities`}
            description={`Merchant account and payment operations support for businesses in ${cityData.city}.`}
          />
          <div className={styles.capabilitiesGrid}>
            {service.capabilities.map((cap, index) => (
              <div key={cap.title} className={styles.capabilityCard}>
                <span className={styles.capabilityNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                <p className={styles.capabilityDesc}>{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Why Choose Grace Technologies */}
        <section className={styles.section}>
          <SectionHeading
            label="OUR ADVANTAGE"
            title={`Why ${cityData.city} Enterprises Partner With Us`}
            description="Responsive account support, clear communication, and practical operational coverage."
          />
          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsCard}>
              <h3 className={styles.whyUsTitle}>UK-Led Communication</h3>
              <p className={styles.whyUsDesc}>
                Discuss your account needs directly with our UK team and receive clear updates and next steps.
              </p>
            </div>
            <div className={styles.whyUsCard}>
              <h3 className={styles.whyUsTitle}>Practical Account Administration</h3>
              <p className={styles.whyUsDesc}>
                Get coordinated support across merchant accounts, payment gateways, and e-commerce operations.
              </p>
            </div>
            <div className={styles.whyUsCard}>
              <h3 className={styles.whyUsTitle}>Ongoing Operational Support</h3>
              <p className={styles.whyUsDesc}>
                Keep transaction follow-up, reconciliation, and account maintenance moving through a consistent process.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Merchant Account Process */}
        <section className={styles.section}>
          <SectionHeading
            label="HOW WE WORK"
            title="Our Working Process"
            description={`A clear, four-stage process for account support and payment operations in ${cityData.city}.`}
          />
          <div className={styles.processGrid}>
            {service.process.map((p) => (
              <div key={p.step} className={styles.processCard}>
                <div className={styles.processStep}>{p.step}</div>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processDesc}>{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Regional FAQs */}
        <section className={styles.section}>
          <SectionHeading
            label="FREQUENT QUESTIONS"
            title={`Frequently Asked Questions in ${cityData.city}`}
            description="Clear answers regarding our service delivery, consultation model, and pricing structure."
          />
          <FaqAccordion faqs={locationFaqs} />
        </section>

        {/* Section 6: UK Regional Navigation */}
        <LocationNavigation
          currentServiceSlug={service.slug}
          currentCitySlug={cityData.citySlug}
          serviceTitle={service.name}
        />
      </Container>

      {/* Dynamic CTA */}
      <ServiceCTASection
        badge={`ELEVATE YOUR ${cityData.city.toUpperCase()} BUSINESS`}
        title={`Get Merchant Account Support in ${cityData.city}`}
        description={`Tell our UK team about your account setup, payment operations, or e-commerce support needs.`}
        primaryCtaText="Get a Quote"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        serviceTitle={service.name}
      />
    </div>
  );
}
