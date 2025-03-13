import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Samuel Tetenga - Software Developer and Digital Designer",
    template: "%s | Samuel Tetenga"
  },
  description: "Software Developer and Digital Designer specializing in premium branding and software development and design",
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://localhost:3000',
    title: 'Samuel Tetenga - Software Developer and Digital Designer',
    description: 'Software Developer and Digital Designer specializing in premium branding and software development and design',
    siteName: 'Samuel Tetenga',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Tetenga - Software Developer and Digital Designer',
    description: 'Software Developer and Digital Designer specializing in premium branding and software development and design',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <ClientBody>
        <div className="flex flex-col max-w-screen min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
