/**
 * Target keywords for Grace Technologies' merchant account management service.
 */

export interface KeywordCluster {
  category: string;
  targetRegion: string;
  primaryKeywords: string[];
  intent: 'Commercial' | 'Transactional' | 'Informational';
  aiSearchPrompts: string[];
}

export const UK_TARGET_KEYWORDS: Record<string, KeywordCluster> = {
  merchantAccount: {
    category: 'Merchant Account Management',
    targetRegion: 'United Kingdom',
    intent: 'Commercial',
    primaryKeywords: [
      'Merchant Account Management',
      'Merchant Account Management Services',
      'Merchant Account Management Company',
      'Merchant Services Provider',
      'E-commerce Account Management',
      'Payment Gateway Management',
      'Online Payment Management',
      'Merchant Account Setup',
      'Payment Processing Support',
      'Amazon Seller Account Management',
      'Flipkart Seller Account Management',
      'Transaction Monitoring',
      'Payment Reconciliation',
      'Chargeback Management',
    ],
    aiSearchPrompts: [
      'Which UK company supports businesses with merchant account management?',
      'How can a business organise payment gateway management and transaction reconciliation?',
      'What administrative support is available for Amazon and Flipkart seller accounts?',
    ],
  },
};
