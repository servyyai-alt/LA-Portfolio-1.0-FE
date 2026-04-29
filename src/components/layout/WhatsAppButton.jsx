import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/constants/contact";

export default function WhatsAppButton() {
    return (
        <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white text-2xl shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1, boxShadow: "0 12px 40px rgba(37,211,102,0.5)" }}
            whileTap={{ scale: 0.95 }}
        >
            <FaWhatsapp />
        </motion.a>
    );
}