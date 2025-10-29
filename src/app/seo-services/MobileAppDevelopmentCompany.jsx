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
      "url": "https://www.nakshatranamahacreations.com/seo-services",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "Service",
      "serviceType": "Search Engine Optimization",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Social Media Marketing",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Paid Marketing",
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
          "name": "SEO Services Company",
          "item": "https://www.nakshatranamahacreations.com/seo-services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically, visible improvements start within 3–6 months, but it depends on your domain history, competition, and existing setup."
          }
        },
        {
          "@type": "Question",
          "name": "Do you guarantee #1 rankings on Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No ethical SEO agency can guarantee that. We focus on sustainable strategies that bring consistent growth."
          }
        },
        {
          "@type": "Question",
          "name": "What tools do you use for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use tools like Google Search Console, SEMrush, Ahrefs, and Screaming Frog—but more importantly, we use our expertise."
          }
        },
        {
          "@type": "Question",
          "name": "Will SEO help my local business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. With Local SEO, we help you appear on maps, local listings, and nearby searches to drive real foot traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Can you optimize an existing website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We audit your current setup and enhance it with our on-page, technical, and content-focused optimizations."
          }
        },
        {
          "@type": "Question",
          "name": "What’s the difference between SEO and paid ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO earns you long-term organic visibility, while ads offer instant traffic at a cost. We can help with both if needed."
          }
        }
      ]
    }
  ]
};




  return (
    <>
          <Script
        id="nnc-react-jsonld"
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
