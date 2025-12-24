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

const ourworkData = [
 {
    ui_uxdesign: "/media/ourwork/puranInterior.webp",
    logo: "/media/NNCWebsite_Works_PNG_Puranlogo.png",
    title: "Puran Interiors",
    description:
      "A modern and elegant website showcasing Puran Interiors’ residential and commercial interior design portfolio with a focus on visual appeal and user experience.",
    link: "https://puraninteriors.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/aadhya.webp",
    logo: "/media/NNCAadiyalogo.png",
    title: "Aadhya Instruments",
    description:
      "A clean and minimalist website developed for Aadhya Instruments, highlighting their precision engineering products and technical expertise.",
    link: "https://aadhyainstruments.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/vijayhomeweb.webp",
    logo: "/media/NNCVijayHomeServicesLogo.png",
    title: "Vijay Home Services",
    description:
      "A service-oriented website built for Vijay Home Services to streamline booking for cleaning, pest control, and maintenance services across multiple cities.",
    link: "https://www.vijayhomeservices.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/sarang.webp",
    logo: "/media/NNCSarangCreationsLogo.png",
    title: "Sarang Creations",
    description:
      "A vibrant portfolio website for Sarang Creations, designed to present their creative event management and production services with impactful visuals.",
    link: "https://sarangcreations.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/rrPrecision.webp",
    logo: "/media/NNCPrecisionLogo.png",
    title: "RR Precision",
    description:
      "A professional corporate website for RR Precision, featuring their advanced manufacturing solutions and industry-focused engineering capabilities.",
    link: "https://rr-precision.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/nesra.webp",
    logo: "/media/NesaraAyurvedaLogo.png",
    title: "Nesara Ayurveda",
    description:
      "An Ayurveda-focused e-commerce and brand website for Nesara, integrating natural health and wellness offerings with a smooth shopping experience.",
    link: "https://nesaraayurveda.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/mmd.webp",
    logo: "/media/Mydocumentslogo.png",
    title: "Make my documents",
    description:
      "A documentation services platform website for Make My Documents, built to simplify passport, visa, and PCC applications with user-friendly forms and guides.",
    link: "https://www.makemydocuments.com/",
  },
];

export default function WebsiteDevelopmentCompany() {
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
      "url": "https://www.nakshatranamahacreations.com/website-development-agency",
      "telephone": "+91-9900566466",
      "email": "info@nakshatranamahacreations.com",
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
      "url": "https://www.nakshatranamahacreations.com/website-development-agency",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.nakshatranamahacreations.com/website-development-agency#webpage",
      "url": "https://www.nakshatranamahacreations.com/website-development-agency",
      "name": "Website Development Agency for Scalable Business Growth",
      "description": "Looking for a professional website development agency? We build scalable, high-performance websites designed for usability, growth, and long-term success."
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
          "name": "Website Development Agency",
          "item": "https://www.nakshatranamahacreations.com/website-development-agency"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Website Development Agency specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Website Development Agency specializes in designing, developing, and maintaining websites that support business goals, user experience, and technical performance."
          }
        },
        {
          "@type": "Question",
          "name": "How is a Website Development Agency different from freelancers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Website Development Agency provides structured processes, dedicated teams, quality assurance, and long-term support that individual freelancers often cannot offer consistently."
          }
        },
        {
          "@type": "Question",
          "name": "Can a Website Development Agency handle complex projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a professional Website Development Agency is equipped to manage complex requirements, integrations, and scalable architectures for growing businesses."
          }
        },
        {
          "@type": "Question",
          "name": "Does a Website Development Agency offer post-launch support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most reliable Website Development Agency partners provide ongoing support, updates, and optimization after the website is launched."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website with a Website Development Agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timelines vary based on scope, but a Website Development Agency follows structured phases to ensure quality and timely delivery."
          }
        },
        {
          "@type": "Question",
          "name": "Is working with a Website Development Agency suitable for small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Website Development Agency can support businesses of all sizes by tailoring solutions to match goals, complexity, and future growth plans."
          }
        }
      ]
    }
  ]



};

  return (
    <>

              <Script
        id="nnc-web-dev-jsonld"
        type="application/ld+json"
       strategy="beforeInteractive"
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
From startups to enterprises, our website development Agency has delivered successful projects across industries. Each portfolio project reflects our creativity, technical expertise, and focus on client results.
        </p>
           </div>
    <Our_Service cardData={ourworkData} />
 <Trusted />
      <FeaturesGrid2 />
      {/* <ServeClients/> */}
      {/* <ServiceExcellence/> */}
      {/* <ClientSegments/> */}
      <ServeClients/>
      <WhyChooseUs/>
      <FaqSection/>
 
    </>
  );
}
