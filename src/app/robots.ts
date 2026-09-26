import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

/**
 * Закрывать нечего: на сайте нет ни админки, ни поиска, ни параметров.
 * Поэтому разрешаем всё и указываем карту.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `https://${site.domain}/sitemap.xml`,
    host: `https://${site.domain}`,
  };
}
