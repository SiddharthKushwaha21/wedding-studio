import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LayoutClient from "@/components/layout/layout-client";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Royal Pixel | Luxury Wedding Photography & Films",
  description:
    "Premium wedding photography and cinematic videography studio capturing timeless love stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} bg-background text-foreground antialiased`}
      >
        <LayoutClient>
          <Header />
          <main>{children}</main>
          <Footer />

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={4000}
            theme="dark"
            toastOptions={{
              style: {
                background: "rgba(0, 0, 0, 0.9)",
                border: "1px solid rgba(251, 191, 36, 0.2)",
                color: "#ffffff",
                backdropFilter: "blur(12px)",
              },
            }}
          />
        </LayoutClient>
      </body>
    </html>
  );
}