// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Button from "@/components/ui/Button";

// export default function ProjectHeroSection() {
//     return (
//         <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-ink pt-20">
//             {/* Background */}
//             <div
//                 className="absolute inset-0 bg-hero-grid opacity-50"
//                 style={{ backgroundSize: "48px 48px" }}
//             />
//             <div className="absolute inset-0 bg-gradient-mesh" />

//             {/* Orb */}
//             <motion.div
//                 className="absolute top-1/3 right-1/5 w-96 h-96 rounded-full opacity-[0.06]"
//                 style={{ background: "radial-gradient(circle, #1a56ff, transparent 70%)" }}
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ duration: 10, repeat: Infinity }}
//             />

//             <div className="container-xl relative py-16">
//                 <div className="max-w-[700px]">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <span className="inline-flex items-center gap-2 bg-cobalt/20 border border-cobalt/30 text-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
//                             <span className="w-1.5 h-1.5 bg-accent rounded-full" />
//                             Digital Engineering Agency
//                         </span>
//                     </motion.div>

//                     <motion.h1
//                         initial={{ opacity: 0, y: 25 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-[-0.02em]"
//                     >
//                         Architectural Precision
//                         <br />
//                         <span className="gradient-text">In Digital Craft.</span>
//                     </motion.h1>

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="mt-6 max-w-[540px] text-[15px] text-slate-400 leading-relaxed"
//                     >
//                         A curated showcase of engineering excellence and editorial design. We build the
//                         infrastructure for modern brands.
//                     </motion.p>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.3 }}
//                         className="mt-8 flex flex-col sm:flex-row gap-4"
//                     >
//                         <Button to="/projects#project" variant="primary-sm">
//                             Explore Our Work
//                         </Button>
//                         <Button to="/#capabilities" variant="outline-dark">
//                             Our Expertise
//                         </Button>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ProjectHeroSection() {
    return (
        <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_60%,#ffffff_100%)] pt-16">
            {/* Background Grid */}
            <div
                className="absolute inset-0 bg-hero-grid opacity-50"
                style={{ backgroundSize: "50px 50px" }}
            />

            {/* Soft Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(26,86,255,0.08),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(73,214,255,0.08),transparent_22%)]" />

            {/* Floating Orb */}
            <motion.div
                className="absolute top-1/4 right-[8%] w-[300px] h-[300px] rounded-full blur-3xl opacity-70"
                style={{
                    background:
                        "radial-gradient(circle, rgba(26,86,255,0.12), transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.05, 1],
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="container-xl relative py-14 sm:py-16">
                <div className="max-w-[720px]">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-cobalt/15 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cobalt shadow-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-cobalt" />
                            Featured Projects
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.08] tracking-[-0.03em]"
                    >
                        Projects Built With
                        <br />
                        <span className="bg-[linear-gradient(135deg,#0b0f1e_0%,#1a56ff_46%,#49d6ff_100%)] bg-clip-text text-transparent">
                            Clarity & Precision
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-5 max-w-[560px] text-sm sm:text-base text-slate-600 leading-7"
                    >
                        Explore premium digital products, SaaS platforms,
                        enterprise solutions, and scalable systems crafted for
                        modern business growth.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <Button
                            to="/projects#project"
                            variant="primary"
                            className="px-7 py-3"
                        >
                            Explore Our Work
                        </Button>

                        <Button
                            to="/#capabilities"
                            variant="ghost"
                            className="border-slate-200 bg-white text-black hover:bg-slate-50"
                        >
                            Our Expertise
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}