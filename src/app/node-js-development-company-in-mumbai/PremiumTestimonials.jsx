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
    text: "Our experience with Nakshatra Namaha Creations for Node JS development was excellent. The team clearly understood our backend requirements and delivered a fast, scalable Node JS solution with clean architecture. Their structured approach and focus on performance made a big difference. Highly recommended Node JS development company in Mumbai.",
  },
  {
    name: "Ranjani Sivaraj",
    company: "Ranjani Sivaraj",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations did a great job building our Node JS backend. The APIs are secure, well-structured, and easy to scale. Their team was responsive and handled every technical detail professionally. A reliable Node JS development team in Mumbai.",
  },
  {
    name: "Patil Sandeep",
    company: "Patil Sandeep",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We partnered with Nakshatra Namaha Creations for a Node JS-based backend system, and the results exceeded expectations. The performance, stability, and system architecture were impressive. The team communicated clearly and delivered on time.",
  },
  {
    name: "Chaandini Srinivas",
    company: "Chaandini Srinivas",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The Node JS development support from Nakshatra Namaha Creations was outstanding. They quickly understood our backend needs and delivered a scalable Node JS solution that supports real-time operations. Strong technical expertise and reliable execution.",
  },
  {
    name: "Sudhakar S",
    company: "Sudhakar S",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We are extremely satisfied with the Node JS application developed by Nakshatra Namaha Creations. The backend is fast, secure, and capable of handling high traffic. Their focus on scalability and performance optimization really stood out.",
  },
  {
    name: "Raju Hegde",
    company: "Raju Hegde",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Working with Nakshatra Namaha Creations on our Node JS project was a smooth experience. The team was patient, technically strong, and committed to quality. They delivered a robust backend system that aligns perfectly with our business needs.",
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
