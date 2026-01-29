"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";

const reviews = [
  {
    name: "Make My Documents",
    company: "Make My Documents",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Our experience with Nakshatra Namaha Creations for React JS development was excellent. The team understood our requirements clearly and delivered a fast, scalable React application with a clean UI. Special thanks to the entire team for their structured approach and attention to performance. Highly recommended React JS development company in Mumbai.",
  },
  {
    name: "Ranjani Sivaraj",
    company: "Ranjani Sivaraj",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations did a fantastic job building our React JS frontend. The application is smooth, responsive, and easy to manage. Their team was very responsive and ensured every detail was handled professionally. Great experience working with their React developers in Mumbai.",
  },
  {
    name: "Patil Sandeep",
    company: "Patil Sandeep",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We partnered with Nakshatra Namaha Creations for a React JS-based web application, and the results were impressive. The performance, UI flow, and overall structure exceeded our expectations. The team provided clear communication and delivered everything on time.",
  },
  {
    name: "Chaandini Srinivas",
    company: "Chaandini Srinivas",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The React JS development support from Nakshatra Namaha Creations was outstanding. They understood our business idea quickly and transformed it into a well-structured, scalable React application. Excellent technical knowledge and reliable execution.",
  },
  {
    name: "Sudhakar S",
    company: "Sudhakar S",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We are extremely happy with the React JS application developed by Nakshatra Namaha Creations. The UI is clean, fast, and user-friendly. Their focus on performance optimization and scalability really stood out. Highly recommended for React JS development in Mumbai.",
  },
  {
    name: "Raju Hegde",
    company: "Raju Hegde",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Working with Nakshatra Namaha Creations on our React JS project was a smooth experience. The team was patient, technically strong, and committed to quality. They delivered a robust React frontend that aligns perfectly with our business needs.",
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
          <h2 className="tr-title">What Our React JS Clients Say</h2>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="tr-arrow-icon">
                <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" />
              </svg>
            </button>
            <button
              type="button"
              className="tr-arrow-btn"
              aria-label="Next reviews"
              onClick={goNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="tr-arrow-icon">
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
