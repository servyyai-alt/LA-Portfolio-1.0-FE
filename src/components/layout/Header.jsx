import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS } from "@/constants/nav";
import logo from "@/assets/logo.jpeg";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrolled = useScrolled(20);
    const location = useLocation();

    // Close mobile menu on navigation
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname, location.hash]);

    const getLinkTarget = (link) =>
        link.hash ? { pathname: link.to, hash: link.hash } : link.to;

    const isLinkActive = (link) => {
        if (link.hash) {
            return location.pathname === link.to && location.hash === link.hash;
        }

        if (link.to === "/") {
            return location.pathname === "/" && !location.hash;
        }

        return location.pathname === link.to;
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(11,15,30,0.08)]"
                    : "bg-white/80 backdrop-blur-sm"
                }`}
        >
            <div className="container-xl flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 shrink-0">
                    <img
                        src={logo}
                        alt="Least Action"
                        className="h-20 md:h-20 w-auto  object-contain rounded"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-2 lg:gap-3">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.label}
                            to={getLinkTarget(link)}
                            className={`nav-link px-3 lg:px-4 py-2 text-sm lg:text-[15px] font-medium transition-colors duration-200 ${
                                isLinkActive(link)
                                    ? "nav-link-active text-ink"
                                    : " hover:text-cobalt"
                            }`}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* CTA */}
                <Link
                    to={{ pathname: "/", hash: "#contact" }}
                    className="hidden md:inline-flex items-center gap-2 bg-cobalt hover:bg-cobalt-light text-white text-[12px] lg:text-sm font-semibold px-5 lg:px-6 py-2.5 rounded-full transition-all duration-200 shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5"
                >
                    Get Started
                </Link>

                {/* Mobile toggle */}
                <button
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-ink hover:bg-cloud transition-colors"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden border-t border-mist bg-white"
                    >
                        <div className="container-xl py-5 flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.label}
                                    to={getLinkTarget(link)}
                                    onClick={() => setMenuOpen(false)}
                                    className={`px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                                        isLinkActive(link)
                                            ? "bg-cloud text-ink"
                                            : " hover:text-cobalt hover:bg-cloud"
                                    }`}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <Link
                                to={{ pathname: "/", hash: "#contact" }}
                                onClick={() => setMenuOpen(false)}
                                className="mt-3 w-full text-center bg-cobalt text-white text-sm font-semibold py-3 rounded-full hover:bg-cobalt-light transition-colors"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
