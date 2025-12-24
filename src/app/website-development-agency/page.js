import WebsiteDevelopmentCompany from "./WebsiteDevelopmentCompany"

export const metadata = {
  title: "Website Development Agency for Scalable Business Growth",
  description:
    "Looking for a professional website development agency? We build scalable, high-performance websites designed for usability, growth, and long-term success.",
   keywords:
    "Website Development Agency, professional website development agency, website development services, custom website development, web development agency, business website development, website development company",
    alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/website-development-agency",
  },
  openGraph: {
    title: "Website Development Agency for Scalable Business Growth",
    description:
      "Looking for a professional website development agency? We build scalable, high-performance websites designed for usability, growth, and long-term success.",
    url: "https://www.nakshatranamahacreations.com/website-development-agency",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary",
    title: "Website Development Agency for Scalable Business Growth",
    description:
      "Looking for a professional website development agency? We build scalable, high-performance websites designed for usability, growth, and long-term success.",
    images: [
      "https://www.nakshatranamahacreations.com/media/logo.png",
    ],
    site: "@nncbengaluru",
  },
};


export default function page() {
  return <WebsiteDevelopmentCompany />;
}
