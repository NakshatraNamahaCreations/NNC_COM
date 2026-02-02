// src/app/page.js
import Event from "./Event.jsx";

export const metadata = {
  title: "Make My Documents Case Studies | Passport & Visa Service Success Stories",
  description:
    "Explore real case studies from Make My Documents showcasing successful passport, visa, and document service solutions delivered across India.",
  keywords:
    "Make My Documents case studies, passport service case study, visa service success stories, document services India, passport agent case study",
  canonical: "https://www.nakshatranamahacreations.com/case-studies/it-services/makemydocuments",
  openGraph: {
    title: "Make My Documents Case Studies | Real Client Success Stories",
    description:
      "Discover how Make My Documents helped clients with passport, visa, and documentation services through real-world case studies.",
    type: "website",
    url: "https://www.nakshatranamahacreations.com/case-studies/it-services/makemydocuments",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/mmd-case-studies-banner.png",
        width: 1200,
        height: 630,
        alt: "Make My Documents Case Studies",
      },
    ],
    site_name: "Make My Documents",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make My Documents Case Studies | Documentation Service Results",
    description:
      "Read real case studies highlighting how Make My Documents simplified passport and visa processes for clients across India.",
    images: ["https://www.nakshatranamahacreations.com/media/mmd-case-studies-banner.png"],
  },
};

export default function ContactPage() {
  return <Event />;
}
