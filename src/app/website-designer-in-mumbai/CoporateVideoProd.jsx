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
      "url": "https://www.nakshatranamahacreations.com/website-designer-in-mumbai",
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
      "url": "https://www.nakshatranamahacreations.com/website-designer-in-mumbai",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.nakshatranamahacreations.com/website-designer-in-mumbai#webpage",
      "url": "https://www.nakshatranamahacreations.com/website-designer-in-mumbai",
      "name": "Website Designer in Mumbai | Custom Website Development",
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
          "name": "Website Designer in Mumbai",
          "item": "https://www.nakshatranamahacreations.com/website-designer-in-mumbai"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a website designer in Mumbai typically charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of hiring a website designer in Mumbai depends on the design scope, number of pages, layout complexity, and customization required. We provide a transparent quote after understanding your design needs."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to design a professional website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most website design projects are completed within 3–10 working days, depending on design revisions, content readiness, and the number of pages involved."
          }
        },
       {
          "@type": "Question",
          "name": "Do you redesign existing websites in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer complete website redesign services to improve visual appeal, usability, structure, and user experience while maintaining your brand identity."
          }
        },
       {
          "@type": "Question",
          "name": "Will my website be mobile-friendly and responsive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. All websites we design are fully responsive and optimized to work seamlessly across mobiles, tablets, laptops, and desktops."
          }
        },
        {
          "@type": "Question",
          "name": "Do you design SEO-friendly websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our website designs follow SEO-friendly practices such as clean layouts, proper heading structure, fast loading design, and mobile responsiveness."
          }
        },
        {
          "@type": "Question",
          "name": "Can I manage or update my website content after design is completed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we design websites using CMS-based or easy-to-manage structures, allowing you to update text, images, and content without technical help."
          }
        },
      ]
    }
  ]


};

  return (
    <>

               <Script
        id="nnc-web-mumbai-jsonld"
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
