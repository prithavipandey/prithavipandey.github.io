import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  TrendingUp,
  CreditCard,
  Globe2,
  Truck,
  Warehouse,
  MapPin,
  Package,
  Sparkles,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { getProject, projects, type Project, type TrackBlock } from "@/data/projects";
import tiktokShopMock from "@/assets/tiktok-shop-mock.jpg";
import llmShoppingMock from "@/assets/llm-shopping-mock.jpg";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    const title = p ? `${p.title} — Prithavi Pandey` : "Project — Prithavi Pandey";
    const description = p?.summary ?? "Product project";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  loader: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) throw notFound();
    return p;
  },
  component: CaseStudy,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-center px-4 dark">
      <div>
        <div className="text-sm text-muted-foreground">Project not found</div>
        <Link to="/" className="mt-4 inline-flex text-electric">← Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center text-center px-4 dark">
      <div>
        <div className="text-sm text-destructive">{error.message}</div>
        <Link to="/" className="mt-4 inline-flex text-electric">← Back home</Link>
      </div>
    </div>
  ),
});

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-border/60"
    >
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="text-foreground/90 leading-relaxed text-base md:text-[1.05rem] space-y-4">
        {children}
      </div>
    </motion.section>
  );
}

function ExperienceCard({
  label,
  title,
  image,
  alt,
  copy,
  aspect,
}: {
  label: string;
  title: string;
  image: string;
  alt: string;
  copy: string;
  aspect: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden bg-card/60 border border-foreground/10 hover:border-electric/30 transition"
    >
      <div className={`${aspect} w-full overflow-hidden bg-foreground/5`}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="text-[10px] uppercase tracking-[0.22em] text-electric/90">{label}</div>
        <div className="mt-1 text-lg md:text-xl font-semibold tracking-tight">{title}</div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{copy}</p>
      </div>
    </motion.div>
  );
}

function CaseStudy() {
  const p = Route.useLoaderData() as Project;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const headline = p.detail.metrics[0];
  const restMetrics = p.detail.metrics.slice(1);
  const tracks = p.detail.tracks;
  const isEmerging = p.slug === "emerging-commerce-tiktok-llm";

  return (
    <div className="min-h-screen dark relative">
      <SiteNav />
      <article className="pt-36 pb-24">
        {/* Hero */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-hero-radial opacity-80" />
          <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent_75%)]" />
          <div className="mx-auto max-w-4xl px-4">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to work
            </Link>
            <div className="mt-8 flex items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full glass text-muted-foreground">{p.company}</span>
              <span className="px-3 py-1 rounded-full bg-gradient-accent/15 text-electric border border-electric/30">
                {p.tag}
              </span>
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.75rem] font-semibold tracking-[-0.02em] leading-[1.15] text-gradient pb-2 [overflow-wrap:anywhere]">
              {p.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {p.summary}
            </p>

            {/* Premium impact strip — hidden for dual-track projects (e.g. International Expansion) */}
            {!tracks && (
            <div className="mt-12 grid md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-3">
              <div className="relative overflow-hidden rounded-2xl p-5 md:p-6 border border-electric/30 bg-gradient-to-br from-electric/[0.12] via-card/60 to-transparent shadow-glow">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent" />
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-electric/90">
                  <TrendingUp className="w-3.5 h-3.5" /> Business impact
                </div>
                <div className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-gradient leading-none pb-1">
                  {headline.value}
                </div>
                <div className="mt-2 text-xs md:text-sm text-foreground/75">{headline.label}</div>
              </div>
              {restMetrics.map((m) => (
                <div
                  key={m.label}
                  className="relative rounded-2xl p-5 bg-card/60 border border-foreground/10 hover:border-electric/30 transition backdrop-blur"
                >
                  <div className="text-2xl md:text-3xl font-semibold tracking-[-0.01em] text-foreground leading-none pb-1">
                    {m.value}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 mt-16">
          {isEmerging && tracks ? (
            <section>
              <div className="flex items-end justify-between mb-5">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-electric/90">Initiative Metrics</div>
                  <div className="mt-1 text-base md:text-lg font-medium text-foreground/90">
                    Two emerging commerce initiatives
                  </div>
                </div>
              </div>
              <DualInitiativeCards tracks={tracks} />
            </section>
          ) : tracks ? (
            <DualTrackVisual tracks={tracks} />
          ) : (
            <ArchitectureFlow steps={p.detail.flow} />
          )}

          <Block label="Problem">{p.detail.problem}</Block>
          <Block label="Why it mattered">{p.detail.why}</Block>
          <Block label="Product Strategy">{p.detail.strategy}</Block>
          <Block label="My role">{p.detail.role}</Block>
          <Block label="Key Product Decisions">
            <ul className="space-y-3">
              {p.detail.decisions.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-electric mt-1 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Execution">{p.detail.execution}</Block>
          {isEmerging && (
            <Block label="Experience in Action">
              <p className="text-sm text-muted-foreground -mt-1">
                How customers discovered and engaged with products across emerging commerce channels.
              </p>
              <div className="grid md:grid-cols-2 gap-5 pt-2">
                <ExperienceCard
                  label="Marketplace Commerce"
                  title="TikTok Marketplace Integration"
                  image={tiktokShopMock}
                  alt="Victoria's Secret storefront within TikTok Shop"
                  copy="Enabled catalog-driven product discovery and shopping experiences through TikTok Shop using centralized product syndication."
                  aspect="aspect-[3/4]"
                />
                <ExperienceCard
                  label="Conversational Commerce"
                  title="LLM-Powered Shopping Experience"
                  image={llmShoppingMock}
                  alt="ChatGPT conversation surfacing Victoria's Secret loungewear recommendations"
                  copy="Enabled conversational product discovery across OpenAI and Google UCP powered by structured product catalog data."
                  aspect="aspect-[4/3]"
                />
              </div>
            </Block>
          )}
          <Block label="Technical Complexity">{p.detail.technical}</Block>
          <Block label="Tradeoffs & Challenges">
            <ul className="space-y-3">
              {p.detail.tradeoffs.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Cross-Functional Collaboration">{p.detail.collaboration}</Block>
          {tracks && !isEmerging ? (
            <Block label="Initiative Outcomes">
              <DualInitiativeCards tracks={tracks} />
            </Block>
          ) : !tracks ? (
            <Block label="Impact">
              <div className="grid sm:grid-cols-2 gap-3">
                {p.detail.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl p-4 bg-card/60 border border-foreground/10">
                    <div className="text-xl font-semibold tracking-tight text-gradient leading-none pb-1">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-2">{m.label}</div>
                  </div>
                ))}
              </div>
            </Block>
          ) : null}
          {p.detail.thinking && !tracks && (
            <Block label="Product Thinking">
              <p className="text-xl md:text-2xl font-medium text-gradient leading-snug">
                "{p.detail.thinking}"
              </p>
            </Block>
          )}
          <Block label="Outcome">{p.detail.outcome}</Block>

          {/* Next */}
          <div className="mt-20 pt-10 border-t border-border/60">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Next project</div>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group mt-4 flex items-center justify-between gap-4 glass rounded-2xl p-6 hover:border-electric/40 transition"
            >
              <div>
                <div className="text-xs text-muted-foreground">{next.company} · {next.tag}</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight group-hover:text-gradient transition">
                  {next.title}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="relative rounded-3xl p-6 md:p-10 bg-gradient-to-br from-card/70 via-card/40 to-card/20 border border-foreground/10 shadow-card overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.10] pointer-events-none" />
      <div className="absolute -top-32 -right-20 w-72 h-72 rounded-full bg-electric/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-violet/10 blur-3xl pointer-events-none" />

      <div className="relative flex items-center justify-between mb-8">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-electric/90">Platform Architecture</div>
          <div className="mt-1 text-base md:text-lg font-medium text-foreground/90">
            End-to-end product data flow
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
          live data
        </div>
      </div>

      <div className="relative flex flex-col items-stretch gap-0">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          const isCore = /merchant workspace|product data layer/i.test(step);
          return (
            <div key={step} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-2xl px-5 py-4 md:px-6 md:py-5 border backdrop-blur-xl flex items-center justify-between gap-4 ${
                  isCore
                    ? "bg-gradient-to-r from-electric/15 via-card/60 to-violet/10 border-electric/40 shadow-glow"
                    : "bg-card/60 border-foreground/10"
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`grid place-items-center w-9 h-9 rounded-xl border tabular-nums text-[11px] font-medium shrink-0 ${
                      isCore
                        ? "bg-electric/20 border-electric/40 text-electric"
                        : "bg-foreground/[0.04] border-foreground/15 text-muted-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <div className="text-base md:text-lg font-medium leading-tight">{step}</div>
                    {isCore && (
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-electric/80">
                        Core platform layer
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/70" />
                  Stage {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>

              {!isLast && (
                <div className="relative flex justify-center py-2" aria-hidden>
                  <div className="relative h-8 w-px bg-gradient-to-b from-electric/50 via-electric/30 to-transparent">
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1.5 h-1.5 rotate-45 border-r border-b border-electric/60" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function trackIcon(label: string) {
  if (/checkout/i.test(label)) return CreditCard;
  if (/fulfillment|eu/i.test(label)) return Truck;
  return Globe2;
}

function flowStepIcon(step: string, isCheckout: boolean) {
  if (/region|customer/i.test(step)) return MapPin;
  if (/localized checkout|payments|currency/i.test(step)) return Globe2;
  if (/checkout provider/i.test(step)) return CreditCard;
  if (/improved checkout/i.test(step)) return Sparkles;
  if (/inventory/i.test(step)) return Package;
  if (/distribution center/i.test(step)) return Warehouse;
  if (/delivery/i.test(step)) return Truck;
  return isCheckout ? CreditCard : Truck;
}

function TrackColumn({
  track,
  accent,
  side,
}: {
  track: TrackBlock;
  accent: "electric" | "violet";
  side: "left" | "right";
}) {
  const Icon = trackIcon(track.label);
  const isCheckout = side === "left";
  const ring = accent === "electric" ? "border-electric/30" : "border-violet/30";
  const tag = accent === "electric" ? "text-electric bg-electric/10 border-electric/30" : "text-violet bg-violet/10 border-violet/30";
  const line = accent === "electric" ? "from-electric/60 via-electric/30 to-transparent" : "from-violet/60 via-violet/30 to-transparent";

  return (
    <div className={`relative rounded-2xl p-5 md:p-6 bg-card/60 border ${ring} backdrop-blur-xl`}>
      <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-[10px] uppercase tracking-[0.18em] ${tag}`}>
        <Icon className="w-3 h-3" /> {track.label}
      </div>
      <div className="mt-4 text-base md:text-lg font-medium text-foreground/90 leading-tight">
        {track.title}
      </div>

      <div className="mt-5 flex flex-col gap-0">
        {track.flow.map((step, i) => {
          const StepIcon = flowStepIcon(step, isCheckout);
          const isLast = i === track.flow.length - 1;
          return (
            <div key={step}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-foreground/[0.03] border border-foreground/10"
              >
                <span className={`grid place-items-center w-7 h-7 rounded-lg border ${accent === "electric" ? "border-electric/30 bg-electric/10 text-electric" : "border-violet/30 bg-violet/10 text-violet"}`}>
                  <StepIcon className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm text-foreground/90 leading-tight">{step}</span>
              </motion.div>
              {!isLast && (
                <div className="flex justify-center" aria-hidden>
                  <div className={`h-5 w-px bg-gradient-to-b ${line}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DualTrackVisual({ tracks }: { tracks: NonNullable<Project["detail"]["tracks"]> }) {
  return (
    <div className="relative rounded-3xl p-6 md:p-10 bg-gradient-to-br from-card/70 via-card/40 to-card/20 border border-foreground/10 shadow-card overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />
      <div className="absolute -top-32 -left-20 w-72 h-72 rounded-full bg-electric/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-72 h-72 rounded-full bg-violet/10 blur-3xl pointer-events-none" />

      <div className="relative flex items-end justify-between mb-6">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-electric/90">Dual-Track Program</div>
          <div className="mt-1 text-base md:text-lg font-medium text-foreground/90">
            Two parallel workstreams, one international outcome
          </div>
        </div>
      </div>

      <div className="relative grid md:grid-cols-2 gap-5">
        <TrackColumn track={tracks.left} accent="electric" side="left" />
        <TrackColumn track={tracks.right} accent="violet" side="right" />
      </div>

      {/* Convergence */}
      <div className="relative mt-6 flex flex-col items-center">
        <div className="hidden md:flex w-full items-center justify-center gap-0 -mt-1 mb-1" aria-hidden>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-electric/40 to-foreground/20" />
          <div className="w-2 h-2 mx-2 rounded-full bg-foreground/40" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-violet/40 to-foreground/20" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-electric/15 via-card/70 to-violet/15 border border-foreground/15 shadow-glow"
        >
          <Sparkles className="w-4 h-4 text-electric" />
          <span className="text-sm md:text-base font-medium text-foreground/95">
            {tracks.convergence}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

function DualInitiativeCards({ tracks }: { tracks: NonNullable<Project["detail"]["tracks"]> }) {
  const cols: { track: TrackBlock; accent: "electric" | "violet" }[] = [
    { track: tracks.left, accent: "electric" },
    { track: tracks.right, accent: "violet" },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cols.map(({ track, accent }) => {
        const Icon = trackIcon(track.label);
        const ring = accent === "electric" ? "border-electric/30" : "border-violet/30";
        const tag = accent === "electric" ? "text-electric bg-electric/10 border-electric/30" : "text-violet bg-violet/10 border-violet/30";
        const headline = track.metrics[0];
        const rest = track.metrics.slice(1);
        return (
          <div
            key={track.label}
            className={`relative rounded-2xl p-6 bg-card/60 border ${ring} backdrop-blur-xl overflow-hidden`}
          >
            <div className={`absolute inset-x-0 -top-px h-px ${accent === "electric" ? "bg-gradient-to-r from-transparent via-electric/60 to-transparent" : "bg-gradient-to-r from-transparent via-violet/60 to-transparent"}`} />
            <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-[10px] uppercase tracking-[0.18em] ${tag}`}>
              <Icon className="w-3 h-3" /> {track.label}
            </div>
            <div className="mt-5">
              <div className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-gradient leading-none pb-1">
                {headline.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-foreground/75">{headline.label}</div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-2">
              {rest.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-3 rounded-xl px-3 py-2.5 bg-foreground/[0.03] border border-foreground/10">
                  <span className="text-sm md:text-base font-medium text-foreground/95">{m.value}</span>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground text-right">{m.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{track.description}</p>
          </div>
        );
      })}
    </div>
  );
}
