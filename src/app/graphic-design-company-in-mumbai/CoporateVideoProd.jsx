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

export default function GraphicDesignCompanyMumbai() {
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
        "url": "https://www.nakshatranamahacreations.com/graphic-design-company-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/graphic-design-company-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.nakshatranamahacreations.com/graphic-design-company-in-mumbai#webpage",
        "url":
          "https://www.nakshatranamahacreations.com/graphic-design-company-in-mumbai",
        "name":
          "Graphic Design Company In Mumbai | Creative Graphic Design Services",
        "description":
          "Professional graphic design company in Mumbai offering logo design, branding, marketing creatives, social media graphics, and digital design solutions for businesses."
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
            "name": "Graphic Design Company In Mumbai",
            "item":
              "https://www.nakshatranamahacreations.com/graphic-design-company-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "How much does a graphic design company in Mumbai charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The cost of graphic design services in Mumbai depends on the type of design, project scope, number of creatives, revisions, and timelines. We provide transparent pricing after understanding your requirements."
            }
          },
          {
            "@type": "Question",
            "name":
              "What graphic design services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We offer logo design, branding, marketing creatives, social media graphics, brochures, posters, digital ads, and custom visual assets for businesses."
            }
          },
          {
            "@type": "Question",
            "name":
              "Will the designs match our brand identity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, all designs are created based on your brand guidelines, color palette, tone, and business objectives to ensure consistency across platforms."
            }
          },
          {
            "@type": "Question",
            "name":
              "How long does a graphic design project take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Most graphic design projects are completed within a few days to two weeks, depending on complexity, revisions, and feedback cycles."
            }
          },
          {
            "@type": "Question",
            "name":
              "Where can graphic designs be used?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Graphic designs can be used across websites, social media, digital ads, print materials, presentations, packaging, and marketing campaigns."
            }
          },
          {
            "@type": "Question",
            "name":
              "Do we get full ownership of the design files?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, once the project is completed, you receive full ownership of all final design files and assets with no usage restrictions."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-graphic-design-mumbai-jsonld"
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
