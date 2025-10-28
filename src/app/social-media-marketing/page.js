import MobileAppDevelopmentCompany from "./MobileAppDevelopmentCompany"


export const metadata = {
  title: "Social Media Marketing – Creative Social Media Services",
  description:
    "Social Media Marketing that drives engagement, followers, and sales. From content creation to ad campaigns, grow your brand on Instagram, Facebook and more.",
  keywords:
    "SEO services, SEO company, Search engine optimisation. Local SEO services, SEO experts ",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing – Creative Social Media Services",
    description:
      "Social Media Marketing that drives engagement, followers, and sales. From content creation to ad campaigns, grow your brand on Instagram, Facebook and more.",
    type: "website",
    url: "https://www.nakshatranamahacreations.com/social-media-marketing",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/social-media-marketing.png",
        width: 1200,
        height: 630,
        alt: "social-media-marketing",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing – Creative Social Media Services",
    description:
      "Social Media Marketing that drives engagement, followers, and sales. From content creation to ad campaigns, grow your brand on Instagram, Facebook and more.",
    images: [
      "https://www.nakshatranamahacreations.com/media/social-media-marketing.png",
    ],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};




export default function page() {
  return <MobileAppDevelopmentCompany />;
}
