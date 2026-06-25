import type { Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { business, createMetadata, faqSchema, localBusinessSchema } from "@/lib/site";
import { JsonLd } from "@/components/Schema";

export const metadata = createMetadata({
  title: "Junk Removal Santa Ana | Manny's Hauling Services",
  description: "Manny's Hauling Services provides fast, affordable, professional junk removal in Santa Ana, CA. Same-day hauling, furniture removal, appliance removal, cleanouts, and Orange County junk removal."
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: business.brandRed
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={faqSchema()} />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
