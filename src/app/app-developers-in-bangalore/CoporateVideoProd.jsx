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
      "url": "https://www.nakshatranamahacreations.com/app-developers-in-bangalore",
      "telephone": "+91-9900566466",
      "email": "info@nakshatranamahacreations.com",
      "areaServed": {
        "@type": "City",
        "name": "Bangalore"
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
      "url": "https://www.nakshatranamahacreations.com/app-developers-in-bangalore",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.nakshatranamahacreations.com/app-developers-in-bangalore#webpage",
      "url": "https://www.nakshatranamahacreations.com/app-developers-in-bangalore",
      "name": "App Developers Bangalore | Expert Mobile App Development",
      "description": "Looking to build a high-quality mobile app. Hire top app developers in Bangalore offering Android, iOS, and cross-platform app development with fast delivery."
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
          "name": "App Developers in Bangalore",
          "item": "https://www.nakshatranamahacreations.com/app-developers-in-bangalore"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does app development cost in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "App development costs depend on the features, design complexity, and technology used. Simple apps require less time, while advanced apps with integrations cost more. Contact us for a detailed estimate based on your requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most mobile apps are completed within 4–12 weeks, depending on the number of features, screens, and backend requirements. We provide a clear project timeline before development begins."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide maintenance after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer continuous maintenance, updates, bug fixes, and feature enhancements to ensure your mobile app remains stable and up to date."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build apps for both Android and iOS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We develop native Android and iOS apps as well as cross-platform applications using React Native and Flutter for smooth performance on both platforms."
          }
        },
        {
          "@type": "Question",
          "name": "Will I get full ownership and source code access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. After project completion, you receive full ownership of the mobile app along with complete source code and technical documentation."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with app publishing on Play Store and App Store?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage the entire app deployment process, including store listings, screenshots, compliance with guidelines, and successful submission on Google Play Store and Apple App Store."
          }
        }
      ]
    }
  ]


};

  return (
    <>

               <Script
        id="nnc-app-develop-jsonld"
        type="application/ld+json"
       strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
   <HeroBanner/>
    <TrustedStats/>
    <AboutSplitSection/>
    <ServicesSection/>
    <AppProcess/>
    <AboutSplitSection1/>
    <IndiaSmartSection/>
    <IndustriesSection/>
    <TechStackTabs/>
    <PremiumTestimonials/>
    <FaqSection/>
    </>
  );
}
