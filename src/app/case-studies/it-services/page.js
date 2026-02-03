// src/app/page.js
import Event from "./Event.jsx";

export const metadata = {
  title: "IT Services Case Studies | Web, App & Digital Solutions",

  description:
    "Explore IT services case studies showcasing real-world website development, mobile app solutions, SEO strategies, and digital platforms delivered for growing businesses.",

  keywords:
    "IT services case studies, website development case studies, mobile app development case studies, software solutions case studies, digital transformation case studies",

  // ✅ Correct canonical placement (App Router)
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/case-studies/it-services",
  },

  openGraph: {
    title: "IT Services Case Studies | Real Project Implementations",
    description:
      "Discover how modern IT services including websites, mobile apps, and digital platforms are built and executed through real case studies.",
    url:
      "https://www.nakshatranamahacreations.com/case-studies/it-services",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/it-services-case-studies.png",
        width: 1200,
        height: 630,
        alt: "IT Services Case Studies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IT Services Case Studies | Web & App Development Projects",
    description:
      "Browse IT services case studies highlighting website development, mobile applications, and digital solutions for businesses.",
    images: [
      "https://www.nakshatranamahacreations.com/media/it-services-case-studies.png",
    ],
  },
};

export default function ContactPage() {
  return <Event />;
}
