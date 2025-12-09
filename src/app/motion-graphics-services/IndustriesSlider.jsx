"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Purpose-Driven Motion Graphics", icon: "/media/icons/animate (1).png", desc: "At Nakshatra Namaha Creations, every motion graphics project is designed to be both creative and meaningful. We ensure your video communicates clearly and supports your brand goals." , color:"ind--blue"},
  { title: "Collaborative Creation Process", icon: "/media/icons/onboarding.png", desc: "Your ideas, suggestions, and feedback guide the entire creative journey. We work closely with you to refine concepts and deliver motion graphics that feel truly yours.", color:"ind--purple"},
  { title: "Custom Designs", icon: "/media/icons/online-analysis.png", desc: "Our motion graphics are never template-based. Every visual, style, and animation is custom-crafted to bring your unique vision to life with premium quality.", color:"ind--mint"},
  { title: "On-Time Delivery with Clear Milestones", icon: "/media/icons/technical-support.png", desc: "We follow a structured workflow—from script to storyboard to final animation—so your project is delivered on time with complete clarity at every stage.", color:"ind--cyan"},
   { title: "Global-Ready Output", icon: "/media/icons/idea (1).png", desc: "If you're targeting international audiences, we provide multilingual voiceovers and universally appealing visual styles to help your content reach global impact." , color:"ind--blue"},
  { title: "Post-Delivery Support & Revisions", icon: "/media/icons/backend.png", desc: "Your project doesn’t end at delivery. We provide after-delivery support and minor edits to ensure your motion graphics continue performing well over time.", color:"ind--purple"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
   { title: "Purpose-Driven Motion Graphics", icon: "/media/icons/animate (1).png", desc: "At Nakshatra Namaha Creations, every motion graphics project is designed to be both creative and meaningful. We ensure your video communicates clearly and supports your brand goals." , color:"ind--blue"},
   { title: "Custom Designs", icon: "/media/icons/online-analysis.png", desc: "Our motion graphics are never template-based. Every visual, style, and animation is custom-crafted to bring your unique vision to life with premium quality.", color:"ind--mint"},
   { title: "Collaborative Creation Process", icon: "/media/icons/onboarding.png", desc: "Your ideas, suggestions, and feedback guide the entire creative journey. We work closely with you to refine concepts and deliver motion graphics that feel truly yours.", color:"ind--purple"},


   { title: "On-Time Delivery with Clear Milestones", icon: "/media/icons/technical-support.png", desc: "We follow a structured workflow—from script to storyboard to final animation—so your project is delivered on time with complete clarity at every stage.", color:"ind--cyan"},
  { title: "Global-Ready Output", icon: "/media/icons/idea (1).png", desc: "If you're targeting international audiences, we provide multilingual voiceovers and universally appealing visual styles to help your content reach global impact." , color:"ind--blue"},
  { title: "Post-Delivery Support & Revisions", icon: "/media/icons/backend.png", desc: "Your project doesn’t end at delivery. We provide after-delivery support and minor edits to ensure your motion graphics continue performing well over time.", color:"ind--purple"},
 
  
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
      <h2 className={styles.sec3Heading}>What Can You Expect from Nakshatra Namaha Creations?</h2>
        <p className={styles.sec3Text}>
       At​‍​‌‍​‍‌​‍​‌‍​‍‌ Nakshatra Namaha Creations, we are convinced that a project should be provided with a Motion Graphics Service that is not only creative but also purposeful.
          </p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
