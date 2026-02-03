import CoporateVideoProd from "./CoporateVideoProd";

export const metadata = {
  title: "Corporate Video Production Company in Mumbai | Professional Corporate Videos",
 description:
  "Trusted corporate video production company in Mumbai creating professional brand films, company profile videos, and result-driven business video content.",

  keywords:
    "corporate video production company in mumbai, corporate video makers in mumbai, corporate video services mumbai, corporate film production mumbai, business video production company mumbai, professional corporate videos mumbai",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/corporate-video-production-company-in-mumbai",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/corporate-video-production-company-in-mumbai",
    title: "Corporate Video Production Company in Mumbai | Professional Corporate Videos",
    description:
      "Professional corporate video production company in Mumbai delivering high-quality brand films, company profile videos, and promotional video content for businesses.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/corporate-video-production-mumbai-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Video Production Company in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nncbengaluru",
    title: "Corporate Video Production Company in Mumbai | Professional Corporate Videos",
    description:
      "Looking for a reliable corporate video production company in Mumbai We create professional corporate videos that help businesses communicate clearly and build trust.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/corporate-video-production-mumbai-1200x630.jpg",
    ],
  },
};

export default function CorporateVideoProductionPage() {
  return <CoporateVideoProd />;
}
