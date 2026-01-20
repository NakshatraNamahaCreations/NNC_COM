"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "@/styles/TestimonialsCarousel.module.css";

const clientReviews = [
  {
    text:
      "Working with Nakshatra Namaha Creations — the best Website Development Company in Indiranagar — was effortless. They delivered exactly what we needed",
    name: "Anil Kumar",
    role: "Co-Founder, RaAnAr Agro Foods",
    avatar: "/media/gif/man (1).png",
  },
  {
    text:
      "Our new WordPress site performs beautifully. Outstanding results from this Website Development Company in Indiranagar",
    name: "Ritika Sharma",
    role: "Doctor, Dr Smilez",
    avatar: "/media/gif/woman (1).png",
  },
  {
    text:
      "The Node JS backend they built transformed our operations. Highly recommend Nakshatra Namaha Creations as a trusted Website Development Company in Indiranagar",
    name: "Manoj Patel",
    role: "CEO, Early Hearing Experts",
    avatar: "/media/gif/man (1).png",
  },
  {
    text:
      "Their CMS solutions made updating content so easy! Exceptional support from a reliable Website Development Company in Indiranagar",
    name: "Sneha Reddy",
    role: "EVP, TVS Sundaram Motors",
    
     avatar: "/media/gif/woman (1).png",
  },
];

// group into slides (2 per slide desktop, 1 mobile via CSS)
const PER_SLIDE = 2;
const SLIDES = [];
for (let i = 0; i < clientReviews.length; i += PER_SLIDE) {
  SLIDES.push(clientReviews.slice(i, i + PER_SLIDE));
}

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const hoverRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!hoverRef.current) {
        setIndex((i) => (i + 1) % SLIDES.length);
      }
    }, 4500);

    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => setIndex((i + SLIDES.length) % SLIDES.length);

  return (
    <section className={s.section} aria-label="Client Testimonials">
      <div className={s.shell}>
        <h2 className={s.heading}>SEE WHAT OUR CLIENTS HAVE TO SAY</h2>

        <div
          className={s.panel}
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
        >
          {/* arrows */}
          <button className={`${s.chev} ${s.left}`} onClick={() => goTo(index - 1)}>
            ‹
          </button>
          <button className={`${s.chev} ${s.right}`} onClick={() => goTo(index + 1)}>
            ›
          </button>

          <div className={s.viewport}>
            <div
              className={s.track}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((group, gi) => (
                <div className={s.slide} key={gi}>
                  {group.map((item, i) => (
                    <article className={s.card} key={i}>
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={60}
                        height={60}
                        className={s.avatar}
                      />

                      <blockquote className={s.quote}>
                        ❝ {item.text} ❞
                      </blockquote>

                      <footer className={s.footer}>
                        <strong className={s.name}>{item.name}</strong>
                     </footer>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* dots */}
        <div className={s.dots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`${s.dot} ${index === i ? s.active : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
