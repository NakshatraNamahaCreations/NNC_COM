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

export default function MobileAppDevelopersMumbai() {

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
          "streetAddress": "Mumbai, Maharashtra",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.0760,
          "longitude": 72.8777
        },
        "url": "https://www.nakshatranamahacreations.com/mobile-app-developers-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/mobile-app-developers-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/mobile-app-developers-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/mobile-app-developers-in-mumbai",
        "name": "Mobile App Developers in Mumbai | Android & iOS Experts",
        "description": "Looking for experienced mobile app developers in Mumbai? We build secure, scalable, and high-performance mobile applications for startups, SMEs, and enterprises."
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
            "name": "Mobile App Developers in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/mobile-app-developers-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to hire mobile app developers in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost depends on app features, platform requirements (Android or iOS), UI complexity, and integrations. Contact us for a detailed project estimate."
            }
          },
          {
            "@type": "Question",
            "name": "How long does mobile app development take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most mobile apps take between 6 to 14 weeks, depending on scope, features, and testing requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Do you develop both Android and iOS apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our mobile app developers in Mumbai build apps for Android, iOS, and cross-platform solutions based on business needs."
            }
          },
          {
            "@type": "Question",
            "name": "Will I get full ownership of the mobile app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You receive complete ownership of the mobile app source code and intellectual property."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide post-launch app support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer maintenance, performance optimization, updates, and feature enhancements after app launch."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="mobile-app-developers-in-mumbai-schema"
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
