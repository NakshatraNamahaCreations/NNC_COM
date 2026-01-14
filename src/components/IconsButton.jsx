"use client";

import { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Modal from "react-modal";
import { Button, Card, Row, Col } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";
import PopupBtn from "@/components/home/PopupBtn";

Modal.setAppElement("body"); // accessibility

export default function IconsButton({ showPopup, setShowPopup }) {
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

  // 🔹 Auto-fill service from URL
  useEffect(() => {
    const path = window.location.pathname;
    let service = "";

    if (path.includes("website-development")) service = "Web Development";
    else if (path.includes("mobile-app")) service = "App Development";
    else if (path.includes("digital-marketing")) service = "Digital Marketing";
    else if (path.includes("corporate-video")) service = "Corporate Video Production";
    else if (path.includes("graphic-design")) service = "Graphic Designing";
    else if (path.includes("2d-animation")) service = "2D Animations";
    else if (path.includes("b2b-marketing")) service = "B2B Marketing Service";

    setFormData((prev) => ({ ...prev, user_service: service }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      const numeric = value.replace(/\D/g, "");
      if (numeric.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numeric }));
      }
      return;
    }

    if (name === "user_name") {
      const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    const { user_name, company_name, user_phone, user_service, user_city, user_email } = formData;

    if (!user_name.trim()) errors.user_name = "Name is required";
    if (!company_name.trim()) errors.company_name = "Company name is required";
    if (!/^[6-9]\d{9}$/.test(user_phone)) errors.user_phone = "Invalid phone number";
    if (!user_service) errors.user_service = "Service is required";
    if (!user_city.trim()) errors.user_city = "City is required";

    if (user_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
      errors.user_email = "Invalid email address";
    }

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
        sourceDomain: "nakshatra.com", // ✅ SAME AS RequestQuote
      });

      setShowPopup(false);
      router.push("/thankyou");
    } catch (error) {
      console.error(error);
      alert("Failed to send enquiry");
    }
  };

  return (
    <Modal
      isOpen={showPopup}
      onRequestClose={() => setShowPopup(false)}
      overlayClassName="modal-overlay"
      className="modal-content-custom"
      ariaHideApp={false}
    >
      <Card className="popup-card shadow-lg p-4 position-relative border-0">
        <Button
          variant="light"
          className="close-btn"
          onClick={() => setShowPopup(false)}
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <BsX size={28} />
        </Button>

        <Card.Body>
          <h3 className="text-center mb-3 fw-bold">Contact Us</h3>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12}>
                <FloatingLabel label="Name *" className="mb-3">
                  <Form.Control name="user_name" onChange={handleChange} />
                </FloatingLabel>
                {formErrors.user_name && <small className="text-danger">{formErrors.user_name}</small>}
              </Col>

           

              <Col xs={12}>
                <FloatingLabel label="Phone Number *" className="mb-3">
                  <Form.Control name="user_phone" maxLength={10} onChange={handleChange} />
                </FloatingLabel>
                {formErrors.user_phone && <small className="text-danger">{formErrors.user_phone}</small>}
              </Col>

              <Col xs={12}>
                <FloatingLabel label="Email Address" className="mb-3">
                  <Form.Control name="user_email" onChange={handleChange} />
                </FloatingLabel>
              </Col>

              <Col xs={12}>
                <FloatingLabel label="Service *" className="mb-3">
                  <Form.Select disabled value={formData.user_service}>
                    <option>{formData.user_service || "Select Service"}</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
                 <Col xs={12}>
                <FloatingLabel label="Company Name *" className="mb-3">
                  <Form.Control name="company_name" onChange={handleChange} />
                </FloatingLabel>
                {formErrors.company_name && <small className="text-danger">{formErrors.company_name}</small>}
              </Col>

              <Col xs={12}>
                <FloatingLabel label="City *" className="mb-3">
                  <Form.Control name="user_city" onChange={handleChange} />
                </FloatingLabel>
                {formErrors.user_city && <small className="text-danger">{formErrors.user_city}</small>}
              </Col>
            </Row>

            <div className="d-flex justify-content-center mt-4">
              <PopupBtn handleSubmit={handleSubmit} />
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Modal>
  );
}
