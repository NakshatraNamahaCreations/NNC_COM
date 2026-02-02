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

export default function SeoServicesMumbai() {

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
        "url": "https://www.nakshatranamahacreations.com/seo-services-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/seo-services-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/seo-services-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/seo-services-in-mumbai",
        "name": "SEO Services in Mumbai | Drive Organic Traffic & Rankings",
        "description": "Professional SEO services in Mumbai helping businesses improve Google rankings, increase website visibility, and generate high-quality organic leads."
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
            "name": "SEO Services in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/seo-services-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What do SEO services in Mumbai include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO services include keyword research, on-page SEO, technical optimization, content strategy, link building, and performance tracking to improve search rankings."
            }
          },
          {
            "@type": "Question",
            "name": "How long does SEO take to show results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO typically shows noticeable improvements within 3 to 6 months, depending on competition, website condition, and target keywords."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide local SEO services in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in local SEO strategies including Google Business Profile optimization and location-based keyword targeting for Mumbai businesses."
            }
          },
          {
            "@type": "Question",
            "name": "Is SEO suitable for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, SEO is highly effective for small businesses looking to attract organic traffic, improve local visibility, and generate consistent leads."
            }
          },
          {
            "@type": "Question",
            "name": "Do you follow Google-approved SEO practices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our SEO campaigns follow ethical, white-hat practices aligned with Google’s latest guidelines and core updates."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-seo-mumbai-jsonld"
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
