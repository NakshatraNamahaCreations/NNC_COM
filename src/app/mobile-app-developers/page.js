import MobileAppDevelopmentCompany from "./MobileAppDevelopmentCompany"


export const metadata = {
  title: "Mobile App Developers Near Me | Android & iOS Experts",
  description:
    "Work with experienced mobile app developers near you. We build Android and iOS apps designed for performance, usability, and business success.",
  keywords:
    "Mobile App Developers Near Me, Android App Developers Near Me, iOS App Developers Near Me, Local App Developers, Mobile App Development Services Near Me, App Development Company Near Me",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/mobile-app-developers",
  },
  openGraph: {
    title: "Mobile App Developers Near Me | Android & iOS Experts",
    description:
      "Work with experienced mobile app developers near you. We build Android and iOS apps designed for performance, usability, and business success.",
    type: "website",
    url: "https://www.nakshatranamahacreations.com/mobile-app-developers",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/mobile-app-developers.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Developers Near Me",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Developers Near Me | Android & iOS Experts",
    description:
      "Find reliable mobile app developers near you. Nakshatra Namaha Creations builds scalable Android and iOS apps with stunning design and robust performance.",
    images: [
      "https://www.nakshatranamahacreations.com/media/mobile-app-developers.png",
    ],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};




export default function page() {
  return <MobileAppDevelopmentCompany />;
}
