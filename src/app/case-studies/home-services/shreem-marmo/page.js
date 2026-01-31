// src/app/page.js
import Novus from "./Novus.jsx";

export const metadata = {
  title:
    "Shreem Marmo Case Study – Marble Manufacturer Website & SEO Growth",

  description:
    "Explore how Nakshatra Namaha Creations built a premium website and SEO-structured content for Shreem Marmo, improving organic visibility and qualified enquiries.",

  keywords:
    "Shreem Marmo case study, marble manufacturer website, marble website development, marble SEO case study, natural stone website SEO, marble supplier digital growth",

  // ✅ Proper canonical placement
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/case-studies/shreem-marmo",
  },

  openGraph: {
    title:
      "Shreem Marmo Case Study – Marble Manufacturer Website & SEO Growth",
    description:
      "See how a premium marble brand improved organic visibility through SEO-focused website and content strategy.",
    url:
      "https://www.nakshatranamahacreations.com/case-studies/shreem-marmo",
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
      "Shreem Marmo Case Study – Marble Website & SEO Growth",
    description:
      "Discover how Shreem Marmo strengthened digital presence with SEO-structured website and content.",
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
