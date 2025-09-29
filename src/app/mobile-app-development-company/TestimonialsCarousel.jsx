"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "../../styles/TestimonialsCarousel.module.css";

const ITEMS = [
  {
    quote:
      "We were looking for the best mobile app development company, and partnering with this team was the best decision. They understood our requirements and delivered a flawless product.",
    name: "Mr. Ashish Gopal Saxena",
    role: "Chief Technology Officer at UGRO Capital Ltd",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "As a growing business, we needed a mobile app development company that could handle complex integrations. They exceeded our expectations.",
    name: "Mr. Suraj Sarda",
    role: "Chief Accounts & Finance Officer at Astute Group",
    avatar: "/media/icons/man (6).png",
  },
    {
    quote:
      "Working with Nakshatra Namaha Creations gave us confidence that we had the right mobile app development company by our side. Their expertise and professionalism stood out”",
    name: "Sri Devi",
    role: "Head of Operations",
    avatar: "/media/icons/woman (5).png",
  },
  {
    quote:
      "Nakshatra Namaha Creations proved to be a top mobile app development company. Their team guided us from concept to launch, and the results were beyond impressive.",
    name: "Mukhtar Ansari",
    role: "VP — Information Technologies & Infrastructure, Rebel Foods",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "Finding a trusted mobile app development company was critical for our startup. This team delivered not only a great app but also constant support throughout the journey.”",
    name: "Priyanka Sharma",
    role: "Head of Operations",
    avatar: "/media/icons/woman (5).png",
  },
    {
    quote:
      "Working with Nakshatra Namaha Creations gave us confidence that we had the right mobile app development company by our side. Their expertise and professionalism stood out”",
    name: "Ananya Deshpande",
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
