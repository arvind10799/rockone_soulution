import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import MobileTabBar from "@/components/MobileTabBar";
import "./globals.css";
import "./shared-ui.css";

/**
 * The stylesheet has always asked for Inter but the font was never actually
 * loaded, so the site rendered in whatever the visitor had installed. These are
 * self-hosted at build time by next/font — no runtime request to Google, and no
 * layout shift.
 *
 * --font-sans  body copy, site-wide
 * --font-display  editorial headings; currently scoped to the case study
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Rock One Solutions | Website Development and Automation Agency",
  description:
    "Rock One Solutions builds premium websites, revenue automation, CRM workflows, and connected systems that help businesses convert and operate faster."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
        <MobileTabBar />
      </body>
    </html>
  );
}
