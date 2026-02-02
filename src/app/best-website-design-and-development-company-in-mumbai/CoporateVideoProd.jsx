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
        "url": "https://www.nakshatranamahacreations.com/best-website-design-and-development-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/best-website-design-and-development-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nakshatranamahacreations.com/best-website-design-and-development-in-mumbai#webpage",
        "url": "https://www.nakshatranamahacreations.com/best-website-design-and-development-in-mumbai",
        "name": "Best Website Design and Development In Mumbai",
        "description": "Professional website design and development company in Mumbai building fast, responsive, secure, and SEO-friendly websites that support long-term business growth."
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
            "name": "Best Website Design and Development In Mumbai",
            "item": "https://www.nakshatranamahacreations.com/best-website-design-and-development-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does website design and development in Mumbai cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of website design and development in Mumbai depends on factors such as design complexity, number of pages, features, technology stack, and customization requirements. We provide transparent pricing after understanding your business goals."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to design and develop a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most website design and development projects are completed within 2–6 weeks, depending on the scope, revisions, integrations, and content readiness."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide website redesign and redevelopment services in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer complete website redesign and redevelopment services to improve UI/UX, performance, responsiveness, and backend functionality while retaining your brand identity."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website be responsive and mobile-friendly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All websites we design and develop are fully responsive and optimized to deliver a seamless experience across mobile phones, tablets, and desktops."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build SEO-friendly websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Our website design and development process follows SEO best practices including clean code, fast loading speed, proper structure, and mobile-first optimization."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-web-design-development-mumbai-jsonld"
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
