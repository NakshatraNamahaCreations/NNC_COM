"use client";

import CoveredSection from "./CoveredSection";
import CTASection from "./CTASection";
import FeatureGrid from "./FeatureGrid";
import HeroBanner from "./HeroBanner";
import IndustriesSlider from "./IndustriesSlider";
import Trusted from "./Trusted";
// import ServeClients from "./ServeClients";
import WhyChooseUs from "./WhyChooseUs";
import FaqSection from "./FaqSection";
import CoveredSection1 from "./CoveredSection1";
import FeaturesGrid2 from "./FeaturesGrid2";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function TwoDAnimationPage() {
  return (
    <>
      <HeroBanner />
      <CoveredSection />
      <FeatureGrid />
      <IndustriesSlider />
      <CTASection />
      <Trusted />
      <CoveredSection1/>
      {/* <ServeClients /> */}
      <FeaturesGrid2/>
      <WhyChooseUs />
      <TestimonialsCarousel/>
      <FaqSection />
    </>
  );
}
