"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "../../styles/TestimonialsCarousel.module.css";

const ITEMS = [
  {
    quote:
      "We partnered with this 2D animation studio in Mumbai for our corporate explainer video, and the outcome exceeded expectations. The animation quality and storytelling were absolutely brilliant.",
    name: "Ankit Mehta",
    role: "Marketing Manager, Brightwave Technologies",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "Our educational app needed animated tutorials, and this 2D animation studio in Mumbai delivered stunning visuals that kept students engaged throughout the lessons.",
    name: "Sneha Iyer",
    role: "Founder, EduMentor Learning Solutions",
    avatar: "/media/icons/woman (5).png",
  },
  {
    quote:
      "We were looking for a creative 2D animation studio in Mumbai for our product launch video. The team brought our concept to life with dynamic motion and captivating visuals.",
    name: "Rajesh Nair",
    role: "Brand Strategist, UrbanEdge Media",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "The professionalism and creativity of this Mumbai-based 2D animation studio truly impressed us. They understood our vision perfectly and delivered animations that elevated our campaign.",
    name: "Priyanka Sharma",
    role: "Marketing Head, Aesthetic Health Pvt. Ltd.",
    avatar: "/media/icons/woman (5).png",
  },
  {
    quote:
      "We collaborated with this 2D animation studio in Mumbai for a social media series, and the animations drove exceptional engagement. Highly recommended for brands seeking visual storytelling.",
    name: "Aman Verma",
    role: "Creative Director, Vibe Digital Studios",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "From storyboarding to final delivery, this 2D animation studio in Mumbai was a pleasure to work with. They delivered on time and maintained top-notch quality throughout.",
    name: "Nikita Rao",
    role: "Project Manager, FinSage Consulting",
    avatar: "/media/icons/woman (5).png",
  },
  {
    quote:
      "We chose this 2D animation studio in Mumbai for our brand animation video, and they completely transformed our vision into something impactful and memorable.",
    name: "Saurabh Kulkarni",
    role: "Head of Design, AdPro Communications",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "The team’s attention to detail and creative energy made our animation project stand out. Easily one of the best 2D animation studios in Mumbai we’ve worked with.",
    name: "Neha Jain",
    role: "Content Producer, StudioVibe",
    avatar: "/media/icons/woman (5).png",
  },
  {
    quote:
      "We approached this 2D animation studio in Mumbai for internal training videos, and they delivered polished, professional content that our employees found engaging and easy to understand.",
    name: "Vikram Singh",
    role: "HR & Learning Head, RapidEdge Solutions",
    avatar: "/media/icons/man (6).png",
  },
  {
    quote:
      "The creativity and responsiveness of this Mumbai-based 2D animation studio stood out. Their team handled revisions quickly and helped us create an animation that truly represents our brand.",
    name: "Deepa Menon",
    role: "Co-Founder, The Visual Edit",
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
