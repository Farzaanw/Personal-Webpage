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
  featured: [
    { title: "Code Coach", summary: "Multi-agent PR review on EKS + Bedrock. Go agent runtime with MCP tools, saving ~5–10 reviewer hours a week.", stack: ["Go", "AWS EKS", "Bedrock", "MCP", "Terraform", "OTel"] },
    { title: "Glassbox", summary: "BeaverHacks 1st place. Agentic security audit platform with ESP32 / Raspberry Pi Pico hardware confirmation.", stack: ["Go", "MCP", "RAG", "FAISS"] },
    { title: "BeaverBench", summary: "Led a 7-person team building a lab asset management platform for university research labs.", stack: ["Product Lead", "Agile", "Full-stack"] },
    { title: "MaptivityAI", summary: "Map-based discovery platform with an AI trip generator and centralised itinerary management.", stack: ["AI", "Maps", "Full-stack"] },
    { title: "OSU APR Research", summary: "LLM-based Automated Program Repair patch validation via inferred program specifications.", stack: ["LLM", "HPC", "Python"] },
  ],
  journey: ["2020 Tutor", "2023 AI Camp", "2025 OSU Research", "2026 Cambia PIE", "2026 Cambia PEDEX / Code Coach", "Now: DevEx AI, Cambia"],
  skills: {
    languages: ["Python", "Go", "C++", "Java", "JavaScript", "TypeScript", "SQL", "Bash"],
    cloud: ["AWS", "Kubernetes (EKS)", "Terraform", "Docker", "CircleCI / ArgoCD", "OpenTelemetry"],
    ai: ["Anthropic SDK (Go)", "MCP", "RAG", "FAISS", "Claude Code"],
  },
  beyondCode: "Eugene marathon '25 · HYROX Portland May '27 · Long Beach Half Oct '27",
};
export default siteContent;
