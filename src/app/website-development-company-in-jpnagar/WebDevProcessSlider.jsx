"use client";
import React from "react";
import Slider from "react-slick";
import styles from "@/styles/ServicesSlider.module.css";

const services = [
  {
    title: "Kick-Off Meeting",
    desc: "Nakshatra Namaha Creations’s Web Development Services in Bangalore begin with a detailed Kick-Off Meeting to align goals and vision. Choose the Best Web Development Company in Bangalore for top results.",
    img: "/media/gif/webdevelop1.jpg",
  },
  {
    title: "Structure Planning (UX)",
    desc: "Nakshatra Namaha Creations offers Web Development Services in Bangalore, focusing on Structure Planning (UX). As a top Web Designing Company and Website Development Agency in Bangalore, we ensure seamless user experiences.",
    img: "/media/gif/uiuxdesign.jpg",
  },
  {
    title: "Design (UI)",
    desc: "Nakshatra Namaha Creations offers expert Web Development Services in Bangalore with UI Design, making us the Best Web Development Company and top Web Designing Company in Bangalore for custom websites.",
    img: "/media/gif/ui1.jpg",
  },
  {
    title: "Development",
    desc: "Nakshatra Namaha Creations offers top-notch Web Development Services in Bangalore. As a leading Website Development Agency in Bangalore, we deliver responsive designs backed by the Best Web Development Company in Bangalore.",
    img: "/media/gif/nncbanner1.jpg",
  },
  {
    title: "Content Creation",
    desc: "Nakshatra Namaha Creations offers Web Development Services in Bangalore with engaging content and design, making us the Best Web Development Company and a trusted Website Development Agency in Bangalore.",
    img: "/media/gif/content.jpg",
  },
  {
    title: "SEO Implementations",
    desc: "As a top Web Designing Company in Bangalore and a leading Website Development Agency in Bangalore, we implement SEO strategies to boost your site’s visibility, making us the Best Web Development Company in Bangalore.",
    img: "/media/gif/seo.jpg",
  },
  {
    title: "Launch & Deployment",
    desc: "Nakshatra Namaha Creations offers expert web development services in Bangalore, ensuring smooth website launch and deployment. As a leading web designing and best web development company, we provide end-to-end solutions for a successful launch.",
    img: "/media/gif/hosting1.jpg",
  },
  {
    title: "Performance Monitoring & Maintenance",
    desc: "Nakshatra Namaha Creations offers Web Development Services in Bangalore, including performance monitoring and maintenance, ensuring smooth, secure, and top-performing websites.",
    img: "/media/gif/monitor1.jpg",
  },
];

export default function WebDevProcessSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false, 
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>
        OUR WEB DEVELOPMENT SERVICES IN JP NAGAR
      </h2>
      <Slider {...settings}>
        {services.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardInner}>
              <img src={item.img} alt={item.title} className={styles.img} />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
