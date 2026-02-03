"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";

const reviews = [
  {
    name: "Rohit Malhotra",
    company: "FinTech Startup, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We worked with Nakshatra Namaha Creations as mobile app developers in Mumbai, and the experience was excellent. Their team understood our business needs clearly and delivered a secure, scalable mobile application with great performance and usability.",
  },
  {
    name: "Ananya Joshi",
    company: "Ecommerce Brand, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations handled our mobile app development project with complete professionalism. From planning to app store launch, everything was well managed. If you’re looking for reliable mobile app developers in Mumbai, they are a great choice.",
  },
  {
    name: "Vikram Rao",
    company: "Logistics & Supply Chain Company, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Our mobile app was delivered on time and met all our operational requirements. The team focused on performance, real-time features, and stability. Their expertise as mobile app developers in Mumbai is clearly reflected in the final product.",
  },
  {
    name: "Sneha Iyer",
    company: "Healthcare Services Provider, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We needed a secure and easy-to-use mobile app for appointment management, and Nakshatra Namaha Creations delivered exactly that. The app works smoothly across devices, and their post-launch support has been very responsive.",
  },
  {
    name: "Arjun Mehta",
    company: "Real Estate Firm, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The mobile app developed for our real estate business helped streamline lead management and property listings. The team was transparent, communicative, and professional throughout the project.",
  },
  {
    name: "Meera Kulkarni",
    company: "Fitness & Wellness Startup, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Choosing Nakshatra Namaha Creations as our mobile app developers in Mumbai was the right decision. They delivered a user-friendly fitness app with smooth performance and a clean interface. Highly recommended.",
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
