import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { CALL_LINK } from "@/constants/contact";

export default function CallButton() {
    return (
        <motion.a
            href={CALL_LINK}
            aria-label="Call us"
            className="fixed bottom-24 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cobalt text-white text-xl shadow-[0_8px_30px_rgba(34,78,255,0.35)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                delay: 1.35,
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
            whileHover={{
                scale: 1.1,
                boxShadow: "0 12px 40px rgba(34,78,255,0.45)",
            }}
            whileTap={{ scale: 0.95 }}
        >
            <FaPhoneAlt />
        </motion.a>
    );
}
