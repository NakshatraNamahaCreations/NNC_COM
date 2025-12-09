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

const ourworkData = [
{
    ui_uxdesign: "/media/ourwork/vijayhome.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG_VijayHomeLogo.png",
    title: "Vijaya Home Services",
    description:
      "This was created specifically keeping the client’s requirements. We stood up to their expectations.",
    link: "https://play.google.com/store/apps/details?id=com.vhs1&pcampaignid=web_share",
  },
  {
    ui_uxdesign: "/media/ourwork/cdn.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG-06.png",
    title: "CND Play",
    description:
      "CND PLAY is an emerging streaming platform dedicated to providing a vast library of movies to audiences worldwide.",
    link: "https://play.google.com/store/apps/details?id=com.clockndail.clockndail&hl=en_IN",
  },
  {
    ui_uxdesign: "/media/ourwork/proleverage.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG_Proleveragelogo.png",
    title: "Pro Leverage",
    description:
      "This was created specifically keeping the client’s requirements. We stood up to their expectations.",
    link: "https://play.google.com/store/apps/details?id=com.ecom_gyan.pro_leverage&pcampaignid=web_share",
  },
];

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
      "url": "https://www.nakshatranamahacreations.com",
      "telephone": "+91-9900566466",
      "email": "info@nakshatranamahacreations.com",
      "areaServed": "India",
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
      "url": "https://www.nakshatranamahacreations.com/motion-graphics-services",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "Service",
      "serviceType": "Explainer Videos",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Character Animation",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Puppet Animation",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Motion Graphics",
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
          "name": "Motion Graphics Services | Animation & Visual Storytelling ",
          "item":
            "https://www.nakshatranamahacreations.com/motion-graphics-services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name":
            "What are Motion Graphics Services and how can they help my brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Motion Graphics Services use animated visuals, text, and graphics to explain ideas clearly and attractively, helping brands communicate faster and more effectively."
          }
        },
        {
          "@type": "Question",
          "name":
            "How do Motion Graphics Services improve marketing performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Motion Graphics Services boost engagement by turning complex information into easy-to-understand animations, increasing conversions on websites, ads, and social media."
          }
        },
        {
          "@type": "Question",
          "name":
            "What types of videos can be created using Motion Graphics Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Motion Graphics Services can produce explainer videos, product demos, brand intro videos, kinetic typography, UI animations, social media reels, and training visuals."
          }
        },
        {
          "@type": "Question",
          "name":
            "How long does it take to complete a project using Motion Graphics Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Most Motion Graphics Services projects take 1–3 weeks depending on script length, design complexity, voiceovers, and revision cycles."
          }
        },
        {
          "@type": "Question",
          "name":
            "Are Motion Graphics Services suitable for startups and small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, Motion Graphics Services are perfect for startups because they explain ideas quickly, improve pitch presentations, and make marketing content more engaging."
          }
        },
        {
          "@type": "Question",
          "name":
            "Do Motion Graphics Services include voiceovers and background music?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Many Motion Graphics Services packages include professional voiceovers, sound effects, and licensed background music for a complete production."
          }
        },
        {
          "@type": "Question",
          "name":
            "Can Motion Graphics Services be customized to match my brand identity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Absolutely — Motion Graphics Services allow full customization of colors, fonts, style, characters, and visuals to reflect your brand personality."
          }
        },
        {
          "@type": "Question",
          "name":
            "Are Motion Graphics Services useful for social media promotions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, Motion Graphics Services perform exceptionally well on platforms like Instagram, Facebook, LinkedIn, and YouTube due to their high visual engagement."
          }
        },
        {
          "@type": "Question",
          "name":
            "What do I need to provide before starting Motion Graphics Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "To begin Motion Graphics Services, you typically need to share your script, brand guidelines, references, and any specific messaging goals."
          }
        },
        {
          "@type": "Question",
          "name": "Do Motion Graphics Services support multiple languages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, Motion Graphics Services can be produced in any language using multilingual voiceovers and region-friendly visual styles."
          }
        }
      ]
    }
  ]
};

  return (
    <>
          <Script
        id="nnc-motion-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <HeroBanner />
      <CoveredSection />
      <FeatureGrid />
      <IndustriesSlider />
      <CTASection />


    <FeaturesGrid2/>
      {/* <Trusted /> */}
      {/* <FeaturesGrid2 /> */}

      <ServeClients/>
      <WhyChooseUs/>
       <h2 className="text-center fw-bold mb-2">
          What Our Clients Say
        </h2>
      <TestimonialsCarousel/>
      <FaqSection/>
 
    </>
  );
}
