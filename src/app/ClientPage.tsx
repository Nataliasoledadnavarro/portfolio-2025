"use client";

import React, { Suspense } from "react"; // Importar React y Suspense

// Importaciones dinámicas para Lazy Loading de las secciones
import Hero from "../components/sections/Hero";
const About = React.lazy(() => import("@/components/sections/About"));
const Projects = React.lazy(() => import("../components/sections/Projects"));
const Resources = React.lazy(() => import("../components/sections/Resources"));
const Contact = React.lazy(() => import("../components/sections/Contact"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
    Cargando sección...
  </div>
);

// Structured Data para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Natalia Navarro",
  jobTitle: "Frontend Developer & Tech Lead",
  description:
    "Frontend Developer especializada en React, Next.js y liderazgo técnico",
  url: "https://natalia-navarro.vercel.app",
  image: "https://natalia-navarro.vercel.app/img/profile.png",
  sameAs: [
    "https://www.linkedin.com/in/nataliasoledadnavarro/",
    "https://github.com/Nataliasoledadnavarro",
  ].filter(Boolean),
  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
    "Technical Leadership",
    "Team Management",
  ],
};

export default function ClientPage() {
  return (
    <>
      {/* Script de Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main>
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Resources />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
