import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Bouzalmata - Maçonnerie & Gros Œuvre en Île-de-France depuis 2016",
  description: "Bouzalmata SARL, entreprise spécialisée en maçonnerie et gros œuvre depuis 2016. Équipe de 6 à 10 professionnels en Île-de-France. Devis gratuit pour vos projets de construction et rénovation.",
  keywords: "maçonnerie Île-de-France, gros œuvre Paris, maçon professionnel 75, construction Seine-et-Marne, rénovation Essonne, maçonnerie Val-de-Marne, gros œuvre Hauts-de-Seine, entreprise maçonnerie 77, maçon 78, construction 91, Bouzalmata, travaux maçonnerie, devis gratuit, SARL maçonnerie",
  authors: [{ name: "Bouzalmata" }],
  creator: "Bouzalmata",
  publisher: "Bouzalmata SARL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bouzalmata.fr"),
  alternates: {
    canonical: "https://bouzalmata.fr",
  },
  openGraph: {
    title: "Bouzalmata - Maçonnerie & Gros Œuvre en Île-de-France depuis 2016",
    description: "Bouzalmata SARL, entreprise spécialisée en maçonnerie et gros œuvre depuis 2016. Équipe de 6 à 10 professionnels en Île-de-France. Devis gratuit.",
    url: "https://bouzalmata.fr",
    siteName: "Bouzalmata - Maçonnerie & Gros Œuvre",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bouzalmata - Maçonnerie & Gros Œuvre en Île-de-France",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bouzalmata - Maçonnerie & Gros Œuvre",
    description: "Entreprise SARL spécialisée en maçonnerie et gros œuvre en Île-de-France depuis 2016. Devis gratuit.",
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
