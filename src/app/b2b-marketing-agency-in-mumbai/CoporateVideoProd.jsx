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

export default function B2BMarketingAgencyMumbai() {

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
        "url": "https://www.nakshatranamahacreations.com/b2b-marketing-agency-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/b2b-marketing-agency-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.nakshatranamahacreations.com/b2b-marketing-agency-in-mumbai#webpage",
        "url":
          "https://www.nakshatranamahacreations.com/b2b-marketing-agency-in-mumbai",
        "name":
          "B2B Marketing Agency in Mumbai | Lead Generation & Demand Growth",
        "description":
          "Trusted B2B marketing agency in Mumbai helping businesses generate qualified leads, build sales pipelines, and drive revenue growth through strategic B2B marketing."
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
            "name": "B2B Marketing Agency in Mumbai",
            "item":
              "https://www.nakshatranamahacreations.com/b2b-marketing-agency-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "What services does a B2B marketing agency in Mumbai offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "A B2B marketing agency in Mumbai offers services such as B2B lead generation, account-based marketing, LinkedIn advertising, SEO, content marketing, demand generation, and performance marketing."
            }
          },
          {
            "@type": "Question",
            "name":
              "How long does it take to see results from B2B marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "B2B marketing timelines depend on strategy and sales cycle length. Lead generation campaigns can show results within weeks, while SEO and demand generation typically take 3–6 months."
            }
          },
          {
            "@type": "Question",
            "name":
              "Do you specialize in B2B lead generation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we specialize in high-quality B2B lead generation using LinkedIn Ads, Google Ads, SEO, and content-driven demand generation strategies."
            }
          },
          {
            "@type": "Question",
            "name":
              "Which industries do you serve for B2B marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We work with B2B companies across IT, SaaS, manufacturing, logistics, healthcare, real estate, and professional services."
            }
          },
          {
            "@type": "Question",
            "name":
              "Will we have ownership of our B2B marketing accounts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, clients receive complete ownership of all ad accounts, data, creatives, analytics, and campaign assets with full transparency."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-b2b-marketing-mumbai-jsonld"
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
