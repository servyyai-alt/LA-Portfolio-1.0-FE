// Image keys are resolved in CaseStudiesSection via an image map
export const CASE_STUDIES = [
    {
        title: "Shopping Website",
        status: "Active",
        description:
            "Precision e-commerce infrastructure with algorithmic recommendation engine and sub-100ms latency.",
        tags: ["React", "Node.js"],
        imageKey: "shopping",
    },
    {
        title: "Mobile App Development",
        status: "Deployed",
        description:
            "Cross-platform biometric security suite with real-time distributed ledger synchronization.",
        tags: ["Flutter", "Rust"],
        imageKey: "bankcoaching",
    },
    {
        title: "Tourism Website",
        status: "Live",
        description:
            "Immersive destination exploration platform utilizing spatial mapping and dynamic content delivery.",
        tags: ["WebGL", "Go"],
        imageKey: "stardmc",
    },
    {
        title: "AI Agent",
        status: "Optimizing",
        description:
            "Autonomous enterprise agent specialized in predictive resource allocation and workflow automation.",
        tags: ["PyTorch", "Kafka"],
        imageKey: "servyyai",
    },
    {
        title: "Medical Website",
        status: "Secured",
        description:
            "High-security telemedicine infrastructure with integrated diagnostic imaging and patient analytics.",
        tags: ["HIPAA", "AWS"],
        imageKey: "tvaster",
    },
    {
        title: "Nutrition Website",
        status: "Active",
        description:
            "Bio-individualized nutrition mapping platform with real-time biometric feedback synchronization.",
        tags: ["Vue 3", "Django"],
        imageKey: "myblend",
    },
];

export const STATUS_COLOR = {
    Active: "bg-emerald-500/10 text-emerald-600",
    Deployed: "bg-blue-500/10 text-blue-600",
    Live: "bg-cobalt/10 text-cobalt",
    Optimizing: "bg-amber-500/10 text-amber-600",
    Secured: "bg-rose-500/10 text-rose-600",
};