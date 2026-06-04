import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Spurghi a Reggio Emilia H24 | Autospurgo Dark Luxury",
    template: "%s | Spurghi Reggio Emilia"
  },
  description:
    "Spurghi a Reggio Emilia per autospurgo, disotturazione tubi, fosse biologiche e pronto intervento fognature. Servizio H24 per case, condomini e aziende.",
  alternates: {
    canonical: site.url
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: site.url,
    title: "Spurghi a Reggio Emilia H24",
    description:
      "Autospurgo, fognature, disotturazione tubi e interventi urgenti a Reggio Emilia.",
    siteName: site.name,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Spurghi a Reggio Emilia"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Spurghi a Reggio Emilia H24",
    description:
      "Autospurgo, fognature, disotturazione tubi e interventi urgenti a Reggio Emilia.",
    images: ["/images/og.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <SmoothScroll />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
