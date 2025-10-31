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

import WhyChooseUs from "./WhyChooseUs";
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
      "areaServed": "Bengaluru, Hyderabad, India",
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
      "url": "https://www.nakshatranamahacreations.com/mobile-app-developers-in-hyderabad",
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
          "name": "Top Mobile App Developers in Hyderabad",
          "item": "https://www.nakshatranamahacreations.com/mobile-app-developers-in-hyderabad"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which platforms do you build mobile apps for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build for both Android and iOS, including cross-platform apps with Flutter and React Native."
          }
        },
        {
          "@type": "Question",
          "name": "Can you revamp or upgrade an existing app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can update the design, add new features, or improve app performance."
          }
        },
        {
          "@type": "Question",
          "name": "How long does app development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically, 4–12 weeks depending on complexity and required features."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer post-launch support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer regular updates, bug fixes, and feature improvements."
          }
        },
        {
          "@type": "Question",
          "name": "Will the app be ready for publishing on Play Store and App Store?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We follow store guidelines and assist with publishing."
          }
        },
        {
          "@type": "Question",
          "name": "Can we integrate the app with external systems like CRMs or APIs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We support integration with most third-party tools and platforms."
          }
        }
      ]
    }
  ]
};


  return (
    <>
     <Script
        id="nnc-node-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroBanner />
      <CoveredSection />
      <FeatureGrid />
      <IndustriesSlider />
      <CTASection />

      <br /> <br />
           <div className="container">
  <h2 className="text-center fw-bold mb-2">
          Our Portfolio
        </h2>
        <p className="text-center mb-5" style={{width:"70%", margin:"0 auto"}}>
From startups to enterprises, our mobile app developers company has delivered successful projects across industries. Each portfolio project reflects our creativity, technical expertise, and focus on client results.
        </p>
           </div>
    <Our_Service cardData={ourworkData} />
    <Trusted2/>
      <Trusted />
      <FeaturesGrid2 />
      {/* <ServeClients/> */}
      {/* <ServiceExcellence/> */}
      {/* <ClientSegments/> */}
      <ServeClients/>
      {/* <WhyChooseUs/> */}
       <h2 className="text-center fw-bold mb-2">
          What Our Clients Say
        </h2>
      <TestimonialsCarousel/>
      <FaqSection/>
 
    </>
  );
}
