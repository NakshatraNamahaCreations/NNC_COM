"use client";

import TechSection from "@/components/home/TechSection";
import BannerRajajinagar from "./BannerRajajinagar";
import BlogTeasers from "@/components/websiteDev/BlogTeasers";
import ContactCard from "@/components/websiteDev/ContactCard";
import ContactSection from "@/components/websiteDev/ContactSection";
import ContactUs1 from "@/components/websiteDev/ContactUs1";
import FaqSection from "@/app/mobile-app-development-company-in-rr-nagar/FaqSection";
import HeroAnuvic from "@/components/websiteDev/HeroAnuvic";
import WebDevProcessSlider from "@/app/mobile-app-development-company-in-rr-nagar/WebDevProcessSlider";
import SuccessStats from "@/app/mobile-app-development-company-in-rr-nagar/SuccessStats";
import Testimonials from "@/app/mobile-app-development-company-in-rr-nagar/Testimonials";
import VerticalTabs from "@/app/mobile-app-development-company-in-rr-nagar/VerticalTabs";
import WhyAnuvic from "@/app/mobile-app-development-company-in-rr-nagar/WhyAnuvic";

import Script from "next/script";
import { useState } from "react";
import CoveredSection from "./CoveredSection";
import Trusted from "./Trusted";
import ServeClients from "./ServeClients";
import WhyChooseUs from "@/app/mobile-app-development-company-in-rr-nagar/WhyChooseUs";
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
      "areaServed": "RR Nagar, Bengaluru",
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
      "url": "https://www.nakshatranamahacreations.com/mobile-app-development-company-in-rr-nagar",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "Service",
      "serviceType": "Android App Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "iOS App Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "React Native App Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Flutter App Development",
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
          "name": "Mobile App Development Company in RR Nagar",
          "item": "https://www.nakshatranamahacreations.com/mobile-app-development-company-in-rr-nagar"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose Nakshatra Namaha Creations as your Mobile App Development Company in RR Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide full-cycle app development — from design to deployment — ensuring high-quality, scalable apps that meet business goals."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build both Android and iOS mobile apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our Mobile App Development Company in RR Nagar develops Android, iOS, and cross-platform apps using the latest technologies."
          }
        },
        {
          "@type": "Question",
          "name": "What industries do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve industries like healthcare, e-commerce, education, real estate, and travel with tailor-made app solutions."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign my existing mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We revamp outdated apps to improve design, speed, and performance while maintaining your brand identity."
          }
        },
        {
          "@type": "Question",
          "name": "How long does mobile app development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timeline depends on app complexity — usually 4–10 weeks for standard apps and longer for enterprise projects."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer post-launch maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Mobile App Development Company in RR Nagar provides continuous support, updates, and performance enhancements."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you use for app development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use Flutter, React Native, Swift, Kotlin, and Node.js to build robust and scalable mobile apps."
          }
        },
        {
          "@type": "Question",
          "name": "Will my mobile app be optimized for SEO and app store visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we integrate app store optimization (ASO) strategies to improve ranking and visibility."
          }
        },
        {
          "@type": "Question",
          "name": "Do you sign NDA before starting projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we ensure complete confidentiality and security for all client projects."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get started with your Mobile App Development Company in RR Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply contact us through our website or visit our RR Nagar office to discuss your project requirements and goals."
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
           {/* <SuccessStats/> */}
           
              <Testimonials/> 
              <Trusted/>
              {/* <ServeClients/> */}
              {/* <WebDevProcessSlider/> */}
             <WhyChooseUs/>
              <BlogTeasers/>
              <FaqSection/>
    </>
  );
}
