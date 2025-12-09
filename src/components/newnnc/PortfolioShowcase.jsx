"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/styles/PortfolioShowcase.css";

const portfolioItems = [
  {
    id: "001",
    tag: "Web Development",
    title: "Fraud-Detection Tool",
    text: "Clean and modern financial services website design for TVS Credit.",
    image: "/media/ourwork/image1.png",
  },
  {
    id: "002",
    tag: "UI/UX Design",
    title: "AI Healthcare Assistant",
    text: "Clean and modern financial services website design for TVS Credit.",
    image: "/media/ourwork/image2.png",
  },
  {
    id: "003",
    tag: "Branding",
    title: "Dryfruit Bharat",
     text: "Clean and modern financial services website design for TVS Credit.",
    image: "/media/ourwork/image3.png",
  },
  {
    id: "004",
    tag: "Branding",
    title: "TVS Credit",
    text: "Clean and modern financial services website design for TVS Credit.",
    image: "/media/ourwork/image4.png",
  },
];

const PortfolioShowcase = () => {
  return (
    <section className="portfolio-section">
      <div className="container-fluid">
        <div className="portfolio-showcase__inner">
          {/* Heading */}
          <div className="portfolio-showcase__title-box">
            <p className="portfolio-showcase__badge">~ Selected work ~</p>
            <h2 className="portfolio-showcase__title">Our Work</h2>
            <p className="portfolio-showcase__subtitle">
              Real outcomes through{" "}
              <span className="portfolio-showcase__highlight">
                mobile apps and websites
              </span>
            </p>
          </div>

          {/* Slider */}
          <div className="portfolio-showcase__carousel">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={false}
              loop
              speed={900}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".portfolio-showcase__arrow--next",
                prevEl: ".portfolio-showcase__arrow--prev",
              }}
             pagination={{
  el: ".portfolio-showcase__pagination",
  clickable: true,
  horizontalClass: "portfolio-showcase__pagination", 
  bulletClass: "swiper-pagination-bullet",
  bulletActiveClass: "swiper-pagination-bullet-active",
}}

              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {portfolioItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="portfolio-showcase__item">
                    <div className="portfolio-showcase__image">
                      <img src={item.image} alt={item.title} />
                    </div>

                    <div className="portfolio-showcase__content">
                      <div className="portfolio-showcase__tags">
                        <span className="portfolio-showcase__tag portfolio-showcase__tag--primary">
                          {item.tag}
                        </span>
                      </div>
                      <div className="portfolio-showcase__number">
                        {item.id}
                      </div>
                      <h3 className="portfolio-showcase__item-title">
                        {item.title}
                      </h3>
                      <p className="portfolio-showcase__item-text">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* arrows + dots */}
            <div className="portfolio-showcase__navigation">
              <div className="portfolio-showcase__arrows">
               <button className="portfolio-showcase__arrow portfolio-showcase__arrow--prev">
  <FaChevronLeft size={18} />
</button>

<div className="portfolio-showcase__pagination" />

<button className="portfolio-showcase__arrow portfolio-showcase__arrow--next">
  <FaChevronRight size={18} />
</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
