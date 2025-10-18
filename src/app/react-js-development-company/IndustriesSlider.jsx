"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "React JS UI/UX Development", icon: "/media/icons/idea (1).png", desc: "As a leading React JS Development Company, we focus on crafting minimalist and intuitive interfaces that enhance user engagement. From layout design to animation, every UI we develop ensures a pleasant and responsive user experience." , color:"ind--blue"},
  { title: "React JS Custom Development", icon: "/media/icons/app-development.png", desc: "Our React JS Development Company specializes in building custom applications that perfectly match your requirements. We don’t rely on templates — we code from scratch to ensure your brand identity and unique functionality remain intact.", color:"ind--purple"},
  { title: "React JS Migration", icon: "/media/icons/ui.png", desc: "If your app still runs on an outdated framework, our React JS Development Company can migrate it smoothly to React. We retain all core functionalities while improving speed, scalability, and overall performance.", color:"ind--mint"},
  { title: "React JS Plugins", icon: "/media/icons/onboarding.png", desc: "Looking for additional features? Our React JS Development Company creates lightweight, high-quality plugins to extend the functionality of your app — whether it’s a custom slider, dropdown, or interactive form component.", color:"ind--cyan"},
    { title: "Maintenance and Support", icon: "/media/icons/technical-support.png", desc: "Our React JS Development Company doesn’t stop after launch. We continue providing bug fixes, feature enhancements, and proactive maintenance to keep your React application running at its best.", color:"ind--orange"},
//   { title: "", icon: "/media/icons/backend.png", desc: "", color:"ind--teal"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "React JS UI/UX Development", icon: "/media/icons/idea (1).png", desc: "As a leading React JS Development Company, we focus on crafting minimalist and intuitive interfaces that enhance user engagement. From layout design to animation, every UI we develop ensures a pleasant and responsive user experience." , color:"ind--blue"},
  { title: "React JS Custom Development", icon: "/media/icons/app-development.png", desc: "Our React JS Development Company specializes in building custom applications that perfectly match your requirements. We don’t rely on templates — we code from scratch to ensure your brand identity and unique functionality remain intact.", color:"ind--purple"},
  { title: "React JS Migration", icon: "/media/icons/ui.png", desc: "If your app still runs on an outdated framework, our React JS Development Company can migrate it smoothly to React. We retain all core functionalities while improving speed, scalability, and overall performance.", color:"ind--mint"},
  { title: "React JS Plugins", icon: "/media/icons/onboarding.png", desc: "Looking for additional features? Our React JS Development Company creates lightweight, high-quality plugins to extend the functionality of your app — whether it’s a custom slider, dropdown, or interactive form component.", color:"ind--cyan"},
    { title: "Maintenance and Support", icon: "/media/icons/technical-support.png", desc: "Our React JS Development Company doesn’t stop after launch. We continue providing bug fixes, feature enhancements, and proactive maintenance to keep your React application running at its best.", color:"ind--orange"},
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
    <section className={styles.industries}>
      <div className="container">
      <h2 className={styles.sec3Heading}>React JS Development Services</h2>
        {/* <p className={styles.sec3Text}>
        At Nakshatra Namaha Creations, we blend our experience, thoughtful planning, and technical expertise to create Android apps that are not only business-friendly on the day of the launch but also for a long period after. If you are a startup or an existing brand, we don't lose our focus on developing dependable, scalable, and customer-friendly apps that will be of assistance to your business growth.
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
