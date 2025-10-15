import WebsiteDevelopmentCompany from "./WebsiteDevelopmentCompany"

export const metadata = {
  title: "Website Developers | Professional Website Development Services.",
  description:
    "Hire expert website developers for modern, responsive, and SEO-ready websites. Boost your online presence with reliable web development services",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/website-developers",
  },
  openGraph: {
    title: "Website Developers | Professional Website Development Services.",
    description:
      "Hire expert website developers for modern, responsive, and SEO-ready websites. Boost your online presence with reliable web development services",
    url: "https://www.nakshatranamahacreations.com/website-developers",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary",
    title: "Website Developers | Professional Website Development Services.",
    description:
      "Hire expert website developers for modern, responsive, and SEO-ready websites. Boost your online presence with reliable web development services",
    images: [
      "https://www.nakshatranamahacreations.com/media/logo.png",
    ],
    site: "@nncbengaluru",
  },
};


export default function page() {
  return <WebsiteDevelopmentCompany />;
}
