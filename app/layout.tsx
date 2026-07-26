import type { Metadata } from "next";
import MobileTabBar from "@/components/MobileTabBar";
import "./globals.css";
import "./shared-ui.css";

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
    <html lang="en">
      <body>
        {children}
        <MobileTabBar />
      </body>
    </html>
  );
}
