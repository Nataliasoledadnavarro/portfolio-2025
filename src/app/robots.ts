import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://natalia-navarro.vercel.app" // Cambiar por mi dominio

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [], 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
