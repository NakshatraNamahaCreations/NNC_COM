
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Testimonials.module.css";
import styles1 from "@/styles/WhyAnuvic.module.css";

const clientReviews = [
 {
    name: "Vivek Kumar",
    role: "Founder",
    company: "GreenHarvest Organics",
    text:
      "We partnered with Nakshatra Namaha Creations for our company website, and the results were beyond our expectations. They truly are the most reliable Website Development Company in RR Nagar, offering creativity and solid technical support.",
    img: "/media/gif/man (1).png",
  },
  {
    name: "Meera S.",
    role: "Principal",
    company: "Sri Sai International School",
    text:
      "Our school website was redesigned by their team, and it turned out amazing. Easy to navigate, mobile-friendly, and visually appealing! A highly professional Website Development Company in RR Nagar.",
    img: "/media/gif/woman (1).png",
  },
  {
    name: "Raghavendra",
    role: "Owner",
    company: "RR Nagar Fitness Studio",
    text:
      "The team built a stunning website for our fitness center that attracts more inquiries than ever. Fast delivery, responsive design, and great communication — they’re the best website developers in RR Nagar.",
    img: "/media/gif/man (1).png",
  },
  {
    name: "Anusha",
    role: "Marketing Manager",
    company: "Blossom Beauty & Spa",
    text:
      "Nakshatra Namaha Creations made our spa’s online presence stand out beautifully. Their creative approach and technical precision make them the top Website Development Company in RR Nagar.",
    img: "/media/gif/woman (1).png",
  },
  {
    name: "Harish Gowda",
    role: "Director",
    company: "Bangalore Agro Tech",
    text:
      "We needed a secure, fast-loading business site, and they delivered perfectly. The support team is proactive and dependable — a true gem of a Website Development Company in RR Nagar.",
    img: "/media/gif/man (1).png",
  },
 
];

/* Small helper to give a local fallback if an image fails */
function AvatarImage({ src, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src || "/testimonials/placeholder.png");
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={64}
      height={64}
      className={className}
      onError={() => setImgSrc("/testimonials/placeholder.png")}
      sizes="64px"
    />
  );
}

export default function Testimonials() {
  const scrollerRef = useRef(null);
  const cardRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth - 2;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < maxScroll);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, []);

  const scrollByCards = (dir = 1) => {
    const el = scrollerRef.current;
    const card = cardRef.current;
    if (!el || !card) return;
    const step = card.offsetWidth + 24; // width + gap
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <>
    <section className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.heading}>SEE WHAT OUR CLIENTS HAVE TO SAY</h2>

        <div className={styles.sliderWrap}>
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => scrollByCards(-1)}
            disabled={!canPrev}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                d="M15 19L8 12l7-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className={styles.scroller} ref={scrollerRef}>
            {clientReviews.map((r, i) => (
              <div className={styles.slide} key={i}>
                <article
                  className={styles.card}
                  ref={i === 0 ? cardRef : undefined}
                >
                  <p className={styles.text}>{r.text}</p>
                </article>

                <div className={styles.meta}>
                  <div className={styles.avatarWrap}>
                    <AvatarImage
                      src={r.img}
                      alt={r.name}
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.author}>
                    <p className={styles.name}>{r.name}</p>
                    {/* <p className={styles.role}>
                      {[r.role, r.company].filter(Boolean).join(" • ")}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => scrollByCards(1)}
            disabled={!canNext}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

       {/* <section className={styles1.hero} >
      <img
        className={styles1.bg}
        src="/media/webdev/webdev45.jpg"
        alt=""
        loading="eager"
      />

      <div className={styles1.inner}>
        <h1 className={styles1.title1}>
          Custom Websites That Grow Your Business in HSR Layout, Bangalore
        </h1>

        <a href="#contact" className={styles1.cta}>
          GET A PROPOSAL
        </a>
      </div>
    </section> */}
    
    </>
  );
}
