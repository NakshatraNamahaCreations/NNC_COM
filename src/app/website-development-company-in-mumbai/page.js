import WebsiteDevelopmentCompany from "./WebsiteDevelopmentCompany"

export const metadata = {
  title: "Web Development Company | Free Consultation",
  description:
    "Start your digital journey with our Web Designing Company in Mumbai crafting unique websites. Book your free consultation with Nakshatra Namaha Creations.",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/website-development-company-in-mumbai",
  },
  openGraph: {
    title: "Web Development Company | Free Consultation",
    description:
      "Start your digital journey with our Web Designing Company in Mumbai crafting unique websites. Book your free consultation with Nakshatra Namaha Creations.",
    url: "https://www.nakshatranamahacreations.com/website-development-company-in-mumbai",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary",
    title: "Web Development Company | Free Consultation",
    description:
      "Start your digital journey with our Web Designing Company in Mumbai crafting unique websites. Book your free consultation with Nakshatra Namaha Creations.",
    images: [
      "https://www.nakshatranamahacreations.com/media/logo.png",
    ],
    site: "@nncbengaluru",
  },
};


export default function page() {
  return <WebsiteDevelopmentCompany />;
}
