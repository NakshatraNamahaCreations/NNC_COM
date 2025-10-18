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
        "url": "https://nakshatranamahacreations.com/ios-app-development",
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
            "name": "iOS Mobile App Development Company",
            "item": "https://nakshatranamahacreations.com/ios-app-development"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": " How long does it take to build an iOS app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the app’s complexity. A basic app may take 4–6 weeks, while advanced apps with backend systems or integrations can take 10–14 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Can you update an existing iOS app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we can improve, redesign, or re-engineer existing apps to meet new goals or align with newer iOS standards."
            }
          },
          {
            "@type": "Question",
            "name": "Will the app be compatible with the latest iPhones and iPads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We test for the latest devices and iOS versions, and ensure backwards compatibility when needed."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if Apple rejects my app during review?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle the submission process and address any rejections with prompt fixes or clarifications."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to host the app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The app itself is hosted on the App Store. However, if it connects to a backend, we help you set up cloud or server hosting for databases, APIs, and admin panels."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to develop an iOS app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Costs vary based on scope. We offer free consultations to understand your needs and provide a realistic quote."
            }
          }
        ]
      }
    ]
  };
  return (
    <>
          <Script
        id="nnc-ios-jsonld"
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
            From startups to global brands, our iOS app development company has built feature-rich, secure, and scalable applications that drive real business growth. Each project showcases our deep understanding of Apple’s ecosystem, design precision, and commitment to seamless user experiences.
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
