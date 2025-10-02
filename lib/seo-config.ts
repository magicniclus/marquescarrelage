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
  title: "Belrhali - Artisan Maçonnerie, Terrassement & Menuiserie en Nouvelle-Aquitaine",
  description: "Belrhali, artisan du bâtiment spécialisé en maçonnerie, terrassement et menuiserie. Devis gratuit en Corrèze, Dordogne, Haute-Vienne, Lot, Gironde et Lot-et-Garonne.",
  keywords: [
    "maçonnerie Nouvelle-Aquitaine",
    "terrassement Corrèze",
    "menuiserie Dordogne",
    "artisan bâtiment",
    "construction rénovation",
    "maçon Haute-Vienne",
    "terrassement Lot",
    "menuisier Gironde",
    "gros œuvre",
    "fondations",
    "devis gratuit",
    "Belrhali",
    "travaux maison",
    "rénovation intérieure",
    "aménagement extérieur"
  ],
  author: "Belrhali",
  siteUrl: "https://belrhali.fr",
  siteName: "Belrhali - Artisan du Bâtiment",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@belrhali"
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
  "name": "Belrhali",
  "legalName": "Belrhali",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Hicham Belrhali"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Nouvelle-Aquitaine",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33682654576",
    "contactType": "customer service",
    "email": "contact@belrhali.fr",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Corrèze"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Dordogne"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Haute-Vienne"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Lot"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Gironde"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Lot-et-Garonne"
    }
  ],
  "serviceType": [
    "Maçonnerie",
    "Terrassement", 
    "Menuiserie",
    "Construction",
    "Rénovation"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00",
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
          "name": "Maçonnerie",
          "description": "Fondations, murs porteurs, cloisons, dalles béton"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Terrassement",
          "description": "Excavation, nivellement, drainage, préparation de terrain"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Menuiserie",
          "description": "Fenêtres, portes, placards, escaliers sur mesure"
        }
      }
    ]
  }
};
