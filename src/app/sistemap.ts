import type { MetadataRoute } from "next"
import { PROJECTS_ROUTE, ABOUT_ROUTE, RESOURCES_ROUTE, CONTACT_ROUTE
 } from "@/lib/routes"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://natalia-navarro.vercel.app" 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}${ABOUT_ROUTE}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}${PROJECTS_ROUTE}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
       {
      url: `${baseUrl}${RESOURCES_ROUTE}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}${CONTACT_ROUTE}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
