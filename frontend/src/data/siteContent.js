// Rebuild content — single source for the new homepage (feat/site-enhancements).
// Data only; styling lives in the design system, so editing copy here updates the page.
export const siteContent = {
  name: "Farzaan Wadiwalla",
  role: "Software Engineer — AI Systems & Cloud Platforms",
  metrics: [
    { value: "300+", label: "engineers on Code Coach" },
    { value: "25–50", label: "PRs reviewed / week" },
    { value: "~5–10", label: "reviewer hours saved / week" },
    { value: "1st", label: "BeaverHacks — Glassbox" },
    { value: "3rd", label: "HackUp, of 70+ teams — LectureLife" },
    { value: "7-person", label: "team led — BeaverBench" },
    { value: "10k+", label: "code samples in APR research" },
    { value: "Open-source", label: "OTel telemetry framework for AI tooling" },
    { value: "POC → Prod", label: "Code Coach shipped to production" },
    { value: "Org-wide", label: "engineering demo presentations" },
  ],
  featured: [
    { title: "Code Coach", summary: "Multi-agent PR review on EKS + Bedrock. Go agent runtime with MCP tools, saving ~5–10 reviewer hours a week.", stack: ["Go", "AWS EKS", "Bedrock", "MCP", "Terraform", "OTel"] },
    { title: "Glassbox", summary: "BeaverHacks 1st place. Agentic security audit platform with ESP32 / Raspberry Pi Pico hardware confirmation.", stack: ["Go", "MCP", "RAG", "FAISS"] },
    { title: "BeaverBench", summary: "Led a 7-person team building a lab asset management platform for university research labs.", stack: ["Product Lead", "Agile", "Full-stack"] },
    { title: "MaptivityAI", summary: "Map-based discovery platform with an AI trip generator and centralised itinerary management.", stack: ["AI", "Maps", "Full-stack"] },
    { title: "Teachly", summary: "Full-stack education platform, built as a personal project alongside MaptivityAI.", stack: ["Full-stack", "Education"] },
    { title: "OSU APR Research", summary: "LLM-based Automated Program Repair patch validation via inferred program specifications.", stack: ["LLM", "HPC", "Python"] },
  ],
  journey: ["2020 Tutor", "2023 AI Camp", "2025 OSU Research", "2026 Cambia PIE", "2026 Cambia PEDEX / Code Coach", "Now: DevEx AI, Cambia"],
  journeyTimeline: [
    { date: "2020–2023", title: "Math Tutor", org: "Friendly House", summary: "Math tutoring — an early teaching role.", bullets: ["Tutored math students at Friendly House, 2020–2023", "Volunteer teaching role that predates all university work"], skills: ["Mathematics", "Communication"] },
    { date: "May–Jul 2023", title: "AI/ML Product Engineering Intern", org: "AI Camp", summary: "Product Manager + Data Scientist — led two AI products end to end.", bullets: ["Sentiment Analysis Detector for online shopping reviews — 90%+ accuracy", "AMANDA, AI medical assistant for skin-disease detection — 85%+ accuracy, YOLO classifier", "Built ML pipelines: preprocessing, labelling, fine-tuning, evaluation, full-stack deployment", "Presented product outcomes to company leadership"], skills: ["Python", "Scikit-Learn", "React", "Flask", "NLTK", "YOLO"] },
    { date: "Sep 2023–May 2024", title: "Differential Calculus TA", org: "Oregon State University", summary: "Supported MTH 111Z and MTH 252H students.", bullets: ["TA for Differential Calculus (MTH 111Z, MTH 252H)", "Helped students work through problem sets and exam preparation"], skills: ["Mathematics", "Communication"] },
    { date: "Apr 2024–Apr 2025", title: "Operations Representative", org: "Dixon Recreation Center, OSU", summary: "Facility access, memberships, and in-person user support.", bullets: ["Ran facility access and memberships at OSU's Dixon Recreation Center", "Handled in-person user support for a busy campus facility"], skills: ["Operations", "Customer Service"] },
    { date: "May 2025–Present", title: "Undergraduate AI Researcher", org: "OSU SWE Department", summary: "LLM-based APR patch validation via inferred program specs, built on 10,000+ code samples.", bullets: ["Scalable LLM-based technique to improve APR patch validation in developer workflows", "Automated data curation pipelines for 10,000+ code samples", "HPC-based model testing and prompt A/B testing to find top open-source models and improve spec accuracy"], skills: ["LLM", "Python", "HPC", "Prompt Engineering"] },
    { date: "Summer 2025", title: "Front Desk Associate", org: "TopGolf", summary: "Front desk and guest experience.", bullets: ["Front desk and guest experience at TopGolf", "Fast-paced, customer-facing summer role"], skills: ["Customer Service", "Operations"] },
    { date: "Oct–Dec 2025", title: "Product Lead / Developer", org: "BeaverBench, OSU SWE Team Project", summary: "Led a 7-person team building a lab asset management platform.", bullets: ["Led a 7-person engineering team as Product Lead / Developer", "Designed and delivered a user-centric lab asset management platform for university research labs", "Owned sprint planning, user stories, system requirements, and testing strategies via Agile / Git workflows"], skills: ["Product Leadership", "Agile", "Git", "Full-stack"] },
    { date: "Key moment", title: "HackUp — 3rd Place, First Hackathon", org: "University of Portland", summary: "LectureLife, a Claude-powered slide platform built in 24 hours. Date not on record.", bullets: ["First hackathon — built LectureLife in 24 hours with a team met that day", "Claude-powered slide-transformation platform", "Placed 3rd of 70+ teams, with Zakia Yesmin, Saranya Sounder Rajan, and Jayasnehasree Sannidhi"], skills: ["Claude", "Hackathon", "Product Building"] },
    { date: "Apr 2026", title: "BeaverHacks — 1st Place, Glassbox", org: "Oregon State University", summary: "Agentic security audit platform with ESP32 hardware confirmation.", bullets: ["1st place, BeaverHacks — Glassbox security audit agent", "Go agent orchestration with MCP for full-repo security scanning", "RAG pipeline with FAISS + NVIDIA Nemotron for semantic security knowledge retrieval", "ESP32 + Raspberry Pi Pico hardware confirmation (side-channel detection)", "Earlier GlassBox recognition: Best Agentic Infrastructure, BeaverHacks Fall 2025"], skills: ["Go", "MCP", "RAG", "FAISS", "Nemotron", "ESP32", "Raspberry Pi Pico"] },
    { date: "2026", title: "Platform Engineering — PIE", org: "Cambia Health Solutions", summary: "EventBridge stale-cache scheduler, Datadog VPC IP-exhaustion monitoring, presented at engineering demos.", bullets: ["EventBridge scheduler that eliminated NPM stale-cache failures for Artifactory metadata", "Datadog monitoring for VPC subnet IP exhaustion, with alerts", "Redis → Valkey migration documentation", "Presented at engineering demos and worked closely with senior engineers on the developer platform and cloud ecosystem"], skills: ["AWS", "EventBridge", "Datadog", "Terraform", "Valkey"] },
    { date: "2026", title: "Platform / DevEx — PEDEX, Code Coach", org: "Cambia Health Solutions", summary: "Code Coach from POC to production: multi-agent PR review on EKS + Bedrock.", bullets: ["Code Coach from POC to production, rolling out to 300+ engineers", "Reviewing 25–50 PRs/week, saving ~5–10 reviewer hours/week", "Go agent runtime on Anthropic SDK: concurrent execution, pod-based scaling, tool orchestration, MCP, HMAC verification, cache control", "Open-source OpenTelemetry telemetry framework for AI tooling (Atlassian MCP, Claude PR review workflow)", "Terraform infrastructure with senior engineers; presented architecture at org-wide engineering demos"], skills: ["Go", "AWS EKS", "Bedrock", "MCP", "Terraform", "OTel", "Lambda", "SQS", "S3"] },
    { date: "Side projects", title: "Teachly + MaptivityAI", org: "Personal projects", summary: "Full-stack education platform and a map-based AI trip generator.", bullets: ["Teachly: full-stack education platform", "MaptivityAI: map-based discovery platform with AI trip generator and centralised itinerary management"], skills: ["Full-stack", "AI", "Maps"] },
    { date: "Sep 2026–Mar 2027", title: "DevEx AI Engineer (Contractor)", org: "Cambia Health Solutions", summary: "Productizing Code Coach, Bedrock AgentCore migration, guiding Maturity Matrix and Living Documentation agents.", bullets: ["Productizing Code Coach and driving adoption across engineering teams", "Integrations for migration to AWS Bedrock AgentCore", "OTel / Datadog agent-performance and ROI tracking", "Guiding two new agents: Maturity Matrix and Living Documentation", "Next: Kusari Inspector integration"], skills: ["Bedrock AgentCore", "OTel", "Datadog", "Go", "MCP"] },
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
