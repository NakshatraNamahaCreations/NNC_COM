"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Testimonials.module.css";
import styles1 from "@/styles/WhyAnuvic.module.css";
/* Put these files in: /public/testimonials/
   - arjun.png
   - dr-manoj.png
   - ramasubramaniam.png
   - senthil-nathan.png
   - ram-gopalan.png
   - mansimar-aneja.png
   - m-subramanian.png
   - mezjan-dallas.png
   - placeholder.png  (fallback)
*/
const clientReviews = [
  {
    name: "Ranjani Sivaraj",
    role: "Co-Founder",
    company: "RaAnAr Agro Foods",
    text:"I had a great experience working with Nakshatra Namaha Creations on developing my website. They were professional, responsive and ensured the website was designed exactly as I envisioned. The final result looks clean, functional and user-friendly. Looking forward to continuing with their digital marketing services next!",
      img: "/media/gif/man (1).png",
  },
  {
    name: "Sudhakar S",
    role: "Doctor",
    company: "Dr Smilez",
    text:
       "We are absolutely thrilled with our new website developed by Nakshtra Namaha! Their design perfectly captured our brand aesthetic while creating a user-friendly experience that seamlessly navigates visitors through our key information. The team was incredibly responsive to our feedback, exceeding expectations with their professionalism and attention to detail throughout the entire process. We highly recommend them to anyone looking for a top-notch website development solution.",
     img: "/media/gif/man (1).png",
  },
    {
    name: "Chaandini Srinivas",
    role: "CEO",
    company: "Early Hearing Experts",
    text:
      "Mr. HARISH is excellent in understanding client requirement and quick response... Highly appreciated.. A place where,we can fulfill all your requirements & they give a right base for our Ideas. The best support team, they guide to improve our ideas too and they give chance to prove their talents.",
   img: "/media/gif/woman (1).png",
  },
  {
    name: "Make My documents",
    role: "Executive Vice President",
    company: "TVS Sundaram Motors",
    text:
     "My experience with NNC was fantastic! The team was professional, patient, and attentive to our needs from start to finish. They delivered a website that exceeded our expectations, perfectly capturing our vision, A special thanks to Dhanlakshmi, Harish, Anjana, and the entire team for their dedication and attention to detail. Their seamless approach made the entire process smooth and hassle-free. Highly recommended!!!",
     img: "/media/gif/man (1).png",
  },

  {
    name: "Patil sandeep",
    role: "Founder",
    company: "Simply.Coach",
    text:
       "Good service we got from the Nakshatra website creations ,it was great moment's we had with Mr,Harish ... We had started the new business at JP nagar,,,,,, To improve the business and marketing activities we got best support from Nakshatra website creations team.... I really suggest and recomend others to connect with Nakshatra website creations team to develop the website creation and Google adds or other online activities...... Staff and Owner is very helpful and kind people.",
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

       <section className={styles1.hero} >
      {/* Original image, tinted to blue via CSS filter + overlay */}
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
    </section>
    
    </>
  );
}
