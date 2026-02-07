"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";

const reviews = [
  {
    name: "Amit Deshpande",
    company: "Deshpande Software Technologies",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations is a highly reliable B2B marketing company in Mumbai. Their lead generation and LinkedIn marketing strategies helped us connect with the right decision-makers and significantly improve our sales pipeline.",
  },
  {
    name: "Neha Kapoor",
    company: "Kapoor Business Consulting",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We partnered with Nakshatra Namaha Creations as our B2B marketing company in Mumbai, and the results were excellent. Their structured approach to demand generation and reporting gave us clear visibility into campaign performance.",
  },
  {
    name: "Rohit Kulkarni",
    company: "Kulkarni Industrial Solutions",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The B2B marketing campaigns executed by Nakshatra Namaha Creations helped us generate high-quality leads for our manufacturing business. Their understanding of long sales cycles and enterprise buyers truly stands out.",
  },
  {
    name: "Sneha D'Souza",
    company: "D'Souza Healthcare Services",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "As a healthcare services provider, we needed a B2B marketing partner who understands compliance and lead quality. Nakshatra Namaha Creations delivered consistent results through SEO and performance-driven campaigns.",
  },
  {
    name: "Karan Bhatia",
    company: "Bhatia Fintech Solutions",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Choosing Nakshatra Namaha Creations as our B2B marketing company in Mumbai was a smart decision. Their account-based marketing and LinkedIn Ads helped us reach senior-level prospects efficiently.",
  },
  {
    name: "Lakshmi Iyer",
    company: "Iyer EdTech Innovations",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Our B2B lead generation improved significantly after working with Nakshatra Namaha Creations. Their content strategy and performance marketing approach helped us attract institutional and enterprise clients.",
  },
];




// helper: split array into chunks of 3 (each slide)
const chunkIntoThrees = (arr) => {
  const slides = [];
  for (let i = 0; i < arr.length; i += 3) {
    slides.push(arr.slice(i, i + 3));
  }
  return slides;
};

const PremiumTestimonials = () => {
  const slides = chunkIntoThrees(reviews);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = slides.length;

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // autoplay
  useEffect(() => {
    const id = setInterval(goNext, 9000);
    return () => clearInterval(id);
  }, [totalSlides]);

  return (
    <section className="tr-section">
      <Container>
        <div className="tr-heading text-center">
          <h2 className="tr-title">What our clients say</h2>
        </div>

        <div className="tr-slider-wrapper">
          {/* Track */}
          <div
            className="tr-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, sIndex) => (
              <div className="tr-slide" key={sIndex}>
                <div className="row g-4">
                  {slide.map((item, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                      <article className="tr-card">
                        <div className="tr-card-header">
                          <div>
                            <h3 className="tr-name">{item.name}</h3>
                            {/* <p className="tr-company">{item.company}</p> */}
                          <div className="tr-rating">
  {Array.from({ length: item.rating }).map((_, i) => (
    <FaStar key={i} className="tr-star" />
  ))}
</div>
                          </div>
                          {item.googleLogo && (
                            <img
                              src={item.googleLogo}
                              alt="Google review"
                              className="tr-google-logo"
                            />
                          )}
                        </div>

                        <p className="tr-text">{item.text}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="tr-controls">
            <button
              type="button"
              className="tr-arrow-btn"
              aria-label="Previous reviews"
              onClick={goPrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="tr-arrow-icon"
              >
                <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" />
              </svg>
            </button>
            <button
              type="button"
              className="tr-arrow-btn"
              aria-label="Next reviews"
              onClick={goNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="tr-arrow-icon"
              >
                <path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PremiumTestimonials;
