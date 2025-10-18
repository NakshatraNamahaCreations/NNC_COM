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
      "image": "https://nakshatranamahacreations.com/media/nnclogo.png",
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
      "url": "https://nakshatranamahacreations.com/android-app-development",
      "logo": "https://nakshatranamahacreations.com/media/nnclogo.png"
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
          "name": "Android App Development Company | NNC",
          "item": "https://nakshatranamahacreations.com/android-app-development"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to develop an Android app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development timelines depend on complexity. A basic app may take 4–6 weeks, while feature-rich apps can take 1–2 months."
          }
        },
        {
          "@type": "Question",
          "name": "Will you help with launching the app on the Google Play Store?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We handle the Play Store deployment process including asset creation, testing, and publishing."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer post-launch support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We offer maintenance packages that cover bug fixes, updates, and monitoring."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate payment gateways like Razorpay or UPI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we support payment gateway integrations including Razorpay, Stripe, Google Pay, and UPI."
          }
        },
        {
          "@type": "Question",
          "name": "What if I want to update the app later with more features?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No problem. We build apps with scalability in mind and offer version updates as part of our extended engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Is the app compatible with all Android versions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We target the most recent and widely used Android versions to ensure maximum compatibility across devices."
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

      <br /> <br />
           <div className="container">
  <h2 className="text-center fw-bold mb-2">
          Our Portfolio
        </h2>
      <p className="text-center mb-5" style={{width:"70%", margin:"0 auto"}}>
  From startups to global brands, our Android app development company has built feature-rich, secure, and scalable applications that empower businesses to grow and engage users effectively. Each project highlights our deep expertise in the Android ecosystem, technical precision, and commitment to delivering seamless performance across devices and versions.
</p>

           </div>
    <Our_Service cardData={ourworkData} />
    <Trusted2/>
      <Trusted />
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
