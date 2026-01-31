"use client";
import Script from "next/script";

import AboutSplitSection from "./AboutSplitSection";
import AboutSplitSection1 from "./AboutSplitSection1";
import AppProcess from "./AppProcess";
import HeroBanner from "./HeroBanner";
import IndiaSmartSection from "./IndiaSmartSection";
import IndustriesSection from "./IndustriesSection";
import ServicesSection from "./ServicesSection";
import PremiumTestimonials from "./PremiumTestimonials";
import TrustedStats from "./TrustedStats";
import FaqSection from "./FaqSection";

export default function SocialMediaMarketingMumbai() {
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
        "url": "https://www.nakshatranamahacreations.com/social-media-marketing-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/social-media-marketing-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.nakshatranamahacreations.com/social-media-marketing-in-mumbai#webpage",
        "url":
          "https://www.nakshatranamahacreations.com/social-media-marketing-in-mumbai",
        "name":
          "Social Media Marketing In Mumbai | Professional Social Media Services",
        "description":
          "Social Media Marketing In Mumbai offering content creation, social media campaigns, brand promotions, audience engagement strategies, and digital marketing solutions for businesses."
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
            "name": "Social Media Marketing In Mumbai",
            "item":
              "https://www.nakshatranamahacreations.com/social-media-marketing-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "How much does Social Media Marketing In Mumbai charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The cost depends on campaign scope, platforms, content requirements, ad spend, and timelines. Our Social Media Marketing In Mumbai provides transparent pricing after understanding your goals."
            }
          },
          {
            "@type": "Question",
            "name":
              "What services does Social Media Marketing In Mumbai offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We offer social media strategy, content creation, account management, paid social campaigns, brand promotions, and performance tracking."
            }
          },
          {
            "@type": "Question",
            "name":
              "Will social media campaigns match our brand identity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, all campaigns are created based on your brand tone, visuals, messaging, and business objectives."
            }
          },
          {
            "@type": "Question",
            "name":
              "How long does it take to see results from social media marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Initial engagement improvements are usually visible within a few weeks, while consistent growth is achieved over time with ongoing campaigns."
            }
          },
          {
            "@type": "Question",
            "name":
              "Do clients get full control over their social media accounts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, clients retain full ownership and control of all social media accounts, content, and campaign data."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-social-media-marketing-in-mumbai-jsonld"
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
      <PremiumTestimonials />
      <FaqSection />
    </>
  );
}
