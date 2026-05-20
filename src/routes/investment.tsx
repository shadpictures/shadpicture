import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment & FAQ — shad.pictures" },
      { name: "description", content: "Pricing, packages, and frequently asked questions for cinematic vintage photography sessions." },
      { property: "og:title", content: "Investment & FAQ — shad.pictures" },
    ],
  }),
  component: Investment,
});

const tiers: { name: string; desc: string; price: string; featured?: boolean; items: string[] }[] = [
  {
    name: "Portrait Sessions",
    desc: "A directed, concept-led session for one/two — editorial in feel.",
    price: "Starting at $275",
    items: [
      "Pre-session vision call",
      "1 – 2 hours of coverage",
      "60+ hand-edited cinematic images",
      "Personal print release",
      "Online gallery delivered in 2 weeks",
    ],
  },
  {
    name: "Elopements",
    desc: "Just the two of you, art-directed start to finish.",
    price: "Starting at $1,800",
    featured: true,
    items: [
      "Planning & timeline support",
      "4 – 6 hours of coverage",
      "300+ cinematic, hand-toned images",
      "A short cinematic story-edit slideshow",
      "Travel within 100 mi included",
    ],
  },
  {
    name: "Weddings",
    desc: "Your most magical and memorable day, captured like a film. ",
    price: "Starting at $2,500",
    items: [
      "Second photographer optional",
      "4 – 10 hours of coverage",
      "Thorough vision connection prior, your day should feel like your film. ",
      "600+ cinematic images",
      "Heirloom album credit",
    ],
  },
];

const faq = [
  { q: "What does 'creative direction' mean in practice?", a: "Before the shoot, we have a concept call to talk mood, references, and the feeling you want. I share input on locations, light windows, and wardrobe, and put together a loose mood board so we're aligned. On the day, I direct the pacing and the small details so it feels intentional. After, every frame is hand-toned in my signature edit." },
  { q: "What does 'cinematic vintage' actually mean?", a: "Warm tones, soft grain, golden light. It's edited to feel like a memory — closer to a 90s film still than a typical digital photo." },
  { q: "Do you pose us?", a: "Almost never. I direct in feelings and movement — 'walk slowly, whisper the worst joke you know' — so the moments are real." },
  { q: "How far in advance should we book?", a: "Portraits: 4–8 weeks. Weddings & elopements: 6–12 months. I keep my calendar limited to give every couple my full attention." },
  { q: "Do you travel?", a: "Yes — anywhere. Travel within 100 miles is included for elopements; beyond that, I'll quote a flat travel fee." },
  { q: "When do we get our photos?", a: "Portrait galleries in 2 weeks. Wedding & elopement galleries in 4–6 weeks, with a sneak peek within days." },
  { q: "Do you offer prints and albums?", a: "Yes — heirloom albums, framed prints, and fine art paper options are available after delivery." },
];

function Investment() {
  return (
    <>
      <section className="px-6 lg:px-10 pt-24 pb-16 max-w-5xl mx-auto text-center">
        <p className="eyebrow">The investment</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4 italic">
          Heirlooms, not just photos.
        </h1>
        <p className="font-display italic text-xl md:text-2xl mt-4 text-accent">
          Cinematic stories. Editorial portraits. Pictures that feel.
        </p>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Each experience is built around how you want to feel, what you want
          to remember, and the people you want to remember it with. Pricing
          below is a starting point — full guides are sent on inquiry.
        </p>
      </section>

      <section className="px-6 lg:px-10 pb-10 max-w-5xl mx-auto">
        <p className="eyebrow text-center">What you're actually investing in</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4 text-sm text-muted-foreground">
          {[
            "A directed, concept-led session for one/two — editorial in feel.",
            "Location scouting + mood/wardrobe guidance",
            "Cinematic shoot day, directed in real time",
            "Editorial-grade edit, hand-toned like a magazine",
          ].map((item) => (
            <li key={item} className="flex gap-3 border border-border p-4">
              <span className="text-accent">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 lg:px-10 pb-24 max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative p-8 border ${t.featured ? "border-accent bg-card shadow-[var(--shadow-soft)]" : "border-border bg-background"}`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-8 bg-accent text-accent-foreground text-[10px] tracking-[0.25em] uppercase px-3 py-1">
                Most loved
              </span>
            )}
            <h3 className="font-display text-3xl">{t.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
            <p className="font-display text-2xl mt-6 text-accent">{t.price}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {t.items.map((i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-accent">✦</span>{i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow text-center">Common questions</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-center">Good things to know.</h2>
          <div className="mt-12 divide-y divide-border">
            {faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer list-none font-display text-xl">
                  {f.q}
                  <span className="text-accent text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-film)] text-background py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display italic text-4xl md:text-5xl">Let's make something special.</h2>
          <p className="mt-4 text-background/70 text-sm">NASHVILLE BASED · ALWAYS ON THE ROAD</p>
          <Link to="/contact" className="mt-8 inline-block text-xs uppercase tracking-[0.25em] border border-background/60 px-6 py-3 hover:bg-background hover:text-foreground transition-colors">
            Start an inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
