import CoporateVideoProd from "./CoporateVideoProd"

export const metadata = {
  title: "Corporate Video Makers in – Ad Film Studio",
  description:
    "Professional corporate video makers in creating ad films, product demos, and brand videos that deliver clarity, impact, and lasting impressions.",
  keywords:
    "digital advertising, social media marketing, online marketing agency, SEO company ",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/corporate-video-makers",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/corporate-video-makers",
    title: "Corporate Video Makers in – Ad Film Studio",
    description:
      "Professional corporate video makers in creating ad films, product demos, and brand videos that deliver clarity, impact, and lasting impressions.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/corporate-video-makers-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Film Makers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@nncbengaluru",
    title: "Corporate Video Makers in – Ad Film Studio",
    description:
      "Professional corporate video makers in creating ad films, product demos, and brand videos that deliver clarity, impact, and lasting impressions.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/corporate-video-makers-1200x630.jpg"
    ]
  }
};


export default function CoporateVideoProduction() {
    return <CoporateVideoProd/>;
  }
  