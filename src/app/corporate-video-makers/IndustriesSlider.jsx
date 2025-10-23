"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Understanding Requirements", icon: "/media/icons/idea (1).png", desc: " Our Corporate Video Makers identify your goals, target audience, and communication tone." , color:"ind--blue"},
  { title: "Concept & Scripting", icon: "/media/icons/storytelling.png", desc: "Ideas are shaped into compelling scripts and storyboards by our creative Corporate Video Makers.", color:"ind--purple"},
  { title: "Pre-Production Planning", icon: "/media/icons/product-lauch.png", desc: "Locations, casting, and schedules are organized by the Corporate Video Makers for efficient production.", color:"ind--mint"},
  { title: "Filming & Production", icon: "/media/icons/computer.png", desc: " We shoot with modern equipment and expert Corporate Video Makers ensuring cinematic quality.", color:"ind--cyan"},
    { title: "Editing & Post-Production", icon: "/media/icons/film-distribution.png", desc: " Our editors and Corporate Video Makers handle color grading, music, and animation to perfection.", color:"ind--orange"},
      { title: "Final Delivery & Distribution", icon: "/media/icons/logistics.png", desc: "Completed videos are shared in multiple formats — ready for web, broadcast, or events — by our Corporate Video Makers.", color:"ind--indigo"},
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
   { title: "Understanding Requirements", icon: "/media/icons/idea (1).png", desc: " Our Corporate Video Makers identify your goals, target audience, and communication tone." , color:"ind--blue"},
  { title: "Concept & Scripting", icon: "/media/icons/storytelling.png", desc: "Ideas are shaped into compelling scripts and storyboards by our creative Corporate Video Makers.", color:"ind--purple"},
  { title: "Pre-Production Planning", icon: "/media/icons/product-lauch.png", desc: "Locations, casting, and schedules are organized by the Corporate Video Makers for efficient production.", color:"ind--mint"},
  { title: "Filming & Production", icon: "/media/icons/computer.png", desc: " We shoot with modern equipment and expert Corporate Video Makers ensuring cinematic quality.", color:"ind--cyan"},
    { title: "Editing & Post-Production", icon: "/media/icons/film-distribution.png", desc: " Our editors and Corporate Video Makers handle color grading, music, and animation to perfection.", color:"ind--orange"},
      { title: "Final Delivery & Distribution", icon: "/media/icons/logistics.png", desc: "Completed videos are shared in multiple formats — ready for web, broadcast, or events — by our Corporate Video Makers.", color:"ind--indigo"},
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
      <h2 className={styles.sec3Heading}>Our Step-by-Step Video Production Process</h2>
{/* <p className={styles.sec3Text}>
 We simplify and make the desire to work with corporate film makers a pleasure. At Nakshatra Namaha Creations, we implement a well-organized approach:
</p> */}
<br />

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
