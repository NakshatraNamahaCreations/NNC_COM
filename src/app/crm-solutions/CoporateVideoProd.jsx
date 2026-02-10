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
        "url": "https://www.nakshatranamahacreations.com/crm-solutions",
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
        "url": "https://www.nakshatranamahacreations.com/crm-solutions",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/crm-solutions#webpage",
        "url": "https://www.nakshatranamahacreations.com/crm-solutions",
        "name": "Corporate Film Makers in Mumbai",
        "description":
          "Professional corporate film makers in Mumbai creating brand films, company profile films, promotional corporate films, and business-focused visual storytelling."
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
            "name": "Corporate Film Makers in Mumbai",
            "item": "https://www.nakshatranamahacreations.com/crm-solutions"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does CRM implementation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Implementation timelines depend on customization, integrations, and workflow complexity. Most CRM setups are completed in structured phases after requirement analysis."
            }
          },
          {
            "@type": "Question",
            "name": "Can CRM improve lead conversion rates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, CRM systems help track leads, automate follow-ups, and improve response time, which directly supports better conversion rates."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide CRM customization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, CRM systems are customized to match your business workflows, sales processes, and customer management requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can CRM integrate with our existing tools?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, CRM systems can integrate with websites, email platforms, marketing tools, and other business software."
            }
          },
          {
            "@type": "Question",
            "name": "Is CRM suitable for small and growing businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, CRM helps businesses of all sizes organize customer data and improve operational efficiency."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide support after CRM implementation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, ongoing optimization and support services are available to ensure long-term CRM performance."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-corporate-film-mumbai-jsonld"
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
      {/* <TechStackTabs /> */}
      {/* <PremiumTestimonials /> */}
      <FaqSection />
    </>
  );
}
