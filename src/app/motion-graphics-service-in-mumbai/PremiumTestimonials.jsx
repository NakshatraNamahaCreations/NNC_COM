"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";
const reviews = [
  {
    name: "Rohan Malhotra",
    company: "Malhotra Growth Solutions",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations is a highly reliable Motion Graphic Service In Mumbai. Their team converted our ideas into engaging motion visuals that clearly communicated our message and improved brand recall.",
  },
  {
    name: "Anjali Desai",
    company: "Desai Digital Studio",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We partnered with Nakshatra Namaha Creations as our Motion Graphic Service In Mumbai, and the experience was seamless from start to finish. Their animation quality and timely delivery really stood out.",
  },
  {
    name: "Vikram Kulkarni",
    company: "Kulkarni Realty Ventures",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The motion creatives developed by Nakshatra Namaha Creations helped us present our real estate projects more professionally. Their attention to detail and animation flow set them apart from other Motion Graphic Service In Mumbai providers.",
  },
  {
    name: "Priya Nair",
    company: "Nair Healthcare Solutions",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations delivered healthcare motion visuals that were clear, engaging, and easy to understand. The team was responsive, organized, and supportive throughout the project.",
  },
  {
    name: "Arjun Mehra",
    company: "Mehra FinTech Labs",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We chose Nakshatra Namaha Creations as our Motion Graphic Service In Mumbai and were impressed by their structured workflow and creative execution. The final motion assets aligned perfectly with our brand identity.",
  },
  {
    name: "Shreya Banerjee",
    company: "Banerjee EdTech Innovations",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Our project was handled with great attention to detail by Nakshatra Namaha Creations. Their experience in creating educational and training-related motion graphics was clearly reflected in the quality of the final output.",
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
