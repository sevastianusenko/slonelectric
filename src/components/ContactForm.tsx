"use client";

import { useId, useState } from "react";
import { site } from "@/lib/content";

/**
 * Форма шла сначала на FormSubmit, потом на Web3Forms (клиентский
 * access_key, напрямую из браузера). Клиент подтвердил домен в Resend,
 * у которого ключ серверный и секретный — его нельзя класть в код
 * страницы, поэтому POST теперь уходит на свой route handler
 * (`/api/contact`), а он уже обращается к Resend с ключом из переменной
 * окружения. Honeypot-поле осталось то же, просто проверяется на сервере.
 */

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const honeyId = useId();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
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
