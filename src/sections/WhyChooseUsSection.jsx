import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

// const reasons = [
//   {
//     title: "Dedicated Project Manager",
//     description: "A single point of contact who ensures clear communication..."
//   },
//   {
//     title: "Agile Development Process",
//     description: "We follow agile methodologies to deliver faster..."
//   },
//   {
//     title: "Weekly Progress Updates",
//     description: "Regular updates keep you informed..."
//   },
//   {
//     title: "Reliable Post-Launch Support",
//     description: "Our commitment doesn't end at launch..."
//   }
// ];
const reasons = [
    {
        title: "Dedicated Project Manager",
        description:
            "A single point of contact who ensures clear communication, timely delivery, and complete accountability throughout the project lifecycle.",
        // icon: "👤",
    },
    {
        title: "Agile Development Process",
        description:
            "We follow agile methodologies to deliver faster iterations, adapt quickly to changes, and maintain full transparency during development.",
        // icon: "⚡",
    },
    {
        title: "Weekly Progress Updates",
        description:
            "Regular updates keep you informed on milestones, timelines, and next steps, ensuring complete visibility at every stage.",
        // icon: "📊",
    },
    {
        title: "Reliable Post-Launch Support",
        description:
            "Our commitment doesn't end at launch — we provide ongoing maintenance, updates, and technical support to ensure long-term success.",
        // icon: "🛡️",
    },
];
const trustItems = [
    "14+ successful projects delivered",
    "Clients across 3 countries",
    "Agile, transparent process",
];

export default function WhyChooseUsSection() {
    const [openIndex, setOpenIndex] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section id="why-choose-us" className="bg-white section-pad">
            <div className="container-xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start" ref={ref}>
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <SectionLabel>Why Us</SectionLabel>
                        <h2 className="type-section-title text-ink">
                            Why Clients Choose
                            <br />
                            <span className="gradient-text">Least Action</span>
                        </h2>
                        <p className="type-body-copy mt-6 max-w-md ">
                            We build scalable, high-performance digital solutions tailored to your
                            business goals — on time and with total transparency.
                        </p>

                        <div className="mt-10 flex flex-col gap-4">
                            {trustItems.map((item) => (
                                <div key={item} className="flex items-center gap-3 type-body-copy ">
                                    <span className="w-5 h-5 rounded-full bg-cobalt/10 flex items-center justify-center shrink-0">
                                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                                            <path
                                                d="M2 6l3 3 5-5"
                                                stroke="#1a56ff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Accordion */}
                    {/* <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-3"
                    >
                        {reasons.map((reason, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <article
                                    key={reason.title}
                                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen
                                            ? "border-cobalt/30 bg-cobalt/[0.03] shadow-glow-sm"
                                            : "border-mist bg-cloud hover:border-cobalt/20"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{reason.icon}</span>
                                            <span
                                                className={`text-sm sm:text-base font-semibold transition-colors ${isOpen ? "text-cobalt" : "text-ink"
                                                    }`}
                                            >
                                                {reason.title}
                                            </span>
                                        </div>
                                        <motion.span
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isOpen ? "bg-cobalt text-white" : "bg-mist text-slate-400"
                                                }`}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
                                                <path
                                                    d="M5 9l7 7 7-7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </motion.span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: "auto" }}
                                                exit={{ height: 0 }}
                                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-5 text-sm  leading-relaxed pl-[3.25rem]">
                                                    {reason.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </article>
                            );
                        })}
                    </motion.div> */}
                    <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="space-y-4"
>
  {reasons.map((reason, index) => {
    const isOpen = openIndex === index;

    return (
      <article
        key={reason.title}
        onMouseEnter={() => setOpenIndex(index)}
        onMouseLeave={() => setOpenIndex(-1)}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
          isOpen
            ? "border-cobalt bg-cobalt/5 shadow-lg scale-[1.02]"
            : "border-gray-200 bg-white hover:border-cobalt/40"
        }`}
      >
        {/* Header */}
        <div className="px-6 py-5">
          <h3
            className={`className="text-base font-semibold text-gray-800 relative pl-5 border-l-2 border-cobalt ${
              isOpen ? "text-cobalt" : "text-gray-800"
            }`}
          >
            {/* <h3 className="text-base font-semibold text-gray-800 relative pl-5 border-l-2 border-cobalt">
  {reason.title}
</h3> */}
            {reason.title}
          </h3>
        </div>

        {/* Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="px-6 pb-5 text-sm  leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    );
  })}
</motion.div>
                </div>
            </div>
        </section>
    );
}
