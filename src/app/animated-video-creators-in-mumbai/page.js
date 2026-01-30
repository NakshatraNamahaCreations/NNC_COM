import CoporateVideoProd from "./CoporateVideoProd";

export const metadata = {
  title: "Animated Video Creators In Mumbai | Professional Animation Services",
  description:
    "Experienced animated video creators in Mumbai delivering explainer videos, motion graphics, promotional animations, and business-focused animated video solutions.",
  keywords:
    "animated video creators in mumbai, animation company in mumbai, explainer video makers mumbai, motion graphics company mumbai, animated video services mumbai, business animation videos mumbai",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/animated-video-creators-in-mumbai",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/animated-video-creators-in-mumbai",
    title: "Animated Video Creators In Mumbai | Professional Animation Services",
    description:
      "Professional animated video creators in Mumbai producing explainer videos, motion graphics, and promotional animations that help businesses communicate clearly.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/animated-video-creators-mumbai-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Animated Video Creators In Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nncbengaluru",
    title: "Animated Video Creators In Mumbai | Professional Animation Services",
    description:
      "Looking for professional animated video creators in Mumbai We create explainer videos, motion graphics, and promotional animations for growing businesses.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/animated-video-creators-mumbai-1200x630.jpg",
    ],
  },
};

export default function AnimatedVideoCreatorsMumbaiPage() {
  return <CoporateVideoProd />;
}
