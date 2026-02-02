// src/app/page.js
import HomeService from "./HomeService.jsx";

export const metadata = {
  title: "Home Services Case Studies | Local Service Business Success Stories",
  description:
    "Explore home services case studies showcasing successful projects for cleaning, maintenance, repair, and on-demand home service businesses with measurable growth and results.",
  keywords:
    "home services case studies, home service business case studies, cleaning service case studies, maintenance service case studies, local service business success stories, on demand home services",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/home-services",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/home-services",
    title: "Home Services Case Studies",
    description:
      "Real-world home services case studies highlighting successful projects for local service and on-demand home businesses.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/home-services-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Home Services Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Services Case Studies",
    description:
      "Successful home services case studies showcasing growth for cleaning, repair, and maintenance businesses.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/home-services-1200x630.jpg",
    ],
  },
};

export default function ContactPage() {
  return <HomeService />;
}
