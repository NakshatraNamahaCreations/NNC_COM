"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: " High-Performance Solutions", icon: "/media/icons/idea (1).png", desc: "Our Node.js applications are intended to evolve with your company - they are fast, adaptable, and made for a good measure of success." , color:"ind--blue"},
  { title: "Clean Maintainable Code", icon: "/media/icons/backend.png", desc: "We produce efficient, modular code that is very easy to maintain, extend, and debug - thus leading to less trouble during the post-launch phase.", color:"ind--purple"},
  { title: "On-Time Delivery", icon: "/media/icons/online-analysis.png", desc: "We are of the opinion that your time is very valuable and, thus, we always meet the deadlines set without giving less than the expected quality or performance.", color:"ind--mint"},
  { title: "Support for the Future", icon: "/media/icons/technical-support.png", desc: "We will be glad to assist you with bug fixes and new features, and thus, we will be reachable even after your application has been deployed for uninterrupted operation.", color:"ind--cyan"},
 
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: " High-Performance Solutions", icon: "/media/icons/idea (1).png", desc: "Our Node.js applications are intended to evolve with your company - they are fast, adaptable, and made for a good measure of success." , color:"ind--blue"},
  { title: "Clean Maintainable Code", icon: "/media/icons/backend.png", desc: "We produce efficient, modular code that is very easy to maintain, extend, and debug - thus leading to less trouble during the post-launch phase.", color:"ind--purple"},
  { title: "On-Time Delivery", icon: "/media/icons/online-analysis.png", desc: "We are of the opinion that your time is very valuable and, thus, we always meet the deadlines set without giving less than the expected quality or performance.", color:"ind--mint"},
  { title: "Support for the Future", icon: "/media/icons/technical-support.png", desc: "We will be glad to assist you with bug fixes and new features, and thus, we will be reachable even after your application has been deployed for uninterrupted operation.", color:"ind--cyan"},
 
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
      <h2 className={styles.sec3Heading}>What can you expect from Nakshatra Namaha Creations?</h2>
        <p className={styles.sec3Text}>
        By teaming up with us, you don't only acquire a development team - but rather a committed tech partner who is result-oriented.
          </p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
