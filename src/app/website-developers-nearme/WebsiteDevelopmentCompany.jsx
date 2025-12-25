"use client";

import Script from "next/script";

import HeroBanner from "./HeroBanner";





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
     

 
    </>
  );
}
