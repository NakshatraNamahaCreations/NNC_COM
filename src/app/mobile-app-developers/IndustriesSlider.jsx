"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Fast Development Cycles", icon: "/media/icons/ux.png", desc: "Our mobile app developers understand the importance of time-to-market in a competitive landscape. With a streamlined process, we deliver high-quality applications quickly, helping your business launch on schedule without compromising performance." , color:"ind--blue"},
  { title: "Business-Focused Approach", icon: "/media/icons/app-development.png", desc: "Every app our mobile app developers build is designed around your business objectives. By analyzing workflows, customer needs, and industry demands, we ensure each feature provides measurable value to your organization.", color:"ind--purple"},
  { title: "Top-Notch Security", icon: "/media/icons/online-analysis.png", desc: "Security is at the core of our work. Our mobile app developers follow strict coding standards, implement encryption, and comply with global regulations to safeguard your application and protect sensitive user data.", color:"ind--mint"},
  { title: "Cross-Platform Expertise", icon: "/media/icons/technical-support.png", desc: "To help businesses reach wider audiences, our mobile app developers specialize in cross-platform frameworks like Flutter and React Native. This ensures consistent performance and seamless user experiences across iOS and Android.", color:"ind--cyan"},
    { title: "User-Centric Design", icon: "/media/icons/app-settings.png", desc: "Great apps balance functionality with usability. Our mobile app developers focus on design-first principles, creating intuitive, engaging, and visually appealing interfaces that keep users coming back.", color:"ind--orange"},
  { title: "Ongoing Support", icon: "/media/icons/backend.png", desc: "The job doesn’t end at launch. Our mobile app developers provide continuous maintenance, updates, and feature enhancements to keep your application optimized, future-ready, and aligned with your business growth.", color:"ind--teal"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Fast Development Cycles", icon: "/media/icons/ux.png", desc: "Our mobile app developers understand the importance of time-to-market in a competitive landscape. With a streamlined process, we deliver high-quality applications quickly, helping your business launch on schedule without compromising performance." , color:"ind--blue"},
  { title: "Business-Focused Approach", icon: "/media/icons/app-development.png", desc: "Every app our mobile app developers build is designed around your business objectives. By analyzing workflows, customer needs, and industry demands, we ensure each feature provides measurable value to your organization.", color:"ind--purple"},
  { title: "Top-Notch Security", icon: "/media/icons/online-analysis.png", desc: "Security is at the core of our work. Our mobile app developers follow strict coding standards, implement encryption, and comply with global regulations to safeguard your application and protect sensitive user data.", color:"ind--mint"},
  { title: "Cross-Platform Expertise", icon: "/media/icons/technical-support.png", desc: "To help businesses reach wider audiences, our mobile app developers specialize in cross-platform frameworks like Flutter and React Native. This ensures consistent performance and seamless user experiences across iOS and Android.", color:"ind--cyan"},
    { title: "User-Centric Design", icon: "/media/icons/app-settings.png", desc: "Great apps balance functionality with usability. Our mobile app developers focus on design-first principles, creating intuitive, engaging, and visually appealing interfaces that keep users coming back.", color:"ind--orange"},
  { title: "Ongoing Support", icon: "/media/icons/backend.png", desc: "The job doesn’t end at launch. Our mobile app developers provide continuous maintenance, updates, and feature enhancements to keep your application optimized, future-ready, and aligned with your business growth.", color:"ind--teal"},
 
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
      <h2 className={styles.sec3Heading}>What You Get When You Hire Our Mobile App Developers</h2>
{/* <p className={styles.sec3Text}>
 As a trusted mobile app development company, we go beyond standard solutions by offering end-to-end custom mobile app development services. From idea to deployment, our approach ensures your app is tailored, scalable, and ready to perform.
</p> */}

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
