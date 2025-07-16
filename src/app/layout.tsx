import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimización de carga de fuentes
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Natalia Navarro - Frontend Developer & Tech Lead",
    template: "%s | Natalia Navarro",
  },
  description:
    "Frontend Developer especializada en React, Next.js y liderazgo técnico. Experiencia en optimización de plataformas y desarrollo de equipos de alto rendimiento.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Tech Lead",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Natalia Navarro",
    "Desarrollo Web",
    "Liderazgo Técnico",
  ],
  authors: [{ name: "Natalia Navarro" }],
  creator: "Natalia Navarro",
  publisher: "Natalia Navarro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://natalia-navarro.vercel.app"), // Cambia por mi dominio
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://natalia-navarro.vercel.app", // Cambia por mi dominio
    title: "Natalia Navarro - Frontend Developer & Tech Lead",
    description:
      "Frontend Developer especializada en React, Next.js y liderazgo técnico. Experiencia en optimización de plataformas y desarrollo de equipos.",
    siteName: "Natalia Navarro Portfolio",
    images: [
      {
        url: "/img/profile.png",
        width: 1200,
        height: 630,
        alt: "Natalia Navarro - Frontend Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-google-verification-code", // Agregar cuando tenga Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffeb3b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300 dark:bg-dark`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
