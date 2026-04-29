import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CAPABILITIES } from "@/constants/capabilities";
import SectionLabel from "@/components/ui/SectionLabel";

// Asset imports
import customDevIcon from "@/assets/customdev.png";
import aiAgentsIcon from "@/assets/AI AGENTS.png";
import mobileIcon from "@/assets/MOBILE & APP.png";
import productIcon from "@/assets/PRODUCT DESIGN.png";

const ICON_MAP = {
    customdev: customDevIcon,
    ai: aiAgentsIcon,
    mobile: mobileIcon,
    product: productIcon,
};

function CapabilityCard({ item, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const icon = ICON_MAP[item.iconKey];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-mist card-lift cursor-default"
        >
            {/* Number watermark */}
            <span className="absolute top-5 right-6 font-display text-6xl font-bold text-slate-100 select-none group-hover:text-cobalt/10 transition-colors duration-300">
                {item.number}
            </span>

            <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-cloud flex items-center justify-center mb-6 group-hover:bg-cobalt/10 transition-colors duration-300">
                    <img src={icon} alt={item.title} className="w-6 h-6 object-contain" />
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-ink mb-3">
                    {item.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed">
                    {item.description}
                </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cobalt rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.div>
    );
}

export default function CapabilitiesSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section id="capabilities" className="bg-cloud section-pad">
            <div className="container-xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <SectionLabel>What We Do</SectionLabel>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-[-0.02em]">
                        What We Can Build For You
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto text-[15px] text-slate-500 leading-relaxed">
                        Full-spectrum digital engineering across web, mobile, AI, and custom platforms.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {CAPABILITIES.map((item, i) => (
                        <CapabilityCard key={item.title} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}