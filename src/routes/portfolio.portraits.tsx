import { createFileRoute } from "@tanstack/react-router";
import { PortfolioTemplate, type PortfolioConfig } from "@/components/PortfolioTemplate";
import hero from "@/assets/portfolio-seniors.jpg";
import g1 from "@/assets/portfolio-solo-1.jpg";

export const Route = createFileRoute("/portfolio/portraits")({
  head: () => ({
    meta: [
      { title: "Solo Sessions — shad.pictures" },
      { name: "description", content: "Cinematic, vintage 90s film solo sessions — unposed, unhurried, and unmistakably you." },
      { property: "og:title", content: "Solo Sessions — shad.pictures" },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => <PortfolioTemplate cfg={cfg} />,
});

const cfg: PortfolioConfig = {
  eyebrow: "Editorial solo sessions",
  title: "Vogue-soul portraits that read like a story.",
  intro: "Cinematic, editorial portraiture for the chapters worth remembering. Think magazine-cover light, slow film grain, and a session that feels less like a shoot and more like the opening scene of your own movie.",
  hero,
  heroAlt: "Portrait session in golden hour field",
  details: [
    { label: "Length", value: "1.5 – 2.5 hrs" },
    { label: "Outfits", value: "2 – 3" },
    { label: "Locations", value: "1 – 2" },
    { label: "Delivery", value: "60+ images" },
  ],
  experience: [
    "A short call to talk through what you want this chapter to feel like.",
    "Location and wardrobe guidance built around the light and your story.",
    "An unhurried session — I direct in feelings and movement, never stiff poses.",
    "A hand-edited cinematic gallery delivered in 2–3 weeks.",
  ],
  images: [{ src: g1, alt: "Editorial portrait in architectural light", tall: true }],
};
