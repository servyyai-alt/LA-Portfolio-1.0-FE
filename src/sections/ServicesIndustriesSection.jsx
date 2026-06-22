import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

import {
  SERVICES,
  INDUSTRIES,
  PROJECT_OPTIONS,
} from "@/constants/servicesData";

import { useLeadForm } from "@/hooks/useLeadForm";

export default function ServicesIndustriesSection() {
  const [activeTab, setActiveTab] =
    useState("services");

  const {
    formData,
    errors,
    loading,
    status,
    handleChange,
    handleSubmit,
  } = useLeadForm();

  const data =
    activeTab === "services"
      ? SERVICES
      : INDUSTRIES;

  return (
    <section id="services-industries" className="bg-white section-pad">
      <div className="container xl px-5">
        <div className="grid lg:grid-cols-2 px-20 lg:px-32 gap-16">
          {/* Left */}
          <div>
          <SectionLabel>What We Do</SectionLabel>

            <h2 className="type-section-title text-ink">
              Our Services & <span className="gradient-text">
                Industries
              </span> 
            </h2>

            <p className="type-body-copy mt-6 max-w-md">
              We provide innovative solutions across
              multiple services and industries to help
              businesses grow and succeed.
            </p>

            <div className="flex gap-8 mb-8">
              <button
                onClick={() =>
                  setActiveTab("services")
                }
                className={`font-semibold text-2xl border-b-2 pt-2 pb-2 ${activeTab === "services"
                  ? "text-blue-700 border-blue-700"
                  : "border-transparent"
                  }`}
              >
                Services
              </button>

              <button
                onClick={() =>
                  setActiveTab("industries")
                }
                className={`font-semibold text-2xl border-b-2 pt-2 pb-2 ${activeTab === "industries"
                  ? "text-blue-700 border-blue-700"
                  : "border-transparent"
                  }`}
              >
                Industries
              </button>
            </div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {data.map((item) => (
                <li
                  key={item}
                  className="text-base font-semibold text-gray-800 relative pl-5 text-gray-800 flex gap-3"
                >
                  <span>•</span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right Form */}

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(239,246,255,0.72)_34%,rgba(255,255,255,0.92)_100%)] rounded-3xl p-10 shadow-lg"
            >
              <h3 className="text-4xl font-bold text-center mb-10">
                Partner with Tech Experts
              </h3>

              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                  />

                  {errors.city && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <select
                    name="projectRequirement"
                    value={
                      formData.projectRequirement
                    }
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                  >
                    <option value="">
                      Project Requirement
                    </option>

                    {PROJECT_OPTIONS.map(
                      (item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      )
                    )}
                  </select>

                  {errors.projectRequirement && (
                    <p className="text-red-500 text-sm mt-2">
                      {
                        errors.projectRequirement
                      }
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold text-lg"
                >
                  {loading
                    ? "Submitting..."
                    : "Send"}
                </button>

                {status.message && (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm font-medium shadow-sm ${
                      status.type === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                        : "border-rose-200 bg-rose-50 text-rose-700"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {status.message}
                  </div>
                )}

                <p className="text-center text-blue-700 font-medium">
                  We respect your privacy. No spam.
                  We'll get back within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
