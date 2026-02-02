import CoporateVideoProd from "./CoporateVideoProd";

export const metadata = {
  title: "SEO Services in Mumbai | Grow Rankings & Organic Traffic",
  description:
    "Professional SEO services in Mumbai helping businesses improve Google rankings, increase organic traffic, and generate high-quality leads.",
  keywords:
    "seo services in mumbai, seo company in mumbai, search engine optimization mumbai, local seo services mumbai, digital marketing seo mumbai",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/seo-services-in-mumbai",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/seo-services-in-mumbai",
    title: "SEO Services in Mumbai | Grow Rankings & Organic Traffic",
    description:
      "Professional SEO services in Mumbai helping businesses improve Google rankings, increase organic traffic, and generate high-quality leads.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/seo-services-in-mumbai-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Services in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nncbengaluru",
    title: "SEO Services in Mumbai | Grow Rankings & Organic Traffic",
    description:
      "Professional SEO services in Mumbai helping businesses improve Google rankings, increase organic traffic, and generate high-quality leads.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/seo-services-in-mumbai-1200x630.jpg",
    ],
  },
};

export default function CoporateVideoProduction() {
  return <CoporateVideoProd />;
}
