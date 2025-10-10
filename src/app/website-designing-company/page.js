import WebsiteDevelopmentCompany from "./WebsiteDevelopmentCompany"

export const metadata = {
  title: "Website Designing Company – Professional Web Design Services",
  description:
    "Trusted website designing company offering dynamic, responsive, e-commerce, and SEO-friendly websites. Build your brand’s digital presence with expert solutions.",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/website-designing-company",
  },
  openGraph: {
    title: "Website Designing Company – Professional Web Design Services",
    description:
      "Trusted website designing company offering dynamic, responsive, e-commerce, and SEO-friendly websites. Build your brand’s digital presence with expert solutions.",
    url: "https://www.nakshatranamahacreations.com/website-designing-company",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary",
    title: "Website Designing Company – Professional Web Design Services",
    description:
      "Trusted website designing company offering dynamic, responsive, e-commerce, and SEO-friendly websites. Build your brand’s digital presence with expert solutions.",
    images: [
      "https://www.nakshatranamahacreations.com/media/logo.png",
    ],
    site: "@nncbengaluru",
  },
};


export default function page() {
  return <WebsiteDevelopmentCompany />;
}
