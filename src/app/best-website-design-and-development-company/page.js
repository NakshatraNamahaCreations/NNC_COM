import BestWebsiteDev from "./BestWebsiteDev"

export const metadata = {
  title: "Best Website Design and Development Company",
  description:
    "Trusted as the best website design and development company in Bangalore, we build responsive, seo-friendly and growth-focused websites for lasting digital success.",
  keywords:
    "Website Design, Website Development, Web Design Company, Web Development Company, Website Design and Development Company in Bangalore",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/best-website-design-and-development-company",
  },
  openGraph: {
    title: "Best Website Design and Development Company",
    description:
      "Trusted as the best website design and development company in Bangalore, we build responsive, seo-friendly and growth-focused websites for lasting digital success.",
    url: "https://www.nakshatranamahacreations.com/best-website-design-and-development-company",
    type: "website",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Website Design and Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Design and Development Company",
    description:
      "Trusted as the best website design and development company in Bangalore, we build responsive, seo-friendly and growth-focused websites for lasting digital success.",
    images: ["https://www.nakshatranamahacreations.com/og-image.jpg"],
  },
};

export default function BestWebsiteDevelopment() {
    return <BestWebsiteDev />;
  }
  