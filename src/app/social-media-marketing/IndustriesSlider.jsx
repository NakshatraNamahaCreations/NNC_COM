"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Discovery & Strategy", icon: "/media/icons/idea (1).png", desc: "Establish the brand voice, objectives, and target market for efficient Social Media Marketing." , color:"ind--blue"},
  { title: "Planning & Creation", icon: "/media/icons/app-development.png", desc: "Create visuals for the posts, compose engaging copy, and set up the content with clear goals.", color:"ind--purple"},
  { title: "Execution & Engagement", icon: "/media/icons/ux.png", desc: "Social Media Marketing campaigns that are activated, and interactions that are managed in the real-time mode.", color:"ind--mint"},
  { title: "Optimization & Reporting", icon: "/media/icons/onboarding.png", desc: "Identify the customer needs through the data and adjust the strategy to get more engagement and ​‍​‌‍​‍‌​‍​‌‍​‍‌conversions.", color:"ind--cyan"},
 
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Discovery & Strategy", icon: "/media/icons/idea (1).png", desc: "Establish the brand voice, objectives, and target market for efficient Social Media Marketing." , color:"ind--blue"},
  { title: "Planning & Creation", icon: "/media/icons/app-development.png", desc: "Create visuals for the posts, compose engaging copy, and set up the content with clear goals.", color:"ind--purple"},
  { title: "Execution & Engagement", icon: "/media/icons/ux.png", desc: "Social Media Marketing campaigns that are activated, and interactions that are managed in the real-time mode.", color:"ind--mint"},
  { title: "Optimization & Reporting", icon: "/media/icons/onboarding.png", desc: "Identify the customer needs through the data and adjust the strategy to get more engagement and ​‍​‌‍​‍‌​‍​‌‍​‍‌conversions.", color:"ind--cyan"},
 
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
     <section className={styles.spotlightSection}>
  <div className={styles.spotlightFull}>
    <Image
      src="/media/spotlight1.webp"
      alt="Social Media Marketing spotlight"
      fill
      className={styles.spotlightImg}
      priority
    />
  </div>
</section>
    <section className={styles.industries}>
      <div className="container">
      <h2 className={styles.sec3Heading}>Our Social Media Marketing Process – Data Meets Creativity</h2>
        <p className={styles.sec3Text}>
        We​‍​‌‍​‍‌​‍​‌‍​‍‌ operate in a method that is well-organized, clear to the client, and geared towards achieving results. Nakshatra Namaha Creations as a reliable Social Media Marketing company, effectively combines the strategy with the creative aspects to ensure that the brand grows in a way that can be quantified.
        </p>
    <br /> 
      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
    
        {/* Spotlight Section */}


    
    </>
  );
}
