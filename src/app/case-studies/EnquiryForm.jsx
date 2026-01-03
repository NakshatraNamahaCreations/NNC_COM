"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "../../styles/CaseStudiesGrid2.module.css";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function EnquiryForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Case Study Enquiry",
    referenceFrom: "website",
    city: "Bangalore",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: only numbers, max 10 digits
    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      if (digits.length <= 10) {
        setFormData({ ...formData, phone: digits });
      }
      return;
    }

    // Name: letters & spaces only
    if (name === "name") {
      const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
      setFormData({ ...formData, name: lettersOnly });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Name validation
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = "Please enter a valid name";
    }

    // Phone validation (India)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    // Optional email validation
    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name: formData.name,
          email: formData.email,
          phoneNo: formData.phone,
          service: formData.service,
          referenceFrom: formData.referenceFrom,
          city: formData.city,
        }
      );

      router.push("/thankyou");
    } catch (error) {
      console.error("Enquiry failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.heading}>Reach Out To Us</h3>
      <p className={styles.subText}>
        Let’s discuss how we can help your business grow.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* NAME */}
        <div className={styles.field}>
          <FaUser className={styles.icon} />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {errors.name && <small className={styles.error}>{errors.name}</small>}

        {/* EMAIL */}
        <div className={styles.field}>
          <FaEnvelope className={styles.icon} />
          <input
            type="email"
            name="email"
            placeholder="Email Address (Optional)"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <small className={styles.error}>{errors.email}</small>}

        {/* PHONE */}
        <div className={styles.field}>
          <FaPhoneAlt className={styles.icon} />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        {errors.phone && <small className={styles.error}>{errors.phone}</small>}

        <button className={styles.button} disabled={loading}>
          {loading ? "Sending..." : "Send Enquiry"}
        </button>

        <p className={styles.note}>
          🔒 We respect your privacy. No spam.
        </p>
      </form>
    </div>
  );
}
