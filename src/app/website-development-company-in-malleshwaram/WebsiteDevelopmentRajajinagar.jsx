"use client";

import TechSection from "@/components/home/TechSection";
import BannerRajajinagar from "./BannerRajajinagar";
import BlogTeasers from "@/components/websiteDev/BlogTeasers";
import ContactCard from "@/components/websiteDev/ContactCard";
import ContactSection from "@/components/websiteDev/ContactSection";
import ContactUs1 from "@/components/websiteDev/ContactUs1";
import FaqSection from "@/app/website-development-company-in-malleshwaram/FaqSection";
import HeroAnuvic from "@/components/websiteDev/HeroAnuvic";
import WebDevProcessSlider from "@/app/website-development-company-in-malleshwaram/WebDevProcessSlider";
import SuccessStats from "@/app/website-development-company-in-malleshwaram/SuccessStats";
import Testimonials from "@/app/website-development-company-in-malleshwaram/Testimonials";
import VerticalTabs from "@/app/website-development-company-in-malleshwaram/VerticalTabs";
import WhyAnuvic from "@/app/website-development-company-in-malleshwaram/WhyAnuvic";

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
      "image": "https://www.nakshatranamahacreations.com/media/nnclogo.png",
      "url": "https://www.nakshatranamahacreations.com/website-development-company-in-malleshwaram",
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
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
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
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.nakshatranamahacreations.com/#service-react",
      "serviceType": "React JS Website Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.nakshatranamahacreations.com/#service-node",
      "serviceType": "Node JS Website Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.nakshatranamahacreations.com/#service-cms",
      "serviceType": "CMS Website Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },

    /* FAQ */
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the typical timeline for building a website with Nakshatra Namaha Creations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our project duration varies by complexity but generally falls between 3 and 8 weeks to deliver a complete website."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer post-launch website support and updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide continuous maintenance plans to keep your website secure and up to date."
          }
        },
        {
          "@type": "Question",
          "name": "Can Nakshatra Namaha Creations assist in improving my site’s search engine rankings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely! We offer SEO services designed to boost your website’s visibility and search performance."
          }
        },
        {
          "@type": "Question",
          "name": "Are your websites optimized for mobile devices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely, every site we build is fully responsive to provide a seamless experience across all screen sizes."
          }
        },
        {
          "@type": "Question",
          "name": "Is it possible to develop an online store with Nakshatra Namaha Creations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in creating secure, scalable e-commerce websites tailored to your business requirements."
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
          "name": "Website Development Company in Malleshwaram Bangalore",
          "item": "https://www.nakshatranamahacreations.com/website-development-company-in-malleshwaram"
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
