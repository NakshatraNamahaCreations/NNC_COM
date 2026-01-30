"use client";
import Script from "next/script";

import AboutSplitSection from "./AboutSplitSection";
import AboutSplitSection1 from "./AboutSplitSection1";
import AppProcess from "./AppProcess";
import HeroBanner from "./HeroBanner.jsx";
import IndiaSmartSection from "./IndiaSmartSection.jsx";
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
          "streetAddress":
            "1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st Block, Channasandra",
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
        "url": "https://www.nakshatranamahacreations.com/website-designing-company-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/website-designing-company-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.nakshatranamahacreations.com/website-designing-company-in-mumbai#webpage",
        "url":
          "https://www.nakshatranamahacreations.com/website-designing-company-in-mumbai",
        "name":
          "Website Designing Company in Mumbai | UI/UX & Responsive Web Design",
        "description":
          "Professional website designing company in Mumbai creating modern, responsive, and user-focused websites that enhance brand identity and drive conversions."
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
            "name": "Website Designing Company in Mumbai",
            "item":
              "https://www.nakshatranamahacreations.com/website-designing-company-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does website designing cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Website designing costs depend on design complexity, number of pages, UI/UX requirements, and responsiveness. We provide transparent pricing after understanding your design needs."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to design a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Most website design projects are completed within 2–4 weeks, depending on design scope and approval cycles."
            }
          },
          {
            "@type": "Question",
            "name": "Do you create mobile-friendly website designs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, all our website designs are fully responsive and optimized for mobile, tablet, and desktop devices."
            }
          },
          {
            "@type": "Question",
            "name": "Will the website design match our brand identity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely. Every website design is created based on your brand colors, typography, tone, and visual guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "Do we get full ownership of the website design?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, once the project is completed, you receive full ownership of all website design files and assets."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-website-design-mumbai-jsonld"
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
