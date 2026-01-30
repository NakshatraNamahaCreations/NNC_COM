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

export default function TwoDAnimationServiceMumbai() {

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
        "url": "https://www.nakshatranamahacreations.com/2d-animation-service-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/2d-animation-service-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.nakshatranamahacreations.com/2d-animation-service-in-mumbai#webpage",
        "url":
          "https://www.nakshatranamahacreations.com/2d-animation-service-in-mumbai",
        "name":
          "2D Animation Service In Mumbai | Professional 2D Animated Videos",
        "description":
          "Professional 2D animation service in Mumbai creating explainer videos, promotional animations, training videos, and brand-focused 2D animated content for businesses."
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
            "name": "2D Animation Service In Mumbai",
            "item":
              "https://www.nakshatranamahacreations.com/2d-animation-service-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "How much does a 2D animation service in Mumbai cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The cost of 2D animation services in Mumbai depends on animation style, video duration, complexity, scripting needs, and revision cycles. We share transparent pricing after understanding your project requirements."
            }
          },
          {
            "@type": "Question",
            "name":
              "How long does it take to create a 2D animated video?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Most 2D animated video projects are completed within 7–20 working days, depending on storyboard approvals, animation complexity, and feedback rounds."
            }
          },
          {
            "@type": "Question",
            "name":
              "What types of 2D animated videos do you create?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We create 2D explainer videos, promotional animations, training videos, educational content, product explainers, and brand storytelling animations."
            }
          },
          {
            "@type": "Question",
            "name":
              "Will the 2D animation match our brand identity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, all 2D animated videos are developed based on your brand guidelines, visual style, and communication goals to ensure consistency."
            }
          },
          {
            "@type": "Question",
            "name":
              "Where can 2D animated videos be used?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "2D animated videos can be used on websites, social media, digital ads, presentations, landing pages, and internal communication platforms."
            }
          },
          {
            "@type": "Question",
            "name":
              "Do we get full ownership of the 2D animated videos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, once the project is completed, you receive full ownership of all 2D animated video files and final outputs with no restrictions."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-2d-animation-mumbai-jsonld"
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
