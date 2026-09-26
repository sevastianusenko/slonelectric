import { site, markets, socials } from "@/lib/content";
import { areaList } from "@/content/areas";

/**
 * JSON-LD компании. Стоит в макете, поэтому здесь только то, что верно
 * на любой странице. FAQPage сюда не кладём: иначе каждая страница услуги
 * заявляла бы вопросы с главной, которых на ней нет, и спорила бы со своей
 * собственной разметкой. Вопросы размечает та страница, где они есть.
 * Все значения берутся из подтверждённых данных карточки Google.
 */
export default function Schema({ url = "https://slonelectric.com" }: { url?: string }) {
  const business = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "@id": `${url}/#business`,
    name: site.name,
    legalName: site.legal,
    url,
    telephone: site.phone,
    /** Карточка Google — постоянная ссылка по CID — плюс подтверждённые соцсети. */
    hasMap: site.googleMapsUrl,
    sameAs: [site.googleMapsUrl, site.yelpUrl, ...socials.map((s) => s.href)],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    /**
     * По решению клиента 24.09.2026 число отзывов на страницах не показываем,
     * виден только рейтинг. В разметке reviewCount остаётся: без него
     * AggregateRating невалиден. Не «чинить» удалением.
     */
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.reviews.rating,
      reviewCount: site.reviews.count,
      bestRating: 5,
    },
    /** Из списка округов, чтобы разметка не разъехалась со страницами. */
    areaServed: areaList.map((a) => ({
      "@type": "AdministrativeArea",
      name: `${a.county}, Pennsylvania`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical services",
      itemListElement: markets.items.map((m) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${m.title} electrical services`, description: m.body },
      })),
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
  );
}
