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
      "url": "https://www.nakshatranamahacreations.com/graphic-designing-company-",
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
          "name": "Graphic Designing Company",
          "item": "https://www.nakshatranamahacreations.com/graphic-designing-company-"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a typical logo design project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It usually takes 7 working days including concept sketches and revisions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide print-ready formats for brochures and posters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all designs are delivered in high-resolution formats ready for both print and digital use."
          }
        },
        {
          "@type": "Question",
          "name": "Can you design graphics for social media campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We regularly create engaging creatives for platforms like Instagram, Facebook, and LinkedIn."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a revision limit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2–3 revision cycles depending on the design package selected."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle both UI and UX in web design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we cover complete UI/UX workflows including wireframes, prototypes, and final designs."
          }
        },
        {
          "@type": "Question",
          "name": "Will you follow my brand guidelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we adhere to your branding assets and ensure consistency across all deliverables."
          }
        }
      ]
    }
  ]
};

  return (
    <>
      <Script
  id="nnc-graphic-design-schema"
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
      <br /> <br />
       <h2 className="text-center fw-bold mb-2">
          What Our Clients Say
        </h2>
      <TestimonialsCarousel/>
      <FaqSection/>
 
    </>
  );
}
