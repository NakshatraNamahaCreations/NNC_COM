"use client";
import Script from "next/script";

import AboutSplitSection from "./AboutSplitSection";
import AboutSplitSection1 from "./AboutSplitSection1";
import AppProcess from "./AppProcess";
import HeroBanner from "./HeroBanner.jsx";
import IndiaSmartSection from "./IndiaSmartSection.jsx";
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
        "url": "https://www.nakshatranamahacreations.com/software-development-company-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/software-development-company-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.nakshatranamahacreations.com/software-development-company-in-mumbai#webpage",
        "url":
          "https://www.nakshatranamahacreations.com/software-development-company-in-mumbai",
        "name":
          "Software Development Company in Mumbai | Custom Software Solutions",
        "description":
          "Trusted software development company in Mumbai delivering secure, scalable, and custom software solutions for startups, SMEs, and enterprises."
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
            "name": "Software Development Company in Mumbai",
            "item":
              "https://www.nakshatranamahacreations.com/software-development-company-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does a software development company in Mumbai offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "A software development company in Mumbai offers custom software development, enterprise applications, web and mobile software solutions, system integration, and ongoing maintenance."
            }
          },
          {
            "@type": "Question",
            "name": "How much does software development cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Software development costs depend on project scope, features, technology stack, integrations, and timelines. Pricing is shared after understanding your business requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build custom software solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we specialize in custom software development tailored to your business workflows, operational needs, and long-term growth goals."
            }
          },
          {
            "@type": "Question",
            "name": "How long does software development take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Project timelines vary based on complexity, but most software development projects take between 6 to 16 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Will we get full ownership of the software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, once the project is completed, you receive full ownership of the software, including source code and intellectual property rights."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-software-development-company-mumbai-jsonld"
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
