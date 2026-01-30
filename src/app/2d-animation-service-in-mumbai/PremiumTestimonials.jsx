"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";

const reviews = [
  {
    name: "Siddharth Malhotra",
    company: "Malhotra Business Solutions",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations provides one of the most dependable 2D animation services in Mumbai. Their team converted our complex business concepts into clear and engaging 2D animated videos that were easy for our clients to understand.",
  },
  {
    name: "Ananya Rao",
    company: "Rao Digital Marketing",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We partnered with Nakshatra Namaha Creations for a 2D animation service in Mumbai, and the experience was seamless. From concept planning to final animation delivery, everything was handled professionally and on time.",
  },
  {
    name: "Vivek Chavan",
    company: "Chavan Realty Group",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The 2D explainer video created by Nakshatra Namaha Creations helped us present our real estate projects clearly. Their storytelling approach and animation quality stand out among 2D animation service providers in Mumbai.",
  },
  {
    name: "Meera Kulkarni",
    company: "Kulkarni Healthcare Services",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations delivered a 2D animated video that explained our healthcare services in a simple and engaging way. The team was responsive, organized, and attentive throughout the project.",
  },
  {
    name: "Rohan Mehta",
    company: "Mehta Fintech Solutions",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We chose Nakshatra Namaha Creations for their 2D animation service in Mumbai and were impressed by their structured workflow and creative execution. The final animation aligned perfectly with our brand messaging.",
  },
  {
    name: "Ishita Sen",
    company: "Sen EdTech Innovations",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Our 2D animation project was handled with great attention to detail by Nakshatra Namaha Creations. Their experience in creating educational 2D animations was clearly reflected in the clarity and quality of the final output.",
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
