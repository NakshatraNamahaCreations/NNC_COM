"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";

const reviews = [
  {
    name: "Rohit Malhotra",
    company: "Mumbai Retail Brand",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We partnered with Nakshatra Namaha Creations for paid marketing services in Mumbai, and the results exceeded our expectations. Their Google Ads and remarketing campaigns generated high-quality leads and significantly improved our return on ad spend.",
  },
  {
    name: "Anjali Mehra",
    company: "Lifestyle Brand – Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations has been an outstanding paid marketing partner for our brand. Their expertise in Google Ads and social media advertising helped us scale campaigns efficiently while maintaining strong ROI.",
  },
  {
    name: "Vikram Joshi",
    company: "Logistics & Supply Chain – Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Our paid lead generation campaigns were executed with precision and delivered measurable results. The team focused on conversion tracking, budget optimization, and performance improvement throughout the campaign lifecycle.",
  },
  {
    name: "Sneha Iyer",
    company: "Healthcare Products – Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We needed a partner who could manage compliance-sensitive paid advertising, and Nakshatra Namaha Creations delivered exactly that. Their paid marketing strategies helped us consistently reach the right audience without wasting ad spend.",
  },
  {
    name: "Prashant Kulkarni",
    company: "Real Estate Services – Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The paid marketing campaigns helped us generate quality property inquiries and reduce cost per lead. The team was transparent, responsive, and proactive in optimizing our ads for better performance.",
  },
  {
    name: "Meera Desai",
    company: "Fashion & Lifestyle Brand",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Choosing Nakshatra Namaha Creations for paid marketing services in Mumbai was a smart decision. Their Meta Ads and performance campaigns helped us increase sales, expand reach, and scale profitably.",
  },
];


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
