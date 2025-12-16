"use client";
import Script from "next/script";

import { useEffect } from 'react';
import Our_Service from "@/components/home/Our_Service";
import CoveredSection from "./CoveredSection";
import CTASection from "./CTASection";
import FeatureGrid from "./FeatureGrid";
import FeaturesGrid2 from "./FeaturesGrid2";
import HeroBanner from "./HeroBanner";
import IndustriesSlider from "./IndustriesSlider";
import Trusted from "./Trusted";
import styles from "../../styles/covered-section.module.css";
import ServeClients from "./ServeClients";
import CTASection1 from "./CTASection1";
import WhyChooseUs from "./WhyChooseUs.jsx";
import FaqSection from './FaqSection';
import TestimonialsCarousel from './TestimonialsCarousel';
import Trusted2 from './Trusted2';
import CTASection2 from "./CTASection2";


export default function MobileAppDevelopmentCompany() {

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
      "url": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company",
      "telephone": "+91-9900566466",
      "email": "info@nakshatranamahacreations.com",
      "areaServed": "",
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
      "url": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "WebPage",
      "url": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company",
      "name": "E-commerce Website Development Company for Online Stores",
      "description": "Build a high-converting online store with a trusted E-commerce website development company. Get secure, fast, mobile-optimized e-commerce solutions that scale as your business grows."
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
          "name": "E-commerce Website Development Company",
          "item": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does an E-commerce website development company do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An E-commerce website development company builds online stores with secure architecture, product management, payment integration, mobile optimization, and user-friendly designs. Nakshatra Namaha Creations handles everything from design to development, testing, and launch."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop an e-commerce website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The timeline depends on your store’s features and complexity. Most projects take 2–6 weeks. Nakshatra Namaha Creations provides clear milestones and structured workflows to ensure timely delivery."
          }
        },
        {
          "@type": "Question",
          "name": "Will my e-commerce website be mobile-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We create fully mobile-responsive online stores that offer fast, smooth shopping experiences on all devices. As a modern E-commerce website development company, this is one of our top priorities."
          }
        },
        {
          "@type": "Question",
          "name": "Do you integrate secure payment gateways?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We integrate multiple payment methods including cards, UPI, wallets, subscriptions, and international gateways to ensure a seamless checkout process."
          }
        },
        {
          "@type": "Question",
          "name": "Can I manage products and orders myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide an easy-to-use admin panel where you can update products, track orders, manage inventory, and handle offers—all without technical knowledge."
          }
        },
        {
          "@type": "Question",
          "name": "Will my e-commerce website be optimized for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every store we build includes SEO-friendly structure, fast loading speed, clean code, and optimized URLs. Nakshatra Namaha Creations ensures your website is ready to rank from day one."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer support after my website goes live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. As a long-term E-commerce website development company, we provide ongoing support, updates, security monitoring, and maintenance to keep your online store running smoothly."
          }
        }
      ]
    }
  ]

};


  return (
    <>
    <Script
  id="nnc-ecommerce-website-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>


      <HeroBanner />

      <CoveredSection />
    
      <FeatureGrid />
        <CTASection1/>
      <IndustriesSlider />
      {/* <CTASection /> */}

 
    {/* <Our_Service cardData={ourworkData} /> */}
    <Trusted2/>
      <Trusted />
         <CTASection2/>
      <FeaturesGrid2/>
      {/* <FeaturesGrid2 /> */}

      {/* <ServeClients/> */}
      {/* <WhyChooseUs/> */}
      <br />
      {/* <TestimonialsCarousel/> */}
      <FaqSection/>
 
    </>
  );
}
