"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Discovery & Strategy", icon: "/media/icons/idea (1).png", desc: "Understand business goals, define KPIs, and decide on the most effective ad platforms." , color:"ind--blue"},
  { title: "Creative Development", icon: "/media/icons/app-development.png", desc: "Generate engaging ad copies, visuals, and CTAs that are the perfect fit for your campaign objectives.", color:"ind--purple"},
  { title: "Campaign Execution", icon: "/media/icons/social-media (2).png", desc: "Start campaign across different channels with bidder optimization for savings. ", color:"ind--mint"},
  { title: "Performance Monitoring", icon: "/media/icons/ux.png", desc: "Always monitoring, weekly reporting, and monthly strategy meetings for continuous improvement.", color:"ind--cyan"},
    // { title: "", icon: "/media/icons/technical-support.png", desc: "", color:"ind--orange"},
//   { title: "", icon: "/media/icons/backend.png", desc: "", color:"ind--teal"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Discovery & Strategy", icon: "/media/icons/idea (1).png", desc: "Understand business goals, define KPIs, and decide on the most effective ad platforms." , color:"ind--blue"},
  { title: "Creative Development", icon: "/media/icons/app-development.png", desc: "Generate engaging ad copies, visuals, and CTAs that are the perfect fit for your campaign objectives.", color:"ind--purple"},
  { title: "Campaign Execution", icon: "/media/icons/social-media (2).png", desc: "Start campaign across different channels with bidder optimization for savings. ", color:"ind--mint"},
  { title: "Performance Monitoring", icon: "/media/icons/ux.png", desc: "Always monitoring, weekly reporting, and monthly strategy meetings for continuous improvement.", color:"ind--cyan"},
    // { title: "", icon: "/media/icons/technical-support.png", desc: "", color:"ind--orange"},
//   { title: "", icon: "/media/icons/backend.png", desc: "", color:"ind--teal"},
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
    <>
    <section className={styles.industries}>
      <div className="container">
      <h2 className={styles.sec3Heading}>Our Paid Marketing Process – Strategic, Transparent, and Scalable</h2>
        <p className={styles.sec3Text}>
      Our​‍​‌‍​‍‌​‍​‌‍​‍‌ Paid Marketing Services at Nakshatra Namaha Creations are aligned with a tried and tested framework: test, learn, and scale. Clarity, accountability, and measurable growth are what define each step of our Paid Marketing Services ​‍​‌‍​‍‌​‍​‌‍​‍‌journey.
      </p>
    <br /> 
      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>

    </>
  );
}
