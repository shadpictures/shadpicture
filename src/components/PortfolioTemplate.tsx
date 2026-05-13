import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export type PortfolioImage = { src: string; alt: string; tall?: boolean };

export type PortfolioConfig = {
  eyebrow: string;
  title: string;
  intro: string;
  hero: string;
  heroAlt: string;
  details: { label: string; value: string }[];
  experience: string[];
  images: PortfolioImage[];
};

export function PortfolioTemplate({ cfg }: { cfg: PortfolioConfig }) {
  return (
    <article>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden film-grain film-vignette">
        <img
          src={cfg.hero}
          alt={cfg.heroAlt}
          className="absolute inset-0 h-full w-full object-cover kenburns"
        />
        <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-16 pb-16 text-background">
          <p className="eyebrow text-background/80 fade-up">{cfg.eyebrow}</p>
          <h1 className="font-display text-5xl md:text-7xl mt-3 max-w-3xl fade-up delay-1 italic">
            {cfg.title}
          </h1>
          <p className="mt-5 max-w-xl text-background/85 fade-up delay-2">{cfg.intro}</p>
        </div>
      </section>

      {/* Details strip */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {cfg.details.map((d) => (
            <div key={d.label}>
              <p className="eyebrow">{d.label}</p>
              <p className="font-display text-xl mt-1">{d.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20">
        <p className="eyebrow">The experience</p>
        <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl">
          What it feels like to be photographed by me.
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Every shoot is art-directed — locations, light, wardrobe notes, pacing. You show up; I shape the rest around you.
        </p>
        <ul className="mt-10 grid md:grid-cols-2 gap-6">
          {cfg.experience.map((e, i) => (
            <li key={i} className="flex gap-4 text-muted-foreground">
              <span className="font-mono text-accent text-sm pt-1">0{i + 1}</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Gallery */}
      <GallerySection images={cfg.images} />

      {/* CTA */}
      <section className="bg-[var(--color-film)] text-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-background/70">Concept-led photography for people who want a vision, not just a vendor.</p>
          <h2 className="font-display italic text-4xl md:text-5xl mt-3">
            Let's make something special.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block text-xs uppercase tracking-[0.25em] border border-background/60 px-6 py-3 hover:bg-background hover:text-foreground transition-colors"
          >
            Inquire about a session
          </Link>
        </div>
      </section>
    </article>
  );
}

function GallerySection({ images }: { images: PortfolioImage[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const figures = Array.from(root.querySelectorAll<HTMLElement>("figure.reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    figures.forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, [images]);

  if (images.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
      <div ref={ref} className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
        {images.map((img, i) => (
          <figure
            key={i}
            className="reveal break-inside-avoid relative film-grain overflow-hidden"
            style={{ transitionDelay: `${(i % 3) * 120}ms` }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`w-full object-cover ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
