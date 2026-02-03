"use client";
import { useEffect } from "react";

import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudyLayout from "./CaseStudyLayout";
import Breadcrumbs from "@/components/BreadCrumbs";

export default function AvyakthRoofing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Case Studies",
      link: "/case-studies",
    },
    {
      name: "Home Services",
      link: "/case-studies/home-services",
    },
    {
      name: "Avyakth Roofing Solutions",
      link: "/case-studies/home-services/avyakthroofing",
    },
  ];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbPaths} />

      <CaseStudyHeader
        title="Avyakth Roofing Solutions – Premium Roofing Systems for Residential & Commercial Projects"
        date="Roofing & Building Materials Case Study"
        industry="Roofing Solutions & Construction Materials"
        platforms="Product Consulting, Site Survey & Professional Installation"
        services="Roofing Shingles, Stone-Coated Metal Roofs, Fiber Cement Boards, Ready Wall Partitions & Rainwater Gutters"
      />

      <CaseStudyLayout />
    </div>
  );
}
