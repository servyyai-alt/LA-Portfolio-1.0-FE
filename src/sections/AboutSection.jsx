import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const approachItems = [
    { id: "01", title: "Discovery", text: "We understand your business goals and requirements in depth." },
    { id: "02", title: "Planning", text: "We design the architecture and roadmap aligned to your vision." },
    { id: "03", title: "Development", text: "Agile development with regular updates and clear milestones." },
    { id: "04", title: "Testing & Launch", text: "We ensure quality at every layer and deploy smoothly." },
    { id: "05", title: "Support & Scaling", text: "Continuous improvements and scaling support post-launch." },
];

export default function AboutSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section id="about" className="bg-cloud section-pad">
            <div className="container-xl">
                <div className="grid gap-14 lg:grid-cols-2 lg:gap-20" ref={ref}>
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionLabel>Who We Are</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-[-0.02em] leading-[1.1]">
                            Engineering That
                            <br />
                            <span className="gradient-text">Moves With Purpose</span>
                        </h2>

                        <p className="mt-8 text-base sm:text-lg text-slate-600 leading-[1.7] max-w-xl">
                            Least Action is a forward-thinking technology company that believes in the
                            principle of maximum output through minimal complexity.
                        </p>

                        <p className="mt-5 text-[15px] text-slate-500 leading-[1.75] max-w-xl">
                            We eliminate digital entropy by architecting systems where precision meets
                            performance. Our mission is to solve complex problems through elegant,
                            resilient engineering that scales with your vision.
                        </p>

                        <blockquote className="mt-8 pl-5 border-l-2 border-cobalt">
                            <p className="text-base italic text-slate-600">
                                "Architecting the future through precision and calculated restraint."
                            </p>
                        </blockquote>
                    </motion.div>

                    {/* Right — Process */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <SectionLabel>Our Process</SectionLabel>
                        <div className="space-y-0">
                            {approachItems.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                                    className="group flex gap-5 py-5 border-b border-mist last:border-0 hover:bg-cloud/50 -mx-4 px-4 rounded-xl transition-colors duration-200 cursor-default"
                                >
                                    <span className="font-display text-2xl font-bold text-cobalt/30 group-hover:text-cobalt/60 transition-colors shrink-0 w-10">
                                        {item.id}
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-ink text-sm sm:text-base mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
