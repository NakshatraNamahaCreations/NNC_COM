
"use client";
import Script from "next/script";

import { useEffect } from 'react';

import CoveredSection from "./CoveredSection";
import CTASection from "./CTASection";
import FeatureGrid from "./FeatureGrid";
import FeaturesGrid2 from "./FeaturesGrid2";
import HeroBanner1 from "./HeroBanner1";
import IndustriesSlider from "./IndustriesSlider";
import Trusted from "./Trusted";
import styles from "../../styles/covered-section.module.css";
import ServeClients from "./ServeClients";

import WhyChooseUs from "./WhyChooseUs";
import FaqSection from './FaqSection';
import TestimonialsCarousel from './TestimonialsCarousel';



export default function CoporateVideoProd() {

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
      "url": "https://www.nakshatranamahacreations.com/corporate-video-makers",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "Service",
      "serviceType": "Corporate Video Production",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Ad Film Studio",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Product Video Shoots",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Corporate Testimonial Videos",
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
          "name": "Corporate Video Makers in – Ad Film Studio",
          "item": "https://www.nakshatranamahacreations.com/corporate-video-makers"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a typical corporate video project take to complete?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the complexity, but most projects take 2–4 weeks including pre- and post-production."
          }
        },
        {
          "@type": "Question",
          "name": "Can we be involved during the scripting or review stages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our process is collaborative. Your input is key during concept, scripting, and editing."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide voiceovers or subtitles in other languages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We offer multilingual voiceovers, subtitles, and localization support."
          }
        },
        {
          "@type": "Question",
          "name": "What format will the final videos be delivered in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide HD or 4K files in your preferred format, optimized for web, social, or television."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle shoots outside of Bangalore as well?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we’ve covered shoots across India depending on the project scope."
          }
        },
        {
          "@type": "Question",
          "name": "Is drone or aerial footage included in your packages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aerial shots can be included as an add-on, subject to location permissions."
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

      <HeroBanner1 />
      <CoveredSection />
      <FeatureGrid />
      <IndustriesSlider />
      <CTASection />

  

 <Trusted />
  
      {/* <WhyChooseUs/> */}
      <br />    <br />
         <h2 className="text-center fw-bold mb-2">
          What Our Clients Say
        </h2>
       <TestimonialsCarousel/>  
      <FaqSection/>
 
    </>
  );
}
