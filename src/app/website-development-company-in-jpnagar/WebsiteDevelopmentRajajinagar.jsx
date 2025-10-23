"use client";

import TechSection from "@/components/home/TechSection";
import BannerRajajinagar from "./BannerRajajinagar";
import BlogTeasers from "@/components/websiteDev/BlogTeasers";
import ContactCard from "@/components/websiteDev/ContactCard";
import ContactSection from "@/components/websiteDev/ContactSection";
import ContactUs1 from "@/components/websiteDev/ContactUs1";
import FaqSection from "@/app/website-development-company-in-jpnagar/FaqSection";
import HeroAnuvic from "@/components/websiteDev/HeroAnuvic";
import WebDevProcessSlider from "@/app/website-development-company-in-jpnagar/WebDevProcessSlider";
import SuccessStats from "@/app/website-development-company-in-jpnagar/SuccessStats";
import Testimonials from "@/app/website-development-company-in-jpnagar/Testimonials";
import VerticalTabs from "@/app/website-development-company-in-jpnagar/VerticalTabs";
import WhyAnuvic from "@/app/website-development-company-in-jpnagar/WhyAnuvic";

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
      "url": "https://www.nakshatranamahacreations.com/website-development-company-in-jpnagar",
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
          "name": "Web Design Company in JP Nagar, Bangalore",
          "item": "https://www.nakshatranamahacreations.com/website-development-company-in-jpnagar"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide mobile-friendly website designs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our websites are responsive and optimized for mobile, tablet and desktop devices to ensure a smooth user experience across screen sizes."
          }
        },
        {
          "@type": "Question",
          "name": "Can I update the website content myself after it’s built?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We offer websites with user-friendly content management systems (CMS) like WordPress, allowing you to manage and update content without technical knowledge."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer SEO services along with website design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide on-page SEO optimization with every website. We also offer complete SEO packages for improving visibility and ranking on search engines."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign my existing website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide website redesign services to give your old website a fresh look, better performance, and modern features while retaining your brand essence."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate third-party tools like WhatsApp, Google Maps, or payment gateways?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we can integrate various third-party tools such as WhatsApp chat, Google Maps, payment gateways (like Razorpay, Paytm, Stripe), CRMs, analytics, and more based on your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Can I see some of your past work before getting started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Of course. We’ll be happy to share our portfolio or showcase relevant case studies based on your industry and project type."
          }
        }
      ]
    }
  ]
};


  return (
    <>
         <Script type="application/ld+json">
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
