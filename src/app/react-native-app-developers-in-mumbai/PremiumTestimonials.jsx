"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";

const reviews = [
  {
    name: "Rahul Sharma",
    company: "FinTech Startup, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We chose Nakshatra Namaha Creations for React Native Mobile App Development in Mumbai, and the results were outstanding. The team delivered a fast, secure, and scalable mobile app that works smoothly on both Android and iOS.",
  },
  {
    name: "Sneha Kulkarni",
    company: "Ecommerce Brand – Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Our experience with Nakshatra Namaha Creations for React Native Mobile App Development in Mumbai was seamless. The app performance is excellent, and the single codebase approach helped us launch faster and reduce costs.",
  },
  {
    name: "Amit Verma",
    company: "Logistics Services, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The React Native mobile app developed for our logistics operations has improved efficiency significantly. Their expertise in React Native Mobile App Development in Mumbai is clearly visible in the app’s speed and reliability.",
  },
  {
    name: "Pooja Nair",
    company: "Healthcare Services – Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We needed a secure cross-platform healthcare app, and Nakshatra Namaha Creations delivered exactly what we wanted. The React Native app runs perfectly on Android and iOS, with excellent post-launch support.",
  },
  {
    name: "Sanjay Deshpande",
    company: "Real Estate Firm, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The React Native app built for our real estate business helped us manage leads and listings efficiently. The team was professional, transparent, and highly skilled throughout the project.",
  },
  {
    name: "Neha Patil",
    company: "Fitness & Wellness Startup",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Working with Nakshatra Namaha Creations for React Native Mobile App Development in Mumbai was a great decision. They delivered a high-performance fitness app with smooth UI and excellent cross-device compatibility.",
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
