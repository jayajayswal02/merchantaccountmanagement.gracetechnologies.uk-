/**
 * Central service configuration for merchant account management and its location pages.
 */
export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceConfig {
  slug: string;
  name: string;
  shortName: string;
  primaryKeyword: string;
  description: string;
  keywords: string[];
  capabilities: ServiceCapability[];
  process: ServiceProcessStep[];
  enabled: boolean;
}

export const SERVICES_CONFIG: Record<string, ServiceConfig> = {
  'merchant-account-management': {
    slug: 'merchant-account-management',
    name: 'Merchant Account Management',
    shortName: 'Merchant Accounts',
    primaryKeyword: 'Merchant Account Management',
    description:
      'Payment operations support for merchant account setup, gateway integration, transaction monitoring, reconciliation, and e-commerce account administration.',
    keywords: [
      'Merchant Account Management',
      'Merchant Account Setup',
      'Payment Gateway Integration',
      'Amazon Seller Account Management',
      'Flipkart Seller Account Management',
      'Transaction Monitoring',
      'Payment Reconciliation',
      'Chargeback and Dispute Support',
      'E-commerce Account Management',
    ],
    capabilities: [
      {
        title: 'Merchant Account Setup & Configuration',
        description:
          'Set up merchant profiles, account settings, and settlement preferences with organised supporting documentation.',
      },
      {
        title: 'Payment Gateway Integration',
        description:
          'Coordinate gateway configuration and verify payment and settlement workflows.',
      },
      {
        title: 'Amazon & Flipkart Seller Account Management',
        description:
          'Support seller account administration, product listings, order workflows, and account health monitoring.',
      },
      {
        title: 'Transaction Monitoring',
        description:
          'Review payment activity and flag unusual patterns or operational issues for follow-up.',
      },
      {
        title: 'Payment Reconciliation',
        description:
          'Compare transaction, fee, and settlement records to support accurate payment reporting.',
      },
      {
        title: 'Chargeback & Dispute Support',
        description:
          'Organise transaction records and supporting evidence for payment dispute responses.',
      },
      {
        title: 'Merchant Account Maintenance',
        description:
          'Maintain account details, access, operational settings, and supporting records.',
      },
      {
        title: 'E-commerce Account Management',
        description:
          'Coordinate marketplace and e-commerce account tasks to keep essential operations moving.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Understand Your Accounts',
        description:
          'Review your business model, payment providers, marketplaces, workflows, and support priorities.',
      },
      {
        step: '02',
        title: 'Configure and Organise',
        description:
          'Coordinate account setup, gateway settings, seller information, and supporting documentation.',
      },
      {
        step: '03',
        title: 'Monitor and Reconcile',
        description:
          'Track transactions and settlements, reconcile records, and flag issues for follow-up.',
      },
      {
        step: '04',
        title: 'Maintain and Improve',
        description:
          'Provide ongoing account administration, dispute support, and operational reviews.',
      },
    ],
    enabled: true,
  },
};

export const getServiceConfig = (slug: string): ServiceConfig | null => {
  return SERVICES_CONFIG[slug] || null;
};

export const getAllServiceConfigs = (): ServiceConfig[] => {
  return Object.values(SERVICES_CONFIG).filter((service) => service.enabled);
};
