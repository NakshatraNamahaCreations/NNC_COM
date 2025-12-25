"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/WebsiteDevContactForm.css";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
const services = [
  "Web Development",
  "App Development",
  "Corporate Video Production",
  "Digital Marketing",
  "Graphic Designing",
  "2D Animations",
  "B2B Marketing Service",
];

export default function WebsiteDevContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    referenceFrom: "website",
    city: "Bangalore",
  });

  const [formErrors, setFormErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const { name, email, phone, service, message } = formData;
    const errors = {};

    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!name || !nameRegex.test(name.trim())) {
      errors.name = "Enter a valid name (min 3 letters)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Enter a valid email address";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      errors.phone = "Enter a valid 10-digit phone number";
    }

    if (!service) {
      errors.service = "Please select a service";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name,
          email,
          phoneNo: phone,
          service,
          message,
          referenceFrom: "website",
          city: "Bangalore",
        }
      );

      if (response.status === 200 || response.status === 201) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          referenceFrom: "website",
          city: "Bangalore",
        });
        setFormErrors({});
        setMessage("Form submitted successfully!");

        setTimeout(() => {
          router.push("/thankyou");
        }, 1000);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (

  <section className="contactSection">
    <div className="container">
      <div className="contactCard">
        
        {/* LEFT – FORM */}
        <div className="contactForm">
          <h3 className="formTitle">Let’s Talk About Your Project</h3>
          <p className="formSub">
            Share your requirement and our experts will reach out.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name *"
              name="name"
              className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Your Email *"
              name="email"
              className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Your Phone *"
              name="phone"
              className={`form-control ${formErrors.phone ? "is-invalid" : ""}`}
              value={formData.phone}
              onChange={handleChange}
            />

            <select
              name="service"
              className={`form-select ${formErrors.service ? "is-invalid" : ""}`}
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a Service</option>
              {services.map((s, i) => (
                <option key={i}>{s}</option>
              ))}
            </select>

            <textarea
              placeholder="Tell us about your project"
              rows="4"
              name="message"
              className={`form-control ${formErrors.message ? "is-invalid" : ""}`}
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="submitBtn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {message && <p className="successText">{message}</p>}
          </form>
        </div>

        {/* RIGHT – INFO */}
        <div className="contactInfo">
          <h3>Get in Touch</h3>

          <div className="infoItem">
            <FaMapMarkerAlt />
            <span>Mysore & Bangalore, India</span>
          </div>

          <div className="infoItem">
            <FaPhoneAlt />
            <span>+91 73488 88078</span>
          </div>

          <div className="infoItem">
            <FaEnvelope />
            <span>info@nakshatranamahacreations.com</span>
          </div>

          {/* <ul className="trustList">
            <li><FaCheckCircle /> 100% Project Transparency</li>
            <li><FaCheckCircle /> Dedicated Support</li>
            <li><FaCheckCircle /> On-time Delivery</li>
          </ul> */}

          {/* Optional Image */}
          <img
            src="/mbbanner.png"
            alt="Contact Illustration"
            className="contactImage"
          />
        </div>

      </div>
    </div>
  </section>


  );
}
