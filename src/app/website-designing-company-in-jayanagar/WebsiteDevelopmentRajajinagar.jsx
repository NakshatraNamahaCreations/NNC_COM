"use client";

import TechSection from "@/components/home/TechSection";
import BannerRajajinagar from "./BannerRajajinagar";
import BlogTeasers from "@/components/websiteDev/BlogTeasers";
import ContactCard from "@/components/websiteDev/ContactCard";
import ContactSection from "@/components/websiteDev/ContactSection";
import ContactUs1 from "@/components/websiteDev/ContactUs1";
import FaqSection from "@/app/website-designing-company-in-jayanagar/FaqSection";
import HeroAnuvic from "@/components/websiteDev/HeroAnuvic";
import WebDevProcessSlider from "@/app/website-designing-company-in-jayanagar/WebDevProcessSlider";
import SuccessStats from "@/app/website-designing-company-in-jayanagar/SuccessStats";
import Testimonials from "@/app/website-designing-company-in-jayanagar/Testimonials";
import VerticalTabs from "@/app/website-designing-company-in-jayanagar/VerticalTabs";
import WhyAnuvic from "@/app/website-designing-company-in-jayanagar/WhyAnuvic";

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
      "image": "https://www.nakshatranamahacreations.com/media/nnclogo.png",
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
      "url": "https://www.nakshatranamahacreations.com/web-design-company-in-jayanagar",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
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
          "name": "Web Design Company in Jayanagar, Bangalore",
          "item": "https://www.nakshatranamahacreations.com/web-design-company-in-jayanagar"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer custom website design for small and medium businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in custom website design tailored for startups, service providers, shops, and professionals across industries."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to complete a typical website project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On average, it takes 7–15 working days, depending on the number of pages, features, and content readiness."
          }
        },
        {
          "@type": "Question",
          "name": "Will the website be mobile-friendly and optimized for search engines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every website we deliver is fully responsive and comes with basic SEO optimization to help improve visibility on Google."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with domain name registration and web hosting setup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We assist with domain selection, registration, and hosting setup based on your business goals and budget."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide ongoing support and website maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer post-launch maintenance plans to ensure your website stays secure, updated, and high-performing."
          }
        },
        {
          "@type": "Question",
          "name": "What is the starting price for website design and development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our website packages start from ₹14,499. The final cost depends on design, features, pages, and technology used."
          }
        }
      ]
    }
  ]
};



  return (
    <>
  <Script id="schema-jayanagar" type="application/ld+json">
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
