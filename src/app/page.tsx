import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Portfolio de Natalia Navarro - Frontend Developer especializada en React, Next.js y liderazgo técnico. Descubre mis proyectos y experiencia profesional.",
  openGraph: {
    title: "Natalia Navarro - Frontend Developer & Tech Lead",
    description:
      "Portfolio profesional con proyectos, recursos y liderazgo técnico.",
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
};

export default function Home() {
  return <ClientPage />;
}
