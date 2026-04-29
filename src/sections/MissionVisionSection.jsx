import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const items = [
    {
        id: "01",
        label: "Mission",
        title: "The Neural Standard",
        text: "To empower businesses with smart, scalable, and efficient digital solutions, establishing a new global benchmark for high-performance enterprise applications.",
    },
    {
        id: "02",
        label: "Vision",
        title: "Autonomous Excellence",
        text: "To become a trusted technology partner for businesses worldwide, creating a future where digital interfaces are an invisible extension of intent, powered by robust AI and flawless architecture.",
    },
];

export default function MissionVisionSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section className="section-pad overflow-hidden bg-white">
            <div className="container-xl">
                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center" ref={ref}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionLabel>Our Direction</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-[-0.02em] leading-[1.1]">
                            Mission &<br />Vision
                        </h2>
                        <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-slate-600">
                            Guided by a commitment to excellence and a forward-looking perspective on the
                            digital landscape.
                        </p>
                        <p className="mt-4 max-w-md text-sm leading-[1.75] text-slate-500">
                            Our core philosophy revolves around creating lasting value through
                            technological superiority and strategic foresight.
                        </p>
                    </motion.div>

                    <div className="space-y-5">
                        {items.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.55, delay: i * 0.15 }}
                                className="group relative rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                            >
                                <div className="flex gap-5 items-start">
                                    <span className="font-display text-3xl font-bold text-cobalt/40 transition-colors group-hover:text-cobalt shrink-0">
                                        {item.id}
                                    </span>
                                    <div>
                                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-cobalt">
                                            {item.label}
                                        </p>
                                        <h3 className="mb-3 font-display text-lg font-bold text-ink sm:text-xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm leading-[1.75] text-slate-600 sm:text-[15px]">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
