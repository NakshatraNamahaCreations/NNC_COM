import MobileAppDevelopmentCompany from "./MobileAppDevelopmentCompany"


export const metadata = {
  title: "React JS Development Company | NNC",
  description:
    "Looking for a React JS development company? We build fast, scalable, and modern websites tailored to your business with the latest web technologies.",
  keywords:
    "React JS development , React website development, React development company, React developers, Frontend development services ",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/react-js-development-company",
  },
  openGraph: {
    title: "React JS Development Company | NNC",
    description:
      "Looking for a React JS development company? We build fast, scalable, and modern websites tailored to your business with the latest web technologies.",
    type: "website",
    url: "https://www.nakshatranamahacreations.com/react-js-development-company",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/react-js-development-company.png",
        width: 1200,
        height: 630,
        alt: "React JS Development Company",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "React JS Development Company | NNC",
    description:
      "Looking for a React JS development company? We build fast, scalable, and modern websites tailored to your business with the latest web technologies.",
    images: [
      "https://www.nakshatranamahacreations.com/media/react-js-development-company.png",
    ],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};




export default function page() {
  return <MobileAppDevelopmentCompany />;
}
