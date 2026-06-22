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

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name required";

    if (!formData.email.trim())
      newErrors.email = "Email required";

    if (!formData.phone.trim())
      newErrors.phone = "Phone required";

    if (!formData.city.trim())
      newErrors.city = "City required";

    if (!formData.projectRequirement)
      newErrors.projectRequirement =
        "Project requirement required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await submitLead(formData);

      alert("Enquiry submitted successfully");

      setFormData(initialForm);
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
};