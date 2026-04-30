import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CAPABILITIES } from "@/constants/capabilities";
import SectionLabel from "@/components/ui/SectionLabel";

// Asset imports
import customDevIcon from "@/assets/customdev.png";
import aiAgentsIcon from "@/assets/AI AGENTS.png";
import mobileIcon from "@/assets/MOBILE & APP.png";
import productIcon from "@/assets/PRODUCT DESIGN.png";
import marketingIcon from "@/assets/PRODUCT DESIGN.png";

const ICON_MAP = {
    customdev: customDevIcon,
    ai: aiAgentsIcon,
    mobile: mobileIcon,
    product: productIcon,
    marketing: marketingIcon,
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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Number */}
      <span className="absolute top-4 right-5 text-5xl font-bold text-gray-100 group-hover:text-cobalt/10 transition">
        {item.number}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-cobalt/10 transition">
        <img src={icon} alt={item.title} className="w-6 h-6 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm  leading-relaxed">
        {item.description}
      </p>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cobalt scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
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
                    <h2 className="type-section-title text-ink">
                        What We Can Build For You
                    </h2>
                    <p className="type-body-copy mt-4 mx-auto max-w-xl ">
                        Full-spectrum digital engineering across web, mobile, AI, and custom platforms.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {CAPABILITIES.map((item, i) => (
                        <CapabilityCard key={item.title} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
