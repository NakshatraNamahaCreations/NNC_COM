import MobileAppDevelopmentCompany from "./MobileAppDevelopmentCompany"


export const metadata = {
  title: "Search Engine Optimisation Company – SEO Services for Growth",
  description:
    "Boost visibility, traffic with Search Engine Optimisation services. We deliver on-page, off-page, and local SEO strategies for long-term ranking success.",
  keywords:
    "SEO services, SEO company, Search engine optimisation. Local SEO services, SEO experts ",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/seo-services",
  },
  openGraph: {
    title: "Search Engine Optimisation Company – SEO Services for Growth",
    description:
      "Boost visibility, traffic with Search Engine Optimisation services. We deliver on-page, off-page, and local SEO strategies for long-term ranking success.",
    type: "website",
    url: "https://www.nakshatranamahacreations.com/seo-services",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/seo-services.png",
        width: 1200,
        height: 630,
        alt: "seo-services",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Engine Optimisation Company – SEO Services for Growth",
    description:
      "Boost visibility, traffic with Search Engine Optimisation services. We deliver on-page, off-page, and local SEO strategies for long-term ranking success.",
    images: [
      "https://www.nakshatranamahacreations.com/media/seo-services.png",
    ],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};




export default function page() {
  return <MobileAppDevelopmentCompany />;
}
