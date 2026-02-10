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
        "url": "https://www.nakshatranamahacreations.com/custom-crm-development",
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
        "url": "https://www.nakshatranamahacreations.com/custom-crm-development",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/custom-crm-development#webpage",
        "url": "https://www.nakshatranamahacreations.com/custom-crm-development",
        "name": "Corporate Film Makers in Mumbai",
        "description":
          "Professional corporate film makers in Mumbai creating brand films, company profile films, promotional corporate films, and business-focused visual storytelling."
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
            "name": "Corporate Film Makers in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/custom-crm-development"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does custom CRM development take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Timelines depend on customization level, integrations, and workflow complexity. Most projects are completed in structured phases after requirement analysis."
            }
          },
          {
            "@type": "Question",
            "name": "Can custom CRM improve lead conversion rates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, custom CRM development helps track leads, automate follow-ups, and improve response time, which supports better conversion rates."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide CRM customization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, every custom CRM development project is designed according to business workflows and operational requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can CRM integrate with existing tools?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, CRM systems can integrate with websites, marketing tools, email platforms, and other business applications"
            }
          },
          {
            "@type": "Question",
            "name": "Is custom CRM suitable for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, custom CRM development helps businesses of all sizes organize customer data and improve operational efficiency."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide support after development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, ongoing optimization and support services are available to ensure long-term CRM performance."
            }
          },
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-custom-crm-development-jsonld"
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
      {/* <TechStackTabs /> */}
      {/* <PremiumTestimonials /> */}
      <FaqSection />
    </>
  );
}
