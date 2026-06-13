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
      image: string;
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
    tags: ["Platform Modernization", "LLM Enrichment", "0→1 Build"],
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
    detail: {
      problem:
        "Customer discovery behavior was evolving beyond traditional owned channels. Consumers increasingly explored products through social commerce platforms and conversational interfaces, creating new discovery and purchase journeys outside the brand website. Victoria's Secret needed to establish presence across these emerging commerce surfaces while maintaining a consistent product experience and accurate catalog representation. The challenge was enabling new acquisition and discovery channels without creating fragmented commerce systems.",
      why:
        "As customer discovery shifts across channels, commerce experiences need to meet customers where intent is forming. Social commerce platforms unlock new acquisition opportunities, while conversational interfaces create more personalized discovery experiences. The opportunity was to expand customer reach while ensuring product discovery remained accurate, scalable, and operationally sustainable.",
      strategy:
        "The strategy focused on enabling emerging commerce channels through structured product data and reusable commerce infrastructure. Two key initiatives were launched: (1) TikTok Marketplace Integration — enabled product catalog syndication and shopping experiences through TikTok Shop, allowing customers to discover and browse Victoria's Secret products within the platform; and (2) Conversational Shopping via LLM Platforms — enabled conversational product discovery experiences across platforms such as OpenAI and Google UCP, allowing users to discover products through natural language interactions. Rather than creating channel-specific systems, the approach leveraged the centralized PIM platform as the single source of truth for product catalog and attributes. This ensured consistency across discovery surfaces while reducing operational complexity.",
      role:
        "Led product efforts focused on catalog syndication and commerce channel enablement. For TikTok Shop, owned product requirements related to catalog integration and product syndication, partnering closely with cross-functional teams while fulfillment-related capabilities were managed by a separate product organization. For conversational shopping initiatives, worked on enabling structured product discovery experiences powered through centralized product catalog data. Collaborated closely with engineering, merchandising, platform teams, and external ecosystem partners to drive execution.",
      decisions: [
        "Use centralized product data as the foundation — the PIM platform was used as the single source of truth to ensure consistency across all emerging channels.",
        "Build reusable channel enablement patterns — rather than creating standalone integrations for each platform, reusable catalog syndication capabilities were prioritized.",
        "Ground conversational discovery in structured product attributes — conversational shopping experiences relied on structured catalog data to improve product relevance and consistency.",
        "Balance speed with operational scalability — the approach prioritized faster experimentation with new channels while maintaining manageable operational complexity.",
      ],
      execution:
        "TikTok Marketplace Integration: enabled catalog synchronization and shopping experiences through TikTok Shop, allowing customers to browse Victoria's Secret products directly within the platform. The initiative focused on product catalog syndication, assortment enablement, and maintaining accurate product representation. Conversational Shopping: enabled conversational product discovery across OpenAI and Google UCP experiences. Customers could discover products using natural language interactions, with structured product information powering discovery experiences. In OpenAI-based experiences, users discovered products conversationally and navigated to Victoria's Secret website for purchase. In Google UCP, experiences supported conversational discovery along with more seamless commerce flows, including checkout within the chat interface. The centralized PIM platform powered product data consistency across both initiatives.",
      technical:
        "The initiative required coordination across commerce, catalog, and discovery systems, including product catalog syndication, marketplace integrations, structured product attributes, feed transformation logic, conversational discovery enablement, LLM-powered retrieval experiences, channel-specific commerce requirements, and product data consistency across platforms. Maintaining consistent product experiences across emerging channels while avoiding duplicated systems was a key challenge.",
      tradeoffs: [
        "Speed of channel expansion vs. operational scalability — new commerce channels required faster experimentation while maintaining scalable and manageable systems.",
        "Discovery flexibility vs. catalog consistency — conversational experiences needed flexibility while remaining grounded in structured product information.",
        "Channel-specific experiences vs. reusable infrastructure — the initiative balanced customization for individual platforms with reusable catalog and product foundations.",
      ],
      collaboration:
        "Partnered closely with engineering, merchandising teams, platform teams, marketing & commerce stakeholders, external platform partners, and data & product teams to enable scalable product discovery experiences across emerging commerce channels.",
      metrics: [],
      outcome:
        "Expanded Victoria's Secret presence across emerging commerce channels through marketplace enablement and conversational discovery experiences. The initiative established reusable foundations for future commerce channel expansion while improving how customers discover products outside traditional owned experiences.",
      flow: [],
      tracks: {
        left: {
          label: "Marketplace Commerce",
          title: "TikTok Marketplace Integration",
          description:
            "Enabled catalog-driven shopping experiences within TikTok Shop through scalable product syndication.",
          metrics: [
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
            { value: "Launched", label: "Customer-Facing Experience" },
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
      "Two parallel workstreams — a checkout provider migration and EU distribution center enablement — that together strengthened international customer experience and fulfillment.",
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
        "The strategy focused on two parallel workstreams: (1) modernize checkout infrastructure through migration to a new checkout provider, and (2) improve regional fulfillment capabilities through EU distribution center enablement. The checkout migration focused on flexibility, performance, localization, and customer experience across international markets. The EU fulfillment initiative aimed to reduce delivery timelines and shipping complexity by moving fulfillment closer to customers. Together, these initiatives created a more scalable international commerce foundation.",
      role:
        "Led product management across both workstreams as part of a broader international expansion initiative. Worked cross-functionally with engineering, business, operations, supply chain, and external partners to define requirements, prioritize rollout, and drive execution. Responsibilities included defining roadmap and priorities, coordinating multi-market rollout planning, aligning business and technical stakeholders, managing checkout migration requirements, supporting EU fulfillment enablement, and driving execution across interconnected systems.",
      decisions: [
        "Phased migration over big-bang rollout — checkout migration was executed in phases to reduce operational risk and ensure stability across markets.",
        "Treat checkout and fulfillment as interconnected systems — customer experience improvements required coordination between front-end commerce and backend fulfillment.",
        "Prioritize scalability alongside speed — the program built infrastructure to support future international growth, not just immediate gains.",
        "Balance standardization with regional requirements — core platform consistency was maintained while enabling flexibility for regional operational needs.",
      ],
      execution:
        "Executed through parallel workstreams. Checkout Migration: rolled out migration to a new checkout provider in phases, ensuring continuity while improving localization, customer experience, and platform flexibility. EU Fulfillment: enabled EU distribution center fulfillment by coordinating vendor integrations, operational readiness, inventory alignment, and order routing. The phased approach reduced implementation risk while maintaining operational continuity.",
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
            { value: "Multi-Market", label: "Checkout rollout" },
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
            { value: "7–8d → 1–2d", label: "EU delivery timelines" },
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
