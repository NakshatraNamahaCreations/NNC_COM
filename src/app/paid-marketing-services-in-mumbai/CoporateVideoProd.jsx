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

export default function PaidMarketingMumbai() {

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
        "url": "https://www.nakshatranamahacreations.com/paid-marketing-services-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/paid-marketing-services-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/paid-marketing-services-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/paid-marketing-services-in-mumbai",
        "name": "Paid Marketing Services in Mumbai | Google Ads & Performance Marketing",
        "description": "ROI-focused paid marketing services in Mumbai offering Google Ads, social media advertising, remarketing, and performance-driven campaigns to generate leads and sales."
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
            "name": "Paid Marketing Services in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/paid-marketing-services-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are paid marketing services in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paid marketing services include Google Ads, social media advertising, display ads, remarketing, and performance marketing campaigns designed to generate leads, sales, and brand visibility quickly."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can paid marketing generate results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paid marketing campaigns can start generating leads and conversions within days of launch, depending on targeting, budget, and campaign goals."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage Google Ads and social media ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we manage Google Ads, Meta Ads, Instagram Ads, display campaigns, and remarketing strategies for businesses in Mumbai."
            }
          },
          {
            "@type": "Question",
            "name": "Is paid marketing suitable for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, paid marketing works well for startups and small businesses by allowing budget control, precise targeting, and measurable ROI."
            }
          },
          {
            "@type": "Question",
            "name": "Will I own my ad accounts and campaign data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you will have full ownership of all ad accounts, creatives, analytics, and campaign data with complete transparency."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-paid-marketing-jsonld"
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
