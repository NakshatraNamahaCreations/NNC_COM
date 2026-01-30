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
        "url": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-mumbai",
        "name": "Ecommerce Website Development Company in Mumbai | Scalable Online Stores",
        "description": "Trusted ecommerce website development company in Mumbai building secure, scalable, and conversion-focused online stores for growing businesses."
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
            "name": "Ecommerce Website Development Company in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does an ecommerce website development company in Mumbai offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ecommerce website development services include custom online store development, payment gateway integration, product and inventory management, marketplace solutions, and scalable ecommerce platforms."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to develop an ecommerce website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ecommerce website development timelines depend on features and complexity, but most projects are completed within 4–8 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Are ecommerce websites secure and scalable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ecommerce websites are built with secure payment integration, data protection measures, and scalable architecture to handle traffic and sales growth."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build ecommerce websites for different industries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we develop ecommerce websites for retail, fashion, electronics, healthcare, food, and service-based businesses in Mumbai."
            }
          },
          {
            "@type": "Question",
            "name": "Will I get full ownership of my ecommerce website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you receive complete ownership of your ecommerce website, including source code and intellectual property."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-ecommerce-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <HeroBanner />
      <TrustedStats />
      <AboutSplitSection />
      <ServicesSection />
      <AppProcess />
      <AboutSplitSection1 />
      <IndiaSmartSection />
      <IndustriesSection />
      <TechStackTabs />
      <PremiumTestimonials />
      <FaqSection />
    </>
  );
}
