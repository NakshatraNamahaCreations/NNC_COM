"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/trustedStats.module.css";

export const logos = [
   "/media/clients.png",
  // "/media/clients1.png",
  // "/media/clients2.png",
  "/media/clients3.png",
  "/media/clients4.png",
  "/media/clients5.png",
  "/media/clients6.png",
  "/media/clients7.png",
  "/media/clients8.png",
  "/media/clients9.png",
  "/media/clients10.png",
  "/media/clients11.png",
  "/media/clients12.png",
  "/media/clients13.png",
  "/media/clients14.png",
];

function Counter({ end, suffix, label, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const timeout = setTimeout(() => {
      const step = end / 60;
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, delay]);

  return (
    <div className={styles.counter}>
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  );
}

export default function TrustedStats() {
  return (  
    <section className={styles.wrapper}>
      <div className={styles.inner}>

        {/* LEFT – LOGO SLIDER */}
        <div className={styles.logoArea}>
          {/* <p className={styles.trustedText}>We are Trusted By</p> */}

          <div className={styles.logoSlider}>
            <div className={styles.track}>
              {[...logos, ...logos].map((logo, i) => (
                <img key={i} src={logo} alt="brand logo" />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT – COUNTERS */}
        <div className={styles.stats}>
          <Counter end={500} suffix="+" label="Websites Designed & Developed" />
          <span className={styles.divider}></span>
          <Counter end={30} suffix="+" label="Industries Served Across India" delay={200} />
          <span className={styles.divider}></span>
          <Counter end={8} suffix="+" label="Experience in Web Development" delay={400} />
        </div>

      </div>
    </section>
  );
}
