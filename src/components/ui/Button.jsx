import { Link } from "react-router-dom";

/**
 * Reusable button component with variant support.
 * @param {"primary"|"ghost"|"outline-dark"} variant
 */
export default function Button({ to, href, variant = "primary", children, className = "", ...props }) {
    const linkTarget =
        typeof to === "string" && to.startsWith("/") && to.includes("#")
            ? {
                pathname: to.split("#")[0] || "/",
                hash: `#${to.split("#")[1]}`,
            }
            : to;

    const base =
        "inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-full transition-all duration-200";

    const variants = {
        primary:
            "bg-cobalt hover:bg-cobalt-light text-white px-8 py-4 shadow-glow hover:shadow-[0_0_40px_rgba(26,86,255,0.35)] hover:-translate-y-0.5",
        ghost:
            "bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.15] text-white px-8 py-4",
        "outline-dark":
            "bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-white px-7 py-3.5",
        "primary-sm":
            "bg-cobalt hover:bg-cobalt-light text-white px-7 py-3.5 shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5",
    };

    const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

    if (to) return <Link to={linkTarget} className={cls} {...props}>{children}</Link>;
    if (href) return <a href={href} className={cls} {...props}>{children}</a>;
    return <button className={cls} {...props}>{children}</button>;
}
