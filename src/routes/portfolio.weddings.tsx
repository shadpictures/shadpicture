import { createFileRoute } from "@tanstack/react-router";
import { PortfolioTemplate, type PortfolioConfig } from "@/components/PortfolioTemplate";
import hero from "@/assets/portfolio-weddings.jpg";
import g1 from "@/assets/portfolio-weddings-1.jpg";

export const Route = createFileRoute("/portfolio/weddings")({
  head: () => ({
    meta: [
      { title: "Weddings & Elopements — shad.pictures" },
      { name: "description", content: "Cinematic, intimate elopement and small wedding photography. Small, sacred, unforgettable." },
      { property: "og:title", content: "Weddings & Elopements — shad.pictures" },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: () => <PortfolioTemplate cfg={cfg} />,
});

const cfg: PortfolioConfig = {
  eyebrow: "Weddings & elopements",
  title: "Your day, told like a film.",
  intro: "Cinematic, story-first wedding photography with editorial polish. Whether it's the two of you on a mountain or 30 of your favorite people in a backyard — your day deserves to feel like a film you'll rewatch forever, not a photo dump.",
  hero,
  heroAlt: "Bride and groom kissing on mountain at sunset",
  details: [
    { label: "Coverage", value: "4 – 10 hrs" },
    { label: "Photographers", value: "1 – 2" },
    { label: "Travel", value: "Worldwide" },
    { label: "Delivery", value: "400 – 800 images" },
  ],
  experience: [
    "We start with a long planning conversation about the feel of the day.",
    "I help you build a timeline around the best light, not just logistics.",
    "On the day, I'm a calm, quiet presence — there for the moments, not the spotlight.",
    "A cinematic gallery in 4–6 weeks, with heirloom album and print options.",
  ],
  images: [{ src: g1, alt: "Bride embracing her partner in soft light", tall: true }],
};
