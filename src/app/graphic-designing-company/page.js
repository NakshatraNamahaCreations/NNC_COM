import MobileAppDevelopmentCompany from "./MobileAppDevelopmentCompany"


export const metadata = {
  title: "Graphic Designing Company ",
  description:
    "Professional graphic design company  and Bangalore offering logos, brochures, posters, web UI/UX, and custom visuals for brands.",
  keywords:
    "Graphic Designing Company , Graphic Designers , Logo Design Services, UI/UX Designers , Custom Design Company, Poster & Brochure Design, Creative Visual Branding ",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/graphic-designing-company",
  },
  openGraph: {
    title: "Graphic Designing Company ",
    description:
      "Professional graphic design company  and Bangalore offering logos, brochures, posters, web UI/UX, and custom visuals for brands.",
    type: "website",
    url: "https://www.nakshatranamahacreations.com/graphic-designing-company",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/graphic-designing-company.png",
        width: 1200,
        height: 630,
        alt: "Graphic Designing Company ",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Designing Company ",
    description:
      "Professional graphic design company  and Bangalore offering logos, brochures, posters, web UI/UX, and custom visuals for brands.",
    images: [
      "https://www.nakshatranamahacreations.com/media/graphic-designing-company.png",
    ],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};




export default function page() {
  return <MobileAppDevelopmentCompany />;
}
