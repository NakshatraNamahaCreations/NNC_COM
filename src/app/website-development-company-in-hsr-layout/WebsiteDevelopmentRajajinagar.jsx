"use client";

import TechSection from "@/components/home/TechSection";
import BannerRajajinagar from "@/components/websiteDev/BannerRajajinagar";
import BlogTeasers from "@/components/websiteDev/BlogTeasers";
import ContactCard from "@/components/websiteDev/ContactCard";
import ContactSection from "@/components/websiteDev/ContactSection";
import ContactUs1 from "@/components/websiteDev/ContactUs1";
import FaqSection from "@/components/websiteDev/FaqSection";
import HeroAnuvic from "@/components/websiteDev/HeroAnuvic";
import ServicesSlider from "@/components/websiteDev/ServicesSlider";
import SuccessStats from "@/components/websiteDev/SuccessStats";
import Testimonials from "@/components/websiteDev/Testimonials";
import VerticalTabs from "@/components/websiteDev/VerticalTabs";
import WhyAnuvic from "@/components/websiteDev/WhyAnuvic";


import { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import styles from "./WebsiteDevelopmentRajajinagar.module.css";

export default function WebsiteDevelopmentRajajinagar() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send to API / Formspree / etc.
    console.log("Form:", form);
    alert("Thanks! We’ll contact you shortly.");
  };

  return (
    <>
      <BannerRajajinagar />
      <HeroAnuvic/> 
            <VerticalTabs/>
           <WhyAnuvic/>
          <TechSection/>
           <SuccessStats/>
              <Testimonials/> 
              {/* <ContactCard/> */}
              {/* <Perfection/>
              <ContactUs1/> */}
              <ServicesSlider/>
              {/* <ContactSection/> */}
              <BlogTeasers/>
              <FaqSection/>
    </>
  );
}
