import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroCouple from "@/assets/hero-couple.jpg";
import portraits from "@/assets/portfolio-seniors.jpg";
import couples from "@/assets/portfolio-couples.jpg";
import weddings from "@/assets/portfolio-weddings.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroImages = [
  { src: hero1, alt: "Woman in white seated on marble stairs in warm light" },
  { src: hero2, alt: "Couple embracing in soft, grainy light" },
  { src: hero3, alt: "Couple laughing under lamplight at dusk" },
  { src: couples, alt: "Couple in golden light" },
  { src: weddings, alt: "Intimate wedding moment" },
  { src: portraits, alt: "Cinematic portrait at sunset" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "shad.pictures — Cinematic vintage 90s photography" },
      { name: "description", content: "Dreamy, romantic vintage 90s film photography for seniors, couples, families and intimate weddings. Memories caught in time." },
      { property: "og:title", content: "shad.pictures — Cinematic vintage 90s photography" },
      { property: "og:image", content: heroCouple },
    ],
  }),
  component: Home,
});

const categories = [
  { to: "/portfolio/couples", label: "Couples", img: couples, copy: "A love story, shot like a film." },
  { to: "/portfolio/weddings", label: "Weddings & Elopements", img: weddings, copy: "Small. Sacred. Cinematic." },
  { to: "/portfolio/portraits", label: "Portraits", img: portraits, copy: "Editorial portraits with a Vogue soul." },
] as const;

function Home() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] overflow-hidden film-grain film-vignette">
        {heroImages.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 h-full w-full object-cover kenburns transition-opacity duration-[1500ms] ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-16 pb-20 text-background max-w-5xl">
          <p className="eyebrow text-background/80 fade-up">NASHVILLE BASED · ALWAYS ON THE ROAD</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-4 leading-[1.05] fade-up delay-1">
            Pictures that feel,
            <span className="italic"> not just document</span>.
          </h1>
          <p className="mt-6 max-w-xl text-background/90 fade-up delay-2 font-serif font-extralight">
            I'm a creative director with a camera. Every session is concept-led, art-directed. What you get back feels like a film about you, not a folder of photos.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 fade-up delay-3">
            <Link to="/contact" className="text-xs uppercase tracking-[0.25em] bg-background text-foreground px-6 py-4 hover:bg-accent transition-colors">
              Book a session
            </Link>
            <Link to="/investment" className="text-xs uppercase tracking-[0.25em] border border-background/60 px-6 py-4 hover:bg-background hover:text-foreground transition-colors">
              The investment
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-28 text-center">
        <p className="eyebrow">The philosophy</p>
        <p className="font-display italic text-3xl md:text-5xl mt-6 leading-[1.2]">
          "I shoot like a cinematographer and edit like a magazine — every frame is a scene,
          every gallery is a <span className="not-italic font-display">story</span>.
          Editorial in feeling, cinematic in light, honest in soul."
        </p>
        <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
          Think Vogue portraits meets a slow indie film: warm grain, real moments,
          and people who actually look like themselves.
        </p>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          That means I show up as more than a photographer. I direct the moment — the light, the location, the pacing, the small details — so the work feels intentional from the first frame to the last edit.
        </p>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-28">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow">The work</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">Stories I love to tell.</h2>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((c, i) => (
            <Link to={c.to} key={c.to} className="group block">
              <div className={`relative overflow-hidden film-grain ${i % 2 ? "md:translate-y-12" : ""}`}>
                <img src={c.img} alt={c.label} loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-film)]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-background">
                  <p className="eyebrow text-background/80">{c.copy}</p>
                  <h3 className="font-display text-3xl md:text-4xl italic mt-1">{c.label}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/60 py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="eyebrow">The process</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">Slow, intentional, a little bit magic.</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {[
              { n: "01", t: "We talk first.", d: "A real conversation about who you are, what matters, and the story you want to remember." },
              { n: "02", t: "We slow down.", d: "Sessions are unhurried. We walk, we wait for the light, we let real moments happen." },
              { n: "03", t: "You get a film.", d: "A hand-edited gallery delivered like a roll of memories — warm, grainy, cinematic." },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-mono text-accent">{s.n}</p>
                <h3 className="font-display text-2xl mt-2">{s.t}</h3>
                <p className="text-muted-foreground mt-3">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-28 text-center">
        <p className="eyebrow">Kind words</p>
        <p className="font-display italic text-2xl md:text-4xl mt-6 leading-snug">
          "These don't look like photos. They look like the way I remember
          that day — soft, warm, like a movie I'd watch over and over."
        </p>
        <p className="mt-6 text-sm text-muted-foreground">@inquiries@shadpictures.com</p>
        <p className="mt-12 font-display italic text-3xl">— shad</p>
      </section>
    </>
  );
}
