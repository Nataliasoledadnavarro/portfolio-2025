"use client";

import type React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "@/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { LazyMotion, domAnimation } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/public/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffeb3b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300 dark:bg-dark`}
      >
        <ThemeProvider>
          <LazyMotion features={domAnimation}>
            <Navbar />
            {children}
            <Footer />
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  );
}
