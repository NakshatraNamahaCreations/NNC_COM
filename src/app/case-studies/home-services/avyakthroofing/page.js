// src/app/page.js
import AvyakthRoofing from "./Novus.jsx";

export const metadata = {
  title:
    "Avyakth Roofing Solutions Case Study – Residential & Commercial Roofing Systems",

  description:
    "Explore how Nakshatra Namaha Creations enhanced the digital presence and enquiry flow for Avyakth Roofing Solutions across residential, commercial, and institutional projects.",

  keywords:
    "Avyakth Roofing Solutions case study, roofing company case study Bangalore, residential roofing systems, commercial roofing solutions, roofing materials digital presence",

  // ✅ Proper canonical placement
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/case-studies/home-services/avyakthroofing",
  },

  openGraph: {
    title:
      "Avyakth Roofing Solutions Case Study – Roofing Systems & Installation",
    description:
      "Discover how Nakshatra Namaha Creations helped Avyakth Roofing Solutions strengthen its online presence and generate quality roofing enquiries.",
    url:
      "https://www.nakshatranamahacreations.com/case-studies/home-services/avyakthroofing",
    type: "website",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/NNCWebsite_ContactV2_Needthis.png",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Avyakth Roofing Solutions Case Study – Roofing Systems & Services",
    description:
      "See how Nakshatra Namaha Creations partnered with Avyakth Roofing Solutions to showcase their roofing expertise and drive project enquiries.",
    images: [
      "https://www.nakshatranamahacreations.com/media/NNCWebsite_ContactV2_Needthis.png",
    ],
    site: "@nnc_creations",
    creator: "@nnc_creations",
  },
};

export default function CaseStudyPage() {
  return <AvyakthRoofing />;
}
