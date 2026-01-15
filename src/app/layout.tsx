import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // Modern, clean fonts
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMMA | Atlanta Metro Malayalee Association",
  description: "Official website of the Atlanta Metro Malayalee Association (AMMA). Connecting the Malayalee community in Atlanta since 2010.",
  keywords: ["AMMA", "Atlanta Malayalee", "Kerala", "Community", "Association"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ammaatlanta.com",
    siteName: "AMMA Atlanta",
    title: "AMMA | Atlanta Metro Malayalee Association",
    description: "Connecting the Malayalee community in Atlanta since 2010.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Atlanta Metro Malayalee Association",
    "alternateName": "AMMA Atlanta",
    "url": "https://ammaatlanta.com",
    "logo": "https://ammaatlanta.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/ammaatlanta"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lawrenceville",
      "addressRegion": "GA",
      "postalCode": "30049",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "amma@ammaatlanta.com",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-white/10 selection:text-white",
          outfit.variable,
          inter.variable
        )}
      >
        <Navbar />
        <main className="flex-1 min-h-screen pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
