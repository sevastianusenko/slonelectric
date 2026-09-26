import type { MetadataRoute } from "next";
import { serviceList } from "@/content/services";
import { projectList } from "@/content/projects";
import { articleList } from "@/content/blog";
import { areaList } from "@/content/areas";
import { townList } from "@/content/towns";
import { site } from "@/lib/content";

const BASE = `https://${site.domain}`;

/**
 * Карта сайта собирается из тех же реестров, что и сами страницы.
 * Списком вручную её вести нельзя: 81 адрес разъедется на первой же правке.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const at = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly") => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    at("/", 1, "weekly"),
    at("/services", 0.9, "monthly"),
    at("/service-area", 0.8, "monthly"),
    at("/projects", 0.7, "weekly"),
    at("/blog", 0.7, "weekly"),
    at("/about", 0.6, "yearly"),
    at("/contact", 0.6, "yearly"),

    ...serviceList.map((s) => at(`/${s.slug}`, 0.9, "monthly")),
    ...areaList.map((a) => at(`/service-area/${a.slug}`, 0.8, "monthly")),
    ...townList.map((t) => at(`/service-area/${t.county}/${t.slug}`, 0.7, "monthly")),
    ...articleList.map((a) => at(`/blog/${a.slug}`, 0.6, "monthly")),
    ...projectList.map((p) => at(`/projects/${p.slug}`, 0.5, "monthly")),

    at("/privacy", 0.2, "yearly"),
    at("/terms", 0.2, "yearly"),
  ];
}
