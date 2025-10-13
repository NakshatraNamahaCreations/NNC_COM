"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "../../styles/TestimonialsCarousel.module.css";

const ITEMS = [
 {
    quote:
      "Partnering with Nakshatra Namaha Creations, one of the top mobile app development companies in Mumbai, was the best choice for our business. Their attention to detail and technical expertise turned our vision into a reliable app.",
    name: "Mr. Rakesh Iyer",
    role: "Managing Director at Vionix Technologies",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "We wanted a custom app that could scale as our user base grew. The Mumbai-based development team delivered a seamless, high-performing mobile app with exceptional UX design.",
    name: "Ms. Neha Chatterjee",
    role: "Product Manager at UrbanVibe Retail Pvt Ltd",
    avatar: "/media/icons/woman (5).png",
  },
  {
    quote:
      "Their mobile app development services in Mumbai exceeded our expectations. From concept to deployment, the communication was transparent and the results were outstanding.",
    name: "Mr. Aditya Menon",
    role: "Founder & CEO at FinTribe Solutions",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "As a healthcare brand, we needed a secure and user-friendly mobile app. Nakshatra Namaha Creations delivered exactly that — a perfect blend of design, speed, and reliability.",
    name: "Dr. Kavita Shah",
    role: "Director at MedNova Diagnostics",
    avatar: "/media/icons/woman (5).png",
  },
  {
    quote:
      "Their Mumbai team made the app launch incredibly smooth. From UI/UX design to backend integration, everything was handled with precision and creativity.",
    name: "Mr. Rahul Verma",
    role: "Co-Founder at Zentro Logistics",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "We were searching for a mobile app development company in Mumbai that understood startup challenges. Nakshatra Namaha Creations provided strategic insights and built a robust, scalable app for our business.",
    name: "Ms. Aishwarya Patil",
    role: "Operations Head at FoodSpark Technologies",
    avatar: "/media/icons/woman (5).png",
  },
  
];

// group into slides of 2 (desktop), 1 (mobile via CSS)
const perSlide = 2;
const SLIDES = [];
for (let i = 0; i < ITEMS.length; i += perSlide) SLIDES.push(ITEMS.slice(i, i + perSlide));

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const hover = useRef(false);
  const timer = useRef(null);

  useEffect(() => {
    const start = () => {
      if (timer.current) clearInterval(timer.current);
      timer.current = setInterval(() => {
        if (!hover.current) setIdx((i) => (i + 1) % SLIDES.length);
      }, 4500);
    };
    start();
    return () => timer.current && clearInterval(timer.current);
  }, []);

  const go = (n) => setIdx((n + SLIDES.length) % SLIDES.length);

  return (
    <section className={s.section} aria-label="Client Testimonials">
      <div className={s.shell}>
        <div className={s.topbar} aria-hidden="true" />

        <div
          className={s.panel}
          onMouseEnter={() => (hover.current = true)}
          onMouseLeave={() => (hover.current = false)}
          aria-roledescription="carousel"
        >
          {/* chevrons inside panel */}
          <button className={`${s.chev} ${s.left}`} aria-label="Previous" onClick={() => go(idx - 1)} type="button">
            ‹
          </button>
          <button className={`${s.chev} ${s.right}`} aria-label="Next" onClick={() => go(idx + 1)} type="button">
            ›
          </button>

          <div className={s.viewport}>
            <div className={s.track} style={{ transform: `translateX(-${idx * 100}%)` }}>
              {SLIDES.map((group, gi) => (
                <div className={s.slide} key={gi}>
                  {group.map((t, i) => (
                    <article className={s.card} key={i}>
                      <div className={s.avatarWrap}>
                        <Image src={t.avatar || "/avatars/placeholder.jpg"} alt="" width={60} height={60} className={s.avatar} />
                      </div>

                      <div className={s.qrow}>
                        <span className={s.qopen} aria-hidden="true">❝</span>
                        <blockquote className={s.quote}>
                          <em>{t.quote}</em>
                        </blockquote>
                        <span className={s.qclose} aria-hidden="true">❞</span>
                      </div>

                      <footer className={s.footer}>
                        <strong className={s.name}>{t.name}</strong>
                        {/* <span className={s.role}>{t.role}</span> */}
                      </footer>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={s.dots} role="tablist" aria-label="Testimonials pagination">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={idx === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`${s.dot} ${idx === i ? s.active : ""}`}
              onClick={() => go(i)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
