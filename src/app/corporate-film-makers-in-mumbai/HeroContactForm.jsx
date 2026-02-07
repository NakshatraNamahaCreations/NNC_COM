"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "../../styles/HeroContactForm.module.css";

export default function HeroContactForm() {
  const router = useRouter();

const [formData, setFormData] = useState({
  user_name: "",
  company_name: "",
  user_email: "",
  user_phone: "",
  user_service: "",
  city: "",
  referenceFrom: "blog",
});


  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* 🔹 Auto detect service */
  useEffect(() => {
    const path = window.location.pathname;

    const serviceMap = {
      "/app-developers-in-bangalore": "App Development",
      "/website-development-company-in-bangalore": "Website Development",
      "/mobile-app-development-company-in-bangalore": "Mobile App Development",
      "/website-developers-in-mumbai": "Website Development",
      "/website-designer-in-mumbai": "Website Designer",
       "/corporate-video-production-company-mumbai": "Corporate Video Production",
        "/corporate-film-makers-in-mumbai": "Corporate Film Makers",
    };

    setFormData((prev) => ({
      ...prev,
      user_service: serviceMap[path] || "Website Designer",
    }));
  }, []);

  /* 🔹 Input handler */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      const digits = value.replace(/\D/g, "");
      if (digits.length <= 10) {
        setFormData({ ...formData, [name]: digits });
      }
      return;
    }

    if (name === "user_name") {
      setFormData({
        ...formData,
        [name]: value.replace(/[^A-Za-z\s]/g, ""),
      });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  /* 🔹 Submit */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (formData.user_name.trim().length < 3)
      validationErrors.user_name = true;

    if (!/^[6-9]\d{9}$/.test(formData.user_phone))
      validationErrors.user_phone = true;

    if (
      formData.user_email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)
    )
      validationErrors.user_email = true;

    if (!formData.company_name.trim())
      validationErrors.company_name = true;

    if (!formData.city.trim())
      validationErrors.city = true;

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name: formData.user_name,
          companyName: formData.company_name,
          email: formData.user_email,
          phoneNo: formData.user_phone,
          service: formData.user_service,
          city: formData.city,
          referenceFrom: "website",
          sourceDomain: "nakshatra.com",
        }
      );

      router.push("/thankyou");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formBox}>
      <h3 className={styles.formTitle}>Contact Us</h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="user_name"
          placeholder="Name *"
          className={styles.input}
          value={formData.user_name}
          onChange={handleChange}
        />

        {/* Phone */}
        <input
          type="tel"
          name="user_phone"
          placeholder="Phone Number *"
          className={styles.input}
          value={formData.user_phone}
          onChange={handleChange}
        />

        {/* Email */}
        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          className={styles.input}
          value={formData.user_email}
          onChange={handleChange}
        />

        {/* Service (Disabled) */}
        <input
          type="text"
          value={formData.user_service}
          disabled
          className={`${styles.input} ${styles.disabled}`}
        />

        {/* Company */}
        <input
          type="text"
          name="company_name"
          placeholder="Company Name *"
          className={styles.input}
          value={formData.company_name}
          onChange={handleChange}
        />

        {/* City */}
        <input
          type="text"
          name="city"
          placeholder="City *"
          className={styles.input}
          value={formData.city}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={styles.button}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
