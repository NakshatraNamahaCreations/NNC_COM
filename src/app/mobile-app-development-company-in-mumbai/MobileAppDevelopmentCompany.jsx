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
    ui_uxdesign: "/media/ourwork/vijayhome.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG_VijayHomeLogo.png",
    title: "Vijaya Home Services",
    description:
      "This was created specifically keeping the client’s requirements. We stood up to their expectations.",
    link: "https://play.google.com/store/apps/details?id=com.vhs1&pcampaignid=web_share",
  },
  {
    ui_uxdesign: "/media/ourwork/cdn.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG-06.png",
    title: "CND Play",
    description:
      "CND PLAY is an emerging streaming platform dedicated to providing a vast library of movies to audiences worldwide.",
    link: "https://play.google.com/store/apps/details?id=com.clockndail.clockndail&hl=en_IN",
  },
  {
    ui_uxdesign: "/media/ourwork/proleverage.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG_Proleveragelogo.png",
    title: "Pro Leverage",
    description:
      "This was created specifically keeping the client’s requirements. We stood up to their expectations.",
    link: "https://play.google.com/store/apps/details?id=com.ecom_gyan.pro_leverage&pcampaignid=web_share",
  },
];

export default function MobileAppDevelopmentCompany() {


  return (
    <>
      <HeroBanner />
      <CoveredSection />
      <FeatureGrid />
      <IndustriesSlider />
      <CTASection />

      <br /> <br />
           <div className="container">
  <h2 className="text-center fw-bold mb-2">
          Our Portfolio
        </h2>
        <p className="text-center mb-5" style={{width:"70%", margin:"0 auto"}}>
    At Nakshatra Namaha Creations, a top-rated mobile app development company in Mumbai, we’ve delivered mobile solutions for startups and enterprises alike. Every project showcases our creativity, technical excellence, and business understanding.
        </p>
           </div>
    <Our_Service cardData={ourworkData} />
      <Trusted />
      <FeaturesGrid2 />
      {/* <ServeClients/> */}
      {/* <ServiceExcellence/> */}
      {/* <ClientSegments/> */}
      <ServeClients/>
      {/* <WhyChooseUs/> */}
       <h2 className="text-center fw-bold mb-2">
          What Our Clients Say
        </h2>
      <TestimonialsCarousel/>
      <FaqSection/>
 
    </>
  );
}
