/**
 * Small uppercase tracking label used above section headings.
 * @param {string} children
 * @param {"light"|"dark"} theme - "light" = cobalt text, "dark" = accent text
 */
export default function SectionLabel({ children, theme = "light" }) {
    const color = theme === "dark" ? "text-accent" : "text-cobalt";
    return (
        <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${color} mb-4`}>
            {children}
        </p>
    );
}