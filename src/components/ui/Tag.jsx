/**
 * Small pill tag for tech stacks, categories, etc.
 */
export default function Tag({ children, variant = "default" }) {
    const variants = {
        default: "bg-mist ",
        cobalt: "bg-cobalt/10 text-cobalt",
        dark: "bg-white/[0.07] text-slate-300",
    };
    return (
        <span
            className={`text-[11px] font-medium px-3 py-1 rounded-full ${variants[variant] || variants.default}`}
        >
            {children}
        </span>
    );
}