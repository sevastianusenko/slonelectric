import Image from "next/image";
import Link from "next/link";
import { Chevron } from "./Icons";
import { serviceMap } from "@/content/services";

/**
 * Карточка услуги: кадр с объекта, при наведении уходит в графит и выезжает
 * описание. Живёт в трёх местах (главная, /services, и блок "что это такое"
 * на страницах услуг), поэтому вынесена из страниц: иначе копии неизбежно
 * разъедутся.
 *
 * По умолчанию карточка берёт фото и ссылку из `serviceMap[slug]`. Там,
 * где карточка ведёт не на услугу, а на проект (кадр реального объекта
 * вместо обложки услуги), `href` и `photo` передаются напрямую и
 * перекрывают поиск по slug.
 *
 * Высота фиксирована там, где есть ховер, иначе карточка прыгала бы при
 * раскрытии описания. На тач-экранах описание видно всегда, и там карточка
 * растёт под текст, а не обрезает его.
 */
export default function ServiceCard({
  slug, title, body, tall = false, priority = false, index = 0, href, photo,
}: {
  slug?: string;
  title: string;
  body: string;
  tall?: boolean;
  priority?: boolean;
  index?: number;
  href?: string;
  photo?: { src: string; alt: string };
}) {
  const s = slug ? serviceMap[slug] : undefined;
  const linkHref = href ?? (slug ? `/${slug}` : undefined);
  const img = photo ?? s?.hero;
  if (!linkHref || !img) return null;

  return (
    <Link
      href={linkHref}
      className="rise group relative block focus:outline-none"
      style={{ "--d": `${100 + index * 80}ms` } as React.CSSProperties}
    >
      <article
        className={`relative overflow-hidden [@media(hover:none)]:h-auto ${
          tall
            ? "h-[430px] [@media(hover:none)]:min-h-[430px]"
            : "h-[340px] [@media(hover:none)]:min-h-[340px]"
        }`}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes={
            tall
              ? "(max-width: 768px) 92vw, 360px"
              : "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 360px"
          }
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Подложка под текст: кадры разной яркости, от светлого цеха
            до ночного вызова в снегу. Внизу плотно, к верху сходит на нет. */}
        <span
          className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-ink-900 via-ink-900/75 to-transparent"
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 bg-ink-900/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        />

        <div className="relative flex h-full flex-col justify-end p-6">
          <span
            className="mb-4 block h-7 w-[5px] bg-primary-500 transition-all duration-300 group-hover:h-10"
            style={{ transform: "skewX(-14deg)" }}
            aria-hidden="true"
          />
          <h3 className={`font-bold leading-[1.3] text-white ${tall ? "text-[21px]" : "text-[18px]"}`}>
            {title}
          </h3>

          {/* Описание не занимает место, пока его не позвали: иначе заголовок
              висит посреди карточки, а внизу пустота. */}
          <div
            className="
              grid grid-rows-[0fr] opacity-0 transition-all duration-300
              group-hover:grid-rows-[1fr] group-hover:opacity-100
              group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100
              [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100
            "
          >
            <p className="max-w-[300px] overflow-hidden text-[14px] leading-6 text-white/90">
              <span className="mt-4 block">{body}</span>
            </p>
          </div>

          <span className="mt-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500">
            Read more
            <Chevron className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}
