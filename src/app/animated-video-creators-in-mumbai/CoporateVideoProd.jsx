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

export default function AnimatedVideoCreatorsMumbai() {

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
        "url": "https://www.nakshatranamahacreations.com/animated-video-creators-in-mumbai",
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
        "url": "https://www.nakshatranamahacreations.com/animated-video-creators-in-mumbai",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.nakshatranamahacreations.com/animated-video-creators-in-mumbai#webpage",
        "url":
          "https://www.nakshatranamahacreations.com/animated-video-creators-in-mumbai",
        "name":
          "Animated Video Creators In Mumbai | Professional Animation Services",
        "description":
          "Experienced animated video creators in Mumbai offering explainer videos, motion graphics, promotional animations, and business-focused animated video solutions."
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
            "name": "Animated Video Creators In Mumbai",
            "item":
              "https://www.nakshatranamahacreations.com/animated-video-creators-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "How much do animated video creators in Mumbai charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The cost of animated video creation in Mumbai depends on animation style, video duration, complexity, scripting, and revision requirements. Pricing is shared transparently after understanding project needs."
            }
          },
          {
            "@type": "Question",
            "name":
              "How long does it take to create an animated video?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Most animated video projects are completed within 7–20 working days, depending on animation style, storyboard approvals, and feedback cycles."
            }
          },
          {
            "@type": "Question",
            "name":
              "What types of animated videos do you create?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We create explainer videos, motion graphics, promotional animations, product demos, training videos, and brand storytelling animations."
            }
          },
          {
            "@type": "Question",
            "name":
              "Will the animated video match our brand identity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, all animated videos are developed based on your brand guidelines, tone, and communication goals to ensure consistency."
            }
          },
          {
            "@type": "Question",
            "name":
              "Where can animated videos be used?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Animated videos can be used on websites, social media, digital ads, presentations, landing pages, and internal communication platforms."
            }
          },
          {
            "@type": "Question",
            "name":
              "Do we get full ownership of the animated videos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, once the project is completed, you receive full ownership of all animated video files and final outputs with no restrictions."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="nnc-animated-video-mumbai-jsonld"
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
