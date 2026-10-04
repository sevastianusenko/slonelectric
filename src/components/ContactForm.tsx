"use client";

import { useId, useState } from "react";
import { site } from "@/lib/content";

/**
 * Раньше форма уходила на FormSubmit обычным POST без единой строчки JS —
 * страница целиком перезагружалась через `?sent=1`. Клиент принёс готовый
 * код на Web3Forms со своим access_key (аккаунт уже оформлен) — у него
 * другой протокол, через fetch, поэтому форма стала клиентским компонентом:
 * без этого useState/onSubmit в Next не собрать.
 *
 * access_key у Web3Forms — не секрет в духе серверного API-ключа: он живёт
 * в браузере у каждого посетителя открытым текстом, так и задумано,
 * Web3Forms сам проверяет ключ и домен на своей стороне.
 *
 * Honeypot — по документации Web3Forms это обязательно `name="botcheck"`
 * и `type="checkbox"`, другое имя или тип сервис просто не распознает.
 */
const ACCESS_KEY = "0081e062-be1c-430d-a30f-c59b295496bd";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const honeyId = useId();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-8 border-l-[5px] border-primary-500 bg-white/[0.06] p-6">
        <p className="text-[17px] font-bold text-white">That&rsquo;s on its way.</p>
        <p className="mt-2 text-[15px] leading-7 text-gray-400">
          It goes straight to Anatoly&rsquo;s inbox. If it is not urgent, expect a reply
          the same day or the next business day. If it cannot wait, call instead.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-5">
      {/* Настройки Web3Forms — не поля для посетителя. */}
      <input type="hidden" name="subject" value="New job inquiry — slonelectric.com" />
      <input type="hidden" name="from_name" value="slonelectric.com contact form" />
      {/* Honeypot: скрыт для человека, боты обычно заполняют все поля подряд. */}
      <label htmlFor={honeyId} className="hidden" aria-hidden="true">
        Leave this field blank
        <input id={honeyId} type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          placeholder="Your name *"
          className="block w-full border-0 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500"
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Your phone *"
          className="block w-full border-0 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="your@email.com (optional)"
        className="block w-full border-0 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500"
      />

      <textarea
        name="message"
        required
        rows={4}
        placeholder="What the building has to run *"
        className="block w-full resize-y border-0 bg-white px-4 py-3 text-[15px] leading-7 text-ink-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500"
      />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn_solid !px-9 !py-4 !text-[15px] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "error" && (
          <p className="text-[14px] text-primary-500">
            That did not go through. Call {site.phone} instead, or try again.
          </p>
        )}
      </div>
    </form>
  );
}
