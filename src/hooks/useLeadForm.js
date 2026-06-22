import { useState } from "react";
import { submitLead } from "@/services/leadService";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  projectRequirement: "",
};

export const useLeadForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    if (!formData.phone.trim()) newErrors.phone = "Phone required";
    if (!formData.city.trim()) newErrors.city = "City required";
    if (!formData.projectRequirement) {
      newErrors.projectRequirement = "Project requirement required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (status.type) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!validate()) return;

    try {
      setLoading(true);

      await submitLead(formData);

      setFormData(initialForm);
      setStatus({
        type: "success",
        message:
          "Thanks! Your lead has been submitted.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    loading,
    status,
    handleChange,
    handleSubmit,
  };
};
