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
        "url": "https://www.nakshatranamahacreations.com/digital-marketing-agency-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/digital-marketing-agency-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/digital-marketing-agency-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/digital-marketing-agency-in-mumbai",
        "name": "Digital Marketing Agency in Mumbai | SEO, Ads & Growth Marketing",
        "description": "Trusted digital marketing agency in Mumbai offering SEO, Google Ads, social media marketing, and performance-driven campaigns for business growth."
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
            "name": "Digital Marketing Agency in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/digital-marketing-agency-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does a digital marketing agency in Mumbai offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A digital marketing agency in Mumbai offers services such as SEO, Google Ads, social media marketing, content marketing, lead generation, conversion optimization, and performance marketing."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from digital marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Results vary by strategy, but SEO typically shows growth in 3–6 months, while paid ads and social media campaigns can generate leads within weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle both SEO and paid advertising?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we manage SEO, Google Ads, social media advertising, and integrated digital campaigns to maximize visibility and conversions."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with different industries in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide digital marketing services for startups, SMEs, ecommerce brands, real estate, healthcare, IT, and service-based businesses in Mumbai."
            }
          },
          {
            "@type": "Question",
            "name": "Will I have full ownership of my marketing accounts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, clients receive full ownership of ad accounts, analytics, creatives, and campaign data with complete transparency."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-digital-marketing-jsonld"
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
