// src/app/page.js
import Itservices from "./Itservices.jsx";

export const metadata = {
  title: "Case Studies | Real Success Stories in Passport & Document Services",
  description:
    "Explore detailed case studies highlighting real client success stories in passport, visa, and documentation services delivered across India.",
  keywords:
    "case studies, passport service case studies, visa assistance success stories, documentation services case study, passport agent results",
  canonical: "https://www.nakshatranamahacreations.com/case-studies",
  openGraph: {
    title: "Case Studies | Real Client Success Stories",
    description:
      "Read real-world case studies showcasing how passport, visa, and document services were successfully delivered for clients across India.",
    type: "website",
    url: "https://www.nakshatranamahacreations.com/case-studies",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/mmd-case-studies-banner.png",
        width: 1200,
        height: 630,
        alt: "Case Studies – Make My Documents",
      },
    ],
    site_name: "Make My Documents",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Passport & Documentation Service Results",
    description:
      "Discover real success stories from passport, visa, and documentation services through detailed case studies.",
    images: ["https://www.nakshatranamahacreations.com/media/mmd-case-studies-banner.png"],
  },
};

export default function ContactPage() {
  return <Itservices />;
}
