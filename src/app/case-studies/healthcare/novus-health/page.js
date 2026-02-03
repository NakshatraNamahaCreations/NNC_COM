// src/app/page.js
import Novus from "./Novus.jsx";

export const metadata = {
  title: "Novus Health Diagnostics & Wellness | Book Lab Tests & Health Checkups",

  description:
    "Novus Health offers reliable diagnostic services, lab tests, imaging, and wellness checkups with home sample collection and digital reports for your convenience.",

  keywords:
    "Novus Health, diagnostic center, lab tests near me, health checkup packages, blood test, imaging services, MRI scan, CT scan, ultrasound, wellness checkups",

  // ✅ CORRECT canonical placement for App Router
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/case-studies/healthcare/novus-health",
  },

  openGraph: {
    title: "Novus Health Diagnostics & Wellness",
    description:
      "Book lab tests, imaging services, and wellness checkups with Novus Health. Trusted diagnostics with home sample collection and accurate digital reports.",
    url: "https://www.nakshatranamahacreations.com/case-studies/healthcare/novus-health",
    type: "website",
    siteName: "Novus Health",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/case-studies/healthcare/novus-healthassets/og/novus-health-og.jpg",
        width: 1200,
        height: 630,
        alt: "Novus Health Diagnostics and Wellness",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Novus Health Diagnostics & Wellness",
    description:
      "Trusted diagnostic services, lab tests, imaging, and wellness checkups with home collection and fast digital reports.",
    images: [
      "https://www.nakshatranamahacreations.com/case-studies/healthcare/novus-healthassets/og/novus-health-og.jpg",
    ],
  },
};

export default function ContactPage() {
  return <Novus />;
}
