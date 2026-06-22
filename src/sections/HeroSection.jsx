import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animation";
import { HERO_STATS } from "@/constants/stats";
import Button from "@/components/ui/Button";
import Banner1 from "@/assets/banner/home_banner.jpg"; 

const trustPills = ["AI Systems", "Product Engineering", "Enterprise Delivery"];

const featurePoints = [
    "Premium UI/UX aligned to conversion goals",
    "Scalable architecture with product-grade execution",
    "Fast-moving collaboration for startups and enterprise teams",
];

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_58%,#ffffff_100%)] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:min-h-[100svh] lg:pb-24">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')",
                        //   backgroundImage: `url(${Banner1})`,
                }}
            />

            {/* Color-matched overlay to keep your cobalt/blue brand palette */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,251,255,0.95)_0%,rgba(238,245,255,0.93)_55%,rgba(255,255,255,0.97)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(26,86,255,0.10),transparent_45%),radial-gradient(circle_at_18%_70%,rgba(76,201,255,0.10),transparent_40%),radial-gradient(circle_at_82%_70%,rgba(91,143,255,0.10),transparent_40%)]" />
            <div
                className="absolute inset-0 bg-hero-grid opacity-40"
                style={{ backgroundSize: "56px 56px" }}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/20 to-transparent" />

            <motion.div
                className="absolute left-1/2 top-20 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,143,255,0.18)_0%,transparent_68%)] blur-3xl"
                animate={{ x: [0, 20, 0], y: [0, -12, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container-xl relative">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.h1
                        {...fadeUp(0.08)}
                        className="type-hero-title mx-auto mt-8 max-w-3xl text-ink"
                    >
                        Modern digital experiences
                        <span className="block mt-3 bg-[linear-gradient(135deg,#0b0f1e_0%,#1a56ff_46%,#49d6ff_100%)] bg-clip-text text-transparent">
                            built to grow your brand.
                        </span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp(0.16)}
                        className="type-body-copy mx-auto mt-6 max-w-2xl sm:text-lg"
                    >
                        We design SaaS platforms, business portals, and AI-powered products
                        with clean UI, strong performance, and premium user experience.
                    </motion.p>

                    <motion.div
                        {...fadeUp(0.24)}
                        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
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
                        className="mt-10 flex flex-wrap items-center justify-center gap-3"
                    >
                        {trustPills.map((pill) => (
                            <div
                                key={pill}
                                className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
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
                                className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-left shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl"
                            >
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cobalt">
                                    0{index + 1}
                                </p>
                                <p className="mt-3 text-sm leading-6">{item}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}