"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "@/styles/TestimonialsCarousel.module.css";

const clientReviews = [
  {
    text:
      "We approached this Web Development Company in JP Nagar to create our online store. Clean, fast, easy to manage—customer engagement is up since launch",
    name: "Rajesh Kumar",
    role: "Co-Founder, RaAnAr Agro Foods",
    avatar: "/media/gif/man (1).png",
  },
  {
    text:
      "We needed a reliable Web Development Company in JP Nagar to revamp our real estate site. Visually impressive, responsive, and SEO-ready. Highly recommended",
    name: "Anusha R",
    role: "Doctor, Dr Smilez",
    avatar: "/media/gif/woman (1).png",
  },
 {
    text:
      "This Web Design Company in JP Nagar captured our event brand perfectly—layout, colors, and features are spot on. Clients connect with us faster now",
    name: "Sandeep Shetty",
    role: "CEO, Early Hearing Experts",
    avatar: "/media/gif/man (1).png",
  },
  {
    text:
      "A high-performance logistics portal from a Web Development Company in JP Nagar that went above and beyond. Scalable, efficient, and great post-launch support.",
    name: "Harsha B",
    role: "EVP, TVS Sundaram Motors",
    avatar: "/media/gif/man (1).png",
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
