import { Playfair_Display, Work_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { hero } from "../content/content";
export const metadata = {
  title: hero.title,
  description: hero.description,
};

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-19SSLE284Z"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-19SSLE284Z');
        </script>
        {/* <link rel="preload" as="image" href="/images/hero-image.avif" type="image/avif" /> */}
      </head>
      <body className={`${playfair.variable} font-work-sans bg-background `}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
