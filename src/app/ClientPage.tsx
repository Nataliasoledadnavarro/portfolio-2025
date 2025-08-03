"use client";

import React, { Suspense } from "react";
import Hero from "../components/sections/Hero";
const About = React.lazy(() => import("@/components/sections/About"));
const Projects = React.lazy(() => import("../components/sections/Projects"));
const Resources = React.lazy(() => import("../components/sections/Resources"));
const Contact = React.lazy(() => import("../components/sections/Contact"));
const NewProjects = React.lazy(() => import("../components/sections/NewProjects"));

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center h-64">
    <svg
      className="animate-spin h-12 w-12 text-primary mb-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
    <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">
      Cargando sección...
    </span>
  </div>
);

// Structured Data para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Natalia Navarro",
  jobTitle: "Frontend Developer & Tech Lead",
  description:
    "Frontend Developer especializada en React, Next.js y liderazgo.",
  url: "https://natalia-navarro.vercel.app",
  image: "https://natalia-navarro.vercel.app/public/img/profile.png",
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
        <NewProjects />
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
