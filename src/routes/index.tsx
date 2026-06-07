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
  GraduationCap,
  Briefcase,
  Trophy,
  Medal,
  BadgeCheck,
  Star,
  Database,
  Sparkle,
  MessageSquare,
  CreditCard,
  Truck,
  Plane,
  Hotel,
  Gift,
  RotateCcw,
  Wand2,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { projects } from "@/data/projects";
import tiktokShopMock from "@/assets/tiktok-shop-mock.jpg";
import llmShoppingMock from "@/assets/llm-shopping-mock.jpg";
import loyaltyTiers from "@/assets/loyalty-tiers.jpg.asset.json";
import loyaltyUpgrade from "@/assets/loyalty-upgrade.jpg.asset.json";
import loyaltyActivation from "@/assets/loyalty-activation.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prithvi Pandey — Senior Product Manager" },
      {
        name: "description",
        content:
          "Senior Product Manager building scalable commerce, platform, marketplace, growth, and AI-enabled products. ~9 years across product, data science, and engineering.",
      },
      { property: "og:title", content: "Prithvi Pandey — Senior Product Manager" },
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
    { v: "$15M+", l: "Annual business impact" },
    { v: "0→1 & Scale", l: "Product building" },
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
          Hi, I'm Prithvi — Product Leader & Builder
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-7 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          An IIT Roorkee alumnus and Senior Product Manager at Victoria's Secret — bridging user needs, business goals, and engineering realities to build commerce and product experiences that genuinely matter.
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
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3"
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

const accentMap: Record<string, { grad: string; tint: string }> = {
  blue: {
    grad: "from-[oklch(0.32_0.10_255)] via-[oklch(0.22_0.08_260)] to-[oklch(0.16_0.05_265)]",
    tint: "oklch(0.70_0.16_250)",
  },
  violet: {
    grad: "from-[oklch(0.30_0.12_300)] via-[oklch(0.20_0.10_310)] to-[oklch(0.15_0.06_315)]",
    tint: "oklch(0.72_0.18_300)",
  },
  cyan: {
    grad: "from-[oklch(0.32_0.08_220)] via-[oklch(0.22_0.07_225)] to-[oklch(0.15_0.04_230)]",
    tint: "oklch(0.78_0.12_215)",
  },
  amber: {
    grad: "from-[oklch(0.32_0.08_60)] via-[oklch(0.22_0.07_45)] to-[oklch(0.15_0.05_35)]",
    tint: "oklch(0.80_0.14_70)",
  },
};

function CompanyMark({ company }: { company: string }) {
  const initials =
    company === "Victoria's Secret" ? "VS" : company === "MakeMyTrip" ? "MMT" : company.slice(0, 2);
  return (
    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-foreground/[0.04] border border-foreground/10">
      <span className="grid place-items-center w-5 h-5 rounded-full bg-gradient-accent text-[9px] font-semibold tracking-tight text-background">
        {initials}
      </span>
      <span className="text-[11px] font-medium text-foreground/85 tracking-tight">{company}</span>
    </span>
  );
}

function VNode({
  icon: Icon,
  label,
  sub,
  emphasis,
  tint,
}: {
  icon: React.ElementType;
  label: string;
  sub?: string;
  emphasis?: boolean;
  tint?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-lg border backdrop-blur ${
        emphasis ? "bg-white/[0.10] border-white/25" : "bg-white/[0.04] border-white/12"
      }`}
    >
      <span
        className="grid place-items-center w-5 h-5 rounded-md border border-white/15 shrink-0"
        style={{ background: emphasis && tint ? tint : "rgba(255,255,255,0.06)" }}
      >
        <Icon className="w-2.5 h-2.5 text-white" />
      </span>
      <div className="leading-tight min-w-0">
        <div className="text-[10px] font-medium text-white/95 tracking-tight truncate">{label}</div>
        {sub && <div className="text-[8px] text-white/55 uppercase tracking-wider">{sub}</div>}
      </div>
    </div>
  );
}

function PimVisual({ tint }: { tint: string }) {
  return (
    <div className="w-full self-center grid grid-cols-[1fr_auto_1.15fr_auto_1fr] items-center gap-1.5">
      <div className="space-y-1.5">
        <VNode icon={Database} label="Vendor Feeds" sub="upstream" />
        <VNode icon={Layers} label="Legacy ERP" sub="upstream" />
        <VNode icon={BarChart3} label="Spreadsheets" sub="upstream" />
      </div>
      <span className="text-white/40 text-xs">→</span>
      <div className="rounded-xl border border-white/20 bg-white/[0.08] p-2 space-y-1.5 backdrop-blur">
        <div className="text-[8px] uppercase tracking-wider text-white/60 px-0.5">PIM Core</div>
        <VNode icon={Layers} label="Schema" emphasis tint={tint} />
        <VNode icon={Wand2} label="LLM Enrich" emphasis tint={tint} />
        <VNode icon={Users} label="Salesforce" emphasis tint={tint} />
      </div>
      <span className="text-white/40 text-xs">→</span>
      <div className="space-y-1.5">
        <VNode icon={Sparkle} label="Site Search" sub="downstream" />
        <VNode icon={ShoppingBag} label="Merchandising" sub="downstream" />
        <VNode icon={TrendingUp} label="Marketing" sub="downstream" />
      </div>
    </div>
  );
}

function ScreenshotStrip({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="w-full h-full self-stretch grid gap-2" style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}>
      {images.map((img) => (
        <div
          key={img.src}
          className="rounded-xl overflow-hidden border border-white/15 bg-white/[0.04] backdrop-blur flex items-center justify-center"
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}

function GlobalVisual({ tint }: { tint: string }) {
  return (
    <div className="w-full self-center space-y-2">
      <div className="grid grid-cols-3 gap-1.5">
        <VNode icon={Globe2} label="Region" />
        <VNode icon={CreditCard} label="Localized Pay" emphasis tint={tint} />
        <VNode icon={BarChart3} label="Currency / Tax" />
      </div>
      <div className="flex justify-center text-white/40 text-xs">↓</div>
      <div className="grid grid-cols-3 gap-1.5">
        <VNode icon={Truck} label="EU DC Routing" emphasis tint={tint} />
        <VNode icon={Layers} label="Vendor APIs" />
        <VNode icon={Rocket} label="Faster Delivery" />
      </div>
    </div>
  );
}



function ProjectVisual({ slug, accent }: { slug: string; accent: string }) {
  const a = accentMap[accent];
  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${a.grad} border border-foreground/10`}>
      <div className="absolute inset-0 grid-bg opacity-[0.18]" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: a.tint }} />
      <div className="absolute inset-0 noise opacity-60" />
      <div className="absolute inset-0 p-5 md:p-6 flex">
        {slug === "ai-pim-platform" && <PimVisual tint={a.tint} />}
        {slug === "emerging-commerce-tiktok-llm" && (
          <ScreenshotStrip
            images={[
              { src: tiktokShopMock, alt: "TikTok Shop storefront mock" },
              { src: llmShoppingMock, alt: "Conversational LLM shopping mock" },
            ]}
          />
        )}
        {slug === "global-commerce-eu" && <GlobalVisual tint={a.tint} />}
        {slug === "loyalty-revamp" && (
          <ScreenshotStrip
            images={[
              { src: loyaltyTiers.url, alt: "Loyalty tier redesign" },
              { src: loyaltyUpgrade.url, alt: "Loyalty benefits and rewards" },
              { src: loyaltyActivation.url, alt: "Loyalty activation journey" },
            ]}
          />
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  );
}

function Work() {
  return (
    <Section id="work" eyebrow="Featured Work" title="Featured Work">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
            className="h-full"
          >
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group relative flex flex-col h-full rounded-[28px] p-6 md:p-7 bg-card/60 border border-foreground/10 hover:border-electric/40 hover:-translate-y-1 transition-all duration-500 shadow-card backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <ProjectVisual slug={p.slug} accent={p.accent} />

              <div className="mt-6 flex items-center gap-2 flex-wrap">
                <CompanyMark company={p.company} />
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gradient-accent/15 text-electric border border-electric/25">
                  {p.tag}
                </span>
              </div>

              <h3 className="mt-4 text-2xl md:text-[1.7rem] font-semibold tracking-tight leading-[1.15] text-foreground group-hover:text-gradient transition">
                {p.title}
              </h3>

              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
                {p.summary}
              </p>

              <ul className="mt-5 space-y-1.5">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-[13px] text-foreground/80">
                    <span className="w-1 h-1 rounded-full bg-electric shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 border-t border-border/60 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Impact</div>
                  <div className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight text-gradient leading-none">
                    {p.impact}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium pl-4 pr-3 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/85 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all">
                  View Project
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
    { c: "64squares", r: "Data Scientist", d: "Aug 2018 — Mar 2021", icon: Briefcase },
    { c: "Capgemini", r: "Associate Consultant", d: "Aug 2017 — Jul 2018", icon: Briefcase },
    { c: "IIT Roorkee", r: "B.Tech, Metallurgical & Materials Engineering", d: "2013 — 2017", icon: GraduationCap },
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
        </div>
        <div className="mt-20 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Prithvi Pandey. Built with care.
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
