import { ServiceDetail, IndustryItem, StepItem } from '@/types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'merchant-account-management',
    number: '01',
    title: 'Merchant Account Management',
    shortTitle: 'Merchant Accounts',
    tagline: 'Reliable Payment Operations Support.',
    headline: 'Complete Merchant Account Management Solutions',
    description:
      'We help businesses manage their merchant accounts and e-commerce payment operations through reliable account support, transaction monitoring, payment management and ongoing account maintenance.',
    route: '/services/merchant-account-management',
    capabilities: [
      {
        title: 'Merchant Account Setup & Configuration',
        description:
          'Set up merchant profiles, account settings, settlement preferences, and the documentation needed for provider review.',
      },
      {
        title: 'Payment Gateway Integration',
        description:
          'Coordinate gateway configuration and help verify that payment flows and settlement settings work as intended.',
      },
      {
        title: 'Amazon & Flipkart Seller Account Management',
        description:
          'Support seller account administration, product listings, order workflows, and account health monitoring.',
      },
      {
        title: 'Transaction Monitoring',
        description:
          'Review transaction activity and flag unusual patterns or operational issues for timely follow-up.',
      },
      {
        title: 'Payment Reconciliation',
        description:
          'Compare transaction, fee, and settlement records to help keep payment reporting accurate and up to date.',
      },
      {
        title: 'Chargeback & Dispute Support',
        description:
          'Organise transaction records and supporting evidence for responses to payment disputes and chargebacks.',
      },
      {
        title: 'Merchant Account Maintenance',
        description:
          'Maintain account details, access, operational settings, and supporting records as your business changes.',
      },
      {
        title: 'E-commerce Account Management',
        description:
          'Coordinate day-to-day marketplace and e-commerce account tasks to keep essential operations moving.',
      },
    ],
    benefits: [
      {
        title: 'Clearer Payment Operations',
        description:
          'Bring account administration, gateway coordination, and transaction follow-up into a consistent workflow.',
      },
      {
        title: 'More Accurate Reconciliation',
        description:
          'Keep transaction, fee, and payout records organised so your team can review payment activity with confidence.',
      },
      {
        title: 'Responsive Account Support',
        description:
          'Get practical help with routine account changes, seller operations, and payment provider communication.',
      },
      {
        title: 'Better Operational Visibility',
        description:
          'Use clear monitoring and reporting practices to spot account issues and follow up on them sooner.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Understand Your Accounts',
        description:
          'Review your business model, payment providers, marketplaces, current workflows, and support priorities.',
      },
      {
        step: '02',
        title: 'Configure and Organise',
        description:
          'Coordinate account setup, gateway settings, seller information, and the supporting documentation.',
      },
      {
        step: '03',
        title: 'Monitor and Reconcile',
        description:
          'Track transactions and settlements, reconcile records, and flag issues that need your attention.',
      },
      {
        step: '04',
        title: 'Maintain and Improve',
        description:
          'Provide ongoing account administration, dispute support, and regular operational reviews.',
      },
    ],
    faqs: [
      {
        question: 'What does merchant account management include?',
        answer:
          'Support can include account setup and maintenance, payment gateway coordination, transaction monitoring, reconciliation, seller account administration, and dispute documentation.',
      },
      {
        question: 'Can you help manage Amazon and Flipkart seller accounts?',
        answer:
          'Yes. We can assist with seller account administration, product listing workflows, order operations, and account health monitoring, subject to each platform’s rules and access requirements.',
      },
      {
        question: 'Do you guarantee merchant account approval?',
        answer:
          'No. Account approvals and risk decisions are made by independent providers and marketplaces. We can help organise the setup and supporting information, but cannot guarantee approval.',
      },
      {
        question: 'Can you help with chargebacks and disputes?',
        answer:
          'We can help organise transaction records, supporting evidence, and response workflows. Final decisions remain with the relevant payment provider or card network.',
      },
      {
        question: 'Are you a bank or payment processor?',
        answer:
          'No. Grace Technologies provides account administration and operational support. We are not a bank, acquiring institution, or payment processor.',
      },
    ],
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    title: 'Professional Services',
    description:
      'Merchant account administration and dependable payment operations for consultancies and professional firms.',
    stats: 'Reliable Operations',
  },
  {
    title: 'Retail and E-commerce',
    description:
      'Marketplace account support, payment gateway coordination, transaction monitoring, and reconciliation.',
    stats: 'Frictionless Sales',
  },
  {
    title: 'Healthcare & Life Sciences',
    description:
      'Structured payment account support that respects the privacy and operational needs of service providers.',
    stats: 'Security & Trust',
  },
  {
    title: 'Financial & Business Services',
    description:
      'Merchant account maintenance, payment oversight, and organised operational reporting.',
    stats: 'Operational Rigor',
  },
  {
    title: 'Education & EdTech',
    description:
      'Payment account administration and transaction support for education providers and online learning businesses.',
    stats: 'Reliable Payments',
  },
  {
    title: 'Small and Medium Enterprises',
    description:
      'Practical merchant account support to help growing businesses manage payment operations with confidence.',
    stats: 'High Impact Support',
  },
];

export const HOW_WE_WORK_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We review your accounts, providers, transaction flows, and the operational challenges you need help with.',
  },
  {
    number: '02',
    title: 'Configure',
    description:
      'We organise account details, gateway settings, seller workflows, and the supporting information.',
  },
  {
    number: '03',
    title: 'Monitor',
    description:
      'We help track transactions, settlements, account health, and issues that need timely follow-up.',
  },
  {
    number: '04',
    title: 'Maintain',
    description:
      'We provide ongoing administration and clear communication as your payment operations evolve.',
  },
];
