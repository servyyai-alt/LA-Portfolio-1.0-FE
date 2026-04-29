/**
 * Reusable Framer Motion animation variants and helpers.
 */

/** Fade up with optional delay */
export const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

/** Fade up variant (for use with `variants` prop + parent stagger) */
export const fadeUpVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

/** Slide in from left */
export const slideLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

/** Slide in from right */
export const slideRight = (delay = 0) => ({
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

/** Stagger container */
export const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};