"use client";

import { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
import axios from "axios";

const ContactForm = () => {
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

  useEffect(() => {
    const currentPath = window.location.pathname; // safer for Next.js client-side
    let service = "";

    if (
      currentPath === "/website-development-company-in-bangalore" ||
      currentPath === "/website-development-company-in-hyderabad"
    ) {
      service = "Web Development";
    } else if (
      currentPath === "/mobile-app-development-company-in-bangalore" ||
      currentPath === "/mobile-app-development-company-hyderabad"
    ) {
      service = "App Development";
    } else if (
      currentPath === "/graphic-design-company-in-bangalore" ||
      currentPath === "/graphic-design-services-hyderabad"
    ) {
      service = "Graphic Designing";
    } else if (
      currentPath === "/digital-marketing-agency-in-bangalore" ||
      currentPath === "/digital-marketing-agency-hyderabad"
    ) {
      service = "Digital Marketing";
    } else if (
      currentPath === "/corporate-video-production-company-in-bangalore" ||
      currentPath === "/corporate-video-production-company-hyderabad"
    ) {
      service = "Corporate Video Production";
    } else if (
      currentPath === "/b2b-marketing-agency-in-bangalore" ||
      currentPath === "/b2b-marketing-company-hyderabad"
    ) {
      service = "B2B Marketing Service";
    } else if (
      currentPath === "/2d-animation-studio-in-bangalore" ||
      currentPath === "/2d-animation-studio-hyderabad"
    ) {
      service = "2D Animations";
    }
     else if (
  currentPath === "/software-development-company-in-bangalore" ||
  currentPath === "/software-development-company-in-bangalore"
) {
  service = "Software Development";
}
else if (
  currentPath === "/website-development-company" ||
  currentPath === "/website-development-company"
) {
  service = "Web Development";
}
else if (
  currentPath === "/mobile-app-development-company" ||
  currentPath === "/mobile-app-development-company"
) {
  service = "App Development";
}
else if (
  currentPath === "/2d-animation-studio" ||
  currentPath === "/2d-animation-studio"
) {
  service = "2D Animations";
}
else if (
  currentPath === "/corporate-film-makers" ||
  currentPath === "/corporate-film-makers"
) {
  service = "Corporate Film Makers";
}
else if (
  currentPath === "/website-designing-company" ||
  currentPath === "/website-designing-company"
) {
  service = "Website Designing ";
}
else if (
  currentPath === "/mobile-app-developers" ||
  currentPath === "/mobile-app-developers"
) {
  service = "Mobile App Development";
}
else if (
  currentPath === "/website-developers-near-me" ||
  currentPath === "/website-developers-near-me"
) {
  service = "Website Development";
}
else if (
  currentPath === "/website-development-company-in-mumbai" ||
  currentPath === "/website-development-company-in-mumbai"
) {
  service = "Website Development";
}
else if (
  currentPath === "/mobile-app-development-company-in-mumbai" ||
  currentPath === "/mobile-app-development-company-in-mumbai"
) {
  service = "Mobile App Development";
}
else if (
  currentPath === "/2d-animation-studio-in-mumbai" ||
  currentPath === "/2d-animation-studio-in-mumbai"
) {
  service = "2D Animations";
}
else if (
  currentPath === "/ios-mobile-app-development" ||
  currentPath === "/ios-mobile-app-development"
) {
  service = "Ios App Development";
}

else if (
  currentPath === "/android-app-development" ||
  currentPath === "/android-app-development"
) {
  service = "Android App Development";
}
else if (
  currentPath === "/node-js-development-company" ||
  currentPath === "/node-js-development-company"
) {
  service = "Node Js Development";
}
else if (
  currentPath === "/react-js-development-company" ||
  currentPath === "/react-js-development-company"
) {
  service = "React Js Development";
}
else if (
  currentPath === "/corporate-video-makers" ||
  currentPath === "/corporate-video-makers"
) {
  service = "Corporate Video Makers";
}
else if (
  currentPath === "/animated-video-creators" ||
  currentPath === "/animated-video-creators"
) {
  service = "Animated Video Creators";
}
else if (
  currentPath === "/graphic-designing-company" ||
  currentPath === "/graphic-designing-company"
) {
  service = "Graphic Designing Company";
}
else if (
  currentPath === "/paid-marketing-services" ||
  currentPath === "/paid-marketing-services"
) {
  service = "Paid Marketing Services";
}
else if (
  currentPath === "/social-media-marketing" ||
  currentPath === "/social-media-marketing"
) {
  service = "Social Media Marketing";
}
else if (
  currentPath === "/seo-services" ||
  currentPath === "/seo-services"
) {
  service = "Search Engine Optimisation";
}
else if (
  currentPath === "/flutter-app-development" ||
  currentPath === "/flutter-app-development"
) {
  service = "Flutter App Development";
}
else if (
  currentPath === "/mobile-app-developers-in-hyderabad" ||
  currentPath === "/mobile-app-developers-in-hyderabad"
) {
  service = "Mobile App Development";
}
else if (
  currentPath === "/motion-graphics-services" ||
  currentPath === "/motion-graphics-services"
) {
  service = "Motion Graphic Services";
}
else if (
  currentPath === "/react-native-mobile-app-developers" ||
  currentPath === "/react-native-mobile-app-developers"
) {
  service = "React Native App Development";
}
else if (
  currentPath === "/ui-ux-design-agency" ||
  currentPath === "/ui-ux-design-agency"
) {
  service = "UI/UX Design ";
}
else if (
  currentPath === "/ecommerce-website-development-company" ||
  currentPath === "/ecommerce-website-development-company"
) {
  service = "Ecommerce Website ";
}
else if (
  currentPath === "/website-development-agency" ||
  currentPath === "/website-development-agency"
) {
  service = "Website development agency";
}
else if (
  currentPath === "/best-website-development-company-in-bangalore" ||
  currentPath === "/best-website-development-company-in-bangalore"
) {
  service = "Website development Company";
}
    setFormData((prev) => ({
      ...prev,
      user_service: service,
    }));
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      const numericValue = value.replace(/\D/g, ""); // Allow only digits
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
        setFormErrors((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }

    if (name === "user_name") {
      const lettersOnly = value.replace(/[^A-Za-z\s]/g, ""); // Allow only letters and spaces
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
    const { user_name, user_phone, user_service, user_email } = formData;

    // Name validation
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!user_name || !nameRegex.test(user_name.trim())) {
      errors.user_name =
        "Please enter a valid name (only letters, min 3 characters).";
    }

    // Company Name validation
if (!formData.company_name || formData.company_name.trim().length < 2) {
  errors.company_name = "Company name is required.";
}

// City validation
if (!formData.city || formData.city.trim().length < 2) {
  errors.city = "City is required.";
}


    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const repeatedDigitsRegex = /^(\d)\1{9}$/;
    const invalidPhones = [
      "0000000000",
      "1234567890",
      "0123456789",
      "9999999999",
      "8888888888",
      "7777777777",
      "6666666666",
    ];

    if (
      !user_phone ||
      !phoneRegex.test(user_phone) ||
      repeatedDigitsRegex.test(user_phone) ||
      invalidPhones.includes(user_phone)
    ) {
      errors.user_phone = "Please enter a valid 10-digit mobile number.";
    }

    // Service validation
    if (!user_service) {
      errors.user_service = "Please select a service.";
    }

    // Optional Email validation
    if (user_email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user_email)) {
        errors.user_email = "Please enter a valid email address.";
      }
    }

    // Show errors if any
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
  const response = await axios.post(
    "https://api.nakshatranamahacreations.in/api/enquiries",
    {
      name: user_name,
      companyName: formData.company_name,
      email: user_email,
      phoneNo: user_phone,
      service: user_service,
      city: formData.city,
      referenceFrom: "website",
       sourceDomain: "nakshatra.com",
    }
  );

  if (response.status === 201 || response.status === 200) {
    router.push("/thankyou");

    setFormData({
      user_name: "",
      company_name: "",
      user_email: "",
      user_phone: "",
      user_service: "",
      city: "",
      referenceFrom: "website",
    });

    setFormErrors({});
  } else {
    alert("Failed to send enquiry. Please try again.");
  }
} catch (error) {
  console.error("Error sending enquiry:", error);
  alert("Failed to send enquiry. Please check the console for details.");
}

  };


  const inputStyle = {
  height: "40px",
  fontSize: "14px",
  padding: "8px 12px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
};

const selectStyle = {
  ...inputStyle,
  cursor: "not-allowed",
};



  return (
  <Card.Body
    style={{
      backgroundColor: "white",
      padding: "20px",
      border: "1px solid black",
      borderRadius: "10px",
    }}
  >
    <h3
      className="text-center mb-3"
      style={{ fontWeight: "bold", color: "black" }}
    >
      Contact Us
    </h3>

    <Form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        color: "black",
      }}
    >
      {/* Name */}
      <Form.Control
        type="text"
        name="user_name"
        placeholder="Name *"
        value={formData.user_name}
        onChange={handleChange}
        style={{
          height: "40px",
          fontSize: "14px",
          borderRadius: "8px",
        }}
      />
      {formErrors.user_name && (
        <div style={{ color: "red", fontSize: "10px" }}>
          {formErrors.user_name}
        </div>
      )}

      {/* Phone */}
      <Form.Control
        type="text"
        name="user_phone"
        placeholder="Phone Number *"
        value={formData.user_phone}
        onChange={handleChange}
        maxLength={10}
        style={{
          height: "40px",
          fontSize: "14px",
          borderRadius: "8px",
        }}
      />
      {formErrors.user_phone && (
        <div style={{ color: "red", fontSize: "10px" }}>
          {formErrors.user_phone}
        </div>
      )}

      {/* Email */}
      <Form.Control
        type="email"
        name="user_email"
        placeholder="Email Address"
        value={formData.user_email}
        onChange={handleChange}
        style={{
          height: "40px",
          fontSize: "14px",
          borderRadius: "8px",
        }}
      />
      {formErrors.user_email && (
        <div style={{ color: "red", fontSize: "10px" }}>
          {formErrors.user_email}
        </div>
      )}

      {/* Service (Disabled) */}
      <Form.Select
        name="user_service"
        value={formData.user_service}
        disabled
        style={{
          height: "40px",
          fontSize: "14px",
          borderRadius: "8px",
          cursor: "not-allowed",
        }}
      >
        <option>{formData.user_service || "Select Service *"}</option>
      </Form.Select>
      {formErrors.user_service && (
        <div style={{ color: "red", fontSize: "10px" }}>
          {formErrors.user_service}
        </div>
      )}

      {/* Company Name */}
      <Form.Control
        type="text"
        name="company_name"
        placeholder="Company Name *"
        value={formData.company_name}
        onChange={handleChange}
        style={{
          height: "40px",
          fontSize: "14px",
          borderRadius: "8px",
        }}
      />
      {formErrors.company_name && (
        <div style={{ color: "red", fontSize: "10px" }}>
          {formErrors.company_name}
        </div>
      )}

      {/* City */}
      <Form.Control
        type="text"
        name="city"
        placeholder="City *"
        value={formData.city}
        onChange={handleChange}
        style={{
          height: "40px",
          fontSize: "14px",
          borderRadius: "8px",
        }}
      />
      {formErrors.city && (
        <div style={{ color: "red", fontSize: "10px" }}>
          {formErrors.city}
        </div>
      )}

      {/* Submit */}
      <Button
        variant="dark"
        type="submit"
        style={{
          height: "44px",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "500",
          width: "100%",
        }}
      >
        Submit
      </Button>
    </Form>
  </Card.Body>
);

};

export default ContactForm;
