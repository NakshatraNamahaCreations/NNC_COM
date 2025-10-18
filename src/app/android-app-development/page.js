import MobileAppDevelopmentCompany from "./MobileAppDevelopmentCompany"


export const metadata = {
  title: "Android App Development Company | NNC",
  description:
    "Expert Android app development. We build custom Android apps with UI/UX design, API integration & post-launch support for all businesses.",
  keywords:
    "Android App Development Company, Android Developers Custom Android App Development, Mobile App Development, Hire Android Developers ",
  alternates: {
    canonical:
      "https://nakshatranamahacreations.com/android-app-development",
  },
  openGraph: {
    title: "Android App Development Company | NNC",
    description:
      "Hire expert mobile app developers near you for Android and iOS platforms. Nakshatra Namaha Creations delivers secure, scalable, and high-performance mobile applications tailored to your business.",
    type: "website",
    url: "https://nakshatranamahacreations.com/android-app-development",
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
    title: "Android App Development Company | NNC",
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
