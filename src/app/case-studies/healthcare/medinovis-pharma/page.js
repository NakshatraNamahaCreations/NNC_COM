// src/app/page.js
import Novus from "./Novus.jsx";

export const metadata = {
  title: "Medinovis Pharma | Innovative Pharmaceutical Solutions",
  description:
    "Medinovis Pharma is a pharmaceutical company focused on delivering high-quality, research-driven medicines that support better health and patient care.",
  keywords:
    "Medinovis Pharma, pharmaceutical company in India, pharma manufacturing, healthcare medicines, pharmaceutical products, drug formulation company, quality medicines",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/case-studies/healthcare/medinovis-pharma",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/case-studies/healthcare/medinovis-pharma",
    title: "Medinovis Pharma | Innovative Pharmaceutical Solutions",
    description:
      "Discover Medinovis Pharma, a trusted pharmaceutical company committed to innovation, quality manufacturing, and reliable healthcare solutions.",
    siteName: "Medinovis Pharma",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/case-studies/healthcare/medinovis-pharmawp-content/uploads/2023/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medinovis Pharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medinovis Pharma | Innovative Pharmaceutical Solutions",
    description:
      "A pharmaceutical company dedicated to quality, research, and reliable healthcare products.",
    images: [
      "https://www.nakshatranamahacreations.com/case-studies/healthcare/medinovis-pharmawp-content/uploads/2023/og-image.jpg",
    ],
  },
};

export default function ContactPage() {
  return <Novus />;
}
