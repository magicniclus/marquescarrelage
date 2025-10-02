import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Belrhali - Artisan Maçonnerie, Terrassement & Menuiserie en Nouvelle-Aquitaine",
  description: "Belrhali, artisan du bâtiment spécialisé en maçonnerie, terrassement et menuiserie. Devis gratuit en Corrèze, Dordogne, Haute-Vienne, Lot, Gironde et Lot-et-Garonne. Expertise locale depuis 15 ans.",
  keywords: "maçonnerie Nouvelle-Aquitaine, terrassement Corrèze, menuiserie Dordogne, artisan bâtiment, construction rénovation, maçon Haute-Vienne, terrassement Lot, menuisier Gironde, gros œuvre, fondations, devis gratuit, Belrhali, travaux maison, rénovation intérieure, aménagement extérieur",
  authors: [{ name: "Belrhali" }],
  creator: "Belrhali",
  publisher: "Belrhali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://belrhali.fr"),
  alternates: {
    canonical: "https://belrhali.fr",
  },
  openGraph: {
    title: "Belrhali - Artisan Maçonnerie, Terrassement & Menuiserie en Nouvelle-Aquitaine",
    description: "Belrhali, artisan du bâtiment spécialisé en maçonnerie, terrassement et menuiserie. Devis gratuit en Corrèze, Dordogne, Haute-Vienne, Lot, Gironde et Lot-et-Garonne.",
    url: "https://belrhali.fr",
    siteName: "Belrhali - Artisan du Bâtiment",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Belrhali - Artisan du Bâtiment en Nouvelle-Aquitaine",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belrhali - Artisan Maçonnerie, Terrassement & Menuiserie",
    description: "Artisan du bâtiment en Nouvelle-Aquitaine. Maçonnerie, terrassement, menuiserie. Devis gratuit.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Google tag (gtag.js) - New */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735" strategy="afterInteractive" />
        <Script id="google-analytics-new" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11128083735');
          `}
        </Script>

      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
