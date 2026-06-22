import { useRef,useState } from "react";
import { motion, useInView } from "framer-motion";
import projectdata from "@/constants/projectData";
import Tag from "@/components/ui/Tag";

// Project image imports
import bookserviceImage from "@/assets/project/bookservice.png";
import citywashImage from "@/assets/project/citywash.png";
import milocabsImage from "@/assets/project/milocabs.png";
import myblendImage from "@/assets/project/myblend.png";
import petcareImage from "@/assets/project/petcare.jpeg";
import servyyaiImage from "@/assets/project/servyyai.png";
import stardmcUiImage from "@/assets/project/stardmc-ui.png";
import staygoodImage from "@/assets/project/staygood.png";
import tvasterImage from "@/assets/project/tvaster.png";
import bankcoaching from "@/assets/project/bankcoaching.png";
import sportsott from "@/assets/project/sportsott.png";
import spectrumhomeopathy from "@/assets/project/spectrum-homeopathy.png";
import news from "@/assets/project/news.png";
import arvesta from "@/assets/project/arvesta-finance.png";
import vallal from "@/assets/project/vallal.png";
import sriandal from "@/assets/project/sri-andal-matrimony.png";

const IMAGE_MAP = {
    "/assets/project/bankcoaching.png": bankcoaching,
    "/assets/project/sportsott.png": sportsott,
    "/assets/project/bookservice.png": bookserviceImage,
    "/assets/project/citywash.png": citywashImage,
    "/assets/project/milocabs.png": milocabsImage,
    "/assets/project/myblend.png": myblendImage,
    "/assets/project/petcare.png": petcareImage,
    "/assets/project/servyyai.png": servyyaiImage,
    "/assets/project/stardmc-ui.png": stardmcUiImage,
    "/assets/project/staygood.png": staygoodImage,
    "/assets/project/tvaster.png": tvasterImage,
    "/assets/project/spectrum-homeopathy.png": spectrumhomeopathy,
    "/assets/project/news.png": news,
    "/assets/project/arvesta-finance.png": arvesta,
    "/assets/project/vallal.png": vallal,
    "/assets/project/sri-andal-matrimony.png": sriandal,
};

function ProjectCard({ project, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    const isReverse = index % 2 === 1;
    const projectImage = IMAGE_MAP[project.image] ?? stardmcUiImage;

    const feedback =
        project?.feedback && project.feedback !== "Not provided"
            ? `"${project.feedback}"`
            : `"Least Action built a strong digital experience aligned with business goals and long-term growth."`;

    return (
        <motion.div
            id={`project-${project.id ?? index + 1}`}
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`grid gap-12 lg:grid-cols-2 items-center ${
                isReverse
                    ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                    : ""
            }`}
        >
            {/* LEFT CONTENT */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.7 }}
            >
                <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex bg-cobalt/10 text-cobalt text-[11px] font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {project?.category ?? "Project"}
                    </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-[-0.02em] mb-6">
                    {project?.title}
                </h2>

                <div className="space-y-5">
                    {[
                        {
                            title: "Client Overview",
                            content: project?.clientOverview,
                        },
                        {
                            title: "Problem Statement",
                            content: project?.problem,
                        },
                        {
                            title: "Our Solution",
                            content: project?.solution,
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.3 + i * 0.1,
                                duration: 0.5,
                            }}
                            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-cobalt mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm sm:text-[15px]  leading-relaxed">
                                {item.content}
                            </p>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                        }}
                        className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-cobalt mb-3">
                            Key Features
                        </h3>

                        <ul className="space-y-2">
                            {(project?.features ?? []).map((feature, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm sm:text-[15px] "
                                >
                                    <span className="text-cobalt mt-0.5 shrink-0">
                                        →
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>

            {/* RIGHT IMAGE + DETAILS */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.7 }}
            >
                {/* IMAGE FIXED */}
                <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                    <div className="overflow-hidden">
                        {project?.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title} in new tab`}
                                className="block"
                            >
                                <img
                                    src={projectImage}
                                    alt={project?.title}
                                    loading="lazy"
                                    className="w-full h-auto min-h-[320px] sm:min-h-[420px] object-contain bg-white group-hover:scale-105 transition duration-700 cursor-pointer"
                                />
                            </a>
                        ) : (
                            <img
                                src={projectImage}
                                alt={project?.title}
                                loading="lazy"
                                className="w-full h-auto min-h-[320px] sm:min-h-[420px] object-contain bg-white group-hover:scale-105 transition duration-700"
                            />
                        )}
                    </div>
                </div>

                {/* FEEDBACK CARD */}
                <motion.blockquote
                    whileHover={{ y: -4 }}
                    className="mt-6 rounded-2xl bg-cobalt px-6 py-6 shadow-lg"
                >
                    {project?.category && (
                        <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2">
                            Client Type: {project.category}
                        </p>
                    )}

                    <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed italic">
                        {feedback}
                    </p>
                </motion.blockquote>

                {/* RESULT CARD */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className="mt-5 rounded-2xl border border-cobalt/15 bg-cobalt/5 px-6 py-5"
                >
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-cobalt mb-2">
                        Results
                    </p>

                    <p className="text-sm sm:text-[15px]  leading-relaxed">
                        {project?.results ??
                            "Delivered successfully with premium quality and business-focused execution."}
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default function ProjectSection() {

        const [projectType, setProjectType] = useState("website");

    const filteredProjects = projectdata.filter(
        (project) => project.type === projectType
    );

    return (
        <section
            id="project"
            className="bg-white py-20 sm:py-24 lg:py-32"
        >
            <div className="flex justify-center mb-16">
                <div className="inline-flex p-1 bg-slate-100 rounded-full">
                    <button
                        onClick={() => setProjectType("website")}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                            projectType === "website"
                                ? "bg-cobalt text-white shadow-md"
                                : "text-slate-600"
                        }`}
                    >
                        🌐 Website Projects
                    </button>
            
                    <button
                        onClick={() => setProjectType("app")}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                            projectType === "app"
                                ? "bg-cobalt text-white shadow-md"
                                : "text-slate-600"
                        }`}
                    >
                        📱 Mobile Apps
                    </button>
                </div>
            </div>

            <div className="container-xl space-y-24 sm:space-y-28 lg:space-y-32">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id ?? project.title}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}

