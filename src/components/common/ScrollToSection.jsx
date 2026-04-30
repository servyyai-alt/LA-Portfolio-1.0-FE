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
            let attempts = 0;
            let timeoutId;

            const scrollToHashTarget = () => {
                const el = document.querySelector(location.hash);

                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
                    window.scrollTo({ top, behavior: "smooth" });
                    return;
                }

                if (attempts < 40) {
                    attempts += 1;
                    timeoutId = window.setTimeout(scrollToHashTarget, 50);
                }
            };

            scrollToHashTarget();

            return () => {
                if (timeoutId) {
                    window.clearTimeout(timeoutId);
                }
            };
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname, location.hash]);

    return null;
}
