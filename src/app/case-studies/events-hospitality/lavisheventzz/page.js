// src/app/page.js
import Event from "./Event.jsx";

export const metadata = {
  title: "Lavish Events | SEO Website Development for Event Businesses",
  description:
    "A case study on SEO-focused website development for an event business in Bangalore, driving higher rankings, enquiries, and long-term growth.",

  keywords:
    "Lavish Events case study, SEO website development Bangalore, event website SEO, SEO-focused website development, website development for event business",

  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/case-studies/events-hospitality/lavisheventzz",
  },

  openGraph: {
    title: "Lavish Events | SEO Website Development for Event Businesses",
    description:
      "A case study on SEO-focused website development for an event business in Bangalore, driving higher rankings, enquiries, and long-term growth.",
    url: "https://www.nakshatranamahacreations.com/case-studies/events-hospitality/lavisheventzz",
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
    title: "Lavish Events | SEO Website Development for Event Businesses",
    description:
      "A case study on SEO-focused website development for an event business in Bangalore, driving higher rankings, enquiries, and long-term growth.",
    images: [
      "https://www.nakshatranamahacreations.com/media/NNCWebsite_ContactV2_Needthis.png",
    ],
    site: "@nnc_creations",
    creator: "@nnc_creations",
  },
};

export default function ContactPage() {
  return <Event />;
}
