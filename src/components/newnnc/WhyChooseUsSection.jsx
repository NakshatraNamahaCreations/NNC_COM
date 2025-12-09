// src/components/WhyChooseUsSection.jsx
import React from "react";
import {
  AiFillAndroid,
  AiFillNotification,
} from "react-icons/ai";
import { FaFileCode } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { LuPalette } from "react-icons/lu";


import "@/styles/WhyChooseUsSection.css";

const BENEFITS = [
  {
    icon: AiFillAndroid,
    colorClass: "icon-green",
    title: "Mobile App Development",
    link: "/mobile-app-development-company-in-bangalore",
    subTitle:
      "We specialize in Mobile App Development, designing and developing user-friendly mobile applications that work seamlessly across platforms.",
  },
  {
    icon: FaFileCode,
    colorClass: "icon-blue",
    title: "Website Designing",
    link: "/website-development-company-in-bangalore",
    subTitle:
      "We specialize in Website Development, creating seamless, high-performing, and visually engaging websites that enhance user experience.",
  },
  {
    icon: AiFillNotification,
    colorClass: "icon-yellow",
    title: "Digital Marketing",
    link: "/digital-marketing-agency-in-bangalore",
    subTitle:
      "We specialize in Digital Marketing, helping businesses grow their online presence through strategic campaigns, SEO, and social media.",
  },
  {
    icon: BsCartCheckFill,
    colorClass: "icon-pink",
    title: "2D Animation",
    link: "/2d-animation-studio-in-bangalore",
    subTitle:
      "We specialize in 2D Animation, bringing stories to life with engaging visuals and smooth motion.",
  },
  {
    icon: MdRocketLaunch,
    colorClass: "icon-purple",
    title: "Corporate Video Production",
    link: "/corporate-video-production-company-in-bangalore",
    subTitle:
      "We specialize in Corporate Video Production, creating compelling visuals that showcase your brand’s story, values, and achievements.",
  },
  {
    icon: LuPalette,
    colorClass: "icon-orange",
    title: "Graphic Design",
    link: "/graphic-design-company-in-bangalore",
    subTitle:
      "We craft impactful graphic designs—from logos to social media creatives—that bring your brand’s vision to life with clarity, creativity, and purpose.",
  },
  {
    icon: AiFillNotification,
    colorClass: "icon-yellow",
    title: "Digital Marketing",
    link: "/digital-marketing-agency-in-bangalore",
    subTitle:
      "We offer digital marketing services to boost brand visibility, generate leads, and drive online conversions.",
  },
  {
    icon: SlGraph,
    colorClass: "icon-teal",
    title: "B2B Marketing",
    link: "/b2b-marketing-agency-in-bangalore",
    subTitle:
      "We specialize in B2B marketing that drives qualified leads and builds strong business relationships through strategic campaigns, content, and data-driven insights.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="why-section py-5">
        <h2 className="text-center" style={{color:"#fff", marginBottom:"30px"}}>GRAB OUR SERVICES</h2>
      <div className="container">
        <div className="row g-4">
          {BENEFITS.map((item, index) => {
            const Icon = item.icon; // 👈 get the component

            return (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                {/* use item.link, not item.href */}
                <a href={item.link} className="why-card-link">
                  <div className="why-card h-100">
                    <div className="why-icon-circle mb-4">
                      {/* render icon with color class */}
                      {Icon && (
                        <Icon
                          size={39}
                          className={`why-icon ${item.colorClass || ""}`}
                        />
                      )}
                    </div>
                    <h3 className="why-title">{item.title}</h3>
                    {/* use subTitle, not text */}
                    <p className="why-text">{item.subTitle}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
