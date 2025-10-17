"use client";

import TechSection from "@/components/home/TechSection";
import BannerRajajinagar from "./BannerRajajinagar";
import BlogTeasers from "@/components/websiteDev/BlogTeasers";
import ContactCard from "@/components/websiteDev/ContactCard";
import ContactSection from "@/components/websiteDev/ContactSection";
import ContactUs1 from "@/components/websiteDev/ContactUs1";
import FaqSection from "@/app/website-development-company-in-indiranagar/FaqSection";
import HeroAnuvic from "@/components/websiteDev/HeroAnuvic";
import WebDevProcessSlider from "@/app/website-development-company-in-indiranagar/WebDevProcessSlider";
import SuccessStats from "@/app/website-development-company-in-indiranagar/SuccessStats";
import Testimonials from "@/app/website-development-company-in-indiranagar/Testimonials";
import VerticalTabs from "@/app/website-development-company-in-indiranagar/VerticalTabs";
import WhyAnuvic from "@/app/website-development-company-in-indiranagar/WhyAnuvic";

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
      ]
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.nakshatranamahacreations.com/#localbusiness",
      "name": "Nakshatra Namaha Creations",
      "image": "https://www.nakshatranamahacreations.com/media/nnclogo.png",
      "url": "https://www.nakshatranamahacreations.com/website-development-company-in-indiranagar",
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
      "areaServed": "Bangalore",
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.facebook.com/Nakshatranamahacreations/",
        "https://www.instagram.com/nnc.digitalbengaluru/"
      ]
    },

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

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take Nakshatra Namaha Creations to develop a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development time depends on complexity, but typically ranges from 3 to 8 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Does Nakshatra Namaha Creations provide website maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer ongoing maintenance and support packages."
          }
        },
        {
          "@type": "Question",
          "name": "Can Nakshatra Namaha Creations help with SEO after website launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely, we provide SEO services to improve your search rankings."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be mobile-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our websites are fully responsive and optimized for all devices."
          }
        },
        {
          "@type": "Question",
          "name": "Does Nakshatra Namaha Creations develop e-commerce websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we build secure and scalable e-commerce platforms tailored to your needs."
          }
        }
      ]
    },

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
          "name": "Website Development Company in Indiranagar",
          "item": "https://www.nakshatranamahacreations.com/website-development-company-in-indiranagar"
        }
      ]
    }
  ]
};



  return (
    <>
      <Script id="schema-markup" type="application/ld+json">
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
