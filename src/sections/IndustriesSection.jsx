import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaShoppingCart, FaGraduationCap, FaTruck } from "react-icons/fa";
import { INDUSTRIES } from "@/constants/industries";
import SectionLabel from "@/components/ui/SectionLabel";

const ICON_MAP = {
    FaShieldAlt: <FaShieldAlt />,
    FaShoppingCart: <FaShoppingCart />,
    FaGraduationCap: <FaGraduationCap />,
    FaTruck: <FaTruck />,
};

export default function IndustriesSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section className="bg-cloud section-pad">
            <div className="container-xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-14"
                >
                    <SectionLabel>Industries</SectionLabel>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-[-0.02em]">
                        Industries We Serve
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto text-[15px] text-slate-500 leading-relaxed">
                        Institutional-grade digital infrastructure tailored to the rigorous demands of
                        global commerce — built to scale while maintaining the highest standards.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {INDUSTRIES.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 25 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                            className="bg-white rounded-2xl p-7 border border-mist card-lift group"
                        >
                            <div
                                className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5 text-xl ${item.color} transition-transform group-hover:scale-110 duration-300`}
                            >
                                {ICON_MAP[item.iconName]}
                            </div>
                            <h3 className="font-display text-lg font-bold text-ink mb-3">{item.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}