// src/app/page.js
import Health from "./Health.jsx";

export const metadata = {
  title: "Healthcare Case Studies | Medical & Wellness Project Success Stories",
  description:
    "Explore healthcare case studies showcasing successful medical, wellness, and health-focused projects that highlight innovation, patient-centric solutions, and measurable results.",
  keywords:
    "healthcare case studies, medical case studies, healthcare success stories, wellness project case studies, health industry case studies, medical solutions case studies",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/healthcare",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/healthcare",
    title: "Healthcare Case Studies | Medical & Wellness Success Stories",
    description:
      "Discover real-world healthcare case studies highlighting impactful medical and wellness projects with proven results.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/healthcare-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Case Studies | Medical & Wellness Success Stories",
    description:
      "Real healthcare case studies showcasing medical, wellness, and patient-focused project success.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/healthcare-1200x630.jpg",
    ],
  },
};

export default function ContactPage() {
  return <Health />;
}
