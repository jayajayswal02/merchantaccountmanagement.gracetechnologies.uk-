'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ContactForm from '@/components/sections/ContactForm/ContactForm';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './HomeContactSection.module.css';

export default function HomeContactSection() {
  return (
    <section id="contact-section" className={styles.section}>
      <Container size="wide">
        <div className={styles.layout}>
          {/* Left Column: Context, Value Proposition & Reassurance */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.badge}>MERCHANT ACCOUNT SUPPORT</span>
            <h2 className={styles.heading}>Contact Us</h2>
            <p className={styles.subheading}>
              Talk with our team about merchant account setup, payment gateway coordination, transaction monitoring, reconciliation, or e-commerce account support.
            </p>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.iconCircle}>
                  <CheckCircleIcon fontSize="small" />
                </div>
                <div>
                  <p className={styles.benefitTitle}>Direct Senior Leadership Access</p>
                  <p className={styles.benefitDesc}>Consult directly with strategic advisors based in the UK.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.iconCircle}>
                  <SecurityOutlinedIcon fontSize="small" />
                </div>
                <div>
                  <p className={styles.benefitTitle}>Confidentiality & Rigour</p>
                  <p className={styles.benefitDesc}>Commercial NDA protection and strict adherence to UK GDPR standards.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.iconCircle}>
                  <EmailOutlinedIcon fontSize="small" />
                </div>
                <div>
                  <p className={styles.benefitTitle}>Prompt Account Support</p>
                  <p className={styles.benefitDesc}>Receive a clear response and review of your account support needs within 24
                    business hours.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
