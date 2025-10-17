"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Testimonials.module.css";
import styles1 from "@/styles/WhyAnuvic.module.css";

const clientReviews = [
  {
    name: "Rajesh Kumar",
    role: "Co-Founder",
    company: "RaAnAr Agro Foods",
    text:"We approached this Web Development Company in JP Nagar to create our online store. Clean, fast, easy to manage—customer engagement is up since launch",
      img: "/media/gif/man (1).png",
  },
  {
    name: "Anusha R",
    role: "Doctor",
    company: "Dr Smilez",
    text:
       "We needed a reliable Web Development Company in JP Nagar to revamp our real estate site. Visually impressive, responsive, and SEO-ready. Highly recommended",
      img: "/media/gif/woman (1).png",
  },
    {
    name: "Sandeep Shetty",
    role: "CEO",
    company: "Early Hearing Experts",
    text:
      "This Web Design Company in JP Nagar captured our event brand perfectly—layout, colors, and features are spot on. Clients connect with us faster now",
     img: "/media/gif/man (1).png",
  },
  {
    name: "Harsha B",
    role: "Executive Vice President",
    company: "TVS Sundaram Motors",
    text:
     "A high-performance logistics portal from a Web Development Company in JP Nagar that went above and beyond. Scalable, efficient, and great post-launch support.",
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
