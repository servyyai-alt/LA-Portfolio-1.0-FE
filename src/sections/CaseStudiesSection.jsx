import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CASE_STUDIES, STATUS_COLOR } from "@/constants/caseStudies";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";

// Asset imports
import shoppingImage from "@/assets/SHOPPINGWEBSITE.png";
import bankcoachingImage from "@/assets/project/bankcoaching.png";
import stardmcImage from "@/assets/project/stardmc-ui.png";
import servyyaiImage from "@/assets/project/servyyai.png";
import tvasterImage from "@/assets/project/tvaster.png";
import myblendImage from "@/assets/project/myblend.png";

const IMAGE_MAP = {
    shopping: shoppingImage,
    bankcoaching: bankcoachingImage,
    stardmc: stardmcImage,
    servyyai: servyyaiImage,
    tvaster: tvasterImage,
    myblend: myblendImage,
};

export default function CaseStudiesSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section id="studies" className="bg-white section-pad">
            <div className="container-xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-14"
                >
                    <SectionLabel>Case Studies</SectionLabel>
                    <h2 className="type-section-title text-ink">
                        Selected Technical Deployments
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CASE_STUDIES.map((item, i) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 25 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group bg-cloud rounded-2xl overflow-hidden border border-mist card-lift"
                        >
                            <div className="overflow-hidden h-52">
                                <img
                                    src={IMAGE_MAP[item.imageKey]}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                                    <span
                                        className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${STATUS_COLOR[item.status] || "bg-mist "
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </div>
                                <p className="text-sm  leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <Tag key={tag}>{tag}</Tag>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
