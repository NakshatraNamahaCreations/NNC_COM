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
      "areaServed": "Bangalore",
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
      "url": "https://www.nakshatranamahacreations.com/animated-video-creators",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "Service",
      "serviceType": "WordPress Website Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "E-Commerce Website Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Static Website Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Dynamic Website Development",
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
          "name": "Animated Video Creators in | Brand Storytelling",
          "item": "https://www.nakshatranamahacreations.com/animated-video-creators"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you price animated video projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We quote based on length, style, script complexity, and turnaround time."
          }
        },
        {
          "@type": "Question",
          "name": "Can I provide my own script or voiceover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we’re happy to work with your materials or offer professional scripting and voice talent."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support revisions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we include a defined number of revision rounds in every package."
          }
        },
        {
          "@type": "Question",
          "name": "Will the animation be suitable for mobile and desktop use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. All files are optimized for cross-device compatibility and various aspect ratios."
          }
        },
        {
          "@type": "Question",
          "name": "Can we track the progress during development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide regular updates, previews, and feedback sessions throughout the project."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a minimum or maximum video length you work on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We typically work on videos from 30 seconds up to 10 minutes, depending on the purpose and platform."
          }
        }
      ]
    }
  ]
};


  return (
    <>
       <Script
  id="nnc-android-jsonld"
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
    <Trusted2/>
      <Trusted />
      {/* <FeaturesGrid2 /> */}

      {/* <ServeClients/> */}
      {/* <WhyChooseUs/> */}
      <br /><br />
       <h2 className="text-center fw-bold mb-2">
          What Our Clients Say
        </h2>
      <TestimonialsCarousel/>
      <FaqSection/>
 
    </>
  );
}
