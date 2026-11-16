import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import ContactForm from '@/components/sections/ContactForm/ContactForm';
import LanguageIcon from '@mui/icons-material/Language';
import HubIcon from '@mui/icons-material/Hub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import officesData from '@/config/offices.json';
import styles from './contact.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Grace Technologies',
  titleSuffix: 'Merchant Account Management UK',
  description:
    'Contact Grace Technologies to discuss your merchant account management requirements and business payment support needs.',
  canonicalPath: '/contact',
  keywords: [
    'Merchant account management contact UK',
    'Grace Technologies contact',
    'Payment operations support enquiry',
    'E-commerce account management contact',
    'Merchant account support UK',
  ],
});

export default function ContactPage() {
  const { uk, india } = officesData.offices;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Contact Us', url: `${SEO_CONFIG.siteUrl}/contact` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'Contact Us' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      <section className={styles.section}>
        <Container size="wide">
          <div className={styles.layout}>
            {/* Left Column: Context, Trust, Offices */}
            <div className={styles.infoCol}>
              <span className={styles.badge}>MERCHANT ACCOUNT SUPPORT</span>
              <h1 className={styles.heading}>Let’s Talk About Your Payment Operations.</h1>
              <p className={styles.subheading}>
                Contact our UK team to discuss merchant account management, payment workflows, or e-commerce account support.
              </p>

              {/* UK Office Card */}
              <div className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <LanguageIcon className={styles.officeIcon} />
                  <div>
                    <h3 className={styles.officeName}>{uk.country}</h3>
                    <span className={styles.officeRole}>{uk.company} • {uk.tag}</span>
                  </div>
                </div>
                <div className={styles.officeDetails}>
                  <p>{uk.addressLines.join(', ')}</p>
                  <p className={styles.contactLine}>
                    <EmailOutlinedIcon fontSize="inherit" />
                    <a href={`mailto:${uk.email}`}>{uk.email}</a>
                  </p>
                  <p className={styles.contactLine}>
                    <PhoneOutlinedIcon fontSize="inherit" />
                    <a href={`tel:${uk.phone.replace(/\s+/g, '')}`}>{uk.phone}</a>
                  </p>
                </div>
              </div>

              {/* India Office Card */}
              <div className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <HubIcon className={styles.officeIcon} />
                  <div>
                    <h3 className={styles.officeName}>{india.country}</h3>
                    <span className={styles.officeRole}>{india.company} • {india.tag}</span>
                  </div>
                </div>
                <div className={styles.officeDetails}>
                  <p>{india.addressLines.join(', ')}</p>
                  <p className={styles.contactLine}>
                    <EmailOutlinedIcon fontSize="inherit" />
                    <a href={`mailto:${india.email}`}>{india.email}</a>
                  </p>
                  <p className={styles.contactLine}>
                    <PhoneOutlinedIcon fontSize="inherit" />
                    <a href={`tel:${india.phone.replace(/[^0-9+]/g, '')}`}>{india.phone}</a>
                  </p>
                </div>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustItem}>
                  <SecurityOutlinedIcon className={styles.trustIcon} />
                  <span>Strict NDA and commercial privacy maintained</span>
                </div>
                <div className={styles.trustItem}>
                  <EmailOutlinedIcon className={styles.trustIcon} />
                  <span>Response from senior leadership within 24 business hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className={styles.formCol}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
