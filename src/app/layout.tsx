import { Playfair_Display, Work_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

// Optimized font loading with display swap
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Live It Maghribi: Authentic Moroccan Workshops & Coffee in Kasbat Souss, Agadir",
  description: "Experience authentic Moroccan culture through hands-on workshops in pottery, zellige, cooking, and traditional crafts. Located in historic Kasbat Souss, Agadir. Book your cultural adventure today!",
  keywords: [
    "Moroccan workshops",
    "Agadir activities", 
    "Kasbat Souss",
    "pottery classes",
    "zellige workshops",
    "Moroccan cooking classes",
    "cultural experiences Morocco",
    "traditional crafts Agadir",
    "Moroccan heritage",
    "authentic Morocco",
    "hands-on workshops",
    "cultural tourism Agadir"
  ].join(", "),
  authors: [{ name: "Live It Maghribi" }],
  creator: "Live It Maghribi",
  publisher: "Live It Maghribi",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://liveitmaghribi.com",
    siteName: "Live It Maghribi",
    title: "Live It Maghribi: Authentic Moroccan Workshops in Agadir",
    description: "Experience authentic Moroccan culture through hands-on workshops in pottery, zellige, cooking, and traditional crafts in Kasbat Souss, Agadir.",
    images: [
      {
        url: "/images/hero-image.avif",
        width: 1200,
        height: 630,
        alt: "Live It Maghribi - Authentic Moroccan Workshops in Agadir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live It Maghribi: Authentic Moroccan Workshops in Agadir",
    description: "Experience authentic Moroccan culture through hands-on workshops in pottery, zellige, cooking, and traditional crafts.",
    images: ["/images/hero-image.avif"],
  },
  alternates: {
    canonical: "https://liveitmaghribi.com",
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
  category: "Cultural Experiences",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${playfair.variable} ${work_sans.variable}`}>
      <head>
        <title>Live It Maghribi: Authentic Moroccan Workshops in Agadir</title>
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/images/hero-image.avif" type="image/avif" />
        <link rel="preload" as="image" href="/images/NavLogo.png" type="image/png" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//calendly.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/LogoSymbol.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#9f5744" />
        <meta name="msapplication-TileColor" content="#9f5744" />
        
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`font-work-sans bg-background text-foreground antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}