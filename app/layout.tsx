import React from "react";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

// 1. Configure Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Typed Metadata
export const metadata: Metadata = {
  title: "BrickTech Engineering | Construction Chemical & Flooring Experts",
  description: "India's leading provider of Chemical Flooring, Epoxy Flooring, Waterproofing, and skilled construction labour solutions.",
  viewport: "width=device-width, initial-scale=1",
};

// 3. Define Interface for Layout Props
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-dark">
        {/* Globally visible navigation */}
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}