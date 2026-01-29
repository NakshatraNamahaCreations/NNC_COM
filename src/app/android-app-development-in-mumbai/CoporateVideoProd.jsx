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

export default function AndroidAppDevelopmentMumbai() {

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
        "url": "https://www.nakshatranamahacreations.com/android-app-development-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/android-app-development-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/android-app-development-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/android-app-development-in-mumbai",
        "name": "Android App Development in Mumbai | Expert Android Developers",
        "description": "Looking for Android app development in Mumbai? We build secure, scalable, and high-performance Android applications for startups, SMEs, and enterprises."
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
            "name": "Android App Development in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/android-app-development-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does Android app development cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Android app development cost in Mumbai depends on app features, UI complexity, backend integrations, and security requirements. Contact us for a custom quote."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build an Android app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Android apps take between 4 to 12 weeks, depending on scope, features, and testing requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide Android app maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide post-launch maintenance, performance optimization, bug fixes, and feature enhancements."
            }
          },
          {
            "@type": "Question",
            "name": "Will I own the Android app source code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You receive full ownership of the Android app, including complete source code and IP rights."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle Google Play Store submission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We manage Google Play Store publishing, compliance checks, screenshots, and listing optimization."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="android-app-development-in-mumbai-schema"
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
