"use client";

import Image from "next/image";
import "@/styles/HeroCarousel.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function HeroStatic() {
  const slide = {
    image: "/media/websiteBengaluru/slider.avif",
    alt: "Best Website Development Company in Bangalore",
    title: "Best Website Development Company in Bangalore",
    desc: "Creating modern, responsive, and high-performing websites that are built to help your brand grow. Our in-house team ensures your website is fast, mobile-friendly, and SEO optimized so your business gets seen by the right customers.",
  };

  return (
    <div className="hero-carousel-wrapper">

      {/* STATIC BACKGROUND IMAGE */}
      <div className="carousel-banner-slide">
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          sizes="100vw"
          priority
          fetchPriority="high"
          loading="eager"
          className="carousel-banner-image"
          quality={40}
        />

        {/* Black Overlay */}
        <div className="black-overlay" />

        {/* Content */}
        <div className="carousel-caption-left">
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            {slide.title}
          </h2>

          <p>{slide.desc}</p>

          <div className="carousal-buttons">
            <a href="tel:+919900566466" className="btn call-btn">
              <span>Call Now</span>
              <FaPhoneAlt className="bounce-icon" style={{ marginLeft: "8px" }} />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-explore">SCROLL TO EXPLORE</div>
    </div>
  );
}
