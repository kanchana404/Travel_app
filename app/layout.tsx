import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* haloo */}
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
