"use client";

import TechSection from "@/components/home/TechSection";
import BannerRajajinagar from "@/components/websiteDev/BannerRajajinagar";
import BlogTeasers from "@/components/websiteDev/BlogTeasers";
import ContactCard from "@/components/websiteDev/ContactCard";
import ContactSection from "@/components/websiteDev/ContactSection";
import ContactUs1 from "@/components/websiteDev/ContactUs1";
import FaqSection from "@/app/website-development-company-in-hsr-layout/FaqSection";
import HeroAnuvic from "@/components/websiteDev/HeroAnuvic";
import ServicesSlider from "@/components/websiteDev/ServicesSlider";
import SuccessStats from "@/app/website-development-company-in-hsr-layout/SuccessStats";
import Testimonials from "@/app/website-development-company-in-hsr-layout/Testimonials";
import VerticalTabs from "@/app/website-development-company-in-hsr-layout/VerticalTabs";
import WhyAnuvic from "@/components/websiteDev/WhyAnuvic";
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
      "@type": "Organization",
      "@id": "https://www.nakshatranamahacreations.com/#organization",
      "name": "Nakshatra Namaha Creations",
      "url": "https://www.nakshatranamahacreations.com/",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png",
      "sameAs": [
        "https://www.facebook.com/Nakshatranamahacreations/",
        "https://www.instagram.com/nnc.digitalbengaluru/",
        "https://www.linkedin.com/company/nakshatra-namaha-creation/",
        "https://x.com/nncbengaluru"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9900566466",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Kannada"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st Block, Channasandra",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560061",
        "addressCountry": "IN"
      }
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.nakshatranamahacreations.com/#localbusiness",
      "name": "Nakshatra Namaha Creations",
      "image": "https://www.nakshatranamahacreations.com/media/webdev/bannerImg.png",
      "url": "https://www.nakshatranamahacreations.com/website-development-company-in-hsr-layout",
      "telephone": "+91-9900566466",
      "email": "info@nakshatranamahacreations.com",
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "19:00"
        }
      ],
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, Credit Card, Online Payment",
      "areaServed": "Bangalore",
      "sameAs": [
        "https://www.facebook.com/Nakshatranamahacreations/",
        "https://www.instagram.com/nnc.digitalbengaluru/"
      ]
    },

    /* Services */
    {
      "@type": "Service",
      "@id": "https://www.nakshatranamahacreations.com/#service-wordpress",
      "serviceType": "WordPress Website Development",
      "provider": { "@id": "https://www.nakshatranamahacreations.com/#localbusiness" }
    },
    {
      "@type": "Service",
      "@id": "https://www.nakshatranamahacreations.com/#service-react",
      "serviceType": "React JS Website Development",
      "provider": { "@id": "https://www.nakshatranamahacreations.com/#localbusiness" }
    },
    {
      "@type": "Service",
      "@id": "https://www.nakshatranamahacreations.com/#service-node",
      "serviceType": "Node JS Website Development",
      "provider": { "@id": "https://www.nakshatranamahacreations.com/#localbusiness" }
    },
    {
      "@type": "Service",
      "@id": "https://www.nakshatranamahacreations.com/#service-cms",
      "serviceType": "CMS Website Development",
      "provider": { "@id": "https://www.nakshatranamahacreations.com/#localbusiness" }
    },

    /* Reviews (optional but helpful) */


    /* FAQ */
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide website maintenance after development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer post-launch maintenance and support to ensure your website stays updated and secure."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be mobile-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our websites are fully responsive and work well across desktops, tablets, and mobile phones."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with domain and hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we assist with domain registration, hosting setup, and recommend the best providers based on your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate payment gateways on my website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we integrate payment gateways like Razorpay, PayU, Stripe, and others for e-commerce and service-based websites."
          }
        },
        {
          "@type": "Question",
          "name": "Can you develop multi-language websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we support multi-language websites that help you connect with a diverse audience."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with startups and small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we work with startups, local businesses, and enterprises. Our packages are flexible to suit all business types."
          }
        }
      ]
    },

    /* Breadcrumbs */
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.nakshatranamahacreations.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Website Development Company HSR Layout Bangalore",
          "item": "https://www.nakshatranamahacreations.com/website-development-company-in-hsr-layout"
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
              <ServicesSlider/>
             
              <BlogTeasers/>
              <FaqSection/>
    </>
  );
}
