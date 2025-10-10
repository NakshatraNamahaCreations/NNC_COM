"use client";
import { useEffect } from 'react';

import CoveredSection from "./CoveredSection";
import CTASection from "./CTASection";
import FeatureGrid from "./FeatureGrid";
import FeaturesGrid2 from "./FeaturesGrid2";
import HeroBanner1 from "./HeroBanner1";
import IndustriesSlider from "./IndustriesSlider";
import Trusted from "./Trusted";
import styles from "../../styles/covered-section.module.css";
import ServeClients from "./ServeClients";

import WhyChooseUs from "./WhyChooseUs";
import FaqSection from './FaqSection';
import TestimonialsCarousel from './TestimonialsCarousel';



export default function CoporateVideoProd() {


  return (
    <>
      <HeroBanner1 />
      <CoveredSection />
      <FeatureGrid />
      <IndustriesSlider />
      <CTASection />

  

 <Trusted />
  
      <WhyChooseUs/>
         <h2 className="text-center fw-bold mb-2">
          What Our Clients Say
        </h2>
       <TestimonialsCarousel/>  
      <FaqSection/>
 
    </>
  );
}
