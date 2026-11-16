import type { Metadata } from 'next';
import { SEO_CONFIG } from './config';

export interface MetadataGeneratorOptions {
  title?: string;
  titleSuffix?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  noIndex?: boolean;
  follow?: boolean;
  alternateLocales?: Array<{ locale: string; path: string }>;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: Array<string>;
}

export function constructMetadata({
  title,
  titleSuffix = SEO_CONFIG.siteName,
  description,
  canonicalPath = '',
  ogImage,
  ogType = 'website',
  keywords = [],
  noIndex = false,
  follow = true,
  alternateLocales,
  publishedTime,
  modifiedTime,
  authors = [],
}: MetadataGeneratorOptions = {}): Metadata {
  const cleanTitle = title?.replace(new RegExp(`\\s*\\|\\s*${SEO_CONFIG.siteName}$`), '');
  const pageTitle = `${cleanTitle || SEO_CONFIG.defaultTitle} | ${titleSuffix}`;
  const pageDescription = description || SEO_CONFIG.defaultDescription;
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = `${SEO_CONFIG.siteUrl}${cleanPath === '/' ? '' : cleanPath}`;
  const ogImageUrl = ogImage || SEO_CONFIG.defaultOgImage;

  const languages: Record<string, string> = {
    'en-GB': canonicalUrl,
  };

  if (alternateLocales) {
    alternateLocales.forEach(({ locale, path }) => {
      const altCleanPath = path.startsWith('/') ? path : `/${path}`;
      languages[locale] = `${SEO_CONFIG.siteUrl}${altCleanPath === '/' ? '' : altCleanPath}`;
    });
  }

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: authors.length > 0 ? authors.map((name) => ({ name })) : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.keys(languages).length > 1 ? languages : undefined,
    },
    openGraph: {
      type: ogType,
      locale: SEO_CONFIG.locale,
      url: canonicalUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: SEO_CONFIG.siteName,
      publishedTime,
      modifiedTime,
      authors: authors.length > 0 ? authors : undefined,
      images: [
        {
          url: ogImageUrl,
          alt: `${SEO_CONFIG.siteName} logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
    },
    other: {
      'geo.region': 'GB-LND',
      'geo.placename': 'Romford, Greater London',
      'geo.position': `${SEO_CONFIG.contact.uk.geo.latitude};${SEO_CONFIG.contact.uk.geo.longitude}`,
      ICBM: `${SEO_CONFIG.contact.uk.geo.latitude}, ${SEO_CONFIG.contact.uk.geo.longitude}`,
    },
    robots: {
      index: !noIndex,
      follow,
      googleBot: {
        index: !noIndex,
        follow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
