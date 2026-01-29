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

export default function IOSAppDevelopmentMumbai() {

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
        "url": "https://www.nakshatranamahacreations.com/ios-app-development-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/ios-app-development-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/ios-app-development-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/ios-app-development-in-mumbai",
        "name": "iOS App Development in Mumbai | Expert iOS Developers",
        "description": "Looking for iOS App Development in Mumbai? Hire expert iOS developers to build secure, scalable, high-performance iPhone and iPad applications for startups and enterprises."
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
            "name": "iOS App Development in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/ios-app-development-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does iOS App Development cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of iOS App Development in Mumbai depends on app complexity, UI/UX design, backend integrations, and Apple security requirements. Contact us for a custom estimate."
            }
          },
          {
            "@type": "Question",
            "name": "How long does iOS App Development in Mumbai take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most iOS apps are developed within 4 to 12 weeks, depending on features, testing cycles, and Apple App Store approval timelines."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide iOS app maintenance services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer ongoing iOS app maintenance, performance optimization, bug fixes, and version upgrades after launch."
            }
          },
          {
            "@type": "Question",
            "name": "Will I get full ownership of my iOS app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You receive full ownership of the iOS app source code, assets, and intellectual property rights."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle Apple App Store submission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We manage the complete Apple App Store submission process, including compliance checks, screenshots, and successful publishing."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="ios-app-development-in-mumbai-schema"
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
