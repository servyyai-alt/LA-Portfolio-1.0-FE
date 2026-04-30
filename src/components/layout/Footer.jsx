

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FOOTER_LINKS } from "@/constants/contact";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo.jpeg";
import { FaXTwitter } from "react-icons/fa6";

const SOCIAL_LINKS = [
    {
        icon: <FaFacebookF />,
        href: "https://www.facebook.com/people/Least-Action/61577148002476/",
        label: "Facebook",
        color: "hover:text-blue-600",
    },
    {
        icon: <FaInstagram />,
        href: "https://www.instagram.com/leastaction_pvt_ltd/",
        label: "Instagram",
        color: "hover:text-pink-500",
    },
    {
        icon: <FaLinkedinIn />,
        href: "https://www.linkedin.com/company/leastaction/posts/?feedView=all",
        label: "LinkedIn",
        color: "hover:text-blue-500",
    },
    {
        icon: <FaXTwitter />,
        href: "https://x.com/cookyfoods45212?s=21",
        label: "Twitter",
        color: "hover:text-black",
    },
    {
        icon: <FaYoutube />,
        href: "https://youtube.com/@leastactioncompany",
        label: "YouTube",
        color: "hover:text-red-500",
    },
];

export default function Footer() {
    return (
        <footer className="relative bg-white border-t border-slate-200 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-72 h-72 bg-cobalt/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-[140px]" />
            </div>

            <div className="container-xl relative z-10 py-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* <Link
                            to="/"
                            className="font-display text-4xl sm:text-5xl font-bold text-slate-900 hover:text-cobalt transition-colors duration-300"
                        >
                            
                                                <img
                        src={logo}
                        alt="Least Action"
                        className="h-10 md:h-12 w-auto object-contain rounded"
                    />
                        </Link> */}

                        <Link
    to="/"
    className="inline-block hover:opacity-90 transition-all duration-300"
>
    <img
        src={logo}
        alt="Least Action Company Pvt Ltd"
        className="h-20 sm:h-22 md:h-20 lg:h-22 w-auto object-contain"
    />
</Link>

                        <p className="mt-3 max-w-md text-sm sm:text-base  leading-relaxed">
                            Building premium digital products with clean architecture,
                            scalable engineering, and modern user experiences.
                        </p>

                        {/* Social Media Section */}
                        <div className="mt-6 flex items-center gap-4">
                            {SOCIAL_LINKS.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{
                                        scale: 1.15,
                                        y: -4,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.08,
                                    }}
                                    className={`w-11 h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center  transition-all duration-300 ${social.color}`}
                                >
                                    <span className="text-lg">
                                        {social.icon}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        <p className="mt-5 text-xs sm:text-sm ">
                            © {new Date().getFullYear()} Least Action Company Pvt Ltd- A unit of SG Groups.
                        </p>
                    </motion.div>

                    {/* Right Navigation */}
                    {/* Right Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
    {/* Company Section */}
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <h3 className="type-subsection-title text-slate-900 mb-6">
            Company
        </h3>

        <div className="space-y-4">
            {[
                { label: "Home", href: "/" },
                { label: "Principles", href: { pathname: "/", hash: "#about" } },
                { label: "Approach", href: { pathname: "/", hash: "#capabilities" } },
                { label: "Case Studies", href: "/projects" },
                { label: "Contact", href: { pathname: "/", hash: "#contact" } },
            ].map((item) => (
                <Link
                    key={item.label}
                    to={item.href}
                    className="block text-sm sm:text-base font-medium  hover:text-cobalt transition-colors duration-300"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    </motion.div>

    {/* Contact Section */}
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
    >
        <h3 className="type-subsection-title text-slate-900 mb-6">
            Contact
        </h3>

        <div className="space-y-5">
            <p className="text-sm sm:text-base font-semibold text-slate-800">
                Least Action Company Pvt Ltd - Vellore
            </p>

            <p className="text-sm sm:text-base leading-7 ">
                No. 9, Thendral Nagar, Sathuvachari,
                <br />
                Vellore - 632009
            </p>

            <a
                href="mailto:leastactioncompany@gmail.com"
                className="block text-sm sm:text-base  hover:text-cobalt transition-colors duration-300"
            >
                leastactioncompany@gmail.com
            </a>

            <a
                href="tel:+918189968881"
                className="block text-sm sm:text-base  hover:text-cobalt transition-colors duration-300"
            >
                +91 81899 68881
            </a>
        </div>
    </motion.div>
                    </div>
                    
                </div>

                {/* Bottom Divider */}
                <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs ">
                        Designed for premium visibility and professional presentation.
                    </p>

                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
                        <span className="text-xs font-medium ">
                            Trusted Digital Product Studio
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
