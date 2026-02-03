"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";

const reviews = [
  {
    name: "Aarav Mehta",
    company: "FinTech Solutions, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Working with Nakshatra Namaha Creations as a software development company in Mumbai was an excellent experience. The team understood our requirements clearly and delivered a secure, scalable software solution that fit our business needs perfectly. Their structured approach and clear communication made the entire process smooth.",
  },
  {
    name: "Neha Kulkarni",
    company: "Healthcare Services, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We partnered with Nakshatra Namaha Creations for custom software development, and the results exceeded expectations. The solution was reliable, easy to use, and well-aligned with our operational workflows. Highly recommend them as a dependable software development company in Mumbai.",
  },
  {
    name: "Rohit Deshpande",
    company: "Logistics & Supply Chain Firm",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The software developed by Nakshatra Namaha Creations helped us automate key processes and improve efficiency. Their team was professional, responsive, and focused on delivering long-term value. A great choice for businesses looking for software development in Mumbai.",
  },
  {
    name: "Pallavi Nair",
    company: "Education & Training Institute",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "From requirement analysis to final deployment, the team handled our software project with great attention to detail. The system is stable, user-friendly, and scalable. We appreciate their commitment and recommend them as a trusted software development company in Mumbai.",
  },
  {
    name: "Suresh Patil",
    company: "Real Estate Management Firm",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations delivered a custom software solution that streamlined our internal operations and reporting. Their transparency, technical expertise, and post-launch support stood out throughout the project.",
  },
  {
    name: "Kavya Rao",
    company: "Retail & Ecommerce Business",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Choosing Nakshatra Namaha Creations as our software development partner was the right decision. The team delivered a scalable and secure solution that supports our business growth. We highly recommend them for software development services in Mumbai.",
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
