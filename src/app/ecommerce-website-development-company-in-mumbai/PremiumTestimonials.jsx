"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";

const reviews = [
  {
    name: "Rohit Malhotra",
    company: "Mumbai Retail Startup",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We partnered with Nakshatra Namaha Creations for ecommerce website development in Mumbai, and the experience was excellent. Their team clearly understood our business goals and delivered a fast, secure, and scalable online store. The website performance and checkout flow exceeded our expectations.",
  },
  {
    name: "Anjali Mehra",
    company: "Ecommerce Brand – Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Nakshatra Namaha Creations did a fantastic job building our ecommerce website. From store planning to payment gateway integration and final launch, everything was handled professionally. If you are looking for a reliable ecommerce website development company in Mumbai, I highly recommend them.",
  },
  {
    name: "Vikram Joshi",
    company: "Logistics & Supply Chain – Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Our ecommerce platform was developed smoothly and delivered on time. The team focused strongly on performance, security, and order management workflows. Their expertise as an ecommerce website development company in Mumbai is clearly visible in the final result.",
  },
  {
    name: "Sneha Iyer",
    company: "Healthcare Products – Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "We needed a secure ecommerce website to sell healthcare products online, and Nakshatra Namaha Creations delivered exactly what we were looking for. The website works flawlessly across devices, and their post-launch support has been excellent.",
  },
  {
    name: "Prashant Kulkarni",
    company: "Real Estate Services, Mumbai",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "The ecommerce-style website developed for our real estate services helped us manage online inquiries and bookings effectively. The team was responsive, transparent, and professional throughout the project.",
  },
  {
    name: "Meera Desai",
    company: "Fashion & Lifestyle Brand",
    googleLogo: "/media/icons/google.png",
    rating: 5,
    text: "Working with Nakshatra Namaha Creations for ecommerce website development was a great decision. They delivered a clean, user-friendly online store with smooth navigation and fast loading speed. Highly recommended for ecommerce businesses in Mumbai.",
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
