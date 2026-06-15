import { createFileRoute } from "@tanstack/react-router";
import { PortfolioTemplate, type PortfolioConfig } from "@/components/PortfolioTemplate";
import hero from "@/assets/portfolio-couples.jpg";
import g1 from "@/assets/portfolio-couples-1.jpg";

export const Route = createFileRoute("/portfolio/couples")({
  head: () => ({
    meta: [
      { title: "Couples & Engagements — shad.pictures" },
      { name: "description", content: "Cinematic, dreamy couples and engagement sessions in warm vintage 90s film style." },
      { property: "og:title", content: "Couples & Engagements — shad.pictures" },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: () => <PortfolioTemplate cfg={cfg} />,
});

const cfg: PortfolioConfig = {
  eyebrow: "Couples & engagements",
  title: "A love story, shot like a film.",
  intro: "Cinematic, story-driven couples sessions with the soul of an editorial spread. Quiet glances, hands held without thinking, the slow walk back to the car at dusk — frames you'll feel like a scene you lived.",
  hero,
  heroAlt: "Couple walking through wildflower field at sunset",
  details: [
    { label: "Length", value: "2 hrs" },
    { label: "Outfits", value: "1 – 2" },
    { label: "Locations", value: "1" },
    { label: "Delivery", value: "75+ images" },
  ],
  experience: [
    "A vision call to talk about your relationship — not just the shoot.",
    "Wardrobe and location guidance built around your story.",
    "A relaxed session — I direct in feelings, not stiff poses.",
    "Cinematic, hand-toned gallery delivered in 2 weeks.",
  ],
  images: [{ src: g1, alt: "Couple laughing under lamplight at dusk", tall: true }],
};
