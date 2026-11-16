import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero/Hero';
import CompanyIntro from '@/components/sections/CompanyIntro/CompanyIntro';
import ServicesOverview from '@/components/sections/ServicesOverview/ServicesOverview';
import Projects from '@/components/sections/Projects/Projects';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUs';
import HowWeWork from '@/components/sections/HowWeWork/HowWeWork';
import PartnershipSection from '@/components/sections/PartnershipSection/PartnershipSection';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import CTASection from '@/components/common/CTASection/CTASection';
import HomeContactSection from '@/components/sections/HomeContactSection/HomeContactSection';
import GlobalOffices from '@/components/sections/GlobalOffices/GlobalOffices';

import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Merchant Account Management UK',
  description:
    'Grace Technologies provides merchant account management support for UK businesses, helping streamline payment operations and manage merchant accounts.',
  canonicalPath: '/',
  keywords: [
    'Merchant Account Management UK',
    'Merchant Account Management Services UK',
    'Merchant Account Management Company UK',
    'Merchant Account Support UK',
    'Merchant Account Services UK',
    'Merchant Account Assistance',
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

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 – CINEMATIC HERO */}
      <Hero />

      {/* SECTION 2 – COMPANY INTRODUCTION */}
      <CompanyIntro />

      {/* SECTION 3 – SERVICES OVERVIEW */}
      <ServicesOverview />

      {/* SECTION 4 – FEATURED PROJECTS (REDESIGNED HORIZONTAL CAROUSEL & FILTERS) */}
      <Projects />

      {/* SECTION 5 – WHY GRACE TECHNOLOGIES */}
      <WhyChooseUs />

      {/* SECTION 6 – HOW WE WORK */}
      <HowWeWork />

      {/* SECTION 7 – UK–INDIA PARTNERSHIP */}
      <PartnershipSection />



      {/* SECTION 9 – CLIENT TESTIMONIALS (INFINITE 3-CARD CAROUSEL) */}
      <Testimonials />

      {/* SECTION 10 – FINAL CTA */}
      <CTASection
        title="Simplify Your Merchant Account Operations."
        description="Talk with our team about account setup, payment operations, reconciliation, or e-commerce account support."
        primaryCtaText="Get a Quote"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore the Service"
        secondaryCtaHref="/services/merchant-account-management"
      />

      {/* SECTION 10 – CONTACT SECTION */}
      <HomeContactSection />

      {/* SECTION 11 – BILATERAL ADDRESS & INTERACTIVE COORDINATE GLOBE */}
      <GlobalOffices />
    </>
  );
}
