"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";
import styles from "../styles/RequestQuote.module.css";

export default function RequestQuote({ showPopup, setShowPopup }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    user_name: "",
    company_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
    user_city: "",
    referenceFrom: "website",
  });

  const [formErrors, setFormErrors] = useState({});

  const popupSpring = useSpring({
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? "scale(1)" : "scale(0.9)",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.user_name.trim()) errors.user_name = "Name is required";
    if (!formData.company_name.trim()) errors.company_name = "Company name is required";
    if (!/^[6-9]\d{9}$/.test(formData.user_phone)) errors.user_phone = "Invalid phone number";
    if (!formData.user_service) errors.user_service = "Select a service";
    if (!formData.user_city.trim()) errors.user_city = "City is required";

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    try {
      await axios.post("https://api.nakshatranamahacreations.in/api/enquiries", {
        name: formData.user_name,
        companyName: formData.company_name,
        email: formData.user_email,
        phoneNo: formData.user_phone,
        service: formData.user_service,
        city: formData.user_city,
        referenceFrom: "website",
          // ✅ SAME FORMAT AS CONTACT FORM
    sourceDomain: "nakshatra.com",
      });

      router.push("/thankyou");
      setShowPopup(false);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      {/* <Button className={styles.openBtn} onClick={() => setShowPopup(true)}>
        Request A Quote
      </Button> */}

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
              <h4 className={styles.title} >Contact Us</h4>

              <Form onSubmit={handleSubmit} className={styles.form}>
                <Form.Control
                  className={styles.input}
                  name="user_name"
                  placeholder="Name *"
                  onChange={handleChange}
                />
                {formErrors.user_name && <p className={styles.error}>{formErrors.user_name}</p>}

          

                <Form.Control
                  className={styles.input}
                  name="user_phone"
                  placeholder="Phone Number *"
                  onChange={handleChange}
                />
                {formErrors.user_phone && <p className={styles.error}>{formErrors.user_phone}</p>}

                <Form.Control
                  className={styles.input}
                  name="user_email"
                  placeholder="Email Address"
                  onChange={handleChange}
                />

                <Form.Select
                  className={styles.input}
                  name="user_service"
                  onChange={handleChange}
                >
                  <option value="">Select Service *</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Digital Marketing</option>
                  <option>Corporate Video</option>
                </Form.Select>
                {formErrors.user_service && <p className={styles.error}>{formErrors.user_service}</p>}

              <Form.Control
                  className={styles.input}
                  name="company_name"
                  placeholder="Company Name *"
                  onChange={handleChange}
                />
                {formErrors.company_name && <p className={styles.error}>{formErrors.company_name}</p>}

                <Form.Control
                  className={styles.input}
                  name="user_city"
                  placeholder="City *"
                  onChange={handleChange}
                />
                {formErrors.user_city && <p className={styles.error}>{formErrors.user_city}</p>}

                <Button type="submit"  variant="dark" className={styles.submitBtn}>
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
