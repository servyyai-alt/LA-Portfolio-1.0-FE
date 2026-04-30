import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animation";
import { HERO_STATS } from "@/constants/stats";
import Button from "@/components/ui/Button";

const trustPills = ["AI Systems", "Product Engineering", "Enterprise Delivery"];

const featurePoints = [
    "Premium UI/UX aligned to conversion goals",
    "Scalable architecture with product-grade execution",
    "Fast-moving collaboration for startups and enterprise teams",
];

const screenMetrics = [
    { label: "Delivery confidence", value: "96%" },
    { label: "Faster rollout", value: "3.4x" },
    { label: "Client retention", value: "92%" },
];

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_58%,#ffffff_100%)] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:min-h-[100svh] lg:pb-24">
            <div
                className="absolute inset-0 bg-hero-grid opacity-70"
                style={{ backgroundSize: "56px 56px" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(26,86,255,0.1),transparent_22%),radial-gradient(circle_at_82%_22%,rgba(91,143,255,0.12),transparent_20%),radial-gradient(circle_at_70%_76%,rgba(76,201,255,0.12),transparent_24%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/20 to-transparent" />

            <motion.div
                className="absolute -left-20 top-24 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(91,143,255,0.18)_0%,transparent_68%)] blur-3xl"
                animate={{ x: [0, 20, 0], y: [0, -12, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute right-[-40px] top-1/4 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(26,86,255,0.14)_0%,transparent_70%)] blur-3xl"
                animate={{ x: [0, -18, 0], y: [0, 18, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container-xl relative">
                <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] xl:gap-16">
                    <div className="max-w-3xl">
                        {/* <motion.div {...fadeUp(0)}>
                            <div className="inline-flex items-center gap-3 rounded-full border border-cobalt/15 bg-white/85 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cobalt shadow-[0_18px_50px_rgba(26,86,255,0.08)] backdrop-blur-xl">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-100">
                                    <span className="h-2 w-2 rounded-full bg-cobalt" />
                                </span>
                                Professional Digital Product Studio
                            </div>
                        </motion.div> */}

                        <motion.h1
                            {...fadeUp(0.08)}
                            className="type-hero-title mt-8 max-w-4xl text-ink"
                        >
                            Modern digital experiences
                            <span className="block mt-3 bg-[linear-gradient(135deg,#0b0f1e_0%,#1a56ff_46%,#49d6ff_100%)] bg-clip-text text-transparent">
                                built to grow your brand.
                            </span>
                        </motion.h1>
                        
                        <motion.p
                            {...fadeUp(0.16)}
                            className="type-body-copy mt-6 max-w-2xl  sm:text-lg"
                        >
                            We design SaaS platforms, business portals, and AI-powered products
                            with clean UI, strong performance, and premium user experience.
                        </motion.p>

                        <motion.div
                            {...fadeUp(0.24)}
                            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
                        >
                            <Button
                                to="/#contact"
                                variant="primary"
                                className="group bg-[linear-gradient(135deg,#49d6ff_0%,#1a56ff_58%,#103fca_100%)] px-8 py-4 shadow-[0_24px_60px_rgba(26,86,255,0.22)]"
                            >
                                Book a Strategy Call
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    <path
                                        d="M3 8h10M9 4l4 4-4 4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>

                            <Button
                              to="/projects"
                              variant="ghost"
                              className="px-6 py-3 rounded-full border border-cobalt/30 bg-white !text-[#3D72FF] hover:bg-cobalt                             hover:!text-black transition-all duration-300 shadow-md hover:shadow-lg flex items-center                             gap-2"
                            >
                              Explore Our Work →
                            </Button>
                        </motion.div>

                        <motion.div
                            {...fadeUp(0.32)}
                            className="mt-10 flex flex-wrap gap-3"
                        >
                            {trustPills.map((pill) => (
                                <div
                                    key={pill}
                                    className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm  shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
                                >
                                    {pill}
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            {...fadeUp(0.4)}
                            className="mt-12 grid gap-4 sm:grid-cols-3"
                        >
                            {featurePoints.map((item, index) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl"
                                >
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cobalt">
                                        0{index + 1}
                                    </p>
                                    <p className="mt-3 text-sm leading-6 ">{item}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 34, y: 18 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="relative mx-auto w-full max-w-[660px] lg:mx-0"
                    >
                        <motion.div
                            className="absolute -left-3 top-10 hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 text-sm  shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:flex"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="mr-3 h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,#49d6ff_0%,#1a56ff_100%)]" />
                            <div>
                                <p className="font-bold text-ink">Professional product screens</p>
                                <p className="text-xs ">Clear structure and stronger trust</p>
                            </div>
                        </motion.div>

                        <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white/75 p-4 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:p-5">
                            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(235,244,255,0.88)_38%,rgba(221,236,255,0.72)_100%)]" />

                            <div className="relative rounded-[28px] border border-slate-200 bg-white p-5 sm:p-6">
                                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                                    <div className="flex items-center gap-2">
                                        <span className="h-3 w-3 rounded-full bg-rose-300" />
                                        <span className="h-3 w-3 rounded-full bg-amber-300" />
                                        <span className="h-3 w-3 rounded-full bg-emerald-300" />
                                    </div>
                                    <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                                        Live system view
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                                    <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-[11px] font-bold uppercase tracking-[0.18em] ">
                                                    Product performance
                                                </p>
                                                <p className="mt-2 text-4xl font-black text-ink">89%</p>
                                                <p className="mt-2 text-sm ">
                                                    Better clarity across user journeys and delivery reporting.
                                                </p>
                                            </div>
                                            <div className="rounded-2xl border border-cobalt/15 bg-white px-3 py-2 text-right shadow-[0_10px_24px_rgba(26,86,255,0.08)]">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cobalt">
                                                    Growth uplift
                                                </p>
                                                <p className="mt-1 text-lg font-bold text-ink">+24%</p>
                                            </div>
                                        </div>

                                        <div className="mt-6 space-y-3">
                                            {[84, 71, 93, 78, 88].map((value, index) => (
                                                <motion.div
                                                    key={`${value}-${index}`}
                                                    className="flex items-center gap-3"
                                                    initial={{ opacity: 0, x: 8 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.45 + index * 0.08, duration: 0.45 }}
                                                >
                                                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                                                        <motion.div
                                                            className="h-full rounded-full bg-[linear-gradient(90deg,#49d6ff_0%,#1a56ff_100%)]"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${value}%` }}
                                                            transition={{
                                                                delay: 0.58 + index * 0.08,
                                                                duration: 0.7,
                                                                ease: [0.22, 1, 0.36, 1],
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="w-10 text-right text-xs ">
                                                        {value}%
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {screenMetrics.map((card, index) => (
                                            <motion.div
                                                key={card.label}
                                                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_14px_35px_rgba(15,23,42,0.05)]"
                                                initial={{ opacity: 0, y: 14 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.42 + index * 0.1, duration: 0.5 }}
                                            >
                                                <p className="text-[11px] font-bold uppercase tracking-[0.18em] ">
                                                    {card.label}
                                                </p>
                                                <div className="mt-2 flex items-end justify-between gap-3">
                                                    <p className="text-3xl font-black text-ink">{card.value}</p>
                                                    <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,#e8f4ff_0%,#d6e9ff_100%)]" />
                                                </div>
                                            </motion.div>
                                        ))}

                                        <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f9fcff_0%,#edf5ff_100%)] p-4">
                                            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cobalt">
                                                Screen stack
                                            </p>
                                            <div className="mt-4 grid grid-cols-3 gap-3">
                                                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                                                    <div className="h-20 rounded-xl bg-[linear-gradient(180deg,#f3f8ff_0%,#e4efff_100%)]" />
                                                </div>
                                                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                                                    <div className="h-20 rounded-xl bg-[linear-gradient(180deg,#eef7ff_0%,#dceeff_100%)]" />
                                                </div>
                                                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                                                    <div className="h-20 rounded-xl bg-[linear-gradient(180deg,#f6fbff_0%,#e7f3ff_100%)]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
