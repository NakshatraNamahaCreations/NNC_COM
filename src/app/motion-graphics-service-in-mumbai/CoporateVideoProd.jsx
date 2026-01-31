"use client";
import Script from "next/script";

import AboutSplitSection from "./AboutSplitSection";
import AboutSplitSection1 from "./AboutSplitSection1";
import AppProcess from "./AppProcess";
import HeroBanner from "./HeroBanner";
import IndiaSmartSection from "./IndiaSmartSection";
import IndustriesSection from "./IndustriesSection";
import ServicesSection from "./ServicesSection";
import PremiumTestimonials from "./PremiumTestimonials";
import TrustedStats from "./TrustedStats";
import FaqSection from "./FaqSection";

export default function MotionGraphicServiceMumbai() {
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
        "url": "https://www.nakshatranamahacreations.com/motion-graphic-service-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/motion-graphic-service-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.nakshatranamahacreations.com/motion-graphic-service-in-mumbai#webpage",
        "url":
          "https://www.nakshatranamahacreations.com/motion-graphic-service-in-mumbai",
        "name":
          "Motion Graphic Service In Mumbai | Professional Motion Graphics",
        "description":
          "Motion Graphic Service In Mumbai offering animated explainers, promotional videos, social media motion creatives, and digital motion graphic solutions for businesses."
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
            "name": "Motion Graphic Service In Mumbai",
            "item":
              "https://www.nakshatranamahacreations.com/motion-graphic-service-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "How much does a Motion Graphic Service In Mumbai charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The cost depends on animation style, project scope, revisions, and timelines. Our Motion Graphic Service In Mumbai provides transparent pricing after understanding your requirements."
            }
          },
          {
            "@type": "Question",
            "name":
              "What services does a Motion Graphic Service In Mumbai offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We offer animated explainer videos, promotional motion graphics, social media animations, logo animations, and custom motion graphic solutions."
            }
          },
          {
            "@type": "Question",
            "name":
              "Will motion graphics match our brand identity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, all motion graphics are created based on your brand guidelines, colors, tone, and business objectives."
            }
          },
          {
            "@type": "Question",
            "name":
              "How long does a motion graphic project take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Most projects are completed within one to three weeks, depending on complexity and feedback cycles."
            }
          },
          {
            "@type": "Question",
            "name":
              "Do clients get full ownership of motion graphic files?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, once completed, full ownership of all final motion graphic assets is provided with no usage restrictions."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-motion-graphic-service-in-mumbai-jsonld"
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
      <PremiumTestimonials />
      <FaqSection />
    </>
  );
}
