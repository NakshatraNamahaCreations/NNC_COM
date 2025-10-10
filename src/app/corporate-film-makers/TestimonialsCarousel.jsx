"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "../../styles/TestimonialsCarousel.module.css";

const ITEMS = [
  {
    quote:
      "We partnered with Nakshatra Namaha Creations for our annual brand film, and their team of corporate film makers exceeded expectations",
    name: "Mr. Akash G",
    role: "Chief Technology Officer at UGRO Capital Ltd",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "The professionalism and creativity of these corporate film makers helped us achieve a powerful launch video for our new product",
    name: "Mr. Bharath raj",
    role: "Chief Accounts & Finance Officer at Astute Group",
    avatar: "/media/icons/man (6).png",
  },
    {
    quote:
      "Their corporate ad shoot was well-planned, efficient, and the final film was exceptional.",
    name: "Sri Harini Devi",
    role: "Head of Operations",
    avatar: "/media/icons/woman (5).png",
  },
  {
    quote:
      "The training films produced by Nakshatra Namaha Creations made onboarding for our employees simpler and more engaging",
    name: "Nataraj G N",
    role: "VP — Information Technologies & Infrastructure, Rebel Foods",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "As experienced corporate film makers, they knew how to capture our company culture authentically”",
    name: "Priyanka Sharma",
    role: "Head of Operations",
    avatar: "/media/icons/woman (5).png",
  },
    {
    quote:
      "The testimonial videos created by Nakshatra Namaha Creations helped us build trust and credibility among new clients”",
    name: "Sofia M N",
    role: "Head of Operations",
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
