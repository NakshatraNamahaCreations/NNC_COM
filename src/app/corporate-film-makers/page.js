import CoporateVideoProd from "./CoporateVideoProd"

export const metadata = {
  title: "Corporate Film Makers for Ad Shoots and Brand Storytelling",
  description:
    "Hire professional corporate film makers for impactful brand storytelling, engaging ad shoots, and high-quality corporate films that elevate your business.",
  keywords:
    "corporate video production company, corporate video shoot, corporate film makers, corporate video makers, branded content production, commercial video production",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/corporate-film-makers",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/corporate-film-makers",
    title: "Corporate Film Makers for Ad Shoots and Brand Storytelling",
    description:
      "Hire professional corporate film makers for impactful brand storytelling, engaging ad shoots, and high-quality corporate films that elevate your business.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/corporate-film-makers-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Film Makers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@nncbengaluru",
    title: "Corporate Film Makers for Ad Shoots and Brand Storytelling",
    description:
      "Hire professional corporate film makers for impactful brand storytelling, engaging ad shoots, and high-quality corporate films that elevate your business.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/corporate-film-makers-1200x630.jpg"
    ]
  }
};


export default function CoporateVideoProduction() {
    return <CoporateVideoProd/>;
  }
  