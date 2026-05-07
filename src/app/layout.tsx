import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Luxury Real Estate in Islamabad | US Real Estate & Builders',
  description: 'Experience elite property viewing with our immersive 3D real estate platform in Islamabad. Discover luxury homes, penthouses, and plots with US Real Estate & Builders.',
  keywords: ["Islamabad real estate, luxury houses Pakistan, plots in Islamabad, US Real Estate & Builders, property dealers Islamabad, buy property Pakistan"],
  openGraph: {
    "title": "US Real Estate & Builders - Luxury Property Showroom",
    "description": "Discover elite luxury living in Islamabad. Explore our curated portfolio via virtual 3D tours.",
    "siteName": "US Real Estate & Builders",
    "type": "website"
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
