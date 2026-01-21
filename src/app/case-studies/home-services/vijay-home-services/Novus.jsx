"use client";
import { useEffect } from "react";


import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudyLayout from "./CaseStudyLayout";
import Breadcrumbs from "@/components/BreadCrumbs";



export default function Novus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Nakshatra Namaha Creations",
        url: "https://www.nakshatranamahacreations.com/",
        logo: "https://www.nakshatranamahacreations.com/media/nnclogo.png",
        sameAs: [
          "https://www.facebook.com/Nakshatranamahacreations/",
          "https://www.linkedin.com/company/nakshatra-namaha-creation/",
          "https://x.com/nncbengaluru",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9900566466",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Kannada"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560061",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        image: "https://www.nakshatranamahacreations.com/office-photo.jpg",
        url: "https://www.nakshatranamahacreations.com/",
        telephone: "+91-9900566466",
        email: "info@nakshatranamahacreations.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560061",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.264056680993265,
          longitude: 76.6444222231926,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:30",
            closes: "19:00",
          },
        ],
        priceRange: "₹₹",
        paymentAccepted: "Cash, Credit Card, Online Payment",
        sameAs: [
          "https://www.facebook.com/nakshatranamahacreations",
          "https://www.linkedin.com/company/nakshatra-namaha-creation/",
        ],
      },
     {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.nakshatranamahacreations.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: "https://www.nakshatranamahacreations.com/case-studies",
          },
                {
            "@type": "ListItem",
            position: 3,
            name: "Events Hospitality",
            item: "https://www.nakshatranamahacreations.com/case-studies/events-hospitality",
          },
        ],
      },
    ],
  };



  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Case Studies",
      link: "/case-studies",
    },
        {
      name: "Events Hospitality",
      link: "/case-studies/events-hospitality",
    },
       {
      name: "Vijaya Home Services",
      link: "/case-studies/events-hospitality/vijay-home-services",
    },
  ];

  return (
    <div>


      <Breadcrumbs paths={breadcrumbPaths} />
<CaseStudyHeader
  title="Vijaya Home Services – Scalable Website & Mobile App Development in Bangalore"
  date="September 2025"
  industry="Home Services"
  platforms="Website & Mobile Application Platform"
  services="Website Development, Mobile App Development, SEO, Google Ads"
/>




<CaseStudyLayout  />
    </div>
  );
}
