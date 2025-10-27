import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexus Medical Centre | Dr. Sidra Malik - Innovative Healthcare in Unionville",
  description: "Experience cutting-edge healthcare with VR therapy, medical aesthetics, and compassionate newborn care. Led by Dr. Sidra Malik in Unionville, ON.",
  keywords: ["Virtual reality therapy", "VR exposure therapy", "Newborn circumcision", "Medical aesthetics", "Dr. Sidra Malik", "Nexus Medical Centre", "Unionville healthcare"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-[104px] md:pt-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
