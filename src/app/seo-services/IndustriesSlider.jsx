"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Discover & Audit", icon: "/media/icons/idea (1).png", desc: "Understanding and evaluating the existing SEO status and potential for growth." , color:"ind--blue"},
  { title: "Strategy & Keyword Research", icon: "/media/icons/keyword.png", desc: "Creating a roadmap with the focus of Search Engine Optimisation targeting the right keywords.", color:"ind--purple"},
  { title: "Implementation", icon: "/media/icons/ux.png", desc: "Use the on-page improvements, technical fixes, and content optimization to achieve the desired goals.", color:"ind--mint"},
  { title: "Monitoring & Reporting", icon: "/media/icons/technical-support.png", desc: "Keep track of the ranking performance and offer practical monthly ​‍​‌‍​‍‌​‍​‌‍​‍‌insights.", color:"ind--cyan"},
 
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Discover & Audit", icon: "/media/icons/idea (1).png", desc: "Understanding and evaluating the existing SEO status and potential for growth." , color:"ind--blue"},
  { title: "Strategy & Keyword Research", icon: "/media/icons/keyword.png", desc: "Creating a roadmap with the focus of Search Engine Optimisation targeting the right keywords.", color:"ind--purple"},
  { title: "Implementation", icon: "/media/icons/ux.png", desc: "Use the on-page improvements, technical fixes, and content optimization to achieve the desired goals.", color:"ind--mint"},
  { title: "Monitoring & Reporting", icon: "/media/icons/technical-support.png", desc: "Keep track of the ranking performance and offer practical monthly ​‍​‌‍​‍‌​‍​‌‍​‍‌insights.", color:"ind--cyan"},
 
];

function Row({ items, reverse=false }) {
  return (
    <div className={`${styles.marquee} ${reverse ? styles.marqueeB : styles.marqueeA}`}>
      <ul className={styles.track}>
        {[...items, ...items].map((card, i) => (
          <li
            key={`${card.title}-${i}`}
            className={`${styles.indCard} ${styles[card.color]}`}
            aria-hidden={i >= items.length ? "true" : "false"}
          >
            <Image
              src={card.icon}
              alt={i >= items.length ? "" : card.title}
              width={72}
              height={72}
              className={styles.indIcon}
            />
            <h4 className={styles.indTitle}>{card.title}</h4>
            <span className={styles.indLine} />
            <p className={`${styles.indDesc} ${styles.clamp3}`}>{card.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IndustriesSlider() {
  // Optional: pause when user prefers reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(`.${styles.track}`).forEach(el => (el.style.animation = "none"));
    }
  }, []);

  return (
    <section className={styles.industries}>
      <div className="container">
      <h2 className={styles.sec3Heading}>Our Search Engine Optimisation Process – Step-by-Step Growth</h2>
        <p className={styles.sec3Text}>
        Nakshatra Namaha Creations is a company that provides SEO services and focuses on the strategy and measurable progress.
         </p>
    <br /> 
      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
