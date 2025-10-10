"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Pre-Production", icon: "/media/icons/shuttle.png", desc: "Clarify your objectives, carry out the necessary research, and get concepts and scripts finalized." , color:"ind--blue"},
  { title: "Storyboarding", icon: "/media/icons/storytelling.png", desc: " Layout the shots and sequences for an easy-to-understand visual guide.", color:"ind--purple"},
  { title: "Production", icon: "/media/icons/product-lauch.png", desc: "Get the job done with high-quality professional camera works using the right equipment, crew, and direction.", color:"ind--mint"},
  { title: "Post-Production", icon: "/media/icons/computer.png", desc: "Combine all the footage, voices, and music you like, add animations and graphics, and make the film a complete one.", color:"ind--cyan"},
    { title: "Delivery", icon: "/media/icons/film-distribution.png", desc: "Offer the film in the most suitable versions for websites, events, and social media.", color:"ind--orange"},
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
       { title: "Pre-Production", icon: "/media/icons/shuttle.png", desc: "Clarify your objectives, carry out the necessary research, and get concepts and scripts finalized." , color:"ind--blue"},
  { title: "Storyboarding", icon: "/media/icons/storytelling.png", desc: " Layout the shots and sequences for an easy-to-understand visual guide.", color:"ind--purple"},
  { title: "Production", icon: "/media/icons/product-lauch.png", desc: "Get the job done with high-quality professional camera works using the right equipment, crew, and direction.", color:"ind--mint"},
  { title: "Post-Production", icon: "/media/icons/computer.png", desc: "Combine all the footage, voices, and music you like, add animations and graphics, and make the film a complete one.", color:"ind--cyan"},
    { title: "Delivery", icon: "/media/icons/film-distribution.png", desc: "Offer the film in the most suitable versions for websites, events, and social media.", color:"ind--orange"},

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
      <h2 className={styles.sec3Heading}>Our Corporate Film-Making Process</h2>
<p className={styles.sec3Text}>
 We simplify and make the desire to work with corporate film makers a pleasure. At Nakshatra Namaha Creations, we implement a well-organized approach:
</p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
