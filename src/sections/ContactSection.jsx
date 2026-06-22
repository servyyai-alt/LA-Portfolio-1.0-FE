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
//     const {
//         formData,
//         isSubmitting,
//         status,
//         handleChange,
//         handleSubmit,
//     } = useContactForm();

//     const ref = useRef(null);
//     const inView = useInView(ref, {
//         once: true,
//         margin: "-60px",
//     });

//     return (
//         <section
//             id="contact"
//             className="bg-cloud py-20 sm:py-24 lg:py-32"
//         >
//             <div className="container-xl" ref={ref}>
//                 <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
//                     {/* LEFT CONTENT */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={inView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <SectionLabel theme="light">
//                             Get In Touch
//                         </SectionLabel>

//                         <h2 className="type-section-title text-slate-900">
//                             Let’s Build Something
//                             <br />
//                             <span className="bg-gradient-to-r from-cobalt to-cyan-500 bg-clip-text text-transparent">
//                                 Great Together
//                             </span>
//                         </h2>

//                         <p className="type-body-copy mt-6 max-w-md ">
//                             Have an idea or need a reliable tech team?
//                             Let’s discuss how we can help you build,
//                             improve, and scale your digital product.
//                         </p>

//                         <div className="mt-10 space-y-6">
//                             {CONTACT_DETAILS.map((item) => (
//                                 <motion.div
//                                     key={item.label}
//                                     whileHover={{ x: 4 }}
//                                     className="flex items-start gap-4"
//                                 >
//                                     <div className="w-12 h-12 rounded-2xl bg-cobalt/5 border border-cobalt/10 flex items-center justify-center shrink-0 shadow-sm">
//                                         <img
//                                             src={ICON_MAP[item.iconKey]}
//                                             alt={item.label}
//                                             className="w-5 h-5 object-contain"
//                                         />
//                                     </div>

//                                     <div>
//                                         <p className="text-xs font-semibold uppercase tracking-widest text-cobalt mb-1">
//                                             {item.label}
//                                         </p>

//                                         {item.href ? (
//                                             <a
//                                                 href={item.href}
//                                                 className="text-sm sm:text-base  hover:text-cobalt transition-colors"
//                                             >
//                                                 {item.value}
//                                             </a>
//                                         ) : (
//                                             <p className="text-sm sm:text-base ">
//                                                 {item.value}
//                                             </p>
//                                         )}
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     {/* RIGHT FORM */}
//                             {/* GOOGLE MAP */}
//                          <motion.div
//                            initial={{ opacity: 0, y: 30 }}
//                            animate={inView ? { opacity: 1, y: 0 } : {}}
//                            transition={{
//                              duration: 0.6,
//                              delay: 0.15,
//                            }}
//                          >
//                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
//                              <iframe
//                                title="Least Action Company Location"
//                                src="https://www.google.com/maps?q=1st+Floor+Vellore+Market+Committee+Building+Opposite+Circuit+House+Officers+Line+Tollgate+Vellore                         +632001&output=embed"
//                                width="100%"
//                                height="500"
//                                style={{ border: 0 }}
//                                allowFullScreen=""
//                                loading="lazy"
//                                referrerPolicy="no-referrer-when-downgrade"
//                              />
//                            </div>
//                          </motion.div>
//                     {/* <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={inView ? { opacity: 1, y: 0 } : {}}
//                         transition={{
//                             duration: 0.6,
//                             delay: 0.15,
//                         }}
//                     >
//                         <form
//                             onSubmit={handleSubmit}
//                             noValidate
//                             className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl"
//                         >
//                             <div className="grid sm:grid-cols-2 gap-6">
//                                 <div>
//                                     <label className="block text-xs font-semibold uppercase tracking-widest  mb-2">
//                                         Name
//                                     </label>

//                                     <input
//                                         type="text"
//                                         name="name"
//                                         placeholder="John Doe"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/10 transition-all"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-xs font-semibold uppercase tracking-widest  mb-2">
//                                         Email
//                                     </label>

//                                     <input
//                                         type="email"
//                                         name="email"
//                                         placeholder="john@company.com"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/10 transition-all"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="mt-6">
//                                 <label className="block text-xs font-semibold uppercase tracking-widest  mb-2">
//                                     Project Brief
//                                 </label>

//                                 <textarea
//                                     rows="5"
//                                     name="projectBrief"
//                                     placeholder="Tell us about your project requirements..."
//                                     value={formData.projectBrief}
//                                     onChange={handleChange}
//                                     required
//                                     className="w-full border border-slate-200 rounded-xl px-4 py-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/10 transition-all resize-none"
//                                 />
//                             </div>

//                             {status.message && (
//                                 <p
//                                     className={`mt-5 text-sm ${
//                                         status.type === "success"
//                                             ? "text-emerald-600"
//                                             : "text-rose-500"
//                                     }`}
//                                 >
//                                     {status.message}
//                                 </p>
//                             )}

//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="mt-8 w-full bg-gradient-to-r from-cobalt to-cyan-500 hover:scale-[1.01] text-white text-sm font-semibold py-4 rounded-full transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
//                             >
//                                 {isSubmitting
//                                     ? "Sending..."
//                                     : "Send Message →"}
//                             </button>
//                         </form>
//                     </motion.div> */}
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
        <section id="contact" className="bg-cloud py-20 sm:py-24 lg:py-32">
            <div className="container-xl" ref={ref}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionLabel theme="light">Get In Touch</SectionLabel>

                        <h2 className="type-section-title text-slate-900">
                            Let’s Build Something
                            <br />
                            <span className="bg-gradient-to-r from-cobalt to-cyan-500 bg-clip-text text-transparent">
                                Great Together
                            </span>
                        </h2>

                        <p className="type-body-copy mt-6 max-w-md">
                            Have an idea or need a reliable tech team? Let’s
                            discuss how we can help you build, improve, and
                            scale your digital product.
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
                                            
                                               <a href={item.href}
                                                className="text-sm sm:text-base hover:text-cobalt transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm sm:text-base">
                                                {item.value}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — MAP CARD */}
                   <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="relative"
                    >
                        {/* Ambient glow behind the card — echoes the brand gradient without shouting */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-cobalt/20 via-cyan-400/10 to-transparent rounded-[2rem] blur-2xl -z-10" />
                    
                        <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 transition-shadow duration-300                     hover:shadow-2xl hover:shadow-cobalt/10">
                            {/* Card header */}
                            <div className="flex items-start gap-4 p-6 sm:p-8 border-b border-slate-100">
                                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-cobalt to-cyan-500 flex items-center justify-center                     shrink-0 shadow-lg shadow-cobalt/30">
                                    <img
                                        src={locationIcon}
                                        alt="Office location"
                                        className="w-5 h-5 object-contain brightness-0 invert"
                                    />
                                    {/* Pulse ping — subtle "we're here" signal */}
                                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 border-2 border-white animate-ping" />
                                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 border-2 border-white" />
                                </div>
                    
                                <div className="flex-1">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-cobalt mb-1.5">
                                        Visit Us
                                    </p>
                                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                                        1st Floor, Vellore Market Committee Building, Opposite
                                        Circuit House, Officers Line, Tollgate, Vellore – 632001
                                    </p>
                    
                                    
                                       <a href="https://www.google.com/maps/search/?api=1&query=Least+Action+Company&                    query_place_id=ChIJX0xWV04VfSoRvnNj1eX-vyM"
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-cobalt hover:text-cyan-600                     transition-colors"
                                     >
                                         Get Directions
                                         <svg
                                             className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2.5"
                                         >
                                             <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                                         </svg>
                                     </a>
                                </div>
                            </div>
                    
                            {/* Map */}
                            <div className="relative">
                             <iframe
                                 title="Least Action Company Location"
                                 src="https://maps.google.com/maps?q=Least+Action+Company,+Vellore+Market+Committee+Building,+Vellore&z=18&t=h&output=embed"
                                 width="100%"
                                 height="420"
                                 style={{ border: 0, display: "block" }}
                                 allowFullScreen=""
                                 loading="lazy"
                                 referrerPolicy="no-referrer-when-downgrade"
                                 className="contrast-[1.05] transition-all duration-500"
                             />
                    
                                {/* gradient accent line matching brand colors */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cobalt to-cyan-500" />
                            </div>
                        </div>
                    </motion.div>

                    {/* CONTACT FORM (currently disabled)
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl"
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2">
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
                                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2">
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
                                <label className="block text-xs font-semibold uppercase tracking-widest mb-2">
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
                                {isSubmitting ? "Sending..." : "Send Message →"}
                            </button>
                        </form>
                    </motion.div>
                    */}
                </div>
            </div>
        </section>
    );
}