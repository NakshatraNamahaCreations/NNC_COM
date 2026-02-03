// src/app/page.js
import ContactClient from "./ContactClient.jsx";

export const metadata = {
  title: "Case Studies | Nakshatra Namaha Creations",

  description:
    "Explore real-world case studies by Nakshatra Namaha Creations showcasing website development, mobile app development, SEO, and digital solutions delivered for diverse businesses.",

  keywords:
    "case studies, website development case studies, mobile app development case studies, SEO case studies, digital marketing case studies, Nakshatra Namaha Creations",

  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/case-studies",
  },

  openGraph: {
    title: "Case Studies | Nakshatra Namaha Creations",
    description:
      "Discover how Nakshatra Namaha Creations helps businesses grow through strategic website development, mobile apps, SEO, and digital solutions.",
    url: "https://www.nakshatranamahacreations.com/case-studies",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/NNCWebsite_ContactV2_Needthis.png",
        width: 1200,
        height: 630,
        alt: "Nakshatra Namaha Creations Case Studies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Nakshatra Namaha Creations",
    description:
      "Browse case studies highlighting successful website development, mobile apps, SEO, and digital projects by Nakshatra Namaha Creations.",
    images: [
      "https://www.nakshatranamahacreations.com/media/NNCWebsite_ContactV2_Needthis.png",
    ],
    site: "@nnc_creations",
    creator: "@nnc_creations",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
