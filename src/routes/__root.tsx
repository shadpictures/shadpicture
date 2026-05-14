import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader, SiteFooter } from "@/components/SiteLayout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Lost in the darkroom</p>
        <h1 className="text-7xl font-display mt-3">404</h1>
        <p className="mt-3 text-muted-foreground">This frame didn't develop.</p>
        <Link
          to="/"
          className="mt-6 inline-block text-xs uppercase tracking-[0.25em] border border-foreground/40 px-5 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="font-display text-2xl">Something went sideways.</h1>
        <p className="mt-2 text-muted-foreground text-sm">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 text-xs uppercase tracking-[0.25em] border border-foreground/40 px-5 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "shad.pictures — Cinematic vintage photography" },
      { name: "description", content: "Dreamy, romantic vintage 90s style photography for seniors, couples, families, and intimate weddings. Memories caught in time, not posed." },
      { property: "og:title", content: "Shad Pictures — Cinematic Photography" },
      { property: "og:description", content: "Nashville-based photographer. Weddings, couples, portraits. A picture should make you feel something." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://shadpictures.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shad Pictures — Cinematic Photography" },
      { name: "twitter:description", content: "Nashville-based photographer. Weddings, couples, portraits. A picture should make you feel something." },
      { name: "twitter:image", content: "https://shadpictures.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Italiana&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&family=JetBrains+Mono:wght@400&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
