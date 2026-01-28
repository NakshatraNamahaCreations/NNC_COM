"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";

const reviews = [
  {
    name: "Amit Kulkarni",
    company: "Kulkarni Infra Projects",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations did an excellent job creating our corporate film. From understanding our business to executing the shoot and editing, everything was handled professionally. The final film helped us present our company more confidently to clients. Highly recommended corporate film makers in Mumbai.",
  },
  {
    name: "Neha Deshpande",
    company: "Vistara Healthcare Services",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We worked with Nakshatra Namaha Creations for a corporate film and the experience was smooth and well-organized. The team understood our requirements clearly and delivered a film that communicated our services effectively. Very reliable and professional film makers.",
  },
  {
    name: "Rohit Malhotra",
    company: "UrbanEdge Realty",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The corporate film created by Nakshatra Namaha Creations helped us showcase our real estate projects in a professional manner. The visuals, storytelling, and editing were impressive. We are very satisfied with the outcome.",
  },
  {
    name: "Sneha Iyer",
    company: "Iyer Consulting Group",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Our experience with Nakshatra Namaha Creations was excellent. They produced a corporate film that clearly communicated our consulting services and values. The team was responsive, creative, and easy to work with throughout the project.",
  },
  {
    name: "Karthik Reddy",
    company: "NextGen Tech Solutions",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We approached Nakshatra Namaha Creations for a corporate film and were impressed with their structured process and attention to detail. The final film looked professional and aligned well with our brand identity.",
  },
  {
    name: "Pooja Nair",
    company: "Nair Foods & Hospitality",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The team at Nakshatra Namaha Creations created a corporate film that perfectly captured our brand story. Their professionalism, timely delivery, and clear communication made the entire experience very positive.",
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
