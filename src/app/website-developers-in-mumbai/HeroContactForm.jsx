"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import styles from "../../styles/HeroContactForm.module.css";

export default function HeroContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
    user_service: "",
    referenceFrom: "website",
    city: "Bangalore",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* 🔹 Auto detect service from URL */
  useEffect(() => {
    const path = window.location.pathname;

    const serviceMap = {
      "/app-developers-in-bangalore": "App Development",
      "/website-development-company-in-bangalore": "Website Development",
      "/mobile-app-development-company-in-bangalore": "Mobile App Development",
         "/website-developers-in-mumbai": "Website Development",
    };

    setFormData((prev) => ({
      ...prev,
      user_service: serviceMap[path] || "General Enquiry",
    }));
  }, []);

  /* 🔹 Input Handler */
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
          email: formData.user_email,
          phoneNo: formData.user_phone,
          service: formData.user_service,
          message: formData.message,
          referenceFrom: "website",
          city: "Bangalore",
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
      <h3 className={styles.formTitle}>Let’s Discuss Your Project</h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className={styles.input}
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            className={styles.input}
            value={formData.user_email}
            onChange={handleChange}
          />
        </div>

        <input
          type="tel"
          name="user_phone"
          placeholder="Phone Number"
          className={styles.input}
          value={formData.user_phone}
          onChange={handleChange}
          required
        />

        <textarea
          rows="4"
          name="message"
          placeholder="Tell us about your project..."
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={styles.button}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Get Expert Consultation"}
        </button>

        {/* <p className={styles.note}>
          <FaLock className={styles.lockIcon} />
          100% Confidential • No Obligations
        </p> */}
      </form>
    </div>
  );
}
