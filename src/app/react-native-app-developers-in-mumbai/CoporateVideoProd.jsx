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

export default function FlutterAppDevelopmentMumbai() {

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
        "url": "https://www.nakshatranamahacreations.com/flutter-app-development-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/flutter-app-development-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/flutter-app-development-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/flutter-app-development-in-mumbai",
        "name": "Flutter App Development in Mumbai | Expert Flutter Developers",
        "description": "Looking for Flutter App Development in Mumbai Hire expert Flutter developers to build fast, scalable, cross-platform mobile applications for Android and iOS."
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
            "name": "Flutter App Development in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/flutter-app-development-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does Flutter App Development cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Flutter app development cost in Mumbai depends on app features, UI complexity, backend integrations, and third-party APIs. Contact us for a detailed Flutter app estimate."
            }
          },
          {
            "@type": "Question",
            "name": "How long does Flutter App Development in Mumbai take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Flutter applications are developed within 4 to 10 weeks, depending on scope, features, and testing requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide Flutter app maintenance services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide post-launch Flutter app maintenance, performance optimization, bug fixes, and feature enhancements."
            }
          },
          {
            "@type": "Question",
            "name": "Will I get full ownership of my Flutter app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You receive full ownership of the Flutter app source code, assets, and intellectual property rights."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deploy Flutter apps to Play Store and App Store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We handle complete deployment of Flutter apps to Google Play Store and Apple App Store."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="flutter-app-development-in-mumbai-schema"
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
