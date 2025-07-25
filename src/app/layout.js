import { Playfair_Display, Work_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { hero } from "@/content/content";
import { GoogleAnalytics} from "@next/third-parties/google";

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
        <title>{hero.title}</title>
         <link rel="preload" as="image" href="/images/hero-image.avif" type="image/avif" />
      </head>
      <body className={`${playfair.variable} ${work_sans.variable} bg-background `}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-19SSLE284Z" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
