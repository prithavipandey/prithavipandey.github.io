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
    thinking: string;
    outcome: string;
    flow: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "ai-pim-platform",
    title: "AI-Powered Product Information Management Platform",
    company: "Victoria's Secret",
    tag: "0→1 Platform Product",
    summary:
      "Built a centralized PIM platform to simplify fragmented product data systems and improve discoverability at scale.",
    highlights: [
      "Centralized product data ecosystem",
      "LLM-powered enrichment workflows",
      "Self-serve merchant operations",
    ],
    impact: "~$4M annual business uplift",
    accent: "blue",
    detail: {
      problem:
        "Product data lived across half a dozen disconnected systems — vendor portals, spreadsheets, legacy ERP exports and a pile of manual merchant overrides. Attribute coverage was inconsistent, time-to-publish was slow, and discoverability suffered across both site search and downstream channels.",
      why: "In a commerce business, the product record is the atomic unit of every customer experience — search, recommendations, navigation, marketing feeds, and merchandising. A weak product data layer caps how fast every other team can move.",
      strategy:
        "Build a single, governed source of truth for product information, and make enrichment cheap with LLM-assisted workflows. Wrap it in a Salesforce-based merchant workspace so the people closest to the product could own quality without engineering bottlenecks.",
      role:
        "Led product end-to-end as the lead PM — from defining the platform vision and architecture decisions with engineering, to shaping the merchant workspace with design, to partnering with merchandising and analytics on rollout.",
      decisions: [
        "Treat PIM as a platform, not a tool — design for downstream consumers first.",
        "Use LLM enrichment as a draft-and-review pattern, never a black box for merchants.",
        "Adopt Salesforce as the merchant workspace to meet teams where they already worked.",
        "Govern attributes as a versioned schema, not a free-form bag of fields.",
      ],
      execution:
        "Sequenced the rollout across upstream ingestion, central data layer, enrichment, merchant workspace and downstream syndication. Shipped a thin end-to-end slice first, then deepened category coverage and automation.",
      technical:
        "Coordinated upstream feed normalization, a structured product data model, an LLM enrichment service with human-in-the-loop review, and downstream contracts with site search, marketing, and merchandising surfaces.",
      tradeoffs: [
        "Speed of enrichment vs. editorial control — solved with confidence scores and review queues.",
        "Salesforce flexibility vs. governance — locked critical fields, opened safe ones.",
        "Centralization vs. team autonomy — kept category-level overrides as first-class.",
      ],
      collaboration:
        "Engineering, data science, merchandising, site experience, marketing operations and leadership.",
      metrics: [
        { label: "Annual uplift", value: "~$4M" },
        { label: "Enrichment time", value: "−60%" },
        { label: "Attribute coverage", value: "+45%" },
        { label: "Manual touches", value: "−70%" },
      ],
      thinking:
        "Platform products win by removing leverage points of friction for every team downstream. The success metric isn't the platform — it's how fast every other product team can ship because of it.",
      outcome:
        "Established the product data layer as a strategic capability, unlocking faster launches, richer search experiences, and a foundation for AI-driven merchandising.",
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
    title: "Emerging Commerce: TikTok + LLM Integrations",
    company: "Victoria's Secret",
    tag: "Marketplace & Future Commerce",
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