"use client";

import TechSection from "@/components/home/TechSection";
import BannerRajajinagar from "./BannerRajajinagar";
import BlogTeasers from "@/components/websiteDev/BlogTeasers";
import ContactCard from "@/components/websiteDev/ContactCard";
import ContactSection from "@/components/websiteDev/ContactSection";
import ContactUs1 from "@/components/websiteDev/ContactUs1";
import FaqSection from "@/app/website-development-company-in-rajajinagar/FaqSection";
import HeroAnuvic from "@/components/websiteDev/HeroAnuvic";
import WebDevProcessSlider from "@/app/website-development-company-in-rajajinagar/WebDevProcessSlider";
import SuccessStats from "@/app/website-development-company-in-rajajinagar/SuccessStats";
import Testimonials from "@/app/website-development-company-in-rajajinagar/Testimonials";
import VerticalTabs from "@/app/website-development-company-in-rajajinagar/VerticalTabs";
import WhyAnuvic from "@/app/website-development-company-in-rajajinagar/WhyAnuvic";

import Script from "next/script";
import { useState } from "react";
import CoveredSection from "./CoveredSection";
import Trusted from "./Trusted";
import ServeClients from "./ServeClients";
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

  const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.nakshatranamahacreations.com/#localbusiness",
      "name": "Nakshatra Namaha Creations",
      "image": "https://nakshatranamahacreations.com/media/nnclogo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st Block, Channasandra",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560061",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.900525119796741,
        "longitude": 77.52318771928213
      },
      "url": "https://www.nakshatranamahacreations.com",
      "telephone": "+91-9900566466",
      "email": "info@nakshatranamahacreations.com",
      "areaServed": "Bangalore",
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.facebook.com/Nakshatranamahacreations/",
        "https://www.instagram.com/nnc.digitalbengaluru/"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.nakshatranamahacreations.com/#organization",
      "name": "Nakshatra Namaha Creations",
      "url": "https://www.nakshatranamahacreations.com/website-development-company-in-rajajinagar",
      "logo": "https://nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "Service",
      "serviceType": "WordPress Website Development",
      "provider": { "@id": "https://www.nakshatranamahacreations.com/#localbusiness" }
    },
    {
      "@type": "Service",
      "serviceType": "React JS Website Development",
      "provider": { "@id": "https://www.nakshatranamahacreations.com/#localbusiness" }
    },
    {
      "@type": "Service",
      "serviceType": "Node JS Website Development",
      "provider": { "@id": "https://www.nakshatranamahacreations.com/#localbusiness" }
    },
    {
      "@type": "Service",
      "serviceType": "CMS Website Development",
      "provider": { "@id": "https://www.nakshatranamahacreations.com/#localbusiness" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.nakshatranamahacreations.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Website Development Company Rajajinagar",
          "item": "https://www.nakshatranamahacreations.com/website-development-company-in-rajajinagar"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes Nakshatra Namaha Creations different from other website developers in Rajajinagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We don’t just build websites; we create digital experiences tailored to your business. Our team focuses on quality, creativity, and long-term support to help your brand stand out online."
          }
        },
        {
          "@type": "Question",
          "name": "Can I update my website content myself after it’s built?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We make sure to build websites with easy-to-use content management systems (like WordPress) so you can update your text, images, and products without any technical hassle."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure my website loads quickly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Speed matters! We optimize images, use efficient coding practices, and implement caching so your visitors get a smooth, fast browsing experience every time."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be secure from hackers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Security is a top priority. We include essential security features and can also help with SSL certificates and regular updates to keep your site safe."
          }
        },
        {
          "@type": "Question",
          "name": "What if I’m not sure what kind of website I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No worries! We offer free consultations where we understand your business and recommend the best website type and features for your goals."
          }
        }
      ]
    }
  ]
};



  return (
    <>
      <Script id="schema-rajajinagar" type="application/ld+json">
  {JSON.stringify(schemaMarkup)}
</Script>


         
      <BannerRajajinagar />
      <HeroAnuvic/> 
        <CoveredSection/>
           <WhyAnuvic/>
              <VerticalTabs/>
          <TechSection/>
           <SuccessStats/>
           
              <Testimonials/> 
              <Trusted/>
              <ServeClients/>
              <WebDevProcessSlider/>
             
              <BlogTeasers/>
              <FaqSection/>
    </>
  );
}
