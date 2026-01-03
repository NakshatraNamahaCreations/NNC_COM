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
      "url": "https://www.nakshatranamahacreations.com/puppet-animation-services",
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
          "name": "Puppet Animation Services ",
          "item": "https://www.nakshatranamahacreations.com/puppet-animation-services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to create a puppet animation video?",
 "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically 2–4 weeks depending on length, complexity, and feedback rounds."
          }
        },
        {
          "@type": "Question",
          "name": "Can I include voiceovers in multiple languages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide multilingual voiceover options with native-speaking artists."
          }
        },
        {
          "@type": "Question",
          "name": "Do I own the rights to the final video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Once the project is completed and paid for, full rights are handed over to you."
          }
        },
        {
          "@type": "Question",
          "name": "Can I request changes after delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, minor post-delivery edits are included. Major revisions may be discussed additionally."
          }
        },
              {
          "@type": "Question",
          "name": "Is puppet animation suitable for serious corporate topics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, puppet animation can be crafted with a tone that suits both playful and serious messaging."
          }
        },
        {
          "@type": "Question",
          "name": "What do I need to provide to get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Just a clear objective, a short brief, and any brand material you want incorporated—we handle the rest."
          }
        },
            {
          "@type": "Question",
          "name": "Can puppet animation be used for marketing and social media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, puppet animation works exceptionally well for marketing campaigns, social media content, and advertisements by capturing attention and improving message recall."
          }
        },
                  {
          "@type": "Question",
          "name": "Do you help with scriptwriting and story development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our team assists with scriptwriting, storyboarding, and creative direction to ensure your message is clear and engaging."
          }
        }
        ,          {
          "@type": "Question",
          "name": "Can puppet animation be customized to match my brand style?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all characters, visuals, and animation styles are customized to align with your brand identity, tone, and target audience.    "
          }
        }

      ]
    }
  ]
}
;


  return (
    <>
          <Script
        id="nnc-puppet-jsonld"
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
      <FeaturesGrid2 />

      {/* <ServeClients/> */}
      <WhyChooseUs/>
       <h2 className="text-center fw-bold mb-2">
          What Our Clients Say
        </h2>
      <TestimonialsCarousel/>
      <FaqSection/>
 
    </>
  );
}
