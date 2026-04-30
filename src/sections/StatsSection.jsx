import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { STATS } from "@/constants/stats";

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const statNotes = [
    "Built through repeatable product delivery and strong systems thinking.",
    "Trusted collaboration across regions and distributed client teams.",
    "Cross-functional capability supporting ambitious digital roadmaps.",
    "Partnerships shaped by results, polish, and long-term consistency.",
];

export default function StatsSection() {
    const sectionRef = useRef(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTriggered(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] py-14 sm:py-20 lg:-mt-4 lg:py-24"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,143,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(76,201,255,0.08),transparent_26%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/15 to-transparent" />

            <div className="container-xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-[34px] border border-slate-200 bg-white/85 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-6 lg:p-8"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(239,246,255,0.72)_34%,rgba(255,255,255,0.92)_100%)]" />

                    <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-cobalt/15 bg-cobalt/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cobalt">
                                Performance snapshot
                            </div>
                            <h2 className="type-section-title mt-5 text-ink">
                                Clear numbers presented in a lighter, more professional format.
                            </h2>
                            <p className="type-body-copy mt-4 max-w-xl ">
                                These metrics support credibility while keeping the visual tone clean,
                                modern, and easier to scan in a bright product-led layout.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {["Executive-ready", "Clean reporting", "Visual clarity", "Modern trust"].map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm  shadow-[0_10px_25px_rgba(15,23,42,0.04)]"
                                    >
                                        {item}
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        className="relative mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
                    >
                        {STATS.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                variants={cardVariants}
                                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,143,255,0.14),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/30 to-transparent" />

                                <div className="relative flex min-h-[220px] flex-col justify-between">
                                    <div className="flex items-start justify-between gap-3">
                                        <p className="max-w-[180px] text-[11px] font-bold uppercase tracking-[0.22em] ">
                                            {stat.label}
                                        </p>
                                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cobalt">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <div className="mt-8">
                                        <p className="text-5xl font-black tracking-[-0.04em] text-ink sm:text-6xl">
                                            {triggered ? <CountUp end={stat.value} duration={2.4} /> : "0"}
                                            <span className="text-cobalt">{stat.suffix}</span>
                                        </p>
                                        <p className="mt-4 max-w-[220px] text-sm leading-6 ">
                                            {statNotes[index]}
                                        </p>
                                    </div>

                                    <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-slate-100">
                                        <motion.div
                                            className="h-full rounded-full bg-[linear-gradient(90deg,#49d6ff_0%,#1a56ff_100%)]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${72 + index * 7}%` }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{
                                                duration: 0.85,
                                                delay: 0.15 + index * 0.08,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
