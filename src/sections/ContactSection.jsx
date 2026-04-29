// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { CONTACT_DETAILS } from "@/constants/contact";
// import { useContactForm } from "@/hooks/useContactForm";
// import SectionLabel from "@/components/ui/SectionLabel";

// // Icon imports
// import locationIcon from "@/assets/location.png";
// import emailIcon from "@/assets/email.png";
// import phoneIcon from "@/assets/phone.png";

// const ICON_MAP = {
//     location: locationIcon,
//     email: emailIcon,
//     phone: phoneIcon,
// };

// export default function ContactSection() {
//     const { formData, isSubmitting, status, handleChange, handleSubmit } = useContactForm();
//     const ref = useRef(null);
//     const inView = useInView(ref, { once: true, margin: "-60px" });

//     return (
//         <section id="contact" className="bg-ink section-pad">
//             <div className="container-xl" ref={ref}>
//                 <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
//                     {/* Left — Info */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={inView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <SectionLabel theme="dark">Get In Touch</SectionLabel>
//                         <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.02em] leading-[1.1]">
//                             Let's Build Something
//                             <br />
//                             <span className="gradient-text">Great Together</span>
//                         </h2>
//                         <p className="mt-6 text-[15px] text-slate-400 leading-relaxed max-w-md">
//                             Have an idea or need a reliable tech team? Let's discuss how we can help you
//                             build and scale your product.
//                         </p>

//                         <div className="mt-10 space-y-6">
//                             {CONTACT_DETAILS.map((item) => (
//                                 <div key={item.label} className="flex items-start gap-4">
//                                     <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
//                                         <img
//                                             src={ICON_MAP[item.iconKey]}
//                                             alt={item.label}
//                                             className="w-4 h-4 object-contain opacity-70"
//                                         />
//                                     </div>
//                                     <div>
//                                         <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
//                                             {item.label}
//                                         </p>
//                                         {item.href ? (
//                                             <a
//                                                 href={item.href}
//                                                 className="text-sm text-slate-300 hover:text-white transition-colors"
//                                             >
//                                                 {item.value}
//                                             </a>
//                                         ) : (
//                                             <p className="text-sm text-slate-300">{item.value}</p>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     {/* Right — Form */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={inView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ duration: 0.6, delay: 0.15 }}
//                     >
//                         <form
//                             onSubmit={handleSubmit}
//                             className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 sm:p-10"
//                             noValidate
//                         >
//                             <div className="grid sm:grid-cols-2 gap-6">
//                                 <div>
//                                     <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
//                                         Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         placeholder="John Doe"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cobalt transition-colors"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
//                                         Email
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         placeholder="john@company.com"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cobalt transition-colors"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="mt-6">
//                                 <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
//                                     Project Brief
//                                 </label>
//                                 <textarea
//                                     rows="4"
//                                     name="projectBrief"
//                                     placeholder="Tell us about the problem you need to solve..."
//                                     value={formData.projectBrief}
//                                     onChange={handleChange}
//                                     required
//                                     className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cobalt transition-colors resize-none"
//                                 />
//                             </div>

//                             {status.message && (
//                                 <p
//                                     className={`mt-4 text-sm ${status.type === "success" ? "text-emerald-400" : "text-rose-400"
//                                         }`}
//                                 >
//                                     {status.message}
//                                 </p>
//                             )}

//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="mt-8 w-full bg-cobalt hover:bg-cobalt-light text-white text-sm font-semibold py-4 rounded-full transition-all duration-200 hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed"
//                             >
//                                 {isSubmitting ? "Sending..." : "Send Message →"}
//                             </button>
//                         </form>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT_DETAILS } from "@/constants/contact";
import { useContactForm } from "@/hooks/useContactForm";
import SectionLabel from "@/components/ui/SectionLabel";

// Icon imports
import locationIcon from "@/assets/location.png";
import emailIcon from "@/assets/email.png";
import phoneIcon from "@/assets/phone.png";

const ICON_MAP = {
    location: locationIcon,
    email: emailIcon,
    phone: phoneIcon,
};

export default function ContactSection() {
    const {
        formData,
        isSubmitting,
        status,
        handleChange,
        handleSubmit,
    } = useContactForm();

    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: "-60px",
    });

    return (
        <section
            id="contact"
            className="bg-cloud py-20 sm:py-24 lg:py-32"
        >
            <div className="container-xl" ref={ref}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionLabel theme="light">
                            Get In Touch
                        </SectionLabel>

                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.02em] leading-[1.1]">
                            Let’s Build Something
                            <br />
                            <span className="bg-gradient-to-r from-cobalt to-cyan-500 bg-clip-text text-transparent">
                                Great Together
                            </span>
                        </h2>

                        <p className="mt-6 text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-md">
                            Have an idea or need a reliable tech team?
                            Let’s discuss how we can help you build,
                            improve, and scale your digital product.
                        </p>

                        <div className="mt-10 space-y-6">
                            {CONTACT_DETAILS.map((item) => (
                                <motion.div
                                    key={item.label}
                                    whileHover={{ x: 4 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-cobalt/5 border border-cobalt/10 flex items-center justify-center shrink-0 shadow-sm">
                                        <img
                                            src={ICON_MAP[item.iconKey]}
                                            alt={item.label}
                                            className="w-5 h-5 object-contain"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-cobalt mb-1">
                                            {item.label}
                                        </p>

                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-sm sm:text-base text-slate-700 hover:text-cobalt transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm sm:text-base text-slate-700">
                                                {item.value}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                        }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl"
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/10 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/10 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                                    Project Brief
                                </label>

                                <textarea
                                    rows="5"
                                    name="projectBrief"
                                    placeholder="Tell us about your project requirements..."
                                    value={formData.projectBrief}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-slate-200 rounded-xl px-4 py-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/10 transition-all resize-none"
                                />
                            </div>

                            {status.message && (
                                <p
                                    className={`mt-5 text-sm ${
                                        status.type === "success"
                                            ? "text-emerald-600"
                                            : "text-rose-500"
                                    }`}
                                >
                                    {status.message}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-8 w-full bg-gradient-to-r from-cobalt to-cyan-500 hover:scale-[1.01] text-white text-sm font-semibold py-4 rounded-full transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : "Send Message →"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
