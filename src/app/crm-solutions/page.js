import CoporateVideoProd from "./CoporateVideoProd";

export const metadata = {
  title: "CRM Solutions & Customer Relationship Management Services",
  description:
    "Improve sales, manage leads, and automate customer workflows with professional CRM solutions designed to increase efficiency and customer engagement.",
  keywords:
    "CRM software solutions, CRM consulting services, CRM development services, Sales CRM solutions, Lead management CRM",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/crm-solutions",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/crm-solutions",
    title: "CRM Solutions & Customer Relationship Management Services",
    description:
      "Improve sales, manage leads, and automate customer workflows with professional CRM solutions designed to increase efficiency and customer engagement.",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/og/crm-solutions-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "CRM Solutions & Customer Relationship Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nncbengaluru",
    title: "CRM Solutions & Customer Relationship Management Services",
    description:
      "Looking for reliable corporate film makers in Mumbai We create professional corporate films that help businesses tell their story and build credibility.",
    images: [
      "https://www.nakshatranamahacreations.com/media/og/crm-solutions-1200x630.jpg",
    ],
  },
};

export default function CorporateFilmMakersPage() {
  return <CoporateVideoProd />;
}
