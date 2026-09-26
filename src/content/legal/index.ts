/**
 * Тексты юридических страниц.
 *
 * ВАЖНО. Политика приватности описывает то, что сайт делает **на самом деле**,
 * а не то, что обычно пишут в шаблонах. Проверено 25.09.2026, обновлено
 * 25.09.2026 в тот же день, когда на сайте появилась форма:
 *   - сторонних скриптов и аналитики на страницах нет;
 *   - куки сайт не ставит, localStorage и sessionStorage не использует;
 *   - на /contact есть форма — единственная на всём сайте — она отправляет
 *     данные напрямую в FormSubmit (formsubmit.co), сторонний сервис
 *     приёма писем, без своего сервера и без хранения на нашей стороне;
 *   - на /contact встроена карта Google Maps (iframe) — Google получает
 *     обычные технические данные о запросе так же, как любой сайт с картой;
 *   - шрифты Manrope отдаются со своего домена через next/font, то есть
 *     запроса к Google со стороны посетителя не происходит.
 *
 * Практический риск здесь не в отсутствии политики, а в § 5 FTC Act:
 * опубликованное обещание надо соблюдать буквально. Поэтому при следующем
 * изменении — аналитика, пиксель, чат, ещё одна форма — этот текст снова
 * обязан меняться в тот же день.
 */

export type LegalSection = { heading: string; body: string[]; bullets?: string[] };

export type LegalPage = {
  slug: "privacy" | "terms";
  title: string;
  h1: string;
  summary: string;
  updated: string;
  lead: string;
  sections: LegalSection[];
};

export const privacy: LegalPage = {
  slug: "privacy",
  title: "Privacy Policy | Slon Electric",
  h1: "Privacy policy",
  summary:
    "What this website collects: almost nothing on any page except one. The contact form on /contact sends your details to a third party service that delivers them to us by email.",
  updated: "25 September 2026",
  lead:
    "This is a short policy because this is a simple website. There is no analytics, no tracking pixel and no advertising tag anywhere on it, and it sets no cookies of its own. One page, /contact, has a form, and this policy says exactly what that form does with what you type into it.",
  sections: [
    {
      heading: "What this website collects",
      body: [
        "Nothing that identifies you, automatically, and on every page except one. There is no analytics package on this site, no advertising or social media tracking pixel, and no third party tag manager. The site does not set cookies, and it does not store anything in your browser between visits.",
        "The typefaces are served from this domain rather than from a font service, so simply reading a page does not send a request to anybody else.",
      ],
    },
    {
      heading: "Server logs",
      body: [
        "Like any website, the requests that load these pages are handled by a hosting provider, and providers keep standard technical logs: the IP address a request came from, the browser and device type, the page requested and the time. That is a normal part of operating a server and of defending it from abuse.",
        "We do not use those logs to build a profile of visitors, we do not combine them with anything else, and we do not sell or share them.",
      ],
    },
    {
      heading: "The form on the contact page",
      body: [
        "The one form on this site, on the Contact page, is delivered by FormSubmit, a third party service. When you submit it, what you typed is sent to FormSubmit and from there by email to us. FormSubmit is the processor for that one moment of delivery; we are not able to see or control what FormSubmit itself logs on its own servers, and their own policy governs that.",
        "Once the email reaches us, it sits in an ordinary inbox like any other message. Everywhere else on this site, contacting us means a phone call or an email you write yourself, and in both of those you decide what to tell us directly, with nothing in between.",
        "What you tell us, by any of these routes, we keep for the ordinary reason a contractor keeps it: to quote the job, to do the work, to come back if something needs attention afterwards, and to meet the record keeping any business has to meet. We do not add anybody to a marketing list from a form submission or a call, and we do not pass details to anybody outside the work itself.",
      ],
      bullets: [
        "Your name and how to reach you",
        "The building, the address and what the job involves",
        "Notes, photographs and drawings connected to that work",
        "Invoices and the records that go with them",
      ],
    },
    {
      heading: "The map on the contact page",
      body: [
        "The Contact page also embeds a Google Map so you can see where we are. Loading that map is a request to Google like visiting maps.google.com directly would be, and it is covered by Google's own privacy policy, not this one. If you would rather not make that request, the address on this page is enough to find us without it.",
      ],
    },
    {
      heading: "We do not sell your information",
      body: [
        "We do not sell personal information, we do not share it for cross context behavioural advertising, and there is nothing on this site that would make that possible beyond the one form described above.",
        "Because this site does not track anybody across other websites, a Do Not Track signal from your browser makes no difference here. We mention it only because California law asks sites to say how they respond to one.",
      ],
    },
    {
      heading: "Children",
      body: [
        "This site is aimed at farms, plants and businesses. It is not directed at children, and we do not knowingly collect information from them.",
      ],
    },
    {
      heading: "If this changes",
      body: [
        "If we ever add analytics, another form, a chat widget or anything else that collects information, this page changes on the same day, and the date at the top changes with it. A privacy policy that describes a website other than the one you are reading is worse than no policy at all.",
      ],
    },
    {
      heading: "Asking about your information",
      body: [
        "If you have been in touch and want to know what we hold, or want it corrected or deleted where we are not required to keep it, call the number on this site and ask. It is a short conversation and there is no separate form to fill in for that.",
      ],
    },
  ],
};

export const terms: LegalPage = {
  slug: "terms",
  title: "Terms of Use | Slon Electric",
  h1: "Terms of use",
  summary:
    "The terms for using this website: what the technical articles are and are not, what a price on this site means, and who owns the photographs.",
  updated: "25 September 2026",
  lead:
    "These terms cover this website and nothing else. They are not the terms of any job we do for you. Work is agreed in a written proposal, and that document, not this page, sets out what we will do and what it costs.",
  sections: [
    {
      heading: "Nothing here is a quote",
      body: [
        "Pages on this site describe the work we do and the buildings we do it in. They are not an offer, and no figure on this site is a price for your job.",
        "Where an article mentions what something typically costs, it is there to explain what drives the number, not to quote it. Two buildings that look alike from the road routinely land at very different prices once the service, the distance, the access and the equipment schedule are known. The only price that means anything is the one written for your building after we have looked at it.",
      ],
    },
    {
      heading: "Technical articles are general, your building is not",
      body: [
        "The blog exists because the same questions come up every week and a straight answer is worth more than a brochure. Those articles are written carefully and cite their sources, and they are still general explanations.",
        "They are not a substitute for an assessment of your building by a qualified electrician, and they are not instructions to work on live equipment. Codes are adopted and amended locally, editions change, and the right answer for a barn in Lebanon County may be the wrong answer two counties over. If something on this site matters to a decision you are about to make, call and ask about your case.",
      ],
    },
    {
      heading: "Links to other sites",
      body: [
        "We link to code bodies, university extension publications, standards organisations and trade press where they support a point. Those sites are not ours, we do not control what they publish, and a link is not an endorsement of everything on the other end of it.",
        "Where a source has moved or gone offline we want to know, because a citation that leads nowhere is worse than no citation.",
      ],
    },
    {
      heading: "Photographs and text",
      body: [
        "Almost every photograph on this site is of work done by Slon Electric, taken on our own jobs. Those photographs, and the text written for this site, belong to us.",
        "A small number of illustrations are used under Creative Commons or public domain terms, and each of those carries its author and licence in the caption beside it. Those images belong to their authors and are used on the terms their licences set, not ours.",
        "You are welcome to quote a passage with a link back. Republishing pages wholesale, or using our job photographs as if they were yours, is not something we agree to.",
      ],
    },
    {
      heading: "Accuracy and availability",
      body: [
        "We keep this site accurate and correct what we find to be wrong, but we do not promise that every page is complete or current at the moment you read it, or that the site is always reachable.",
        "To the extent the law allows, we are not liable for loss arising from relying on general information published here rather than on advice given for your building.",
      ],
    },
    {
      heading: "Where the work itself is agreed",
      body: [
        "Everything about an actual job lives in the written proposal and the documents attached to it: the scope, the price, the assumptions, the schedule and the terms. If anything on this website appears to conflict with that document, that document governs.",
      ],
    },
    {
      heading: "Governing law",
      body: [
        "Slon Electric LLC operates from Lebanon County, Pennsylvania, and these terms are governed by Pennsylvania law.",
      ],
    },
  ],
};

export const legalPages = [privacy, terms];
