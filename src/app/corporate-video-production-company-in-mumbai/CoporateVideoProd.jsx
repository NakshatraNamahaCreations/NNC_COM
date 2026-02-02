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
        "url": "https://www.nakshatranamahacreations.com/corporate-video-production-company-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/corporate-video-production-company-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/corporate-video-production-company-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/corporate-video-production-company-in-mumbai",
        "name": "Corporate Video Production Company in Mumbai | Professional Corporate Videos",
        "description":
          "Trusted corporate video production company in Mumbai creating professional brand films, company profile videos, promotional videos, and business-focused video content."
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
            "name": "Corporate Video Production Company in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/corporate-video-production-company-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a corporate video production company in Mumbai charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The cost of corporate video production in Mumbai depends on the video type, duration, filming requirements, locations, and post-production scope. We provide transparent pricing after understanding your project needs."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to produce a corporate video?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Most corporate video projects are completed within 7–15 working days, depending on scripting, filming schedules, revisions, and editing complexity."
            }
          },
          {
            "@type": "Question",
            "name": "What types of corporate videos do you produce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We produce company profile videos, brand films, promotional videos, training videos, internal communication videos, and product explainer videos."
            }
          },
          {
            "@type": "Question",
            "name": "Will the video align with our brand identity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, every corporate video is planned around your brand guidelines, tone, and communication goals to ensure consistency and clarity."
            }
          },
          {
            "@type": "Question",
            "name": "Are the videos suitable for websites and digital platforms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely. All corporate videos are optimized for websites, social media platforms, presentations, and internal business use."
            }
          },
          {
            "@type": "Question",
            "name": "Will we get full ownership of the corporate video?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, once the project is completed, you receive full ownership of all video files and final edits with no usage restrictions."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-corporate-video-mumbai-jsonld"
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
      <PremiumTestimonials />
      <FaqSection />
    </>
  );
}
