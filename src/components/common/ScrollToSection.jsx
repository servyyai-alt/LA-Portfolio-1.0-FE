import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 80;

/**
 * Scrolls to the hash target (with header offset) on route/hash change.
 * Renders nothing — purely a side-effect component.
 */
export default function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                requestAnimationFrame(() => {
                    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
                    window.scrollTo({ top, behavior: "smooth" });
                });
            }
            return;
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname, location.hash]);

    return null;
}