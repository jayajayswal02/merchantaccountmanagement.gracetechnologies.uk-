'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ProjectItem } from '@/data/projects';
import { openEnquiryModal } from '@/utils/modal';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <span className={styles.bracketTL} />
      <span className={styles.bracketBR} />

      <div className={styles.previewArea}>
        <div className={styles.previewGlow} />
        {project.location && (
          <span className={styles.previewLocationBadge}>{project.location}</span>
        )}
        <div className={styles.mockupContainer}>
          <div className={styles.merchantCanvas}>
            <div className={styles.merchantDashboard}>
              <div className={styles.dashHeader}>
                <span className={styles.dashTitle}>Merchant Account Support</span>
                <span className={styles.dashTag}>Account Overview</span>
              </div>
              <div className={styles.dashRows}>
                <div className={styles.dashRowItem}>
                  <span>Transaction monitoring</span>
                  <span>Review</span>
                </div>
                <div className={styles.dashRowItem}>
                  <span>Payment reconciliation</span>
                  <span>Support</span>
                </div>
                <div className={styles.dashRowItem}>
                  <span>Account maintenance</span>
                  <span>Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardContent}>
        <div>
          <div className={styles.categoryRow}>
            <span className={styles.categoryLabel}>Merchant Account Management</span>
          </div>
          <p className={styles.projectTitle}>{project.title}</p>
          <p className={styles.projectDescription}>{project.summary}</p>
        </div>

        <div className={styles.cardActionRow}>
          <button
            type="button"
            className={styles.primaryAction}
            onClick={() => openEnquiryModal('Merchant Account Management')}
          >
            <span>Get a Quote</span>
            <ArrowForwardIcon fontSize="small" />
          </button>
          <Link href="/contact" className={styles.secondaryAction}>
            Contact Us
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
