"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Websites Planned Around Business Objectives", icon: "/media/icons/idea (1).png", desc: "Nakshatra Namaha Creations builds websites with clear goals — enquiries, trust, and scalability. Page structure and content flow are designed to support conversions." , color:"ind--blue"},
  { title: "SEO-Ready Development from the Start", icon: "/media/icons/search-engine-optimization.png", desc: "As the best website development company in Bangalore, SEO is integrated into development. Clean code, structured headings, fast speed, and mobile responsiveness support search visibility.", color:"ind--purple"},
  { title: "Transparent Communication for Business Owners", icon: "/media/icons/growth-chart.png", desc: "Clear timelines, honest guidance, and consistent updates ensure business owners always know where the project stands.", color:"ind--mint"},
  { title: "Scalable Websites for Growing Businesses", icon: "/media/icons/online-analysis.png", desc: "Websites are built to grow alongside your business, allowing easy updates, service expansions, and performance improvements.", color:"ind--cyan"},
    { title: "Reliable Post-Launch Support", icon: "/media/icons/web.png", desc: "Ongoing support ensures your website remains secure, updated, and aligned with changing business goals", color:"ind--orange"},
  // { title: "", icon: "/media/icons/animate.png", desc: "", color:"ind--teal"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
 { title: "Websites Planned Around Business Objectives", icon: "/media/icons/idea (1).png", desc: "Nakshatra Namaha Creations builds websites with clear goals — enquiries, trust, and scalability. Page structure and content flow are designed to support conversions." , color:"ind--blue"},
  { title: "SEO-Ready Development from the Start", icon: "/media/icons/search-engine-optimization.png", desc: "As the best website development company in Bangalore, SEO is integrated into development. Clean code, structured headings, fast speed, and mobile responsiveness support search visibility.", color:"ind--purple"},
  { title: "Transparent Communication for Business Owners", icon: "/media/icons/growth-chart.png", desc: "Clear timelines, honest guidance, and consistent updates ensure business owners always know where the project stands.", color:"ind--mint"},
  { title: "Scalable Websites for Growing Businesses", icon: "/media/icons/online-analysis.png", desc: "Websites are built to grow alongside your business, allowing easy updates, service expansions, and performance improvements.", color:"ind--cyan"},
    { title: "Reliable Post-Launch Support", icon: "/media/icons/web.png", desc: "Ongoing support ensures your website remains secure, updated, and aligned with changing business goals", color:"ind--orange"},


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
      <h2 className={styles.sec3Heading}>Why Business Owners Choose Nakshatra Namaha Creations</h2>
        <p className={styles.sec3Text}>
       Business owners choose Nakshatra Namaha Creations because they need a reliable partner that understands business priorities. As the best website development company in Bangalore for growth-focused brands, the approach goes beyond visuals.
         </p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
