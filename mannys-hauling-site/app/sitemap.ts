import type { MetadataRoute } from "next";
import { business, cityPages, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/service-areas", "/contact", "/privacy-policy", "/terms"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const cityRoutes = cityPages.map((city) => `/service-areas/${city.slug}`);
  return [...routes, ...serviceRoutes, ...cityRoutes].map((route) => ({
    url: `${business.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8
  }));
}
