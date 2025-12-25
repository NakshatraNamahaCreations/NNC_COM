
'use client';

import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button, Card, Form, FloatingLabel, Modal } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import axios from "axios";
import { useRouter } from "next/navigation";  // Using Next.js's router

export default function InternalContactModal({ showPopup, setShowPopup }) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_service: "",
    });

    // Dynamically set the user_service based on the path
    useEffect(() => {
        const path = window.location.pathname;
        if (path === "/mobile-app-development-company-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "App Development"
            }));
        } else if (path === "/graphic-design-company-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "Graphic Designing"
            }));
        } else if (path === "/digital-marketing-agency-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "Digital Marketing"
            }));
        } else if (path === "/corporate-video-production-company-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "Corporate Video Production"
            }));
        }
        else if (path === "/web-development-services-in-bengaluru") {
            setFormData(prev => ({
                ...prev,
                user_service: "Web Development"
            }));
        }
    }, []);

    // Animation for popup
    const popupSpring = useSpring({
        opacity: showPopup ? 1 : 0,
        transform: showPopup ? "scale(1)" : "scale(0.8)",
        config: { tension: 250, friction: 20 },
        
    });

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

const handleSubmit = async (e) => {
  e.preventDefault();

  const { user_name, user_phone, user_email, user_service } = formData;

  if (!user_name || !user_phone || !user_service) {
    alert("Please enter mandatory fields");
    return;
  }

  try {
    const response = await axios.post(
      "https://api.nakshatranamahacreations.in/api/enquiries",
      {
        name: user_name,
        email: user_email,
        phoneNo: user_phone,
        service: user_service,
        referenceFrom: "website",
        city: "Bangalore",
      }
    );

    if (response.status === 200 || response.status === 201) {
      setShowPopup(false);
      router.push("/thankyou");

      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_service: "",
      });
    } else {
      alert("Failed to submit enquiry. Please try again.");
    }
  } catch (error) {
    console.error("Enquiry API error:", error);

    if (error.response) {
      alert(error.response.data?.message || "Server error");
    } else {
      alert("Server not reachable. Please try later.");
    }
  }
};


    return (
        <Modal
            show={showPopup}
            onHide={() => setShowPopup(false)}
            centered
            size="lg"            
        >
            <animated.div style={popupSpring} >
                <Modal.Body className="" style={{ width: '400px' }}>
                    <Button
                        variant="light"
                        className="close-btn "
                        onClick={() => setShowPopup(false)}
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            background: "none",
                            border: "none",
                            fontSize: "20px",
                            cursor: "pointer",
                        }}
                    >
                        <BsX size={28} />
                    </Button>

                    <Card.Body style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                        <h3 className="text-center mb-3" style={{ fontWeight: "bold", color: 'black' }}>
                            Contact Us
                        </h3>
                        <Form onSubmit={handleSubmit} className="d-flex flex-column" style={{ color: 'black' }}>
                            <FloatingLabel controlId="floatingName" label="Name *" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="user_name"
                                    placeholder="Name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPhone" label="Phone Number *" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="user_phone"
                                    placeholder="Phone Number"
                                    value={formData.user_phone}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
                                <Form.Control
                                    type="email"
                                    name="user_email"
                                    placeholder="Email Address"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                />
                            </FloatingLabel>

                            <Form.Select name="user_service" disabled value={formData.user_service} onChange={handleChange} className="mb-3" required>
                                <option value="">Select a Service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                                <option value="Corporate Video Production">Corporate Video Production</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Graphic Designing">Graphic Designing</option>
                                <option value="2D Animations">2D Animations</option>
                                <option value="B2B Marketing Service">B2B Marketing Service</option>
                            </Form.Select>

                            <Button variant="dark" type="submit" style={{ width: "100%" }}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Modal.Body>
            </animated.div>
        </Modal>
    );
}
