"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";

const reviews = [
  {
    name: "Rahul Mehta",
    company: "Mehta Construction Group",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations did a great job producing our corporate video. From understanding our business goals to executing the shoot and editing, everything was handled professionally. The final video helped us present our brand clearly to clients. Highly recommended corporate video makers in Mumbai.",
  },
  {
    name: "Ananya Joshi",
    company: "Aarogya Healthcare Solutions",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We partnered with Nakshatra Namaha Creations for a corporate video and the entire process was smooth and well-organized. The team understood our requirements clearly and delivered a video that explained our services effectively. Very reliable corporate video makers in Mumbai.",
  },
  {
    name: "Vikram Shah",
    company: "UrbanSquare Realty",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The corporate video created by Nakshatra Namaha Creations helped us showcase our real estate projects in a professional and engaging way. The visuals, storytelling, and editing quality exceeded our expectations. We are extremely satisfied with the outcome.",
  },
  {
    name: "Priya Menon",
    company: "Menon Business Consulting",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Our experience with Nakshatra Namaha Creations was excellent. They produced a corporate video that clearly communicated our consulting services and brand values. The team was responsive, creative, and easy to collaborate with.",
  },
  {
    name: "Sandeep Verma",
    company: "NextWave IT Services",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We approached Nakshatra Namaha Creations for a corporate video and were impressed with their structured production process and attention to detail. The final video looked polished, professional, and aligned perfectly with our brand identity.",
  },
  {
    name: "Kavya Rao",
    company: "Rao Foods & Hospitality",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The team at Nakshatra Namaha Creations created a corporate video that captured our brand story beautifully. Their professionalism, timely delivery, and clear communication made the entire experience smooth and stress-free.",
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
