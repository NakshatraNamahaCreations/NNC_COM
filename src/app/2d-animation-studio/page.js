import TwoDAnimationPage from "./TwoDAnimationPage";

export const metadata = {
  title: "2D Animation Studios – Visual Storytelling for Brands",
  description:
    "Expert 2D Animation Studios delivering explainer videos, product demos, and brand storytelling. High-quality animations to engage audience and drive results.",
  keywords:
    "2D Animation Studio, 2D Animation Studio Near Me, 2D Animation Company, 2D Animation Company Near Me, 2D Animation Service, 2D Animation Company",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/2d-animation-studio",
  },
  openGraph: {
    title: "2D Animation Studios – Visual Storytelling for Brands",
    description:
      "Expert 2D Animation Studios delivering explainer videos, product demos, and brand storytelling. High-quality animations to engage audience and drive results.",
    url: "https://www.nakshatranamahacreations.com/2d-animation-studio",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/2DAnimation/2D%20Animation%20image.png",
        width: 1200,
        height: 630,
        alt: "2D Animation Studio",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2D Animation Studios – Visual Storytelling for Brands",
    description:
      "Expert 2D Animation Studios delivering explainer videos, product demos, and brand storytelling. High-quality animations to engage audience and drive results.",
    images: [
      "https://www.nakshatranamahacreations.com/media/2DAnimation/2D%20Animation%20image.png",
    ],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};

export default function TwoDAnimation() {
  return <TwoDAnimationPage />;
}
