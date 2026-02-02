// src/app/page.js
import Event from "./Event.jsx";

export const metadata = {
  title: "Events & Hospitality Case Studies | Corporate & Brand Event Success Stories",
  description:
    "Explore events and hospitality case studies showcasing successful corporate events, brand activations, exhibitions, and guest experiences delivered with precision and creativity.",
  keywords:
    "events case studies, hospitality case studies, corporate event case studies, brand activation case studies, exhibition case studies, event management success stories",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/events-hospitality",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/events-hospitality",
    title: "Events & Hospitality Case Studies",
    description:
      "Real-world case studies highlighting impactful corporate events, hospitality management, exhibitions, and brand experiences.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/events-hospitality-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Events and Hospitality Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Hospitality Case Studies",
    description:
      "Successful event and hospitality case studies showcasing corporate events, exhibitions, and brand activations.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/events-hospitality-1200x630.jpg",
    ],
  },
};

export default function ContactPage() {
  return <Event />;
}
