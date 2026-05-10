import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { hash: "#work", label: "Work" },
  { hash: "#about", label: "About" },
  { hash: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
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
              <span className="absolute inset-[2px] rounded-full bg-background grid place-items-center text-xs font-semibold text-gradient">PP</span>
            </span>
            <span className="text-sm font-medium tracking-tight">Prithavi Pandey</span>
          </Link>
          <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
            {links.map((l) =>
              l.to ? (
                <Link key={l.label} to={l.to} className="px-3 py-1.5 rounded-full hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.hash} className="px-3 py-1.5 rounded-full hover:text-foreground transition-colors">
                  {l.label}
                </a>
              )
            )}
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition"
          >
            Let's talk
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
