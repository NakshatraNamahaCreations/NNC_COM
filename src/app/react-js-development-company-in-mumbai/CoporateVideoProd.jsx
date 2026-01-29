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
        "url": "https://www.nakshatranamahacreations.com/react-js-development-company-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/react-js-development-company-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/react-js-development-company-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/react-js-development-company-in-mumbai",
        "name": "React JS Development Company in Mumbai | Scalable Web Applications",
        "description": "Trusted React JS development company in Mumbai building fast, scalable, and high-performance web applications using modern frontend architecture."
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
            "name": "React JS Development Company in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/react-js-development-company-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does a React JS development company in Mumbai offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "React JS development services include single-page applications, dashboards, frontend architecture, UI integration, performance optimization, and scalable web solutions."
            }
          },
          {
            "@type": "Question",
            "name": "How long does React JS application development take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "React JS development timelines vary by complexity, but most projects are delivered within 4–8 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build scalable React JS applications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all React applications are built using modular, reusable components designed for long-term scalability."
            }
          },
          {
            "@type": "Question",
            "name": "Is React JS suitable for enterprise applications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, React JS is widely used for enterprise-grade applications due to its performance, flexibility, and maintainability."
            }
          },
          {
            "@type": "Question",
            "name": "Will I get full ownership of the React JS source code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you receive complete ownership of the React JS application source code and intellectual property."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-react-js1-jsonld"
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
