import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  ShoppingBag,
  Globe2,
  TrendingUp,
  Cpu,
  BarChart3,
  Users,
  Compass,
  Scale,
  Hammer,
  FlaskConical,
  Rocket,
  Award,
  Mail,
  Linkedin,
  Download,
  GraduationCap,
  Briefcase,
  Trophy,
  Medal,
  BadgeCheck,
  Star,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prithavi Pandey — Senior Product Manager" },
      {
        name: "description",
        content:
          "Senior Product Manager building scalable commerce, platform, marketplace, growth, and AI-enabled products. ~9 years across product, data science, and engineering.",
      },
      { property: "og:title", content: "Prithavi Pandey — Senior Product Manager" },
      {
        property: "og:description",
        content:
          "Building scalable commerce & platform products. Senior PM with experience in commerce, platforms, marketplaces, growth, international expansion, and AI.",
      },
    ],
  }),
  component: Index,
});

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-4 py-16 md:py-24 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-10 md:mb-12 max-w-3xl"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase text-muted-foreground glass">
              <span className="w-1.5 h-1.5 rounded-full bg-electric" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-gradient leading-[1.05]">
              {title}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const cards = [
    { v: "9+", l: "Years experience" },
    { v: "5+", l: "Years in product" },
    { v: "$25M+", l: "Annual business impact" },
    { v: "0→1", l: "Product building" },
    { v: "Global", l: "Commerce systems" },
    { v: "Platform", l: "Growth & marketplace" },
  ];

  return (
    <div ref={ref} className="relative overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent_75%)]" />
      <div className="absolute -z-10 left-1/2 -translate-x-1/2 top-24 w-[60rem] h-[60rem] rounded-full bg-gradient-accent opacity-[0.07] blur-3xl" />

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-electric opacity-60 animate-ping" />
            <span className="relative rounded-full h-2 w-2 bg-electric" />
          </span>
          Senior Product Manager · Victoria's Secret
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: "easeOut" }}
          className="mt-6 text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.03em] leading-[1.02] text-gradient max-w-5xl"
        >
          Hi, I'm Prithavi — I build products that scale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-7 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Senior Product Manager with ~9 years across product, data science, and engineering — building scalable
          commerce, platform, and customer experiences that drive measurable business impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition shadow-glow"
          >
            View my work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-foreground hover:bg-card transition"
          >
            Let's connect
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } } }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {cards.map((c) => (
            <motion.div
              key={c.l}
              variants={fadeUp}
              className="relative rounded-2xl p-5 bg-card/70 border border-foreground/10 hover:border-electric/40 hover:-translate-y-0.5 hover:bg-card transition-all duration-300 shadow-card group overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl md:text-[2rem] font-semibold tracking-[-0.02em] text-foreground leading-none">
                {c.v}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                {c.l}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-16 flex items-center gap-3 text-sm text-muted-foreground"
        >
          <Sparkles className="w-4 h-4 text-electric" />
          I work at the intersection of Product, Technology, Data, and Business.
        </motion.div>
      </div>
    </div>
  );
}

function About() {
  const caps = [
    { i: Layers, t: "Platform Product Management" },
    { i: ShoppingBag, t: "Commerce & Marketplace Systems" },
    { i: TrendingUp, t: "Growth & Retention" },
    { i: Rocket, t: "0→1 Product Building" },
    { i: Globe2, t: "International Expansion" },
    { i: Cpu, t: "AI-enabled Experiences" },
    { i: BarChart3, t: "Data-driven Decisioning" },
    { i: Users, t: "Cross-functional Leadership" },
  ];
  return (
    <Section id="about" eyebrow="About" title={<>From Data Science<br className="hidden md:block" /> to Product Leadership</>}>
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I started my career in engineering and data science before transitioning into product management. That technical
            foundation helps me work deeply across platform architecture, experimentation, data systems, customer experiences,
            and business strategy.
          </p>
          <p>
            Over the last 5+ years in product, I've built and scaled products across commerce, marketplaces, customer growth,
            platform systems, international expansion, and emerging technology experiences.
          </p>
          <p>
            I enjoy solving ambiguous, high-impact problems by aligning customer needs, technology, and business goals.
          </p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {caps.map(({ i: Icon, t }) => (
            <div
              key={t}
              className="glass rounded-2xl p-4 hover:border-electric/40 hover:-translate-y-0.5 transition"
            >
              <Icon className="w-5 h-5 text-electric" />
              <div className="mt-3 text-sm font-medium leading-snug">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    { i: Compass, t: "Discover", d: "Customer pain points, operational inefficiencies, market shifts, and business opportunities — through data, research, and experimentation." },
    { i: Scale, t: "Prioritize", d: "Balance customer value, business impact, scalability, feasibility, and execution complexity." },
    { i: Hammer, t: "Build", d: "Partner deeply across engineering, design, business, operations, analytics, and leadership." },
    { i: FlaskConical, t: "Experiment", d: "Validate ideas through experimentation, iteration, behavioral insights, and measurable outcomes." },
    { i: Rocket, t: "Scale", d: "Turn successful initiatives into scalable systems, automation, and long-term product leverage." },
  ];
  return (
    <Section eyebrow="Process" title="How I Build Products">
      <div className="grid md:grid-cols-5 gap-3 relative">
        <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {steps.map((s, idx) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="relative glass rounded-2xl p-5 hover:border-electric/40 transition"
          >
            <div className="flex items-center gap-2">
              <div className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-accent/20 border border-foreground/10">
                <s.i className="w-4 h-4 text-electric" />
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">0{idx + 1}</span>
            </div>
            <div className="mt-4 text-base font-semibold">{s.t}</div>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const accentMap: Record<string, string> = {
  blue: "from-[oklch(0.55_0.18_255)] to-[oklch(0.40_0.15_270)]",
  violet: "from-[oklch(0.55_0.20_295)] to-[oklch(0.38_0.16_310)]",
  cyan: "from-[oklch(0.65_0.13_220)] to-[oklch(0.40_0.14_250)]",
  amber: "from-[oklch(0.70_0.14_60)] to-[oklch(0.45_0.16_30)]",
};

function ProjectVisual({ slug, accent }: { slug: string; accent: string }) {
  const grad = accentMap[accent];
  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${grad}`}>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 noise" />
      <div className="absolute inset-0 grid place-items-center p-8">
        {slug === "ai-pim-platform" && <PimVisual />}
        {slug === "emerging-commerce-tiktok-llm" && <TikTokVisual />}
        {slug === "global-commerce-eu" && <GlobalVisual />}
        {slug === "loyalty-revamp" && <LoyaltyVisual />}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}

function PimVisual() {
  const nodes = ["Vendor", "ERP", "Feeds", "PIM Core", "LLM Enrich", "Search", "Marketing", "Site"];
  return (
    <div className="relative w-full max-w-md grid grid-cols-3 gap-2 text-[10px] uppercase tracking-wider">
      {nodes.map((n, i) => (
        <div
          key={n}
          className={`px-2 py-3 rounded-md border border-white/20 bg-white/5 backdrop-blur text-white/90 text-center ${
            i === 3 ? "col-span-3 bg-white/15 font-semibold py-4" : ""
          }`}
        >
          {n}
        </div>
      ))}
    </div>
  );
}
function TikTokVisual() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-md text-[11px] text-white/90">
      <div className="rounded-xl border border-white/20 bg-white/5 p-3 space-y-1.5">
        <div className="text-white/60 text-[9px] uppercase tracking-wider">TikTok Shop</div>
        <div>Discovery</div><div>Browse</div><div>Click</div><div>Purchase</div>
      </div>
      <div className="rounded-xl border border-white/20 bg-white/5 p-3 space-y-1.5">
        <div className="text-white/60 text-[9px] uppercase tracking-wider">Conversational</div>
        <div className="text-white/80">"travel-friendly bras under $50"</div>
        <div>→ Discovery</div><div>→ Recs</div><div>→ Compare</div>
      </div>
    </div>
  );
}
function GlobalVisual() {
  const f = ["Region", "Localized Checkout", "EU DC", "Vendors", "Delivery"];
  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-md text-[10px] uppercase tracking-wider text-white/90">
      {f.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <div className="px-2.5 py-2 rounded-md border border-white/20 bg-white/5">{s}</div>
          {i < f.length - 1 && <span className="text-white/50">→</span>}
        </div>
      ))}
    </div>
  );
}
function LoyaltyVisual() {
  const j = ["Browse", "Book", "Reward", "Re-engage"];
  return (
    <div className="w-full max-w-md text-[10px] uppercase tracking-wider text-white/90 space-y-3">
      <div className="flex justify-between">
        {j.map((s) => (
          <div key={s} className="px-2.5 py-2 rounded-md border border-white/20 bg-white/5">{s}</div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-1.5 text-center text-white/80">
        {["Cashback", "Flights", "Hotels", "Cabs"].map((b) => (
          <div key={b} className="py-2 rounded-md border border-white/15 bg-white/5">{b}</div>
        ))}
      </div>
    </div>
  );
}

function Work() {
  return (
    <Section id="work" eyebrow="Featured Work" title="Featured Work">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
          >
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group block glass rounded-3xl p-5 hover:border-electric/40 hover:-translate-y-1 transition-all duration-500 shadow-card"
            >
              <ProjectVisual slug={p.slug} accent={p.accent} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{p.company}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span className="text-electric">{p.tag}</span>
                  </div>
                  <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight leading-snug group-hover:text-gradient transition">
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-12 transition mt-1.5 shrink-0" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
              <ul className="mt-4 space-y-1.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-electric shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-border/60 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Impact</div>
                  <div className="text-sm font-medium text-foreground mt-0.5">{p.impact}</div>
                </div>
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-foreground/5 group-hover:bg-foreground group-hover:text-background transition">
                  View project →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Timeline() {
  const items = [
    { c: "Victoria's Secret", r: "Senior Product Manager", d: "Apr 2025 — Present", icon: Briefcase, highlight: false },
    { c: "Victoria's Secret", r: "Product Manager", d: "Jul 2023 — Mar 2025", icon: Briefcase },
    { c: "MakeMyTrip", r: "Associate Product Manager — Growth", d: "Apr 2021 — Jul 2023", icon: Briefcase },
    { c: "64 Squares", r: "Data Scientist", d: "Aug 2018 — Mar 2021", icon: Briefcase },
    { c: "Capgemini", r: "Associate Consultant", d: "Aug 2017 — Jul 2018", icon: Briefcase },
    { c: "IIT Roorkee", r: "B.Tech, Metallurgical & Materials Engineering", d: "2013 — 2017", icon: GraduationCap, highlight: true },
  ];
  return (
    <Section eyebrow="Timeline" title="Career Path">
      <ol className="relative border-l border-border/70 ml-2">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="pl-8 pb-10 last:pb-0 relative"
          >
            <span className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
              it.highlight ? "bg-gradient-accent border-electric shadow-glow" : "bg-background border-border"
            }`} />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">{it.c}</h3>
              {it.highlight && (
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-accent/20 text-electric border border-electric/30">
                  IIT Roorkee Alumni
                </span>
              )}
            </div>
            <div className="text-sm text-foreground/80 mt-0.5">{it.r}</div>
            <div className="text-xs text-muted-foreground mt-1 tabular-nums">{it.d}</div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

function Recognition() {
  const items = [
    { t: "Employee of the Quarter", o: "Victoria's Secret", y: "2024", i: Trophy },
    { t: "Employee of the Month", o: "MakeMyTrip", y: "2022", i: Medal },
    { t: "Employee of the Quarter", o: "MakeMyTrip", y: "2022", i: Trophy },
    { t: "National Runner-up", o: "EXL Analytics Competition", y: "2016", i: Star },
    { t: "Oracle Certified Associate", o: "Oracle", y: "2018", i: BadgeCheck },
  ];
  return (
    <Section eyebrow="Recognition" title="Recognition">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ t, o, y, i: Icon }) => (
          <div
            key={`${t}-${o}-${y}`}
            className="group relative rounded-2xl p-6 bg-card/70 border border-foreground/10 hover:border-electric/40 hover:-translate-y-0.5 transition-all duration-300 shadow-card overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start justify-between gap-3">
              <div className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-accent/15 border border-electric/20">
                <Icon className="w-5 h-5 text-electric" />
              </div>
              <span className="text-[11px] tabular-nums uppercase tracking-wider text-muted-foreground">{y}</span>
            </div>
            <div className="mt-5 text-base font-semibold leading-snug">{t}</div>
            <div className="mt-1 text-sm text-muted-foreground">{o}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-radial opacity-70" />
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent_75%)]" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient"
        >
          Let's Build Great Products
        </motion.h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Always open to conversations around product strategy, platform systems, commerce, growth, and meaningful opportunities.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/prithavipandey/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition shadow-glow"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="mailto:prithvi20261@outlook.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass hover:bg-card transition"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass hover:bg-card transition"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
        <div className="mt-20 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Prithavi Pandey. Built with care.
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen dark">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Process />
        <Work />
        <Timeline />
        <Recognition />
        <Contact />
      </main>
    </div>
  );
}
