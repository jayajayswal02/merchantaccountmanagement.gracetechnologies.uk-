import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { SERVICES_DATA } from '@/config/site';
import styles from '../service-page.module.css';

const service = SERVICES_DATA[0];

export const metadata: Metadata = constructMetadata({
  title: 'Merchant Account Management Services UK',
  titleSuffix: 'Grace Technologies',
  description:
    'Explore merchant account management support from Grace Technologies, helping businesses manage merchant accounts, payment processes and account operations.',
  canonicalPath: '/services/merchant-account-management',
  keywords: [
    'Merchant Account Management Services UK',
    'Merchant Account Management UK',
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

const featureIcons = [
  <AccountBalanceOutlinedIcon key="setup" />,
  <SettingsSuggestOutlinedIcon key="gateway" />,
  <StorefrontOutlinedIcon key="seller-accounts" />,
  <MonitorHeartOutlinedIcon key="monitoring" />,
  <CurrencyExchangeOutlinedIcon key="reconciliation" />,
  <SupportAgentOutlinedIcon key="disputes" />,
  <ManageAccountsOutlinedIcon key="maintenance" />,
  <ShoppingCartOutlinedIcon key="e-commerce" />,
];

const reasonsToChoose = [
  {
    title: 'Practical, Account-Focused Support',
    description:
      'Work with a team focused on the day-to-day details of merchant accounts and payment operations.',
  },
  {
    title: 'Clear Communication',
    description:
      'Receive straightforward updates, organised records, and clear next steps when account issues arise.',
  },
  {
    title: 'Flexible Operational Coverage',
    description:
      'Get support across setup, maintenance, marketplaces, payment gateways, and transaction follow-up.',
  },
];

export default function MerchantAccountManagementPage() {
  const serviceSchema = getServiceSchema({
    name: 'Merchant Account Management',
    description: service.description,
    url: `${SEO_CONFIG.siteUrl}/services/merchant-account-management`,
    serviceType: 'Merchant Account Management',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
    {
      name: 'Merchant Account Management',
      url: `${SEO_CONFIG.siteUrl}/services/merchant-account-management`,
    },
  ]);

  const faqSchema = getFaqSchema(
    service.faqs.map(({ question, answer }) => ({ question, answer }))
  );

  return (
    <div className={styles.page}>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Merchant Account Management' },
        ]}
        backHref="/services"
        backLabel="Back to Services"
      />

      <ServiceDetailHero
        serviceId={service.id}
        serviceTitle={service.title}
        number={service.number}
        tagline="Payment and e-commerce operations support"
        headline="Professional Merchant Account Management Solutions"
        description={service.description}
      />

      <div className={styles.advisoryNotice}>
        <Container size="wide">
          <div className={styles.advisoryContent}>
            <InfoOutlinedIcon className={styles.advisoryIcon} />
            <p className={styles.advisoryText}>
              <strong>Advisory &amp; Management Disclaimer:</strong> Grace
              Technologies provides account administration, onboarding
              guidance, and payment operations support. We are not a bank,
              payment processor, or regulated financial institution, and
              cannot guarantee account approvals. Approval decisions remain
              with independent providers.
            </p>
          </div>
        </Container>
      </div>

      <section className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="ABOUT THE SERVICE"
            title="About Our Merchant Account Management Service"
            description="Practical support to help businesses organise payment accounts and keep essential e-commerce operations running smoothly."
            align="left"
          />
          <div className={styles.aboutCopy}>
            <p>
              Our merchant account management services help UK businesses
              organise account setup, provider settings, seller account
              administration, transaction monitoring, settlements, and dispute
              follow-up in a clear operating process.
            </p>
            <p>
              We work alongside your team to maintain merchant accounts,
              coordinate payment gateway management, review payment records,
              and support e-commerce account management. We provide
              administrative and operational support, not payment processing
              or account approval decisions.
            </p>
          </div>
        </Container>
      </section>

      <section id="capabilities" className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="WHAT WE SUPPORT"
            title="Merchant Account Management Services"
            description="Support for merchant account setup, payment gateway management, seller account administration, transaction monitoring, and reconciliation."
            align="left"
          />

          <div className={styles.capabilitiesGrid}>
            {service.capabilities.map((capability, index) => (
              <article key={capability.title} className={styles.capCard}>
                <div className={styles.capHeader}>
                  <span className={styles.capIcon} aria-hidden="true">
                    {featureIcons[index]}
                  </span>
                  <h3 className={styles.capTitle}>{capability.title}</h3>
                </div>
                <p className={styles.capDesc}>{capability.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.benefitsSection}>
        <Container size="wide">
          <SectionHeading
            label="KEY BENEFITS"
            title="Key Benefits of Merchant Account Management"
            description="Establish consistent routines and better visibility across accounts, transactions, and settlements."
            align="left"
          />

          <div className={styles.benefitsGrid}>
            {service.benefits.map((benefit, index) => (
              <article key={benefit.title} className={styles.benefitCard}>
                <span className={styles.benefitIndex}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDesc}>{benefit.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="OUR WORKING PROCESS"
            title="Our Working Process"
            description="We follow a practical workflow that keeps responsibilities and next steps clear."
            align="center"
          />

          <div className={styles.processGrid}>
            {service.process.map((step) => (
              <article key={step.step} className={styles.processCard}>
                <div className={styles.stepNum}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.whySection}>
        <Container size="wide">
          <SectionHeading
            label="WHY GRACE TECHNOLOGIES"
            title="Why Choose Grace Technologies?"
            description="Get responsive account support from a UK-led team with clear communication and a practical approach."
            align="left"
          />

          <div className={styles.whyGrid}>
            {reasonsToChoose.map((reason) => (
              <article key={reason.title} className={styles.whyCard}>
                <CheckCircleOutlineOutlinedIcon
                  className={styles.whyIcon}
                  aria-hidden="true"
                />
                <h3 className={styles.whyTitle}>{reason.title}</h3>
                <p className={styles.whyDesc}>{reason.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.faqSection}>
        <Container size="narrow">
          <SectionHeading
            label="FREQUENTLY ASKED QUESTIONS"
            title="Frequently Asked Questions"
            description="Answers to common questions about our account setup and payment operations support."
            align="center"
          />

          <FaqAccordion faqs={service.faqs} />
        </Container>
      </section>

      <ServiceCTASection
        title="Get a Quote for Merchant Account Management"
        description="Tell us about your accounts and the operational support your business needs."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        serviceTitle={service.title}
      />
    </div>
  );
}
