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
      "@type": "WebPage",
      "@id": "https://www.nakshatranamahacreations.com/best-website-development-company-in-bangalore",
      "url": "https://www.nakshatranamahacreations.com/best-website-development-company-in-bangalore",
      "name": "Best Website Development Company in Bangalore for Business",
      "description": "Looking for the best website development company in Bangalore. We build professional, SEO-ready business websites and revamp solutions to drive leads."
    },
    {
      "@type": "Organization",
      "name": "Nakshatra Namaha Creations",
      "url": "https://www.nakshatranamahacreations.com",
      "logo": "https://www.nakshatranamahacreations.com/logo.png"
    },
    {
      "@type": "LocalBusiness",
      "name": "Nakshatra Namaha Creations",
      "url": "https://www.nakshatranamahacreations.com",
      "image": "https://www.nakshatranamahacreations.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "KA",
        "addressCountry": "IN"
      },
      "areaServed": "Bangalore"
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
          "name": "Best Website Development Company in Bangalore",
          "item": "https://www.nakshatranamahacreations.com/best-website-development-company-in-bangalore"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is this suitable for small and mid-sized businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The best website development company in Bangalore builds scalable websites suitable for businesses at every stage."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign my existing website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Website revamp services focus on improving performance, usability, and enquiry generation."
          }
        },
        {
          "@type": "Question",
          "name": "Will the website help generate leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Websites are structured with conversion-focused layouts and clear calls-to-action."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide ongoing support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Continued support ensures long-term performance and security."
          }
        }
      ]
    }
  ]


};


  return (
    <>
       <Script
  id="nnc-best-web-jsonld"
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
