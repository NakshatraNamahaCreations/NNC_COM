"use client";
import Script from "next/script";

import { useEffect } from 'react';
import Our_Service from "@/components/home/Our_Service";
import CoveredSection from "./CoveredSection";
import CTASection from "./CTASection";
import FeatureGrid from "./FeatureGrid";
import FeaturesGrid2 from "./FeaturesGrid2";
import HeroBanner from "./HeroBanner";
import IndustriesSlider from "./IndustriesSlider";
import Trusted from "./Trusted";
import styles from "../../styles/covered-section.module.css";
import ServeClients from "./ServeClients";

import WhyChooseUs from "./WhyChooseUs.jsx";
import FaqSection from './FaqSection';
import TestimonialsCarousel from './TestimonialsCarousel';
import Trusted2 from './Trusted2';


export default function MobileAppDevelopmentCompany() {

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
      "url": "https://www.nakshatranamahacreations.com",
      "telephone": "+91-9900566466",
      "email": "info@nakshatranamahacreations.com",
      "areaServed": "",
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
      "url": "https://www.nakshatranamahacreations.com/flutter-app-development",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "Service",
      "serviceType": "iOS Mobile App Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Android Mobile App Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Flutter Mobile App Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "React Native Mobile App Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
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
          "name": "Flutter App Development Company  | NNC",
          "item": "https://www.nakshatranamahacreations.com/flutter-app-development"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Flutter suitable for complex, large-scale apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Flutter is now widely used by large-scale apps including those by Google, Alibaba, and BMW. With the right architecture, it scales well."
          }
        },
        {
          "@type": "Question",
          "name": "Will my Flutter app look and feel native on iOS and Android?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Flutter allows custom widgets that mimic the platform-specific design guidelines. Users won’t be able to tell the difference."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate Firebase, Google Maps, or other third-party services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Flutter has a growing ecosystem of plugins that make integration with services like Firebase, Google Maps, Stripe, and more seamless."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a Flutter mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development timelines vary by feature complexity, but a basic Flutter app takes 4–8 weeks, while more advanced apps take 10–16 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What are the ongoing costs after app development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ongoing costs can include server hosting, maintenance updates, third-party API subscriptions, and occasional UI enhancements."
          }
        },
        {
          "@type": "Question",
          "name": "Can you migrate my existing iOS or Android app to Flutter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We assess the current codebase and re-implement features in Flutter to ensure performance parity or improvement."
          }
        }
      ]
    }
  ]
};


  return (
    <>
      <Script
  id="nnc-graphic-design-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>


      <HeroBanner />
      <CoveredSection />
      <FeatureGrid />
      <IndustriesSlider />
      <CTASection />

      <br /> 
    {/* <Our_Service cardData={ourworkData} /> */}
    {/* <Trusted2/> */}
      <Trusted />
      {/* <FeaturesGrid2 /> */}

      {/* <ServeClients/> */}
      {/* <WhyChooseUs/> */}
      <br /> <br />
       <h2 className="text-center fw-bold mb-2">
          What Our Clients Say
        </h2>
      <TestimonialsCarousel/>
      <FaqSection/>
 
    </>
  );
}
