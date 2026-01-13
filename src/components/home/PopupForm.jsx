"use client";

import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Modal from "react-modal";
import { Button, Card, Row, Col } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";
import PopupBtn from "./PopupBtn";

export default function PopupForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    user_name: "",
    companyName: "",
    user_email: "",
    user_phone: "",
    user_service: "",
    city: "",
    referenceFrom: "website",
  });

  const [formErrors, setFormErrors] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const inputStyle = {
    height: "44px",
    padding: "10px 14px",
    fontSize: "14px",
    borderRadius: "8px",
  };

  // ✅ REQUIRED for react-modal (App Router safe)
  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  // ✅ OPEN POPUP AFTER 2 SECONDS ON PAGE LOAD / REFRESH
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalIsOpen(true);
      setFadeIn(true);
    }, 2000);

    return () => clearTimeout(timer);
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
    const { user_name, user_phone, user_service, user_email, companyName, city } = formData;

    if (!/^[A-Za-z\s]{3,}$/.test(user_name)) errors.user_name = "Enter a valid name";
    if (!companyName.trim()) errors.companyName = "Company name is required";
    if (!/^[6-9]\d{9}$/.test(user_phone)) errors.user_phone = "Invalid phone number";
    if (!user_service) errors.user_service = "Select a service";
    if (!city.trim()) errors.city = "City is required";

    if (user_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
      errors.user_email = "Invalid email address";
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name: user_name,
          companyName,
          email: user_email,
          phoneNo: user_phone,
          service: user_service,
          city,
          referenceFrom: "website",
          sourceDomain: "nakshatra.com",
        }
      );

      if (response.status === 200 || response.status === 201) {
        setModalIsOpen(false);
        router.push("/thankyou");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit form");
    }
  };

  const closeModal = () => {
    setFadeIn(false);
    setTimeout(() => setModalIsOpen(false), 300);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={`modal-content ${fadeIn ? "fade-in" : "fade-out"}`}
      overlayClassName="modal-overlay"
    >
      <Card className="shadow-lg p-3 position-relative">
        <Button variant="light" className="close-btn" onClick={closeModal}>
          <BsX size={28} />
        </Button>

        <Card.Body>
          <h3 className="text-center mb-4 fw-bold">Contact Us</h3>

          <Form onSubmit={handleSubmit}>
            <Row className="g-2">
              <Col xs={12}>
                <Form.Control
                  style={inputStyle}
                  name="user_name"
                  placeholder="Name *"
                  value={formData.user_name}
                  onChange={handleChange}
                />
                {formErrors.user_name && (
                  <small className="text-danger">{formErrors.user_name}</small>
                )}
              </Col>

              <Col xs={12}>
                <Form.Control
                  style={inputStyle}
                  name="companyName"
                  placeholder="Company Name *"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {formErrors.companyName && (
                  <small className="text-danger">{formErrors.companyName}</small>
                )}
              </Col>

              <Col xs={12}>
                <Form.Control
                  style={inputStyle}
                  name="user_phone"
                  placeholder="Phone Number *"
                  value={formData.user_phone}
                  onChange={handleChange}
                />
                {formErrors.user_phone && (
                  <small className="text-danger">{formErrors.user_phone}</small>
                )}
              </Col>

              <Col xs={12}>
                <Form.Control
                  style={inputStyle}
                  name="user_email"
                  placeholder="Email Address"
                  value={formData.user_email}
                  onChange={handleChange}
                />
              </Col>

              <Col xs={12}>
                <Form.Select
                  style={inputStyle}
                  name="user_service"
                  value={formData.user_service}
                  onChange={handleChange}
                >
                  <option value="">Select Service *</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Corporate Video Production</option>
                  <option>Digital Marketing</option>
                  <option>Graphic Designing</option>
                  <option>2D Animations</option>
                  <option>B2B Marketing Service</option>
                </Form.Select>
                {formErrors.user_service && (
                  <small className="text-danger">{formErrors.user_service}</small>
                )}
              </Col>

              <Col xs={12}>
                <Form.Control
                  style={inputStyle}
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleChange}
                />
                {formErrors.city && (
                  <small className="text-danger">{formErrors.city}</small>
                )}
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
