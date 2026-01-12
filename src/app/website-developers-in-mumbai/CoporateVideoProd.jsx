"use client";
import Script from "next/script";

import AboutSplitSection from "./AboutSplitSection";
import AboutSplitSection1 from "./AboutSplitSection1";
import AppProcess from "./AppProcess";
import HeroBanner from "./HeroBanner";
import IndiaSmartSection from "./IndiaSmartSection";
import IndustriesSection from "./IndustriesSection";
import ServicesSection from "./ServicesSection";
import TechStackTabs from "./TechStackTabs";
import PremiumTestimonials from "./PremiumTestimonials";
import TrustedStats from "./TrustedStats";
import FaqSection from "./FaqSection";


export default function CoporateVideoProd() {


  const schema = {
      
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
      "url": "https://www.nakshatranamahacreations.com/website-developers-in-mumbai",
      "telephone": "+91-9900566466",
      "email": "info@nakshatranamahacreations.com",
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
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
      "url": "https://www.nakshatranamahacreations.com/website-developers-in-mumbai",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.nakshatranamahacreations.com/website-developers-in-mumbai#webpage",
      "url": "https://www.nakshatranamahacreations.com/website-developers-in-mumbai",
      "name": "Website Developers in Mumbai | Custom Website Development",
      "description": "Professional website developers in Mumbai building fast, secure, SEO-friendly websites for businesses. Get scalable web solutions tailored to growth."
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
          "name": "Website Developers in Mumbai",
          "item": "https://www.nakshatranamahacreations.com/website-developers-in-mumbai"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does website development cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website development costs vary based on design complexity, features, and integrations. We provide detailed estimates after requirement analysis."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most business websites are completed within 3–6 weeks, depending on scope."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide website maintenance services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer long-term support, updates, and technical maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "Is the website mobile-friendly and SEO-ready?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all websites are fully responsive and developed using SEO best practices."
          }
        },
        {
          "@type": "Question",
          "name": "Will I get full ownership of the website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you receive complete ownership and full source code access."
          }
        }
      ]
    }
  ]


};

  return (
    <>

               <Script
        id="nnc-app-develop-jsonld"
        type="application/ld+json"
       strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
   <HeroBanner/>
    <TrustedStats/>
    <AboutSplitSection/>
    <ServicesSection/>
    <AppProcess/>
    <AboutSplitSection1/>
    <IndiaSmartSection/>
    <IndustriesSection/>
    <TechStackTabs/>
    <PremiumTestimonials/>
    <FaqSection/>
    </>
  );
}
