"use client";

import { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Modal from "react-modal";
import { Button, Card, Row, Col } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";
import PopupBtn from "@/components/home/PopupBtn";

// ✅ Required for react-modal
Modal.setAppElement("body");

export default function ContactModal({ showPopup, setShowPopup }) {
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

  const inputStyle = {
    height: "44px",
    padding: "10px 14px",
    fontSize: "14px",
    borderRadius: "8px",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      const numeric = value.replace(/\D/g, "");
      if (numeric.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numeric }));
        setFormErrors((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }

    if (name === "user_name") {
      const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    const { user_name, company_name, user_phone, user_service, user_city, user_email } = formData;

    if (!/^[A-Za-z\s]{3,}$/.test(user_name)) errors.user_name = "Enter a valid name";
    if (!company_name.trim()) errors.company_name = "Company name is required";
    if (!/^[6-9]\d{9}$/.test(user_phone)) errors.user_phone = "Invalid phone number";
    if (!user_service) errors.user_service = "Select a service";
    if (!user_city.trim()) errors.user_city = "City is required";

    if (user_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
      errors.user_email = "Invalid email address";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name: user_name,
          companyName: company_name,
          email: user_email,
          phoneNo: user_phone,
          service: user_service,
          city: user_city,
          referenceFrom: "website",
          sourceDomain: "nakshatra.com",
        }
      );

      if (response.status === 200 || response.status === 201) {
        setFormData({
          user_name: "",
          company_name: "",
          user_email: "",
          user_phone: "",
          user_service: "",
          user_city: "",
          referenceFrom: "website",
        });
        setFormErrors({});
        setShowPopup(false);
        router.push("/thankyou");
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      alert("Failed to send enquiry");
    }
  };

  return (
    <Modal
      isOpen={showPopup}
      onRequestClose={() => setShowPopup(false)}
      overlayClassName="modal-overlay"
      className="modal-content-custom"
      shouldCloseOnOverlayClick
      ariaHideApp={false}
    >
      <Card className="popup-card shadow-lg p-4 position-relative border-0">
        <Button
          variant="light"
          className="close-btn"
          onClick={() => setShowPopup(false)}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
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
                {formErrors.user_name && <small className="text-danger">{formErrors.user_name}</small>}
              </Col>

              

              <Col xs={12}>
                <Form.Control
                  style={inputStyle}
                  name="user_phone"
                  placeholder="Phone Number *"
                  value={formData.user_phone}
                  onChange={handleChange}
                />
                {formErrors.user_phone && <small className="text-danger">{formErrors.user_phone}</small>}
              </Col>

              <Col xs={12}>
                <Form.Control
                  style={inputStyle}
                  name="user_email"
                  placeholder="Email Address"
                  value={formData.user_email}
                  onChange={handleChange}
                />
                {formErrors.user_email && <small className="text-danger">{formErrors.user_email}</small>}
              </Col>

              <Col xs={12}>
                <Form.Select
                  style={inputStyle}
                  name="user_service"
                  value={formData.user_service}
                  onChange={handleChange}
                >
                  <option value="">Select Service *</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="Corporate Video Production">Corporate Video Production</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="2D Animations">2D Animations</option>
                  <option value="B2B Marketing Service">B2B Marketing Service</option>
                </Form.Select>
                {formErrors.user_service && <small className="text-danger">{formErrors.user_service}</small>}
              </Col>
<Col xs={12}>
                <Form.Control
                  style={inputStyle}
                  name="company_name"
                  placeholder="Company Name *"
                  value={formData.company_name}
                  onChange={handleChange}
                />
                {formErrors.company_name && <small className="text-danger">{formErrors.company_name}</small>}
              </Col>
              <Col xs={12}>
                <Form.Control
                  style={inputStyle}
                  name="user_city"
                  placeholder="City *"
                  value={formData.user_city}
                  onChange={handleChange}
                />
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
