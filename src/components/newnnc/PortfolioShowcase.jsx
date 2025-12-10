"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "@/styles/PortfolioShowcase.css";

// Dummy data – replace with your own
const projects = [
  {
    id: 1,
    title: "Indam Seeds – Hybrid Seeds & Inputs",
    image: "/media/ourwork/image1.png",
    link: "https://example.com/indam",
    tags: ["Website Design"],
  },
  {
    id: 2,
    title: "Narayan Bali Pooja in Srirangpatna",
     image: "/media/ourwork/image2.png",
    link: "https://example.com/narayan-bali",
    tags: ["Website Design"],
  },
  {
    id: 3,
    title: "Sample Project 3 – City Name",
    image: "/media/ourwork/image3.png",
    link: "https://example.com/sample-3",
    tags: ["Website Design"],
  },
  {
    id: 4,
    title: "Sample Project 4 – City Name",
     image: "/media/ourwork/image4.png",
    link: "https://example.com/sample-4",
    tags: ["Business Blaze"],
  },
];

// Custom arrows using React Icons
function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`ps-arrow ps-arrow-prev ${className}`}
      onClick={onClick}
    >
      <FiArrowLeft className="ps-arrow-icon" />
    </button>
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`ps-arrow ps-arrow-next ${className}`}
      onClick={onClick}
    >
      <FiArrowRight className="ps-arrow-icon" />
    </button>
  );
}

export default function PortfolioShowcase() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="ps-section">
      <Container>
        {/* Heading */}
        <div className="ps-heading">
          {/* <h6 className="ps-sub">Projects</h6> */}
          <h2 className="ps-title">Our Work</h2>
        </div>

        {/* Slider */}
        <Slider {...settings} className="ps-slider">
          {projects.map((p) => (
            <div key={p.id} className="ps-slide">
              <div className="ps-card">
                {/* IMAGE */}
                <div className="ps-thumb">
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="ps-thumb-img"
                    />
                  </a>
                </div>

                {/* WHITE CARD OVER IMAGE */}
                <div className="ps-info">
                  <h5 className="ps-info-title">{p.title}</h5>
                  <p className="ps-info-tags">{p.tags.join(" / ")}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}
