import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { generateMetadata } from "@/lib/seo-config";
import Script from "next/script";

export const metadata: Metadata = generateMetadata();

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
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <GoogleAnalytics />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
