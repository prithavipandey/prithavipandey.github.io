export type Project = {
  slug: string;
  title: string;
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
        { label: "Operational reduction", value: "80 hrs / month" },
        { label: "Operational savings", value: "~$40K / month" },
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
    title: "Emerging Commerce Channels: Marketplace & Conversational Discovery",
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
        "The loyalty program already influenced ~44% of overall GMV, making it one of MakeMyTrip's most important growth levers. But three fundamental issues limited its impact. First, eligibility relied heavily on GMV, allowing users with high one-time spend but low long-term value to qualify for benefits. Second, cashback was credited only after trip completion, creating a weak reward loop with limited ability to drive repeat behavior. Third, post-activation engagement remained low because users often lacked awareness of their benefits, qualification status, and reward utilization opportunities. The opportunity was not simply to expand participation, but to create a program that rewarded genuine customer behavior while improving retention and program economics.",
      why: "Retention compounds in travel. Small improvements in repeat booking behavior can significantly increase customer lifetime value and improve acquisition efficiency. Given loyalty's contribution to overall GMV, improving the quality, engagement, and retention of loyalty users represented one of the highest-leverage opportunities for sustainable growth.",
      strategy:
        "The strategy focused on three priorities: (1) Improve user quality by moving beyond spend-only qualification and incorporating behavioral signals; (2) Strengthen reward economics with incentives that encourage repeat behavior while maintaining sustainable unit economics; and (3) Increase engagement by improving benefit visibility and lifecycle communication throughout the customer journey. The objective was to shift loyalty from a transaction-driven program into a behavior-driven retention engine.",
      role:
        "Led product management for the loyalty revamp end-to-end. Worked closely with engineering, design, CRM, analytics, finance, and business stakeholders to redesign eligibility rules, reward mechanics, member experiences, and engagement strategies. Responsibilities spanned product strategy, roadmap prioritization, loyalty economics design, user journey redesign, experimentation and rollout, and success measurement.",
      decisions: [
        "Hybrid Eligibility Model — introduced transaction frequency requirements alongside GMV thresholds so members had to demonstrate repeat intent before qualifying.",
        "Tier Simplification — consolidated three tiers into two clearer tiers to reduce program complexity and improve comprehension.",
        "Instant Cashback Model — shifted cashback toward faster reward realization while maintaining controls around usage and economics.",
        "Controlled Incentive Design — introduced benefit caps, cashback controls, expiry mechanisms, and misuse prevention measures.",
        "Lifecycle Engagement — built activation, engagement, and retention nudges across the entire member journey.",
      ],
      execution:
        "The initiative was delivered through coordinated workstreams. Eligibility criteria were redesigned first to improve member quality. Reward mechanics were then optimized to strengthen habit formation and repeat behavior. Finally, member engagement experiences were redesigned through lifecycle communication and contextual benefit discovery. Each phase was measured independently to understand impact on retention, engagement, and program performance.",
      technical:
        "",
      tradeoffs: [
        "User growth vs. user quality — increasing membership size is valuable only when users demonstrate repeat intent and long-term value.",
        "Reward generosity vs. program economics — benefits needed to remain attractive while preserving sustainable margins.",
        "Simplicity vs. flexibility — the program had to be easy to understand while supporting differentiated customer experiences.",
        "Incentives vs. habit formation — the objective was to encourage long-term behavior, not short-term reward chasing.",
      ],
      collaboration:
        "Partnered with engineering, design, revenue, analytics, marketing, and business leadership to align loyalty strategy, economics, implementation, and measurement.",
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
        "The loyalty revamp transformed the program from a transaction-oriented rewards system into a stronger retention and engagement engine. By improving member quality, simplifying program design, strengthening reward mechanics, and increasing benefit awareness, the initiative delivered measurable retention gains while creating a more sustainable foundation for long-term customer value.",
      flow: [],
      experiences: [
        {
          label: "Tier Simplification & Eligibility",
          title: "Tier Simplification & Eligibility Redesign",
          image: "__LOYALTY_TIERS__",
          alt: "MMTBLACK Gold and Platinum tier eligibility with 4-trip thresholds",
          copy: "Introduced a hybrid qualification model that combined transaction frequency and spend requirements. The redesign improved user quality, reduced misuse, and simplified understanding by consolidating the program from three tiers to two.",
        },
        {
          label: "Benefits & Rewards",
          title: "Benefits & Rewards Experience",
          image: "__LOYALTY_UPGRADE__",
          alt: "MMTBLACK Platinum hotel benefits including extra discounts, room upgrades, and credits",
          copy: "Simplified benefit communication and made value more visible to members — increasing awareness, utilization, and engagement across the loyalty journey.",
        },
        {
          label: "Upgrade & Activation",
          title: "Upgrade & Activation Journey",
          image: "__LOYALTY_ACTIVATION__",
          alt: "MMTBLACK Platinum member welcome screen showing tier validity and unlocked benefits",
          copy: "Redesigned activation experiences to clearly communicate eligibility, status progression, and unlocked benefits — improving member engagement immediately after qualification.",
        },
      ],
    },
  },
  {
    slug: "global-commerce-eu",
    title: "International Expansion: Checkout Modernization & EU Fulfillment",
    company: "Victoria's Secret",
    tag: "Global Commerce Systems",
    summary:
      "Two sequential initiatives — a checkout provider migration followed by EU distribution center enablement — that together strengthened international customer experience and fulfillment.",
    highlights: [
      "Checkout provider migration",
      "EU distribution center enablement",
      "Multi-market rollout",
    ],
    impact: "Stronger international commerce foundation",
    accent: "cyan",
    detail: {
      problem:
        "As Victoria's Secret expanded internationally, customer experience and operational efficiency varied significantly across markets. The existing checkout had limitations in supporting localized experiences across payments, currencies, and regional customer expectations. At the same time, European orders were fulfilled from the US, leading to longer delivery timelines, higher shipping costs, and operational inefficiencies. Improving international growth required both a stronger commerce experience and a more efficient fulfillment model.",
      why: "International growth depends on more than market availability — it requires seamless customer experiences and efficient operational systems. Checkout performance directly impacts conversion and customer experience, while fulfillment speed and delivery experience influence customer satisfaction and repeat behavior. The opportunity was to improve international customer experience while creating a more scalable operational foundation for growth.",
      strategy:
        "The program was executed sequentially. First, modernize the checkout — migrate to a new provider to improve flexibility, performance, localization, and customer experience across international markets. Then, enable EU fulfillment — stand up a regional distribution center to reduce delivery timelines and shipping costs by moving inventory closer to customers. Together, these initiatives created a more scalable international commerce foundation.",
      role:
        "Co-led key product initiatives within a broader international expansion program focused on checkout modernization and EU fulfillment enablement. Owned product requirements and execution for the checkout provider migration, partnering with engineering, business stakeholders, and external vendors to support multi-market rollout. Collaborated closely with operations, supply chain, and fulfillment teams on EU distribution center enablement, ensuring alignment across customer experience, inventory, and order fulfillment systems. Played a central role in stakeholder management, cross-functional coordination, and delivery across multiple commerce and operational workstreams.",
      decisions: [
        "Sequential rollout over parallel execution — checkout modernization first, then EU fulfillment, to reduce operational risk and stabilize each initiative before the next.",
        "Treat checkout and fulfillment as interconnected systems — customer experience improvements required coordination between front-end commerce and backend fulfillment.",
        "Prioritize scalability alongside speed — the program built infrastructure to support future international growth, not just immediate gains.",
        "Balance standardization with regional requirements — core platform consistency was maintained while enabling flexibility for regional operational needs.",
      ],
      execution:
        "Executed sequentially. Checkout Migration came first — rolled out a new checkout provider in phases, ensuring continuity while improving localization, customer experience, and platform flexibility. EU Fulfillment followed — enabling EU distribution center fulfillment through vendor integrations, operational readiness, inventory alignment, and order routing. The sequenced approach reduced implementation risk while maintaining operational continuity.",
      technical:
        "Required coordination across multiple commerce and operational systems: checkout platform migration, payment integrations, localization capabilities, currency and regional configurations, order routing, regional inventory alignment, fulfillment workflows, and vendor/logistics integrations. Managing dependencies across customer experience and operational systems was a key complexity.",
      tradeoffs: [
        "Speed vs. operational risk — a phased rollout was prioritized to reduce disruption during migration.",
        "Global consistency vs. regional flexibility — the program balanced platform standardization with country-level operational needs.",
        "Customer experience vs. implementation complexity — improving localization and fulfillment required coordination across multiple technical and operational systems.",
      ],
      collaboration:
        "Partnered closely with engineering, supply chain & fulfillment, business stakeholders, finance, regional commercial teams, external vendors and partners, and operations to align rollout priorities, execution plans, and operational readiness.",
      metrics: [
        { label: "YoY revenue growth (checkout)", value: "15%" },
        { label: "EU delivery timelines", value: "7–8d → 1–2d" },
      ],
      thinking:
        "International growth lives or dies on operational details — the customer never sees the warehouse, but they feel it in every delivery.",
      outcome:
        "Delivered a stronger international commerce foundation through improvements across both customer experience and fulfillment systems. The initiative improved checkout capabilities, strengthened regional fulfillment operations, and supported more scalable international growth.",
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
