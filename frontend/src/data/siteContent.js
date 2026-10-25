// Rebuild content — single source for the new homepage (feat/site-enhancements).
// Data only; styling lives in the design system, so editing copy here updates the page.
export const siteContent = {
  name: "Farzaan Wadiwalla",
  role: "Software Engineer — AI Systems & Cloud Platforms",
  status: "DevEx AI Engineer at Cambia · OSU Honors CS '27 · Open to 2027 new-grad roles",
  metrics: [
    { value: "300+", label: "engineers on Code Coach" },
    { value: "25–50", label: "PRs reviewed / week" },
    { value: "10k+", label: "code samples in APR research" },
    { value: "1st", label: "BeaverHacks — Glassbox" },
  ],
  highlights: [
    "300+ engineers use Code Coach",
    "25–50 PRs reviewed every week",
    "~5–10 reviewer hours saved weekly",
    "BeaverHacks 1st place — Glassbox",
    "HackUp 3rd of 70+ teams — LectureLife",
    "Led a 7-person team — BeaverBench",
    "10,000+ code samples curated for APR research",
    "Open-source OTel telemetry framework for AI tooling",
    "Shipped Code Coach from POC to production",
    "Presented at org-wide engineering demos",
  ],
  featured: [
    { title: "Code Coach", summary: "Multi-agent PR review on EKS + Bedrock. Go agent runtime with MCP tools, saving ~5–10 reviewer hours a week.", stack: ["Go", "AWS EKS", "Bedrock", "MCP", "Terraform", "OTel"] },
    { title: "Glassbox", summary: "BeaverHacks 1st place. Agentic security audit platform with ESP32 / Raspberry Pi Pico hardware confirmation.", stack: ["Go", "MCP", "RAG", "FAISS"] },
    { title: "BeaverBench", summary: "Led a 7-person team building a lab asset management platform for university research labs.", stack: ["Product Lead", "Agile", "Full-stack"] },
    { title: "MaptivityAI", summary: "Map-based discovery platform with an AI trip generator and centralised itinerary management.", stack: ["AI", "Maps", "Full-stack"] },
    { title: "OSU APR Research", summary: "LLM-based Automated Program Repair patch validation via inferred program specifications.", stack: ["LLM", "HPC", "Python"] },
  ],
  journey: ["2020 Tutor", "2023 AI Camp", "2025 OSU Research", "2026 Cambia PIE", "2026 Cambia PEDEX / Code Coach", "Now: DevEx AI, Cambia"],
  journeyTimeline: [
    { date: "2020–2023", title: "Math Tutor", org: "Friendly House", summary: "Math tutoring — an early teaching role." },
    { date: "May–Aug 2023", title: "AI/ML Product Engineering Intern", org: "AI Camp", summary: "Sentiment Analysis Detector and AMANDA, an AI medical assistant with skin-disease detection." },
    { date: "Sep 2023–May 2024", title: "Differential Calculus TA", org: "Oregon State University", summary: "Supported MTH 111Z and MTH 252H students." },
    { date: "Apr 2024–Apr 2025", title: "Operations Representative", org: "Dixon Recreation Center, OSU", summary: "Facility access, memberships, and in-person user support." },
    { date: "2025–Present", title: "Undergraduate AI Researcher", org: "OSU SWE Department", summary: "LLM-based APR patch validation via inferred program specs, built on 10,000+ code samples." },
    { date: "Summer 2025", title: "Front Desk Associate", org: "TopGolf", summary: "Front desk and guest experience." },
    { date: "Oct–Dec 2025", title: "Product Lead / Developer", org: "BeaverBench, OSU SWE Team Project", summary: "Led a 7-person team building a lab asset management platform." },
    { date: "Key moment", title: "HackUp — 3rd Place, First Hackathon", org: "University of Portland", summary: "LectureLife, a Claude-powered slide platform built in 24 hours. Date not on record." },
    { date: "Apr 2026", title: "BeaverHacks — 1st Place, Glassbox", org: "Oregon State University", summary: "Agentic security audit platform with ESP32 hardware confirmation." },
    { date: "2026", title: "Platform Engineering — PIE", org: "Cambia Health Solutions", summary: "EventBridge stale-cache scheduler, Datadog VPC IP-exhaustion monitoring, presented at engineering demos." },
    { date: "2026", title: "Platform / DevEx — PEDEX, Code Coach", org: "Cambia Health Solutions", summary: "Code Coach from POC to production: multi-agent PR review on EKS + Bedrock." },
    { date: "Side projects", title: "Teachly + MaptivityAI", org: "Personal projects", summary: "Full-stack education platform and a map-based AI trip generator." },
    { date: "Sep 2026–Mar 2027", title: "DevEx AI Engineer (Contractor)", org: "Cambia Health Solutions", summary: "Productizing Code Coach, Bedrock AgentCore migration, guiding Maturity Matrix and Living Documentation agents." },
  ],
  skills: {
    languages: ["Python", "Go", "C++", "Java", "JavaScript", "TypeScript", "SQL", "Bash"],
    cloud: ["AWS", "Kubernetes (EKS)", "Terraform", "Docker", "CircleCI / ArgoCD", "OpenTelemetry", "Bedrock", "Lambda", "SQS", "S3", "API Gateway", "EventBridge", "Datadog", "Valkey"],
    ai: ["Anthropic SDK (Go)", "MCP", "RAG", "FAISS", "Claude Code", "Bedrock AgentCore", "NVIDIA Nemotron", "YOLO", "NLTK"],
    webEdge: ["React", "Vite", "Flask", "ESP32", "Raspberry Pi Pico"],
  },

  beyondCodeExperiences: [
    { title: "Eugene Marathon (2026)", detail: "Completed the Eugene marathon." },
    { title: "Mt. Hood Summit", detail: "Climbed Mt. Hood's summit crest." },
    { title: "HYROX Portland (In Progress)", detail: "Training for HYROX Portland, May 21–23, 2027." },
  ],
};
export default siteContent;
