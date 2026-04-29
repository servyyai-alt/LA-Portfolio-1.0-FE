import { useState } from "react";

const INITIAL_FORM = { name: "", email: "", projectBrief: "" };

/**
 * Encapsulates all contact-form state and submission logic.
 */
export function useContactForm() {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch(`${apiBaseUrl}/api/contacts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    projectBrief: formData.projectBrief.trim(),
                }),
            });

            const data = await response.json().catch(() => null);

            if (!response.ok)
                throw new Error(data?.message || "Unable to send your message right now.");

            setStatus({
                type: "success",
                message: data?.message || "Message sent successfully. We'll be in touch soon!",
            });
            setFormData(INITIAL_FORM);
        } catch (error) {
            setStatus({
                type: "error",
                message: error.message || "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return { formData, isSubmitting, status, handleChange, handleSubmit };
}