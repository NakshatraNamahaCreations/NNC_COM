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
        "url": "https://www.nakshatranamahacreations.com/corporate-video-makers-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/corporate-video-makers-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/corporate-video-makers-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/corporate-video-makers-in-mumbai",
        "name": "Corporate Video Makers in Mumbai",
        "description":
          "Professional corporate video makers in Mumbai creating company profile videos, brand videos, promotional corporate videos, and business-focused visual storytelling."
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
            "name": "Corporate Video Makers in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/corporate-video-makers-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much do corporate video makers in Mumbai charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The cost of corporate video production in Mumbai depends on video duration, concept complexity, filming requirements, locations, and post-production scope. We provide clear pricing after understanding your project needs."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to create a corporate video?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Most corporate video projects are completed within 7–15 working days, depending on scripting, shoot schedules, revisions, and editing requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What types of corporate videos do you produce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We produce company profile videos, brand videos, promotional corporate videos, training videos, internal communication videos, and product explainer videos."
            }
          },
          {
            "@type": "Question",
            "name": "Will the corporate video align with our brand identity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, every corporate video is planned around your brand guidelines, messaging tone, and communication goals to ensure consistency and clarity."
            }
          },
          {
            "@type": "Question",
            "name": "Can corporate videos be used on websites and social media?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, our corporate videos are optimized for websites, social media platforms, presentations, and internal business communication."
            }
          },
          {
            "@type": "Question",
            "name": "Will we receive full ownership of the corporate video?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, after project completion you receive full ownership of all corporate video files and final outputs with no usage restrictions."
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
