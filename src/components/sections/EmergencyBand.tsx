import { emergency, site } from "@/lib/content";

/**
 * Аварийная полоса. Стоит в конце главной по решению клиента: это не витрина,
 * а страховка для того, у кого прямо сейчас что-то стоит.
 *
 * Раньше это была точная копия вёрстки CTA-полосы футера (тёмный ink-900,
 * заголовок с текстом слева, кнопка справа) — а стоит она прямо перед этим
 * же футером, через одну тонкую secцию GoFuture. Две одинаковые тёмные
 * полосы подряд читались как одна и та же секция, повторённая дважды.
 * Здесь та же информация, но в виде карточки-предупреждения на светлом
 * фоне — тот же приём, что уже стоит на /contact («Something down right
 * now»), только во всю ширину. Отличается по цвету, форме и месту кнопки,
 * поэтому рядом с футером не выглядит дублем.
 */
export default function EmergencyBand() {
  return (
    <section className="relative overflow-hidden bg-paper-100 py-12 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="flex flex-col gap-6 border-l-[5px] border-primary-500 bg-white p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-9">
          <div className="max-w-[640px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">
              Before you go
            </p>
            <h2 className="mt-2 text-[22px] font-extrabold leading-tight text-ink-900 lg:text-[28px]">
              {emergency.heading}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-gray-700 lg:text-[16px]">{emergency.body}</p>
          </div>

          <a
            href={`tel:${site.phoneHref}`}
            className="btn btn_solid shrink-0 !px-8 !py-4 !text-[15px]"
          >
            {emergency.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
