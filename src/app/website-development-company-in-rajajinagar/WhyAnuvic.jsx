"use client";

import { useEffect } from "react";
import styles from "@/styles/WhyAnuvic.module.css";

export default function WhyAnuvic() {
  // Optional: tiny fallback so the orange card animates even without AOS
  useEffect(() => {
    const el = document.querySelector(`[data-aos="zoom-out-up"]`);
    if (el) el.classList.add(styles.aosKick);
  }, []);

  return (
    <>
    <section className={styles.section}>
      <div className={styles.rowPill}>
        {/* LEFT / INTRO */}
        <article className={`${styles.card} `}>
          <h3 className={styles.title}>
            Why Nakshatra Namaha Creations 
            Your Partner in Digital Success
          </h3>
          <p className={styles.body}>
            We offer comprehensive solutions for your business, from logo
            creation to website development and ERP solutions, covering A to Z
            needs.
          </p>
          {/* Divider like the screenshot */}
          <span className={styles.vRule} aria-hidden="true" />
        </article>

        {/* OPTIMIZE / ROI */}
        <article className={styles.card}>
          <span className={styles.icon} aria-hidden="true">
            {/* speed/check icon */}
            <svg viewBox="0 0 48 48" className={styles.svg}>
              <circle cx="28" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
              <path d="M24 28l4-5 6 2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M8 18h8M10 24h6M12 30h5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <h3 className={styles.title}>Optimize Efficiency and Maximize ROI</h3>
          <p className={styles.body}>
            Develop your own mobile app to engage customers, boost sales, and
            strengthen your business&apos;s digital presence.
          </p>
        </article>

        {/* ORANGE / HIGHLIGHT */}
        <article
         className={styles.card}
          data-aos="zoom-out-up"
          data-aos-duration="400"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <span className={styles.icon} aria-hidden="true">
            {/* hand + money icon */}
            <svg viewBox="0 0 48 48" className={styles.svg}>
              <rect x="8" y="16" width="24" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
              <path d="M10 20h12M14 24h8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M28 26c6 0 7 4 7 8h-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M36 14v8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <h3 className={styles.title}>
            Good Pricing, <br /> High-Quality Results
          </h3>
          <p className={styles.body}>
            Captivate your customers with cost-effective solutions, boosting ROI
            through irresistible affordability. Dominate your market with our
            unbeatable offers!
          </p>
        </article>

        {/* CUSTOMIZED PLANS */}
        <article className={styles.card}>
          <span className={styles.icon} aria-hidden="true">
            
            <svg viewBox="0 0 48 48" className={styles.svg}>
              <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
              <path d="M17 20l2 2 5-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M28 28l8 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <h3 className={styles.title}>Customized Plans for Every Business Need</h3>
          <p className={styles.body}>
            Leverage our unmatched expertise in crafting the ultimate game plan
            to unlock unparalleled online success.
          </p>
        </article>
      </div>
    </section>



    <section className={styles.hero} >
      {/* Original image, tinted to blue via CSS filter + overlay */}
      <img
        className={styles.bg}
        src="/media/webdev/webdev45.jpg"
        alt=""
        loading="eager"
      />

      <div className={styles.inner}>
        <h1 className={styles.title1}>
          Custom Websites That Grow Your Business in Rajajinagar, Bangalore
        </h1>

        <a href="#contact" className={styles.cta}>
          GET A PROPOSAL
        </a>
      </div>
    </section>
    </>
  );
}
