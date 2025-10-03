import MobileAppDevelopmentCompany from "./MobileAppDevelopmentCompany"


export const metadata = {
  title: "Mobile App Development Company – Android & iOS App Services",
  description:
    "Hire a trusted Mobile App Development Company offering end-to-end Android and iOS app development and support. We build secure, scalable, and user-friendly apps",
  keywords:
    "Mobile App Development Company, Mobile App Development Company Near Me, Mobile App Developers, Mobile App Developers Near Me, Mobile App Designers",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/mobile-app-development-company",
  },
  openGraph: {
    title: "Mobile App Development Company – Android & iOS App Services",
    description:
      "Hire a trusted Mobile App Development Company offering end-to-end Android and iOS app development and support. We build secure, scalable, and user-friendly apps",
    type: "website", // Changed from "Mobile App" to "website" for better OG compatibility
    url: "https://www.nakshatranamahacreations.com/mobile-app-development-company",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/OBJECTS.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Development",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company – Android & iOS App Services",
    description:
      "Hire a trusted Mobile App Development Company offering end-to-end Android and iOS app development and support. We build secure, scalable, and user-friendly apps",
    images: ["https://www.nakshatranamahacreations.com/media/OBJECTS.png"],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};



export default function page() {
  return <MobileAppDevelopmentCompany />;
}
