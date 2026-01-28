import CoporateVideoProd from "./CoporateVideoProd";

export const metadata = {
  title: "Corporate Film Makers in Mumbai | Professional Corporate Films",
  description:
    "Experienced corporate film makers in Mumbai creating brand films, company profile films, promotional corporate films, and business-focused visual content.",
  keywords:
    "corporate film makers in mumbai, corporate film production company mumbai, corporate filmmakers mumbai, corporate film services mumbai, business film makers mumbai, professional corporate films mumbai",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/corporate-film-makers-in-mumbai",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/corporate-film-makers-in-mumbai",
    title: "Corporate Film Makers in Mumbai | Professional Corporate Films",
    description:
      "Professional corporate film makers in Mumbai delivering high-quality brand films, company profile films, and promotional corporate films for businesses.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/corporate-film-makers-mumbai-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Film Makers in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nncbengaluru",
    title: "Corporate Film Makers in Mumbai | Professional Corporate Films",
    description:
      "Looking for reliable corporate film makers in Mumbai? We create professional corporate films that help businesses tell their story and build credibility.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/corporate-film-makers-mumbai-1200x630.jpg",
    ],
  },
};

export default function CorporateFilmMakersPage() {
  return <CoporateVideoProd />;
}
