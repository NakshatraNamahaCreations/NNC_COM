import MobileAppDevelopmentCompany from "./MobileAppDevelopmentCompany"


export const metadata = {
  title: "Puppet Animation Services | Professional 2D & 3D Animation",
  description:
    "Professional puppet animation services for ads, education, storytelling, and digital media. High-quality 2D and 3D puppet animation that engages audiences.",
  keywords:
    "Puppet animation services, Puppet explainer videos, animation studio, Character animation, Custom puppet animation ",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/puppet-animation-services",
  },
  openGraph: {
    title: "Puppet Animation Services | Professional 2D & 3D Animation",
    description:
      "Professional puppet animation services for ads, education, storytelling, and digital media. High-quality 2D and 3D puppet animation that engages audiences.",
    type: "website",
    url: "https://www.nakshatranamahacreations.com/puppet-animation-services",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/puppet-animation-services.png",
        width: 1200,
        height: 630,
        alt: "Puppet Animation Services ",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puppet Animation Services | Professional 2D & 3D Animation",
    description:
      "Professional puppet animation services for ads, education, storytelling, and digital media. High-quality 2D and 3D puppet animation that engages audiences.",
    images: [
      "https://www.nakshatranamahacreations.com/media/puppet-animation-services.png",
    ],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};




export default function page() {
  return <MobileAppDevelopmentCompany />;
}
