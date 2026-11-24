export const profile = {
  name: "Rahat Sahriar Rafi",
  shortName: "Rahat",
  wordmark: "RAHAT",
  roles: [
    "Cybersecurity Researcher",
    "Software Engineer",
    "Digital Forensics Enthusiast",
    "Founder, Team NullX",
  ],
  headline: ["Exploring Systems.", "Understanding Threats.", "Building What Matters."],
  intro:
    "I'm Rahat Sahriar Rafi, a software engineering student, cybersecurity researcher, and founder of Team NullX. I explore the intersection of security research, digital forensics, software engineering, and intelligent automation.",
  location: "Dhaka, Bangladesh",
  availability: "Open to research, security work, and collaboration",
  education: {
    degree: "B.Sc. in Software Engineering",
    school: "Daffodil International University",
    semester: "8th Semester",
    cgpa: "3.81",
  },
  email: "rahatsahriarrafi@gmail.com",
  github: "https://github.com/rahatsahriarrafi",
  linkedin: "https://linkedin.com/in/rahat-sahriar-rafi",
  hackerone: "https://hackerone.com/rahatsahriarrafi",
  hackthebox: "https://app.hackthebox.com/profile/rahatsahriarrafi",
  youtube: "",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#research", label: "Research" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  { href: "#journey", label: "Journey" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
] as const;

export const experience: {
  role: string;
  organization: string;
  focus: string;
  description: string;
  tags: string[];
  mark?: string;
  period?: string;
  employmentType?: string;
  location?: string;
  workMode?: string;
}[] = [
  {
    role: "Founder & Team Lead",
    organization: "Team NullX",
    focus: "Team leadership",
    description:
      "Leading a cybersecurity team across CTF competitions, security research, and technical collaboration; building the Team Forensic Framework with the team.",
    tags: ["Leadership", "Security research", "Digital forensics"],
    mark: "/tnx-mark.png",
  },
  {
    role: "Research Assistant",
    organization: "Department of Software Engineering · Daffodil International University",
    focus: "Research",
    description:
      "Serving as a Research Assistant in the Department of Software Engineering at Daffodil International University under the supervision of Dr. Kamrul Islam Shahin, Associate Professor.",
    tags: ["Research", "Local-first AI", "Privacy"],
    period: "Aug 2026 – Present",
    workMode: "On-site",
  },
  {
    role: "Security Operations Center Analyst",
    organization: "Capacity Buildup Project · Cyber Security Center, DIU",
    focus: "Security operations",
    description:
      "Serving as a SOC Engineer under the Capacity Buildup Project at the Cyber Security Center, Daffodil International University.",
    tags: ["Security intelligence", "Security monitoring", "SOC"],
    period: "Jul 2026 – Present",
    workMode: "Hybrid",
  },
  {
    role: "Undergraduate Student Associate",
    organization: "Cyber Security Centre, DIU",
    focus: "Campus practice",
    description:
      "Developing SOC-oriented skills through campus cybersecurity practice, learning, and peer mentoring.",
    tags: ["SOC", "Security operations", "Mentoring"],
    period: "Nov 2025 – May 2026",
    employmentType: "Part-time",
    location: "Dhaka, Bangladesh",
    workMode: "On-site",
  },
  {
    role: "Event Organizer",
    organization: "Cyber Security Awareness Day 2026 · Cyber Security Center, DIU",
    focus: "Event leadership",
    description:
      "Helped organize Cyber Security Awareness Day 2026 as a Student Associate, coordinating with faculty members and volunteers. The work strengthened event coordination, leadership, and management skills.",
    tags: ["Event coordination", "Leadership", "Cybersecurity awareness"],
  },
  {
    role: "Search Engine Optimization Consultant",
    organization: "ATL Clean · Self-employed",
    focus: "Search optimization",
    description:
      "Provided SEO consultation to more than 30 clients, helping improve digital presence and search rankings.",
    tags: ["Google Search Console", "Ahrefs", "SEO", "Digital marketing"],
    period: "Jan 2023 – Dec 2024",
    location: "United States",
    workMode: "Remote",
  },
  {
    role: "Digital Marketing",
    organization: "Freelance",
    focus: "Digital marketing",
    description: "Freelance digital marketing work.",
    tags: ["Digital marketing", "Social media"],
    period: "Mar 2024",
  },
] as const;

export const marquee =
  "CYBERSECURITY · RESEARCH · ENGINEERING · DIGITAL FORENSICS · TEAM NULLX · ";

export const disciplines = [
  {
    title: "Security Research",
    body: "Authorized offensive practice, web and network assessment, and curiosity about how systems fail, then how to harden them.",
  },
  {
    title: "Digital Forensics",
    body: "Evidence-aware workflows, DFIR tooling, and building frameworks that keep investigation trustworthy.",
  },
  {
    title: "Software Engineering",
    body: "Shipping CLI, web, and desktop surfaces, building useful software with security as a first-class concern.",
  },
] as const;

export const projects = [
  {
    id: "01",
    category: "Digital Forensics · Product",
    title: "Team Forensic Framework (TFF)",
    description:
      "A Linux-based Digital Forensics and Incident Response framework developed by Team NullX, with CLI, web, and Electron surfaces for evidence-aware investigation.",
    features: [
      "CLI, web interface, Electron desktop app",
      "AD1, E01/EX01, RAW/DD, VDI, VMDK, QCOW2, AFF, OVA",
      "PCAP/PCAPNG analysis",
      "Evidence acquisition & case management",
      "Read-only evidence handling",
      "Chain-of-custody documentation",
      "Plugin architecture",
    ],
    tech: ["Linux", "DFIR", "Electron", "CLI", "Forensics"],
    href: undefined as string | undefined,
  },
  {
    id: "02",
    category: "Leadership · Community",
    title: "Team NullX",
    description:
      "Cybersecurity team focused on CTF competitions, security research, offensive security practice, digital forensics, and technical collaboration. Founded and led by Rahat.",
    features: [
      "CTF competition practice",
      "Security research culture",
      "Offensive & defensive learning",
      "Collaborative tooling (incl. TFF)",
    ],
    tech: ["CTF", "Research", "Leadership"],
    href: undefined as string | undefined,
  },
  {
    id: "03",
    category: "Labs · Practice",
    title: "Cybersecurity Research & Labs",
    description:
      "Hands-on practice across web application security, penetration testing methodology, binary exploitation, network security, digital forensics, and SOC/SIEM learning.",
    features: [
      "Web application security",
      "Penetration testing methodology",
      "Binary exploitation labs",
      "Network security",
      "SOC and SIEM practice",
    ],
    tech: ["Pentest", "Web", "Pwn", "SOC"],
    href: "https://github.com/rahatsahriarrafi",
  },
  {
    id: "04",
    category: "AI · Automation",
    title: "AI & Security Automation",
    description:
      "Experiments with AI agents, LLM-powered helpers, and automation that supports investigation and security workflows, including local-first privacy-minded research.",
    features: [
      "AI agents & LLM tooling",
      "Security automation ideas",
      "Local-first / privacy-preserving research",
      "Open-source detectors & monitors",
    ],
    tech: ["Python", "LLMs", "Automation"],
    href: "https://github.com/rahatsahriarrafi",
  },
] as const;

export const expertise = [
  {
    title: "Offensive Security",
    items: [
      "Ethical Hacking",
      "Penetration Testing",
      "Web Exploitation",
      "Binary Exploitation",
      "Vulnerability Assessment",
    ],
  },
  {
    title: "Defensive Security",
    items: [
      "DFIR",
      "SOC",
      "SIEM",
      "Wazuh",
      "Threat Intelligence",
      "Digital Forensics",
    ],
  },
  {
    title: "Engineering",
    items: ["C", "Rust", "Linux", "Kali Linux", "Docker", "Kubernetes", "Proxmox"],
  },
  {
    title: "Intelligent Systems",
    items: ["AI Agents", "LLMs", "Workflow Automation"],
  },
] as const;

export const research = [
  {
    title: "Privacy-preserving local-first AI",
    body: "DIU research direction: assistants that keep data under user control with isolation-minded design.",
  },
  {
    title: "Digital forensics tooling",
    body: "Building TFF surfaces and evidence workflows that stay read-only and custody-aware.",
  },
  {
    title: "Authorized security practice",
    body: "CTFs, labs, and HackerOne research as disciplined, legal offensive learning.",
  },
] as const;

export type Achievement = {
  title: string;
  detail: string;
  image?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Founder & Team Lead",
    detail: "Team NullX, CTF, research, and collaborative security practice.",
  },
  {
    title: "Research Assistant",
    detail: "Daffodil International University, privacy-minded and local-first systems work.",
  },
  {
    title: "HI Cyber Con 2026 CTF",
    detail: "Team NullX, 2nd in Bangladesh and 14th globally among 1,119 teams.",
    image: "/achieve-hicybercon-2026.jpg",
  },
  {
    title: "BCS CTF: Student Category",
    detail: "Team NullX, 16th place. Personal rank: 8.",
    image: "/achieve-bcs-ctf.jpg",
  },
  {
    title: "Academic standing",
    detail: "CGPA 3.81, B.Sc. Software Engineering, DIU (8th semester).",
  },
];

export const stats = [
  { value: "2nd", label: "Bangladesh, HI Cyber Con 2026" },
  { value: "14th", label: "Global, 1,119 teams" },
  { value: "#8", label: "Personal BCS CTF rank" },
  { value: "3.81", label: "CGPA · DIU Software Engineering" },
] as const;

export const journey = [
  {
    title: "Software Engineering at DIU",
    body: "Building foundations in software while specializing toward security and systems.",
  },
  {
    title: "Campus cybersecurity practice",
    body: "DIU Cyber Security Centre, student associate path into SOC-oriented learning and mentoring.",
  },
  {
    title: "Founding Team NullX",
    body: "Leading a team that competes, researches, and builds forensic/security tooling together.",
  },
  {
    title: "CTF & conference competition",
    body: "National and international CTF participation, including HI Cyber Con 2026 and BCS CTF.",
  },
  {
    title: "TFF & research direction",
    body: "Shipping forensic framework ideas and exploring AI-assisted, privacy-aware security workflows.",
  },
] as const;

export const articles = [
  {
    title: "Write-ups & walkthroughs",
    body: "Placeholder for CTF walkthroughs and cybersecurity notes. Add links as you publish.",
    href: profile.linkedin,
  },
  {
    title: "Technical tutorials",
    body: "Placeholder for tutorials and teaching artifacts.",
    href: profile.github,
  },
  {
    title: "Research notes",
    body: "Placeholder for publications and longer-form research writing.",
    href: profile.linkedin,
  },
] as const;
