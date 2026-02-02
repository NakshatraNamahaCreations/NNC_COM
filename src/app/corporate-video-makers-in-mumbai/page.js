import CoporateVideoProd from "./CoporateVideoProd";

export const metadata = {
  title: "Corporate Video Makers in Mumbai | Professional Corporate Videos",
  description:
    "Experienced corporate video makers in Mumbai creating company profile videos, brand videos, promotional corporate videos, and business-focused visual content.",
  keywords:
    "corporate video makers in mumbai, corporate video production company mumbai, corporate video creators mumbai, corporate video services mumbai, business video makers mumbai, professional corporate videos mumbai",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/corporate-video-makers-in-mumbai",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/corporate-video-makers-in-mumbai",
    title: "Corporate Video Makers in Mumbai | Professional Corporate Videos",
    description:
      "Professional corporate video makers in Mumbai delivering high-quality company profile videos, brand videos, and promotional corporate videos for businesses.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/corporate-video-makers-mumbai-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Video Makers in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nncbengaluru",
    title: "Corporate Video Makers in Mumbai | Professional Corporate Videos",
    description:
      "Looking for reliable corporate video makers in Mumbai? We create professional corporate videos that help businesses communicate clearly and build brand credibility.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/corporate-video-makers-mumbai-1200x630.jpg",
    ],
  },
};

export default function CorporateVideoMakersPage() {
  return <CoporateVideoProd />;
}
