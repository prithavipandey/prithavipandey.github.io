import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import profileAsset from "@/assets/profile.jpg.asset.json";

const links = [
  { hash: "work", label: "Work" },
  { hash: "about", label: "About" },
  { hash: "contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all ${
            scrolled ? "glass-strong shadow-card" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative grid place-items-center w-8 h-8 rounded-full bg-gradient-accent shadow-glow">
              <img
                src={profileAsset.url}
                alt="Prithvi Pandey"
                className="absolute inset-[2px] rounded-full object-cover w-[calc(100%-4px)] h-[calc(100%-4px)]"
              />
            </span>
            <span className="text-sm font-medium tracking-tight">Prithvi Pandey</span>
          </Link>
          <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm text-muted-foreground">
            <Link to="/" className="px-2 sm:px-3 py-1.5 rounded-full hover:text-foreground transition-colors">
              Home
            </Link>
            {links.map((l) =>
              onHome ? (
                <a key={l.label} href={`#${l.hash}`} className="px-2 sm:px-3 py-1.5 rounded-full hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} to="/" hash={l.hash} className="px-2 sm:px-3 py-1.5 rounded-full hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              )
            )}
          </div>
          {onHome ? (
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition"
            >
              Let's talk
              <span aria-hidden>→</span>
            </a>
          ) : (
            <Link
              to="/"
              hash="contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition"
            >
              Let's talk
              <span aria-hidden>→</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
