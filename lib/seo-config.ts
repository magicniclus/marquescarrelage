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
  title: "MARQUES CARRELAGE - Pose de Carrelage, Peinture et Placo en Haute-Savoie",
  description: "MARQUES CARRELAGE, spécialiste en pose de carrelage, peinture et placo avec 30 ans d'expérience. Intervention dans un rayon de 300km autour de Gaillard. Devis gratuit pour vos travaux de rénovation.",
  keywords: [
    "carrelage Haute-Savoie",
    "pose carrelage Gaillard",
    "carreleur professionnel 74",
    "peinture Annemasse",
    "placo Haute-Savoie",
    "rénovation Gaillard",
    "travaux carrelage Genève",
    "entreprise carrelage 74",
    "peintre 74240",
    "plaquiste Haute-Savoie",
    "MARQUES CARRELAGE",
    "revêtement sols murs",
    "devis gratuit",
    "entrepreneur individuel",
    "carrelage salle de bain",
    "rénovation intérieure"
  ],
  author: "José MARQUES",
  siteUrl: "https://marques-carrelage.fr",
  siteName: "MARQUES CARRELAGE - Pose de Carrelage, Peinture et Placo",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@marquescarrelage"
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
  "name": "MARQUES CARRELAGE",
  "legalName": "ENTREPRENEUR INDIVIDUEL",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "José MARQUES"
  },
  "foundingDate": "2025",
  "numberOfEmployees": "2-5",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "88 B RUE DE BAS VERNAZ",
    "addressLocality": "GAILLARD",
    "postalCode": "74240",
    "addressRegion": "Haute-Savoie",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33681648237",
    "contactType": "customer service",
    "email": "marques.carrelage25@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Haute-Savoie"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Région Genève"
    }
  ],
  "serviceType": [
    "Pose de carrelage",
    "Travaux de peinture", 
    "Pose de placo",
    "Revêtements sols et murs",
    "Rénovation",
    "Travaux de finition"
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
  "serviceType": "Renovation Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de rénovation",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pose de Carrelage",
          "description": "Spécialisé dans la pose de carrelage pour sols et murs, intérieur et extérieur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Travaux de Peinture",
          "description": "Peinture intérieure et extérieure, préparation des supports, finitions soignées"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Pose de Placo",
          "description": "Installation de cloisons en placo, doublages, faux plafonds"
        }
      }
    ]
  }
};
