/**
 * Single source of truth for every piece of copy on the site.
 * Sections read from here so content edits never touch layout.
 */

export const profile = {
  name: "Anuj Gupta",
  role: "Backend Engineer",
  location: "Kanpur, India",
  status: "Open to opportunities",
  email: "anujguptaaj123@gmail.com",
  phone: "+91 9569513380",
  phoneHref: "tel:+919569513380",
  linkedin: "https://www.linkedin.com/in/anuj-gupta-b930a0264/",
  linkedinHandle: "in/anuj-gupta",
  github: "https://github.com/Anuj12Gupta-dev",
  githubHandle: "Anuj12Gupta-dev",
  resume: "/Anuj_Gupta_Resume.pdf",
  tagline:
    "Backend engineer building fintech infrastructure — payment gateways, invoicing, automated payouts and reconciliation. Computer Science undergraduate.",
} as const;

export const about = {
  lead: "I build the backend systems money moves through.",
  paragraphs: [
    "I'm a Computer Science undergraduate at Dr. A.P.J. Abdul Kalam Technical University and a backend engineer at Playto, where I build fintech infrastructure with Django and Django REST Framework.",
    "That work spans invoice management, automated merchant payouts, a rulebook engine that routes transactions to the right payment gateway, and virtual bank account reconciliation — along with the REST APIs, webhook handlers and internal Ops Console screens that hold it together.",
    "Outside of it I ship full-stack products with Next.js and PostgreSQL, and I work heavily with AI-assisted development — using Claude Code for architecture exploration, debugging, refactoring and code review.",
  ],
  facts: [
    { value: "5", label: "Payment gateways" },
    { value: "6+", label: "Projects shipped" },
    { value: "2026", label: "SIH team leader" },
  ],
} as const;

export const experience = [
  {
    title: "Backend Software Engineer Intern",
    org: "Playto",
    period: "Feb 2026 — Present",
    description:
      "Building fintech infrastructure on Django and Django REST Framework: the services that issue invoices, route transactions to the right gateway, move merchant payouts and reconcile what lands in the bank.",
    highlights: [
      "Built a complete Invoice Management System enabling merchants to create, manage and track invoices.",
      "Worked across XPay, Razorpay, PayGlocal, PayU and PayPal, contributing to payment integration, transaction workflows, merchant onboarding and backend payment services.",
      "Designed a Merchant Rulebook Engine that dynamically selects the appropriate payment gateway.",
      "Automated merchant payouts, replacing spreadsheet-driven workflows with an internal operations platform.",
      "Integrated Virtual Bank Account payment and reconciliation workflows.",
      "Built REST APIs, webhook handlers and backend services, while contributing to the Ops Console frontend.",
    ],
    tags: ["Django", "Django REST Framework", "PostgreSQL", "Webhooks", "Payments"],
  },
] as const;

export const projects = [
  {
    title: "PeerPrep",
    year: "2025",
    summary:
      "Real-time collaborative coding platform with a shared editor, role-based access, video chat and live problem-solving sessions. Built so peers can practise interviews together.",
    stack: ["React.js", "Next.js", "Node.js", "WebSockets", "MongoDB", "Stream Video", "Clerk"],
    href: "https://peer-prep-one.vercel.app/",
  },
  {
    title: "Spendly",
    year: "2025",
    summary:
      "AI-powered expense management platform. Gemini handles categorisation and pattern analysis, surfacing where money actually goes through an analytics dashboard.",
    stack: ["Next.js", "Gemini AI", "PostgreSQL", "Prisma", "Clerk", "TypeScript"],
    href: "https://spendly-one-rho.vercel.app/",
  },
  {
    title: "Socially",
    year: "2025",
    summary:
      "Full-stack social platform with accounts, rich media posts, likes, bookmarks, comments, notifications and real-time chat. Built for scale on a full-stack TypeScript setup.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Lucia Auth",
      "Stream Chat",
      "TanStack Query",
    ],
    href: "https://socially-gilt-seven.vercel.app",
  },
  {
    title: "PrepMate AI",
    year: "2024",
    summary:
      "Interview preparation platform that generates tailored questions and model answers from a job description and experience level.",
    stack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    href: "https://ai-mock-interview-ebba4.web.app/",
  },
  {
    title: "CrowdFund DApp",
    year: "2024",
    summary:
      "Decentralised crowdfunding where campaigns are created and funded on-chain. Users connect via MetaMask and interact with Ethereum contracts deployed to the Sepolia testnet.",
    stack: ["Next.js", "Solidity", "Ethereum", "Ethers.js", "MetaMask"],
    href: "https://crowdfund-lac.vercel.app/",
  },
  {
    title: "Ghumkad Travels",
    year: "2024",
    summary:
      "AI trip planner that generates complete travel itineraries in seconds — destinations through to daily activity breakdowns.",
    stack: ["React", "Node.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    href: "https://ai-travel-planner-two-beta.vercel.app/",
  },
] as const;

type SkillGroup = {
  group: string;
  items: readonly string[];
  /** Spans the full grid row. Use for the final group so it never orphans. */
  wide?: boolean;
};

export const skills: readonly SkillGroup[] = [
  {
    group: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    group: "Backend",
    items: [
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Webhooks",
    ],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    group: "Payments",
    items: [
      "XPay",
      "Razorpay",
      "PayU",
      "PayGlocal",
      "PayPal",
      "Virtual Bank Accounts",
      "Gateway integration",
    ],
  },
  {
    group: "Developer tooling",
    items: ["Git", "Claude Code", "Codex", "Grafana", "Postman"],
  },
  {
    group: "AI-assisted development",
    items: [
      "Claude Code",
      "Architecture exploration",
      "Debugging",
      "Refactoring",
      "Documentation",
      "Code review",
    ],
    wide: true,
  },
];

export const education = [
  {
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    qualification: "B.Tech, Computer Science & Engineering",
    period: "2023 — 2027",
    note: "CGPA 7.52. Focus on software development, data structures and modern web technologies.",
  },
  {
    institution: "N.L.K Vidya Mandir Inter College",
    qualification: "Higher Secondary, Class XII",
    period: "2021 — 2022",
    note: "Strong foundation in mathematics and science — where the interest in computer science began.",
  },
] as const;

export const recognition = [
  {
    title: "Smart India Hackathon 2026",
    role: "Team Leader — College Internal Qualifier",
    period: "2026",
  },
  {
    title: "Chandigarh University Hackathon",
    role: "Participant",
    period: "2025",
  },
  {
    title: "Blockchain Bootcamp",
    role: "Smart contracts and decentralised systems",
    period: "2024",
  },
] as const;

export const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Education", href: "#education" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
] as const;
