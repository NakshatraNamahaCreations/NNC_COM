import MobileAppDevelopmentCompany from "./MobileAppDevelopmentCompany"


export const metadata = {
  title: "Mobile App Developers Near Me | Android & iOS Experts",
  description:
    "Looking for mobile app developers near you? Nakshatra Namaha Creations offers professional Android and iOS app development services with custom design, robust performance, and end-to-end support. Build your next mobile app with a trusted local team.",
  keywords:
    "Mobile App Developers Near Me, Android App Developers Near Me, iOS App Developers Near Me, Local App Developers, Mobile App Development Services Near Me, App Development Company Near Me",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/mobile-app-developers",
  },
  openGraph: {
    title: "Mobile App Developers Near Me | Android & iOS Experts",
    description:
      "Hire expert mobile app developers near you for Android and iOS platforms. Nakshatra Namaha Creations delivers secure, scalable, and high-performance mobile applications tailored to your business.",
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
