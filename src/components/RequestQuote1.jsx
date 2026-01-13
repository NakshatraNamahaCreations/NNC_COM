"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";
import styles from "../styles/RequestQuote1.module.css";

export default function RequestQuote1() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const [hovered, setHovered] = useState(false);

const springProps = useSpring({
  transform: hovered ? "scale(1.1)" : "scale(1)",
  opacity: hovered ? 1 : 0.9,
  config: { tension: 300, friction: 20 },
});

  const [formData, setFormData] = useState({
    user_name: "",
    company_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
    city: "",
    referenceFrom: "website",
  });

  const [formErrors, setFormErrors] = useState({});

  const popupSpring = useSpring({
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? "scale(1)" : "scale(0.9)",
    config: { tension: 250, friction: 20 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      return;
    }

    if (name === "user_name") {
      const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    const { user_name, company_name, user_phone, user_service, city, user_email } = formData;

    if (!user_name || user_name.trim().length < 3) errors.user_name = "Enter a valid name";
    if (!company_name) errors.company_name = "Company name is required";
    if (!/^[6-9]\d{9}$/.test(user_phone)) errors.user_phone = "Invalid phone number";
    if (!user_service) errors.user_service = "Select a service";
    if (!city) errors.city = "City is required";

    if (user_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
      errors.user_email = "Invalid email address";
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    try {
      await axios.post("https://api.nakshatranamahacreations.in/api/enquiries", {
        name: user_name,
        companyName: company_name,
        email: user_email,
        phoneNo: user_phone,
        service: user_service,
        city,
        referenceFrom: "website",

          // ✅ SAME FORMAT AS CONTACT FORM
    sourceDomain: "nakshatra.com",
      });

      router.push("/thankyou");
      setShowPopup(false);
      setFormData({
        user_name: "",
        company_name: "",
        user_email: "",
        user_phone: "",
        user_service: "",
        city: "",
        referenceFrom: "website",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <animated.div style={springProps}>
  <Button
    variant="outline-dark"
    className={styles.openBtn}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onClick={() => setShowPopup(true)}
    style={{
      borderRadius: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px 10px",
      fontWeight: "500",
      letterSpacing: "1px",
      fontSize: "14px",
      boxShadow: "2px 2px 1px 0px rgb(0, 0, 0)",
      cursor: "pointer",
      backgroundColor: hovered ? "black" : "white",
      color: hovered ? "white" : "black",
      border: "1px solid black",
      transition: "background-color 0.3s ease, color 0.3s ease",
    }}
  >
    Request A Quote
  </Button>
</animated.div>


      {showPopup && (
        <div className={styles.overlay} onClick={() => setShowPopup(false)}>
          <animated.div
            style={popupSpring}
            className={styles.popup}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={() => setShowPopup(false)}>
              <BsX size={26} />
            </button>

            <Card.Body>
              <h4 className={styles.title}>Contact Us</h4>

              <Form onSubmit={handleSubmit} className={styles.form}>
                <Form.Control
                  className={styles.input}
                  name="user_name"
                  placeholder="Name *"
                  value={formData.user_name}
                  onChange={handleChange}
                />
                {formErrors.user_name && <p className={styles.error}>{formErrors.user_name}</p>}

                <Form.Control
                  className={styles.input}
                  name="company_name"
                  placeholder="Company Name *"
                  value={formData.company_name}
                  onChange={handleChange}
                />
                {formErrors.company_name && <p className={styles.error}>{formErrors.company_name}</p>}

                <Form.Control
                  className={styles.input}
                  name="user_phone"
                  placeholder="Phone Number *"
                  value={formData.user_phone}
                  onChange={handleChange}
                />
                {formErrors.user_phone && <p className={styles.error}>{formErrors.user_phone}</p>}

                <Form.Control
                  className={styles.input}
                  name="user_email"
                  placeholder="Email Address"
                  value={formData.user_email}
                  onChange={handleChange}
                />
                {formErrors.user_email && <p className={styles.error}>{formErrors.user_email}</p>}

                <Form.Select
                  className={styles.input}
                  name="user_service"
                  value={formData.user_service}
                  onChange={handleChange}
                >
                  <option value="">Select Service *</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Digital Marketing</option>
                  <option>Corporate Video Production</option>
                </Form.Select>
                {formErrors.user_service && <p className={styles.error}>{formErrors.user_service}</p>}

                <Form.Control
                  className={styles.input}
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleChange}
                />
                {formErrors.city && <p className={styles.error}>{formErrors.city}</p>}

                <Button type="submit" variant="dark" className={styles.submitBtn}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </animated.div>
        </div>
      )}
    </>
  );
}
