"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "@/styles/PremiumTestimonials.css";


const reviews = [
  {
    name: "Make My documents",
    company: "Make My documents",
    googleLogo: "/media/icons/google.png", 
    rating: 5,
    text: "My experience with NNC was fantastic! The team was professional, patient, and attentive to our needs from start to finish. They delivered a website that exceeded our expectations, perfectly capturing our vision, A special thanks to Dhanlakshmi, Harish, Anjana, and the entire team for their dedication and attention to detail. Their seamless approach made the entire process smooth and hassle-free. Highly recommended!!!",
  },
  {
    name: "Ranjani Sivaraj",
    company: "Ranjani Sivaraj",
     googleLogo: "/media/icons/google.png", 
    rating: 5,
    text: "I had a great experience working with Nakshatra Namaha Creations on developing my website. They were professional, responsive and ensured the website was designed exactly as I envisioned. The final result looks clean, functional and user-friendly. Looking forward to continuing with their digital marketing services next!",
  },
  {
    name: "Patil Sandeep",
    company: "Patil Sandeep",
     googleLogo: "/media/icons/google.png", 
    rating: 5,
     text: "Good service we got from the Nakshatra website creations ,it was great moments we had with Mr, Harish ... We had started the new business at JP Nagar. To improve the business and marketing activities we got best support from Nakshatra website creations team.... I really suggest and recommend others to connect with Nakshatra website creations team to develop websites and manage online activities. Staff and Owner are very helpful and kind people...",
  },
  {
    name: "Chaandini Srinivas",
    company: "Chaandini Srinivas",
     googleLogo: "/media/icons/google.png", 
    rating: 5,
     text: "Mr. HARISH is excellent in understanding client requirement and quick response... Highly appreciated.. A place where we can fulfill all your requirements & they give a right base for our ideas. The best support team, they guide to improve our ideas too and they give chance to prove their talents",
  },
  {
    name: "Sudhakar S",
    company: "Sudhakar S",
     googleLogo: "/media/icons/google.png", 
    rating: 5,
     text: "We are absolutely thrilled with our new website developed by Nakshatra Namaha! Their design perfectly captured our brand aesthetic while creating a user-friendly experience. The team was incredibly responsive to our feedback, exceeding expectations with their professionalism and attention to detail throughout the process. We highly recommend them for top-notch website development solutions.",
  },
  {
    name: "Raju Hegde",
    company: "Raju Hegde",
     googleLogo: "/media/icons/google.png", 
    rating: 5,
     text: "We had a great experience working with Nakshatra on website development project. The team was very cooperative and patient, taking the time to fully understand our requirements and translating them beautifully into well-designed webpages. Their professionalism, attention to detail, and commitment to quality made the entire process smooth and satisfying. Overall, it’s been wonderful working with Nakshatra, and we look forward to continuing their support in the coming days. Highly recommended!",
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
          <h2 className="tr-title">What Our  Clients Say</h2>
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
