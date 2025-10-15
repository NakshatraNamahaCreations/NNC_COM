"use client";
import { useEffect } from 'react';
import Our_Service from "@/components/home/Our_Service";
import CoveredSection from "./CoveredSection";
import CTASection from "./CTASection";
import FeatureGrid from "./FeatureGrid";
import FeaturesGrid2 from "./FeaturesGrid2";
import HeroBanner from "./HeroBanner";
import IndustriesSlider from "./IndustriesSlider";
import Trusted from "./Trusted";
import styles from "../../styles/covered-section.module.css";
import ServeClients from "./ServeClients";

import WhyChooseUs from "./WhyChooseUs";
import FaqSection from './FaqSection';
import TestimonialsCarousel from './TestimonialsCarousel';

const ourworkData = [
 {
    ui_uxdesign: "/media/ourwork/puranInterior.webp",
    logo: "/media/NNCWebsite_Works_PNG_Puranlogo.png",
    title: "Puran Interiors",
    description:
      "A modern and elegant website showcasing Puran Interiors’ residential and commercial interior design portfolio with a focus on visual appeal and user experience.",
    link: "https://puraninteriors.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/aadhya.webp",
    logo: "/media/NNCAadiyalogo.png",
    title: "Aadhya Instruments",
    description:
      "A clean and minimalist website developed for Aadhya Instruments, highlighting their precision engineering products and technical expertise.",
    link: "https://aadhyainstruments.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/vijayhomeweb.webp",
    logo: "/media/NNCVijayHomeServicesLogo.png",
    title: "Vijay Home Services",
    description:
      "A service-oriented website built for Vijay Home Services to streamline booking for cleaning, pest control, and maintenance services across multiple cities.",
    link: "https://www.vijayhomeservices.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/sarang.webp",
    logo: "/media/NNCSarangCreationsLogo.png",
    title: "Sarang Creations",
    description:
      "A vibrant portfolio website for Sarang Creations, designed to present their creative event management and production services with impactful visuals.",
    link: "https://sarangcreations.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/rrPrecision.webp",
    logo: "/media/NNCPrecisionLogo.png",
    title: "RR Precision",
    description:
      "A professional corporate website for RR Precision, featuring their advanced manufacturing solutions and industry-focused engineering capabilities.",
    link: "https://rr-precision.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/nesra.webp",
    logo: "/media/NesaraAyurvedaLogo.png",
    title: "Nesara Ayurveda",
    description:
      "An Ayurveda-focused e-commerce and brand website for Nesara, integrating natural health and wellness offerings with a smooth shopping experience.",
    link: "https://nesaraayurveda.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/mmd.webp",
    logo: "/media/Mydocumentslogo.png",
    title: "Make my documents",
    description:
      "A documentation services platform website for Make My Documents, built to simplify passport, visa, and PCC applications with user-friendly forms and guides.",
    link: "https://www.makemydocuments.com/",
  },
];

export default function WebsiteDevelopmentCompany() {


  return (
    <>
      <HeroBanner />
      <CoveredSection />
      <FeatureGrid />
      {/* <IndustriesSlider /> */}
      <CTASection />
     
      <br /> <br />
           <div className="container">
  <h2 className="text-center fw-bold mb-2">
          Our Portfolio
        </h2>
        <p className="text-center mb-5" style={{width:"70%", margin:"0 auto"}}>
        Looking for reliable website developers near you? Our experienced web development team has helped businesses of all sizes build high-performing websites that drive traffic and conversions. From startups to local enterprises, we combine design expertise, modern technologies, and industry-specific strategies to create websites that truly work for your business.
        </p>
           </div>
    <Our_Service cardData={ourworkData} />
 <Trusted />
      <FeaturesGrid2 />
      {/* <ServeClients/> */}
      {/* <ServiceExcellence/> */}
      {/* <ClientSegments/> */}
      <ServeClients/>
      <WhyChooseUs/>
      <TestimonialsCarousel/>
      <FaqSection/>
 
    </>
  );
}
