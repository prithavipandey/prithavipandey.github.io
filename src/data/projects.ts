export type Project = {
  slug: string;
  title: string;
  metaTitle?: string;
  company: string;
  tag: string;
  summary: string;
  highlights: string[];
  impact: string;
  accent: "blue" | "violet" | "cyan" | "amber";
  tags?: string[];
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
    experiences?: {
      label: string;
      title: string;
      images: string[];
      alt: string;
      copy: string;
    }[];
    impactCards?: { value: string; label: string }[];
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
    metaTitle: "AI-Powered PIM Platform",
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
    tags: ["LLM Enrichment"],
    detail: {
      problem:
        "Product data lived across fragmented upstream systems, creating real downstream pain:\n\n• Inconsistent product information across channels\n• Heavy manual effort and spreadsheet-driven workflows\n• Slower speed to market as the catalog scaled globally\n• Weaker discoverability and product quality for customers",
      why: "Product data quality directly drives search, browse, recommendations, merchandising, and conversion. A scalable foundation was needed to improve consistency, cut operational load, and unlock future commerce experiences.",
      strategy:
        "Build a centralized, governed PIM as the single source of truth for product data:\n\n• Centralize fragmented upstream product information\n• Improve enrichment via Vertex AI + LLM workflows with human-in-the-loop QA\n• Empower merchants with a Salesforce-based self-serve workspace\n• Syndicate clean, enriched data to all downstream systems",
      role:
        "Owned product strategy and execution for the 0→1 PIM initiative — vision and roadmap, capability prioritization, translating merchant pain into workflows, aligning technical and business stakeholders, and driving adoption across engineering, data science, merchandising, and business teams.",
      decisions: [
        "Treat PIM as a platform capability, not just an operational tool — designed to serve commerce, search, merchandising, and marketing as downstream consumers.",
        "Human-assisted AI, not full automation — LLM enrichment accelerated attribute extraction while preserving merchant oversight for accuracy and governance.",
        "Meet users where they already worked — Salesforce as the merchant-facing layer reduced change management overhead and improved adoption.",
        "Design for scale and extensibility — built to support future categories, additional enrichment workflows, and downstream integrations.",
      ],
      execution:
        "Phased rollout to de-risk delivery and show value early:\n\n• Phase 1 — Centralized ingestion and transformation of upstream data\n• Phase 2 — AI-powered enrichment and attribute extraction\n• Phase 3 — Merchant self-serve review and governance in Salesforce\n• Phase 4 — Syndication of standardized, enriched data downstream",
      technical:
        "Coordination across multiple layers — upstream ingestion, transformation pipelines, LLM enrichment, RAG-based attribute extraction, merchant review interfaces, Salesforce integration, and downstream syndication. Core challenge: balancing automation, governance, and usability.",
      tradeoffs: [
        "Automation vs. accuracy — full automation risked product quality, so AI enrichment was paired with merchant review loops to maintain trust.",
        "Standardization vs. business flexibility — governance for consistency while allowing category-level flexibility where needed.",
        "Speed vs. scalability — prioritized phased rollout and usable iterations over waiting for a perfect end-state platform.",
      ],
      collaboration:
        "Partnered across engineering, data science / ML, merchandising, merchant operations, site experience, business stakeholders, and leadership to align priorities, sequencing, and adoption.",
      metrics: [
        { label: "Annual uplift", value: "~$4M" },
        { label: "Enrichment accuracy", value: "90%+" },
        { label: "Operational reduction", value: "80 hrs / month" },
        { label: "Operational savings", value: "~$40K / month" },
      ],
      thinking:
        "Platform products win by removing friction for every team downstream. The real success metric isn't the platform itself — it's how much faster every other team can ship because of it.",
      outcome:
        "Established product data as a strategic platform capability:\n\n• Improved discoverability and downstream consistency\n• Reduced manual operational load\n• Created the foundation for AI-driven merchandising and future commerce experiences",
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
    title: "Emerging Commerce Channels: Marketplace & Conversational Discovery",
    metaTitle: "Emerging Commerce Channels",
    company: "Victoria's Secret",
    tag: "Commerce Expansion & Discovery",
    summary:
      "Expanded commerce into emerging customer discovery channels through marketplace and conversational shopping experiences.",
    highlights: [
      "TikTok Marketplace Integration",
      "Conversational Shopping (OpenAI + Google UCP)",
      "Catalog syndication via centralized PIM",
    ],
    impact: "New discovery & acquisition channels",
    accent: "violet",
    tags: ["AI Shopping"],
    detail: {
      problem:
        "Customer discovery was shifting beyond owned channels into social commerce and conversational interfaces. Victoria's Secret needed presence on these new surfaces — without fragmenting catalog, experience, or operations.",
      why:
        "Commerce has to meet customers where intent is forming. Social and conversational surfaces unlock new acquisition and personalized discovery — provided the underlying product data stays accurate and scalable.",
      strategy:
        "Enable new channels on top of reusable commerce infrastructure, with the centralized PIM as the single source of truth.\n\n• TikTok Marketplace — catalog syndication and shopping inside TikTok Shop.\n• Conversational Shopping — discovery across OpenAI and Google UCP, powered by structured product attributes.\n\nThis kept channel-specific complexity low while ensuring consistent product experiences everywhere.",
      role:
        "Led product for catalog syndication and channel enablement across both initiatives — owning TikTok Shop catalog integration and the structured product foundation powering conversational discovery, in partnership with engineering, merchandising, platform teams, and external ecosystem partners.",
      decisions: [
        "PIM as the single source of truth — consistent product data across every emerging channel.",
        "Reusable channel patterns over one-off integrations — faster to launch the next surface.",
        "Ground conversational discovery in structured attributes — improves relevance and trust.",
        "Experiment quickly without exploding operational complexity.",
      ],
      execution:
        "TikTok Shop: catalog sync, assortment enablement, and accurate product representation inside the platform.\n\nConversational Shopping: natural-language discovery across OpenAI (browse → site purchase) and Google UCP (in-chat discovery + checkout). Both initiatives ran on the same centralized PIM, keeping product data consistent across surfaces.",
      technical:
        "Coordination across catalog syndication, marketplace integrations, feed transformation, LLM-powered retrieval, and channel-specific commerce requirements — keeping consistency without duplicating systems.",
      tradeoffs: [
        "Speed of channel expansion vs. operational scalability — new commerce channels required faster experimentation while maintaining scalable and manageable systems.",
        "Discovery flexibility vs. catalog consistency — conversational experiences needed flexibility while remaining grounded in structured product information.",
        "Channel-specific experiences vs. reusable infrastructure — the initiative balanced customization for individual platforms with reusable catalog and product foundations.",
      ],
      collaboration:
        "Partnered with engineering, merchandising, platform teams, marketing, external platform partners, and data & product teams.",
      metrics: [],
      thinking:
        "Customers don't move to a new channel because we built one — they're already there. Our job is to meet them with the right product experience.",
      outcome:
        "Expanded Victoria's Secret presence across emerging commerce surfaces and built reusable foundations for future channel expansion — improving how customers discover products beyond owned experiences.",
      flow: [],
      tracks: {
        left: {
          label: "Marketplace Commerce",
          title: "TikTok Marketplace Integration",
          description:
            "Enabled catalog-driven shopping experiences within TikTok Shop through scalable product syndication.",
          metrics: [
            { value: "TikTok Shop", label: "Platform Enablement" },
            { value: "3M+", label: "Monthly Impressions" },
            { value: "3.4%", label: "Click-through Rate (CTR)" },
            { value: "$50K+", label: "Incremental Monthly Revenue" },
          ],
          flow: [],
        },
        right: {
          label: "Conversational Commerce",
          title: "LLM-Powered Shopping Experience",
          description:
            "Enabled conversational product discovery powered by structured product catalog data.",
          metrics: [
            { value: "OpenAI + Google UCP", label: "Platform Enablement" },
            { value: "~2%", label: "Projected Revenue Uplift" },
          ],
          flow: [],
        },
        convergence: "",
      },
    },
  },
  {
    slug: "loyalty-revamp",
    title: "Loyalty Program Revamp",
    metaTitle: "Loyalty Program Revamp",
    company: "MakeMyTrip",
    tag: "Growth & Retention",
    summary:
      "Redesigned MakeMyTrip's loyalty program to improve retention, strengthen user quality, simplify rewards, and create stronger repeat-booking behavior.",
    highlights: [
      "Hybrid eligibility (GMV + frequency)",
      "Simplified 3 tiers → 2 tiers",
      "Lifecycle engagement & activation",
    ],
    impact: "+15% retention improvement",
    accent: "amber",
    detail: {
      problem:
        "Loyalty drove ~44% of GMV — but three issues capped its impact:\n\n• GMV-only eligibility let high one-time spenders qualify without showing repeat intent.\n• Cashback credited only after trip completion — weak reward loop, little pull for the next booking.\n• Low post-activation engagement — members rarely knew their benefits, status, or how to use rewards.",
      why: "Retention compounds in travel. With loyalty already driving ~44% of GMV, even small lifts in repeat behavior unlock outsized CLV and acquisition efficiency.",
      strategy:
        "Shift loyalty from a transaction program to a behavior-driven retention engine:\n\n• Better members — qualify on behavior, not just spend.\n• Better rewards — faster realization, sustainable economics.\n• Better engagement — surface benefits at the right moments across the journey.",
      role:
        "Led product end-to-end across eligibility, reward mechanics, member experience, and lifecycle engagement — partnering with engineering, design, CRM, analytics, finance, and business stakeholders on strategy, roadmap, economics, journey design, experimentation, and rollout.",
      decisions: [
        "Hybrid eligibility — trips + spend, so members prove repeat intent before qualifying.",
        "Tier simplification — 3 tiers collapsed to 2 (Gold, Platinum) for clarity.",
        "Faster cashback realization — with guardrails on usage and economics.",
        "Controlled incentives — benefit caps, expiry, and misuse prevention.",
        "Lifecycle nudges — activation, engagement, and retention moments across the journey.",
      ],
      execution:
        "Sequenced for measurable impact:\n\n• Eligibility redesign first — improve member quality at the top of the funnel.\n• Reward mechanics next — strengthen habit formation and repeat behavior.\n• Engagement layer last — lifecycle comms and contextual benefit discovery.\n\nEach phase measured independently against retention, engagement, and program economics.",
      technical:
        "",
      tradeoffs: [
        "User growth vs. user quality — increasing membership size is valuable only when users demonstrate repeat intent and long-term value.",
        "Reward generosity vs. program economics — benefits needed to remain attractive while preserving sustainable margins.",
        "Simplicity vs. flexibility — the program had to be easy to understand while supporting differentiated customer experiences.",
        "Incentives vs. habit formation — the objective was to encourage long-term behavior, not short-term reward chasing.",
      ],
      collaboration:
        "Partnered across engineering, design, revenue, analytics, marketing, and business leadership to align strategy, economics, implementation, and measurement.",
      metrics: [
        { label: "Retention Improvement", value: "+15%" },
        { label: "Trip Attach Rate", value: "+10%" },
        { label: "Tier Simplification", value: "3 → 2" },
        { label: "Hybrid Eligibility", value: "GMV + Frequency" },
      ],
      impactCards: [
        { value: "+15%", label: "Retention Improvement" },
        { value: "+10%", label: "Increase in Trip Attach Rate" },
      ],
      thinking:
        "Loyalty isn't a discount — it's a habit. Real retention comes from making members feel seen, not just rewarded.",
      outcome:
        "Transformed loyalty from a transaction rewards program into a retention engine — improving member quality, simplifying tiers, sharpening rewards, and raising benefit awareness for sustainable CLV growth.",
      flow: [],
      experiences: [
        {
          label: "Tiers & Rewards",
          title: "Tier Simplification & Rewards",
          images: ["__MMTBLACK1__", "__MMTBLACK5__"],
          alt: "MMTBLACK tier benefits and member upgrade reward summary",
          copy: "Consolidated 3 tiers into 2 (Gold, Platinum) with a hybrid trips + spend qualification. Members get clearer status, sharper benefits, and faster reward realization.",
        },
        {
          label: "Funnel Callouts",
          title: "Funnel-Level Benefit Visibility",
          images: ["__MMTBLACK2__", "__MMTBLACK3__", "__MMTBLACK4__"],
          alt: "MMTBLACK benefit callouts surfaced across hotel search, checkout, and add-on flows",
          copy: "Surfaced tier benefits at the exact moments members made decisions — hotel results, checkout add-ons, and pricing — driving stronger utilization and repeat behavior.",
        },
      ],
    },
  },
  {
    slug: "global-commerce-eu",
    title: "International Expansion: Checkout Modernization & EU Fulfillment",
    metaTitle: "International Expansion",
    company: "Victoria's Secret",
    tag: "Global Commerce Systems",
    summary:
      "Checkout provider migration and EU distribution center enablement — strengthening international customer experience and fulfillment.",
    highlights: [
      "Checkout provider migration",
      "EU distribution center enablement",
      "Multi-market rollout",
    ],
    impact: "Stronger international commerce foundation",
    accent: "cyan",
    detail: {
      problem:
        "International growth was being held back on two fronts:\n\n• Checkout couldn't fully support localized payments, currencies, and regional expectations\n• EU orders shipped from the US — longer delivery times, higher costs, and operational drag\n\nA stronger commerce experience and a more efficient fulfillment model were both needed.",
      why: "Checkout performance drives conversion; delivery speed drives satisfaction and repeat behavior. International growth needed both — improved customer experience and a more scalable operational foundation.",
      strategy:
        "Sequenced, two-part program:\n\n• Modernize checkout — migrate to a new provider for better flexibility, performance, and localization across markets\n• Enable EU fulfillment — stand up a regional distribution center to move inventory closer to customers\n\nTogether, a more scalable international commerce foundation.",
      role:
        "Co-led product across both initiatives:\n\n• Owned requirements and execution for the checkout provider migration with engineering, business, and external vendors\n• Partnered with operations, supply chain, and fulfillment on EU DC enablement across CX, inventory, and order systems\n• Drove stakeholder management and cross-functional delivery across workstreams",
      decisions: [
        "Sequential rollout over parallel execution — checkout modernization first, then EU fulfillment, to reduce operational risk and stabilize each initiative before the next.",
        "Treat checkout and fulfillment as interconnected systems — customer experience improvements required coordination between front-end commerce and backend fulfillment.",
        "Prioritize scalability alongside speed — the program built infrastructure to support future international growth, not just immediate gains.",
        "Balance standardization with regional requirements — core platform consistency was maintained while enabling flexibility for regional operational needs.",
      ],
      execution:
        "Run sequentially to reduce risk and preserve continuity:\n\n• Checkout Migration first — phased rollout of the new provider, improving localization, CX, and platform flexibility\n• EU Fulfillment next — vendor integrations, operational readiness, regional inventory alignment, and order routing for EU DC fulfillment",
      technical:
        "Coordination across many commerce and operational systems — checkout migration, payments, localization, currency and regional config, order routing, regional inventory, fulfillment workflows, and vendor/logistics integrations. Managing CX-to-ops dependencies was the core complexity.",
      tradeoffs: [
        "Speed vs. operational risk — a phased rollout was prioritized to reduce disruption during migration.",
        "Global consistency vs. regional flexibility — the program balanced platform standardization with country-level operational needs.",
        "Customer experience vs. implementation complexity — improving localization and fulfillment required coordination across multiple technical and operational systems.",
      ],
      collaboration:
        "Partnered across engineering, supply chain & fulfillment, finance, regional commercial teams, external vendors and partners, business stakeholders, and operations to align priorities, plans, and operational readiness.",
      metrics: [
        { label: "YoY revenue growth (checkout)", value: "15%" },
        { label: "EU delivery timelines", value: "7–8d → 1–2d" },
      ],
      thinking:
        "International growth lives or dies on operational details — the customer never sees the warehouse, but they feel it in every delivery.",
      outcome:
        "A stronger international commerce foundation:\n\n• Improved checkout capabilities and localization\n• Strengthened regional fulfillment operations\n• More scalable international growth going forward",
      flow: [],
      tracks: {
        left: {
          label: "Checkout Modernization",
          title: "Modernized international checkout",
          description:
            "Enabled more scalable international checkout capabilities across payments, localization, and customer experience.",
          metrics: [
            { value: "15%", label: "YoY revenue growth" },
            { value: "$3M", label: "Cost savings" },
            { value: "Improved", label: "Checkout experience & localization" },
          ],
          flow: [
            "Customer Region",
            "Localized Checkout (payments, currency, pricing)",
            "New Checkout Provider",
            "Improved Checkout Experience",
          ],
        },
        right: {
          label: "EU Fulfillment Enablement",
          title: "Regional fulfillment closer to customers",
          description:
            "Moved fulfillment closer to customers through EU distribution enablement, significantly improving delivery experience.",
          metrics: [
            { value: "~$5M", label: "Annual business impact" },
            { value: "75% faster", label: "Reduction in delivery timelines" },
            { value: "Improved", label: "Regional fulfillment experience" },
          ],
          flow: [
            "EU Customer Orders",
            "Regional Inventory",
            "EU Distribution Center",
            "Faster Delivery (7–8d → 1–2d)",
          ],
        },
        convergence: "Better International Customer Experience",
      },
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
