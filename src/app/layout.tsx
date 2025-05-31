import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ustam - Ankara İç Dekorasyon ve Tadilat Hizmetleri",
  description: "Ankara'da profesyonel iç dekorasyon, tadilat, boya, badana, alçı, asma tavan, fayans ve laminat parke hizmetleri.",
  keywords: "ankara tadilat, iç dekorasyon, boya badana, alçı, asma tavan, fayans döşeme, laminat parke",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
