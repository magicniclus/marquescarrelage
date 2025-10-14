import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "MBTP - Maçonnerie & Gros Œuvre en Île-de-France depuis 2016",
  description: "MBTP SARL, entreprise spécialisée en maçonnerie et gros œuvre depuis 2016. Équipe de 6 à 10 professionnels en Île-de-France. Devis gratuit pour vos projets de construction et rénovation.",
  keywords: [
    "maçonnerie Île-de-France",
    "gros œuvre Paris",
    "maçon professionnel 75",
    "construction Seine-et-Marne",
    "rénovation Essonne",
    "maçonnerie Val-de-Marne",
    "gros œuvre Hauts-de-Seine",
    "entreprise maçonnerie 77",
    "maçon 78",
    "construction 91",
    "MBTP",
    "travaux maçonnerie",
    "devis gratuit",
    "SARL maçonnerie",
    "fondations",
    "structures"
  ],
  author: "MBTP",
  siteUrl: "https://mbtp.fr",
  siteName: "MBTP - Maçonnerie & Gros Œuvre",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@mbtp"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
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
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "MBTP",
  "legalName": "MBTP SARL",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "MBTP"
  },
  "foundingDate": "2016",
  "numberOfEmployees": "6-10",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33699374263",
    "contactType": "customer service",
    "email": "contact@mbtp.fr",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Île-de-France"
    }
  ],
  "serviceType": [
    "Maçonnerie",
    "Gros œuvre", 
    "Fondations",
    "Construction",
    "Rénovation",
    "Extension"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 07:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de construction",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maçonnerie & Gros œuvre",
          "description": "Fondations, élévation de murs, dalles, chapes, structures"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Rénovation & Extension",
          "description": "Réfection de façades, reprise de maçonnerie, extensions, aménagements"
        }
      }
    ]
  }
};
