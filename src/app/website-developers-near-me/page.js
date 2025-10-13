import WebsiteDevelopmentCompany from "./WebsiteDevelopmentCompany"

export const metadata = {
  title: "Website Developers Near Me | Local Web Development Experts",
  description:
    "Find reliable website developers near you for responsive, SEO-friendly websites. Get expert local web development services tailored to your business.",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/website-developers-near-me",
  },
  openGraph: {
    title: "Website Developers Near Me | Local Web Development Experts",
    description:
      "Find reliable website developers near you for responsive, SEO-friendly websites. Get expert local web development services tailored to your business.",
    url: "https://www.nakshatranamahacreations.com/website-developers-near-me",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary",
    title: "Website Developers Near Me | Local Web Development Experts",
    description:
      "Find reliable website developers near you for responsive, SEO-friendly websites. Get expert local web development services tailored to your business.",
    images: [
      "https://www.nakshatranamahacreations.com/media/logo.png",
    ],
    site: "@nncbengaluru",
  },
};


export default function page() {
  return <WebsiteDevelopmentCompany />;
}
