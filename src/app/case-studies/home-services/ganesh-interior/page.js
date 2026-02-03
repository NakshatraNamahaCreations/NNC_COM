// src/app/page.js
import Novus from "./Novus.jsx";

export const metadata = {
  title:
    "Ganesh Interior Designs Case Study – Residential & Commercial Interior Design",

  description:
    "Explore how Nakshatra Namaha Creations supported Ganesh Interior Designs with a strong digital presence for residential and commercial interior design and renovation services.",

  keywords:
    "Ganesh Interior Designs case study, interior design case study Bangalore, residential interior design website, commercial interior design services, interior renovation digital presence",

  // ✅ Proper canonical placement
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/case-studies/home-services/ganesh-interior",
  },

  openGraph: {
    title:
      "Ganesh Interior Designs Case Study – Interior Design & Renovation",
    description:
      "Discover how Nakshatra Namaha Creations helped Ganesh Interior Designs strengthen its online presence for residential and commercial interior design projects.",
    url:
      "https://www.nakshatranamahacreations.com/case-studies/home-services/ganesh-interior",
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
      "Ganesh Interior Designs Case Study – Interior Design & Renovation",
    description:
      "See how Nakshatra Namaha Creations partnered with Ganesh Interior Designs to present their interior design and renovation expertise online.",
    images: [
      "https://www.nakshatranamahacreations.com/media/NNCWebsite_ContactV2_Needthis.png",
    ],
    site: "@nnc_creations",
    creator: "@nnc_creations",
  },
};

export default function ContactPage() {
  return <Novus />;
}
