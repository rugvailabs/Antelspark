"use client";

import { useState } from "react";
import { ArrowUpRight, CircleCheck, LoaderCircle, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/services";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; email: string }
  | { state: "error"; message: string };

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-cobalt focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !body.ok) {
        setStatus({
          state: "error",
          message: body.error ?? "Something went wrong. Please try again.",
        });
        return;
      }
      form.reset();
      setStatus({ state: "success", email: payload.email });
    } catch {
      setStatus({
        state: "error",
        message: "We couldn't reach the server. Please try again.",
      });
    }
  }

  if (status.state === "success") {
    return (
      <div className="flex h-full min-h-72 flex-col items-start justify-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-cobalt text-white">
          <CircleCheck aria-hidden className="size-6" strokeWidth={2} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-medium text-ink">
          Message received.
        </h3>
        <p className="mt-2 max-w-sm leading-relaxed text-ink-soft">
          Thanks for writing — we&apos;ll reply to{" "}
          <span className="font-medium text-ink">{status.email}</span> shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-6 text-sm font-medium text-cobalt hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-ink">
            Full name <span className="text-terracotta">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            required
            minLength={2}
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-ink">
            Email address <span className="text-terracotta">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone number
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-service" className="mb-1.5 block text-sm font-medium text-ink">
            Service of interest
          </label>
          <select id="cf-service" name="service" defaultValue="" className={inputClasses}>
            <option value="">Select a service</option>
            {serviceCategories.map((category) => (
              <optgroup key={category.key} label={category.title}>
                {category.services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-ink">
            Message <span className="text-terracotta">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            minLength={10}
            rows={5}
            placeholder="Tell us about your project, goals or requirements…"
            className={`${inputClasses} resize-y`}
          />
        </div>
      </div>

      {status.state === "error" && (
        <p className="mt-4 flex items-start gap-2 text-sm text-terracotta" role="alert">
          <TriangleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
          {status.message}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-6"
        disabled={status.state === "submitting"}
      >
        {status.state === "submitting" ? (
          <>
            Sending…
            <LoaderCircle aria-hidden className="animate-spin" />
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}
