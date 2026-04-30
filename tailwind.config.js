
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                ink: "#0b0f1e",
                "ink-2": "#111827",
                "ink-3": "#1c2540",
                cobalt: "#1a56ff",
                "cobalt-light": "#3d72ff",
                accent: "#5b8fff",
                silver: "#94a3b8",
                mist: "#e8edf5",
                cloud: "#f4f6fb",
            },
            fontFamily: {
                display: ['"Segoe UI"', "Tahoma", "Geneva", "Verdana", "sans-serif"],
                body: ['"Segoe UI"', "Tahoma", "Geneva", "Verdana", "sans-serif"],
            },
            boxShadow: {
                glow: "0 0 60px rgba(26,86,255,0.18)",
                "glow-sm": "0 0 30px rgba(26,86,255,0.12)",
                card: "0 20px 60px rgba(11,15,30,0.10)",
                "card-dark": "0 20px 60px rgba(11,15,30,0.4)",
            },
            backgroundImage: {
                "hero-grid":
                    "linear-gradient(rgba(26,86,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,255,0.04) 1px, transparent 1px)",
                "dot-pattern":
                    "radial-gradient(circle, rgba(26,86,255,0.15) 1px, transparent 1px)",
                "gradient-mesh":
                    "radial-gradient(ellipse at 0% 0%, rgba(26,86,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 100% 0%, rgba(91,143,255,0.10) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(26,86,255,0.08) 0%, transparent 50%)",
            },
            animation: {
                "fade-up": "fadeUp 0.6s ease forwards",
                shimmer: "shimmer 2s linear infinite",
            },
            keyframes: {
                fadeUp: {
                    from: { opacity: 0, transform: "translateY(24px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
                shimmer: {
                    from: { backgroundPosition: "-200% 0" },
                    to: { backgroundPosition: "200% 0" },
                },
            },
        },
    },
    plugins: [],
};
