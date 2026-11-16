'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import styles from './CompanyIntro.module.css';

export default function CompanyIntro() {
  return (
    <section id="company-intro" className={styles.section}>
      <Container size="wide">
        <div className={styles.grid}>
          {/* Left Column: Asymmetrical Editorial Heading & Subheading */}
          <div className={styles.leftCol}>
            <motion.div
              className={styles.labelWrap}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.label}>WHO WE ARE</span>
            </motion.div>

            <motion.h2
              className={styles.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              About Grace Technologies
            </motion.h2>

            <motion.p
              className={styles.lead}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Grace Technologies helps UK businesses streamline payment operations through merchant account setup, transaction monitoring, reconciliation, and e-commerce account support. We work in partnership with Ank Square in India.
            </motion.p>

            <motion.div
              className={styles.ctaWrap}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button href="/about" variant="secondary" size="md" icon>
                About Us
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Abstract editorial architectural visualization card */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.interactivePillarCard}>
              <div className={styles.cardHeaderStrip}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.systemTag}>MERCHANT OPERATIONS // GT-UK-IN</span>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.cardHeading}>Merchant Operations That Keep Business Moving.</p>
                <p className={styles.cardText}>
                  Our team helps businesses manage merchant accounts, payment gateways, transactions, settlements, and e-commerce operations. Client relationships are managed in the United Kingdom in partnership with Ank Square Private Limited in India, giving businesses a clear and reliable point of contact for ongoing account support.
                </p>
                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <p className={styles.valTitle}>Strategic Business Alignment</p>
                      <p className={styles.valDesc}>Connecting technology decisions with business goals to deliver meaningful results.</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <p className={styles.valTitle}>Account Support Built Around You</p>
                      <p className={styles.valDesc}>Organising merchant account and payment workflows around your business needs.</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <p className={styles.valTitle}>Reliable Ongoing Support</p>
                      <p className={styles.valDesc}>Providing transparent communication, timely follow-up, and ongoing account administration.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient visual overlay */}
              <div className={styles.cardMesh} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
