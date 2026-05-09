import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    const title = p ? `${p.title} — Prithavi Pandey` : "Case study — Prithavi Pandey";
    const description = p?.summary ?? "Product case study";
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
        <div className="text-sm text-muted-foreground">Case study not found</div>
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

function CaseStudy() {
  const p = Route.useLoaderData() as Project;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

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
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-gradient">
              {p.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {p.summary}
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {p.detail.metrics.map((m) => (
                <div key={m.label} className="glass rounded-2xl p-4">
                  <div className="text-xl md:text-2xl font-semibold text-gradient">{m.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 mt-16">
          {/* Architecture / flow */}
          <div className="glass rounded-3xl p-6 md:p-10 shadow-card">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
              Architecture / Flow
            </div>
            <div className="flex flex-col gap-3">
              {p.detail.flow.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="grid place-items-center w-8 h-8 rounded-full bg-gradient-accent/15 border border-electric/30 text-xs text-electric tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 px-4 py-3 rounded-xl bg-card/50 border border-border/60 text-sm md:text-base">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Block label="Problem">{p.detail.problem}</Block>
          <Block label="Why it mattered">{p.detail.why}</Block>
          <Block label="Product strategy">{p.detail.strategy}</Block>
          <Block label="My role">{p.detail.role}</Block>
          <Block label="Key decisions">
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
          <Block label="Technical complexity">{p.detail.technical}</Block>
          <Block label="Tradeoffs">
            <ul className="space-y-3">
              {p.detail.tradeoffs.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Collaboration">{p.detail.collaboration}</Block>
          <Block label="Impact">
            <div className="grid sm:grid-cols-2 gap-3">
              {p.detail.metrics.map((m) => (
                <div key={m.label} className="glass rounded-xl p-4">
                  <div className="text-lg font-semibold text-gradient">{m.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </Block>
          <Block label="Product thinking">
            <p className="text-xl md:text-2xl font-medium text-gradient leading-snug">
              "{p.detail.thinking}"
            </p>
          </Block>
          <Block label="Outcome">{p.detail.outcome}</Block>

          {/* Next */}
          <div className="mt-20 pt-10 border-t border-border/60">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Next case study</div>
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