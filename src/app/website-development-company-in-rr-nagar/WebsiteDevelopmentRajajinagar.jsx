"use client";

import TechSection from "@/components/home/TechSection";
import BannerRajajinagar from "./BannerRajajinagar";
import BlogTeasers from "@/components/websiteDev/BlogTeasers";
import ContactCard from "@/components/websiteDev/ContactCard";
import ContactSection from "@/components/websiteDev/ContactSection";
import ContactUs1 from "@/components/websiteDev/ContactUs1";
import FaqSection from "@/app/website-development-company-in-rr-nagar/FaqSection";
import HeroAnuvic from "@/components/websiteDev/HeroAnuvic";
import WebDevProcessSlider from "@/app/website-development-company-in-rr-nagar/WebDevProcessSlider";
import SuccessStats from "@/app/website-development-company-in-rr-nagar/SuccessStats";
import Testimonials from "@/app/website-development-company-in-rr-nagar/Testimonials";
import VerticalTabs from "@/app/website-development-company-in-rr-nagar/VerticalTabs";
import WhyAnuvic from "@/app/website-development-company-in-rr-nagar/WhyAnuvic";

import Script from "next/script";
import { useState } from "react";
import CoveredSection from "./CoveredSection";
import Trusted from "./Trusted";
import ServeClients from "./ServeClients";
import WhyChooseUs from "@/app/website-development-company-in-rr-nagar/WhyChooseUs";
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
      "url": "https://www.nakshatranamahacreations.com/website-development-company-in-rr-nagar",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "Service",
      "serviceType": "WordPress Website Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "E-Commerce Website Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Static Website Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Dynamic Website Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
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
          "name": "Website Development Company in RR Nagar",
          "item": "https://www.nakshatranamahacreations.com/website-development-company-in-rr-nagar"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is Nakshatra Namaha Creations the best Website Development Company in RR Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We combine creativity, technology, and strategy to build websites that drive business growth and ensure long-term performance."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide custom website design in RR Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every project is customized to match your brand’s goals, visual identity, and functionality needs."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build e-commerce websites in RR Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We create secure, scalable e-commerce platforms with product management, cart systems, and payment gateways."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be optimized for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all websites developed by us are SEO-friendly, optimized for loading speed, mobile-ready, and structured for Google indexing."
          }
        },
        {
          "@type": "Question",
          "name": "How much does website development cost in RR Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on your project scope, features, and design complexity. We provide transparent quotes after a quick consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer website maintenance services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our team provides continuous maintenance, performance monitoring, and upgrades to keep your website efficient."
          }
        },
        {
          "@type": "Question",
          "name": "What industries do you serve in RR Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with clients in healthcare, education, real estate, hospitality, and retail among others."
          }
        },
        {
          "@type": "Question",
          "name": "How long will it take to develop my website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard business site takes 2–4 weeks. More complex websites like e-commerce may take longer based on features."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with domain and hosting setup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Nakshatra Namaha Creations offers complete solutions including domain registration, SSL setup, and hosting configuration."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with your Website Development Company in RR Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply contact our RR Nagar team — we’ll schedule a quick discovery call to understand your goals and start building your digital success."
          }
        }
      ]
    }
  ]
};



  return (
    <>
       <script type="application/ld+json">
    {JSON.stringify(schemaMarkup)}
  </script>


         
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
             <WhyChooseUs/>
              <BlogTeasers/>
              <FaqSection/>
    </>
  );
}
