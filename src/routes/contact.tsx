import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Inquire — shad.pictures" },
      { name: "description", content: "Tell me about your session — seniors, couples, families, weddings, and elopements." },
      { property: "og:title", content: "Inquire — shad.pictures" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  type: z.string().max(60),
  date: z.string().max(40),
  vision: z.string().trim().min(10, "Tell me a little more").max(2000),
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqeonnzp";

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.errors?.[0]?.message ?? "Submission failed");
      }
      setSent(true);
      form.reset();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="grid lg:grid-cols-2 min-h-[80vh]">
      <div className="bg-[var(--color-film)] text-background px-6 lg:px-16 py-20 flex flex-col justify-center">
        <p className="eyebrow text-background/70">Contact me</p>
        <h1 className="font-display text-5xl md:text-6xl mt-3 italic leading-tight">
          You reached out — <span className="not-italic">that already tells me something.</span>
        </h1>
        <p className="mt-6 text-background/80 max-w-md">
          You wanted pictures that felt like your own film instead of just a generic pose, &nbsp;and you're in the right place.&nbsp;I shoot like a cinematographer and edit like a magazine — story-driven, editorial, a little Vogue in the soul. When you book me, you're booking the whole vision: the concept, the direction on the day, and the edit — run like a small film set, with you at the center.
        </p>
        <p className="mt-6 font-display italic text-2xl text-background">
          Let's make something special.
        </p>
        <div className="mt-10 space-y-2 text-sm text-background/70">
          <p>hello@shadpictures.com</p>
          <p>NASHVILLE BASED · ALWAYS ON THE ROAD</p>
          <p>I respond to every inquiry within 48 hours.</p>
        </div>
      </div>

      <div className="px-6 lg:px-16 py-20 bg-background">
        {sent ? (
          <div className="max-w-md">
            <p className="eyebrow text-accent">Inquiry sent</p>
            <h2 className="font-display text-4xl mt-3">Thank you — truly.</h2>
            <p className="mt-4 text-muted-foreground">
              I'll be in touch within 48 hours with your personal pricing
              guide and next steps.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="max-w-md space-y-6" noValidate>
            <Field label="Your name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <div>
              <label className="eyebrow block mb-2">Session type</label>
              <select name="type" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent">
                <option>Couples shoot</option>
                <option>Solo / portrait shoot</option>
                <option>Event — wedding</option>
                <option>Event — elopement</option>
                <option>Event — engagement</option>
                <option>Other</option>
              </select>
            </div>
            <Field label="Approximate date" name="date" placeholder="e.g. October 2026 or flexible" />
            <div>
              <label className="eyebrow block mb-2">Tell me the story you want me to direct</label>
              <textarea
                name="vision"
                rows={5}
                className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent resize-none"
                placeholder="Mood, references, the feeling you want to walk away with…"
              />
              {errors.vision && <p className="text-destructive text-xs mt-1">{errors.vision}</p>}
            </div>
            {submitError && <p className="text-destructive text-xs">{submitError}</p>}
            <button type="submit" disabled={submitting} className="text-xs uppercase tracking-[0.25em] bg-foreground text-background px-6 py-4 hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-60">
              {submitting ? "Sending…" : "Send inquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", error, placeholder }: { label: string; name: string; type?: string; error?: string; placeholder?: string }) {
  return (
    <div>
      <label className="eyebrow block mb-2" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent"
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
}
