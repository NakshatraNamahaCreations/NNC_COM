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
      "areaServed": "",
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
      "url": "https://www.nakshatranamahacreations.com/react-native-mobile-app-developers",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "Service",
      "serviceType": "iOS Mobile App Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Android Mobile App Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Flutter Mobile App Development",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "React Native Mobile App Development",
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
          "name": "React Native Mobile App Developers | App Development ",
          "item": "https://www.nakshatranamahacreations.com/react-native-mobile-app-developers"
        }
      ]
    },
  {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose React Native for mobile app development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "React Native allows cross-platform app development with a single codebase. It offers fast performance, reduced costs, and a native-like user experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is React Native good for both Android and iOS apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. React Native enables shared development for Android and iOS with performance close to native apps."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us with app design too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our UI/UX team designs every screen from scratch with a focus on user flow and brand alignment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer maintenance after the app is live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide ongoing maintenance, updates, and support plans post-launch."
      }
    },
    {
      "@type": "Question",
      "name": "Will the app work on tablets as well?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build responsive apps optimized for both smartphones and tablets."
      }
    },
    {
      "@type": "Question",
      "name": "Can we migrate our existing app to React Native?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Definitely. We’ve handled multiple app migrations and ensure your data and functionality remain intact."
      }
        }
      ]
    }
  ]

};


  return (
    <>
          <Script
        id="nnc-react-native-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <HeroBanner />
      <CoveredSection />
      <FeatureGrid />
      <IndustriesSlider />
      <CTASection />


    {/* <FeaturesGrid2/> */}
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
