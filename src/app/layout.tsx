import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import ConditionalShell from '@/components/layout/ConditionalShell/ConditionalShell';
import JsonLd from '@/components/seo/JsonLd';
import { SEO_CONFIG } from '@/lib/seo/config';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.defaultDescription,
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    apple: SEO_CONFIG.appleTouchIcon,
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
  },
  authors: [{ name: SEO_CONFIG.siteName, url: SEO_CONFIG.siteUrl }],
  creator: SEO_CONFIG.siteName,
  publisher: SEO_CONFIG.siteName,
  openGraph: {
    type: 'website',
    locale: SEO_CONFIG.locale,
    url: SEO_CONFIG.siteUrl,
    title: `${SEO_CONFIG.defaultTitle} | ${SEO_CONFIG.siteName}`,
    description: SEO_CONFIG.defaultDescription,
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: SEO_CONFIG.defaultOgImage,
        alt: `${SEO_CONFIG.siteName} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SEO_CONFIG.defaultTitle} | ${SEO_CONFIG.siteName}`,
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Sitewide Organization and WebSite Linked Data */}
        <JsonLd data={[organizationSchema, webSiteSchema]} />
      </head>
      <body>
        <Suspense fallback={null}>
          <ConditionalShell>{children}</ConditionalShell>
        </Suspense>
      </body>
    </html>
  );
}
