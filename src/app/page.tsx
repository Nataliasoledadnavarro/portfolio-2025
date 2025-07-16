import Resources from "../components/sections/Resources"
import Hero from "../components/sections/Hero"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"
import About from "@/components/sections/About"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Portfolio de Natalia Navarro - Frontend Developer especializada en React, Next.js y liderazgo técnico. Descubre mis proyectos y experiencia profesional.",
  openGraph: {
    title: "Natalia Navarro - Frontend Developer & Tech Lead",
    description: "Portfolio profesional con proyectos, recursos y liderazgo técnico.",
    url: "https://natalia-navarro.vercel.app",
    images: [
      {
        url: "/img/profile.png", 
        width: 1200,
        height: 630,
        alt: "Portfolio de Natalia Navarro",
      },
    ],
  },
}

// Structured Data para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Natalia Navarro",
  jobTitle: "Frontend Developer & Tech Lead",
  description: "Frontend Developer especializada en React, Next.js y liderazgo técnico",
  url: "https://natalia-navarro.vercel.app",
  image: "https://natalia-navarro.vercel.app/img/profile.png", // ✅ Ruta absoluta para structured data
  sameAs: ["https://www.linkedin.com/in/nataliasoledadnavarro/", "https://github.com/Nataliasoledadnavarro"].filter(Boolean),
  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
    "Technical Leadership",
    "Team Management",
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resources />
        <Contact />
      </main>
    </>
  )
}