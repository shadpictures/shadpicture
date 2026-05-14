import { Link, Outlet } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Inquire" },
  { to: "/portfolio/couples", label: "Couples" },
  { to: "/portfolio/weddings", label: "Weddings & Elopements" },
  { to: "/portfolio/portraits", label: "Solo" },
  { to: "/investment", label: "Investment / FAQ" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/90 border-b border-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 pb-2 flex flex-col items-center gap-3">
        <Link
          to="/"
          className="font-display uppercase text-center leading-none tracking-[0.04em] text-[clamp(2.5rem,9vw,6rem)]"
        >
          SHADPICTURES
        </Link>
        <p className="font-display italic text-sm md:text-base text-muted-foreground text-center">
          Cinematic stories · Editorial portraits · Pictures that feel.
        </p>
      </div>
      <div className="border-t border-foreground/80">
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-11 flex items-center justify-center gap-8 text-[11px] uppercase tracking-[0.28em] font-medium overflow-x-auto">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/70 hover:text-foreground whitespace-nowrap transition-colors"
              activeProps={{ className: "text-foreground border-b border-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 lg:grid-cols-3">
        <div>
          <div className="font-display uppercase text-4xl tracking-[0.04em]">shadpictures</div>
          <p className="mt-4 font-display italic text-lg">
            Cinematic stories · Editorial portraits · Pictures that feel.
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Cinematic photography · Nashville, always traveling.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow mb-2">Studio</p>
          <p>Booking now — limited dates each month.</p>
          <p className="mt-4">© {new Date().getFullYear()} shad.pictures</p>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
