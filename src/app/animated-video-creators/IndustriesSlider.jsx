"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Explainer Videos", icon: "/media/icons/idea (1).png", desc: "Break down services, products, or ideas with clarity, Help customers understand your value faster, Perfect for landing pages and product demos using Animated Video Production techniques." , color:"ind--blue"},
  { title: "Character Animation", icon: "/media/icons/canadian.png", desc: "We design expressive characters that mirror real-life emotion, Ideal for storytelling, engagement, and emotional appeal,Often used in ads, training videos, and brand campaigns all powered by Animated Video Production.", color:"ind--purple"},
  { title: "Puppet Animation", icon: "/media/icons/teddy-bear.png", desc: "Use of digital rigs for consistent motion and easy editing, Ideal for high-quality results at lower budgets, Great for dialogue-based storytelling enhanced by Animated Video Production workflows", color:"ind--mint"},
  { title: "Motion Graphics", icon: "/media/icons/motion-graphic.png", desc: "Clean and modern graphics-based Animated Video Production for data, statistics, and digital visuals. Perfect for branding, tutorials, and user-interface animations.", color:"ind--cyan"},
    { title: "Concept Art and Storyboarding", icon: "/media/icons/training.png", desc: "A detailed visual plan before Animated Video Production begins, Includes camera movement, timing, and transitions, Ensures alignment between client vision and final animation.", color:"ind--orange"},
  { title: "Bespoke Animation Solutions", icon: "/media/icons/animate.png", desc: "Fully customized visuals designed for your brand, Unique animation techniques developed through professional Animated Video Production methods, No templates only original designs crafted to stand out.", color:"ind--teal"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
 { title: "Explainer Videos", icon: "/media/icons/idea (1).png", desc: "Break down services, products, or ideas with clarity, Help customers understand your value faster, Perfect for landing pages and product demos using Animated Video Production techniques." , color:"ind--blue"},
  { title: "Character Animation", icon: "/media/icons/canadian.png", desc: "We design expressive characters that mirror real-life emotion, Ideal for storytelling, engagement, and emotional appeal,Often used in ads, training videos, and brand campaigns all powered by Animated Video Production.", color:"ind--purple"},
  { title: "Puppet Animation", icon: "/media/icons/teddy-bear.png", desc: "Use of digital rigs for consistent motion and easy editing, Ideal for high-quality results at lower budgets, Great for dialogue-based storytelling enhanced by Animated Video Production workflows", color:"ind--mint"},
  { title: "Motion Graphics", icon: "/media/icons/motion-graphic.png", desc: "Clean and modern graphics-based Animated Video Production for data, statistics, and digital visuals. Perfect for branding, tutorials, and user-interface animations.", color:"ind--cyan"},
    { title: "Concept Art and Storyboarding", icon: "/media/icons/training.png", desc: "A detailed visual plan before Animated Video Production begins, Includes camera movement, timing, and transitions, Ensures alignment between client vision and final animation.", color:"ind--orange"},
  { title: "Bespoke Animation Solutions", icon: "/media/icons/animate.png", desc: "Fully customized visuals designed for your brand, Unique animation techniques developed through professional Animated Video Production methods, No templates only original designs crafted to stand out.", color:"ind--teal"},
 
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
      <h2 className={styles.sec3Heading}>Our Services on Animated Video Creators</h2>
        <p className={styles.sec3Text}>
        Our Animated Video Production services cover everything from scripting to final design, offering a complete package that’s creative, efficient, and result-driven.
        </p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
