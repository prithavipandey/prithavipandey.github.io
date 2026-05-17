export type Project = {
  slug: string;
  title: string;
  company: string;
  tag: string;
  summary: string;
  highlights: string[];
  impact: string;
  accent: "blue" | "violet" | "cyan" | "amber";
  detail: {
    problem: string;
    why: string;
    strategy: string;
    role: string;
    decisions: string[];
    execution: string;
    technical: string;
    tradeoffs: string[];
    collaboration: string;
    metrics: { label: string; value: string }[];
    thinking?: string;
    outcome: string;
    flow: string[];
    tracks?: {
      left: TrackBlock;
      right: TrackBlock;
      convergence: string;
    };
  };
};

export type TrackBlock = {
  label: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  flow: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-pim-platform",
    title: "AI-Powered Product Information Management (PIM) Platform",
    company: "Victoria's Secret",
    tag: "0→1 Platform Product",
    summary:
      "Built a centralized, governed product data platform with AI-assisted enrichment to replace fragmented upstream systems and scale catalog operations.",
    highlights: [
      "Centralized product data foundation",
      "Vertex AI + LLM-assisted enrichment",
      "Salesforce-based merchant workspace",
    ],
    impact: "~$4M annual business uplift",
    accent: "blue",
    detail: {
      problem:
        "Product information existed across multiple fragmented systems, creating inconsistent product data, heavy manual effort, and slower operational workflows. Teams relied on disconnected upstream feeds, spreadsheets, and manual interventions, which impacted product quality, discoverability, and speed to market. As the catalog scaled globally, maintaining consistent and enriched product information across downstream systems became increasingly difficult.",
      why: "In ecommerce, high-quality product data directly influences search, browse, recommendations, merchandising, and customer conversion. Poor product data quality creates downstream inefficiencies across merchandising, site experience, marketing, and operations — while also impacting customer discoverability. The opportunity was to create a scalable product data foundation that could improve consistency, reduce operational effort, and support future commerce experiences.",
      strategy:
        "Build a centralized PIM platform that serves as a governed source of truth for product data, with three goals: centralize fragmented product information, improve enrichment quality through AI-assisted workflows, and enable merchant teams with self-serve tooling while maintaining governance. The platform leveraged Google Vertex AI and LLM-powered enrichment, supported by a human-in-the-loop workflow for quality control. A Salesforce-based merchant workspace enabled business users to review, edit, and govern product information before syndicating it downstream.",
      role:
        "Owned product strategy and execution for the 0→1 PIM initiative. Worked cross-functionally with engineering, data science, merchandising, and business stakeholders to define platform requirements, prioritize capabilities, and drive rollout — including defining product vision and roadmap, prioritizing platform capabilities, translating merchant pain points into workflows, aligning technical and business stakeholders, and driving adoption.",
      decisions: [
        "Treat PIM as a platform capability, not just an operational tool — designed to serve commerce, search, merchandising, and marketing as downstream consumers.",
        "Human-assisted AI, not full automation — LLM enrichment accelerated attribute extraction while preserving merchant oversight for accuracy and governance.",
        "Meet users where they already worked — Salesforce as the merchant-facing layer reduced change management overhead and improved adoption.",
        "Design for scale and extensibility — built to support future categories, additional enrichment workflows, and downstream integrations.",
      ],
      execution:
        "Phased rollout to reduce implementation risk while demonstrating early business value. Phase 1: centralized ingestion and transformation of upstream product data. Phase 2: AI-powered enrichment and attribute extraction workflows. Phase 3: merchant self-serve review and governance through Salesforce. Phase 4: syndication of standardized, enriched product information to downstream systems.",
      technical:
        "Coordination across multiple technical layers — upstream product data ingestion, structured transformation pipelines, LLM-powered enrichment workflows, RAG-based attribute extraction, merchant review and governance interfaces, Salesforce integration, and downstream syndication across commerce systems. Balancing automation, governance, and usability was a core platform design challenge.",
      tradeoffs: [
        "Automation vs. accuracy — full automation risked product quality, so AI enrichment was paired with merchant review loops to maintain trust.",
        "Standardization vs. business flexibility — governance for consistency while allowing category-level flexibility where needed.",
        "Speed vs. scalability — prioritized phased rollout and usable iterations over waiting for a perfect end-state platform.",
      ],
      collaboration:
        "Partnered closely with engineering, data science / ML teams, merchandising, merchant operations, site experience, business stakeholders, and leadership to align platform priorities, rollout sequencing, and adoption.",
      metrics: [
        { label: "Annual uplift", value: "~$4M" },
        { label: "Enrichment accuracy", value: "90%+" },
        { label: "Operational reduction", value: "80 hrs / mo" },
        { label: "Operational savings", value: "~$40K / mo" },
      ],
      thinking:
        "Platform products win by removing friction for every team downstream. The real success metric isn't the platform itself — it's how much faster every other team can ship because of it.",
      outcome:
        "Established product data as a strategic platform capability — improving product discoverability and downstream consistency, reducing manual operational load, and creating a foundation for AI-driven merchandising and future commerce experiences.",
      flow: [
        "Upstream Systems",
        "Data Structuring & Transformation",
        "LLM Enrichment Layer",
        "Central Product Data Layer",
        "Salesforce Merchant Workspace",
        "Downstream Commerce Systems",
      ],
    },
  },
  {
    slug: "emerging-commerce-tiktok-llm",
    title: "Emerging Channels: Marketplace & LLM Platform Integrations",
    company: "Victoria's Secret",
    tag: "Marketplace & AI Commerce",
    summary:
      "Expanded commerce beyond the website by building new discovery and acquisition channels across social and conversational surfaces.",
    highlights: [
      "TikTok marketplace integration",
      "Conversational commerce experiences",
      "Emerging discovery channels",
    ],
    impact: "Incremental revenue + new acquisition channels",
    accent: "violet",
    detail: {
      problem:
        "Discovery was concentrated in owned channels. Younger customers were spending more time on social and conversational surfaces, and the brand needed presence where intent now forms.",
      why: "Whoever owns discovery owns the relationship. Sitting out of marketplace and conversational commerce meant ceding a generation of high-intent customers to other brands.",
      strategy:
        "Treat each emerging channel as a first-class commerce surface with its own catalog contract, merchandising lens, and measurement model — not a marketing afterthought.",
      role:
        "Owned product strategy and execution for the TikTok marketplace integration and the conversational shopping experience, partnering with engineering, merchandising and brand.",
      decisions: [
        "Reuse the central PIM as the catalog source of truth for every new channel.",
        "Build a thin orchestration layer rather than channel-specific stacks.",
        "Anchor conversational shopping in real product attributes, not hallucinated copy.",
      ],
      execution:
        "Launched TikTok shop integration with curated assortments, then layered a conversational shopping prototype that mapped natural language intent to filtered product discovery.",
      technical:
        "Catalog syndication, channel-specific feed transformations, intent parsing, retrieval over structured product attributes, and ranking tuned for conversational context.",
      tradeoffs: [
        "Brand control vs. native channel behavior.",
        "Breadth of assortment vs. quality of curation.",
        "Generative responses vs. deterministic, attribute-grounded answers.",
      ],
      collaboration:
        "Brand, merchandising, engineering, data science, legal and external platform partners.",
      metrics: [
        { label: "New channel revenue", value: "Incremental" },
        { label: "Acquisition surfaces", value: "+2" },
        { label: "Time to channel launch", value: "Weeks" },
      ],
      thinking:
        "Future commerce isn't a single destination. The product job is to make the catalog liquid — ready to show up wherever intent forms, with the same trust and quality.",
      outcome:
        "Stood up a repeatable pattern for launching commerce on emerging channels and validated conversational shopping as a credible discovery surface.",
      flow: [
        "Customer intent on social or chat",
        "Channel orchestration layer",
        "Central product catalog (PIM)",
        "Contextual ranking & recommendations",
        "Native checkout / handoff",
      ],
    },
  },
  {
    slug: "global-commerce-eu",
    title: "Global Commerce: Checkout Migration + EU Fulfillment",
    company: "Victoria's Secret",
    tag: "International Platform Scale",
    summary:
      "Modernized international commerce through a checkout transformation and Europe distribution-center fulfillment enablement.",
    highlights: [
      "Localized checkout experiences",
      "Europe DC fulfillment enablement",
      "Global systems orchestration",
    ],
    impact: "~$7M combined annual business uplift",
    accent: "cyan",
    detail: {
      problem:
        "International customers experienced a checkout that wasn't truly local — payment methods, currency, and pricing felt foreign — while EU orders shipped from the US, creating slow, expensive deliveries.",
      why: "International growth is gated by two things: a checkout that feels native, and a fulfillment footprint that respects the customer's geography.",
      strategy:
        "Migrate to a modern checkout platform with first-class localization, and stand up EU distribution to compress delivery times and unit economics.",
      role:
        "PM across both workstreams — owning the checkout migration roadmap and partnering on EU fulfillment enablement as one coordinated international scale program.",
      decisions: [
        "Treat localization as a product, not a translation layer.",
        "Decouple payment, pricing, and fulfillment so each can evolve independently.",
        "Sequence EU DC by category to de-risk the cutover.",
      ],
      execution:
        "Phased checkout migration market by market with deep instrumentation, paired with an EU DC enablement workstream covering vendor integrations, inventory, and order routing.",
      technical:
        "Checkout platform migration, payment orchestration, currency and tax services, regional inventory and order routing, and downstream returns flows.",
      tradeoffs: [
        "Single global checkout vs. regional flexibility.",
        "Speed of cutover vs. risk to peak season.",
        "EU assortment depth vs. fulfillment complexity.",
      ],
      collaboration:
        "Engineering, finance, tax, legal, supply chain, regional commercial teams and external payment / fulfillment partners.",
      metrics: [
        { label: "Combined annual uplift", value: "~$7M" },
        { label: "EU delivery time", value: "−50%" },
        { label: "Intl. checkout conversion", value: "Lifted" },
      ],
      thinking:
        "Going global is a systems problem, not a translation problem. The checkout, the catalog, the inventory, and the fulfillment all have to move together.",
      outcome:
        "Delivered a more native international experience and a regional fulfillment footprint that unlocks faster delivery and better economics in Europe.",
      flow: [
        "Customer Region",
        "Localized Checkout (payments, pricing, currency)",
        "Regional Fulfillment (EU DC)",
        "Vendor Integrations",
        "Faster Delivery",
      ],
    },
  },
  {
    slug: "loyalty-revamp",
    title: "Loyalty Program Revamp",
    company: "MakeMyTrip",
    tag: "Growth & Retention",
    summary:
      "Redesigned the loyalty experience to simplify engagement and improve retention for high-value travelers.",
    highlights: [
      "Simplified 3 tiers → 2 tiers",
      "Travel rewards ecosystem",
      "Personalized customer journeys",
    ],
    impact: "15% increase in retention",
    accent: "amber",
    detail: {
      problem:
        "The loyalty program had grown complex — three tiers, overlapping benefits, unclear earn-and-burn mechanics. Engagement was concentrated in a small base and the rest of the program felt invisible.",
      why: "In a high-frequency, low-margin travel business, retention compounds. Even small lifts in repeat behavior change the unit economics of acquisition.",
      strategy:
        "Simplify the structure, sharpen the rewards that actually drive repeat travel, and personalize the journey so each user sees the next valuable step.",
      role:
        "PM for the revamp — owned the simplification thesis, the rewards economics with finance, and the experience redesign with design and engineering.",
      decisions: [
        "Collapse three tiers into two with clearer thresholds.",
        "Shift rewards toward the highest-frequency travel actions.",
        "Personalize the loyalty surface based on the user's travel pattern.",
      ],
      execution:
        "Ran the redesign as a sequenced experiment — simplified structure, then rewards rebalancing, then personalized surfaces — measuring retention impact at each step.",
      technical:
        "Loyalty engine changes, eligibility and rewards rules, personalization on the loyalty surface, and instrumentation across the booking funnel.",
      tradeoffs: [
        "Generosity of rewards vs. program economics.",
        "Simplicity vs. power-user expressiveness.",
        "Personalization depth vs. predictability for users.",
      ],
      collaboration:
        "Design, engineering, finance, marketing, CRM and analytics.",
      metrics: [
        { label: "Retention", value: "+15%" },
        { label: "Repeat bookings", value: "Lifted" },
        { label: "Program comprehension", value: "Improved" },
      ],
      thinking:
        "Loyalty isn't a points table — it's a promise. Customers re-engage when the next reward feels reachable and the next trip feels easier.",
      outcome:
        "A simpler, more personal loyalty experience that lifted retention and gave the business a clearer lever for growth across high-value travelers.",
      flow: ["Browse", "Book", "Reward", "Re-engage", "Lifetime value"],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);