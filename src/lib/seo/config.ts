/**
 * Central SEO Configuration for Grace Technologies
 * Primary canonical domain: https://merchantaccountmanagement.gracetechnologies.uk
 */

export const SEO_CONFIG = {
  siteName: 'Grace Technologies',
  legalName: 'Grace Technologies',
  siteUrl: 'https://merchantaccountmanagement.gracetechnologies.uk',
  appleTouchIcon: '/apple-touch-icon.png',
  defaultTitle: 'Merchant Account Management UK',
  titleTemplate: '%s | Grace Technologies',
  defaultDescription:
    'Grace Technologies provides merchant account management support for UK businesses, helping streamline payment operations and manage merchant accounts.',
  defaultOgImage: 'https://merchantaccountmanagement.gracetechnologies.uk/logo/logo.png',
  locale: 'en_GB',
  inLocale: 'en_IN',
  language: 'en',
  themeColor: '#030712',
  organizationId: 'https://merchantaccountmanagement.gracetechnologies.uk/#organization',
  websiteId: 'https://merchantaccountmanagement.gracetechnologies.uk/#website',
  contact: {
    uk: {
      company: 'Grace Technologies',
      country: 'United Kingdom',
      addressLines: [
        '398 Whalebone Lane South',
        'Romford, Greater London',
        'RM6 6HP, England',
      ],
      postalCode: 'RM6 6HP',
      city: 'Romford',
      region: 'Greater London',
      countryCode: 'GB',
      email: 'contact@gracetechnologies.uk',
      phone: '+44 7407 268125',
      geo: {
        latitude: 51.576,
        longitude: 0.148,
      },
    },
    indiaPartner: {
      company: 'Ank Square Pvt. Ltd.',
      country: 'India',
      addressLines: [
        'Ramjaipal Road, Opp. Gola Road',
        'Near Hotel Magadh Palace',
        'Patna, Bihar, India - 801503',
      ],
      postalCode: '801503',
      city: 'Patna',
      region: 'Bihar',
      countryCode: 'IN',
      email: 'contact@anksquare.com',
      phone: '+91-9939337638',
    },
  },
  socialLinks: [
    'https://www.instagram.com/gracetechnologiesofficial/',
    'https://www.facebook.com/share/1CKuqfF3Ef/',
    'https://www.youtube.com/@Gracetechnologiesofficial',
    'https://x.com/grace_Official4',
  ],
  services: [
    {
      id: 'merchant-account-management',
      name: 'Merchant Account Management',
      url: 'https://merchantaccountmanagement.gracetechnologies.uk',
      description:
        'Merchant account setup and maintenance, payment gateway coordination, transaction monitoring, reconciliation, and e-commerce account support.',
    },
  ],
} as const;
