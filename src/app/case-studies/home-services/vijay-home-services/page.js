// src/app/page.js
import Novus from "./Novus.jsx";

export const metadata = {
  title:
    "Vijaya Home Services Case Study – Website & App Development Bangalore",

  description:
    "Discover how Nakshatra Namaha Creations built a scalable website and mobile app for Vijaya Home Services, boosting leads and SEO visibility.",

  keywords:
    "Vijaya Home Services case study, home services website development, mobile app development for home services, SEO-ready service pages, home services app development Bangalore",

  // ✅ Proper canonical placement
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/case-studies/home-services/vijay-home-services",
  },

  openGraph: {
    title:
      "Vijaya Home Services Case Study – Website & App Development Bangalore",
    description:
      "Discover how Nakshatra Namaha Creations built a scalable website and mobile app for Vijaya Home Services, boosting leads and SEO visibility.",
    url:
      "https://www.nakshatranamahacreations.com/case-studies/home-services/vijay-home-services",
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
      "Vijaya Home Services Case Study – Website & App Development Bangalore",
    description:
      "Discover how Nakshatra Namaha Creations built a scalable website and mobile app for Vijaya Home Services, boosting leads and SEO visibility.",
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
