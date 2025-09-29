"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "UI/UX Development", icon: "/media/icons/ux.png", desc: "Our mobile app development company prioritizes design and usability. We craft interactive, engaging, and visually appealing interfaces that give your users a smooth and memorable experience. Every screen is designed with user flow and business goals in mind, making us a top mobile app development company for UI/UX services." , color:"ind--blue"},
  { title: "Native App Development", icon: "/media/icons/app-development.png", desc: "We specialize in building native applications for both iOS and Android platforms. As a leading mobile app development company, we focus on speed, performance, and device-specific features to create apps that feel natural and run flawlessly on every device.", color:"ind--purple"},
  { title: "Cross-Platform App Development", icon: "/media/icons/online-analysis.png", desc: "Businesses that want to reach wider audiences trust our mobile app development company for cross-platform development. Using frameworks like React Native and Flutter, we deliver apps that work seamlessly across iOS and Android while reducing development costs and time to market.", color:"ind--mint"},
  { title: "QA and Testing Services", icon: "/media/icons/technical-support.png", desc: "No app leaves our hands without passing through rigorous QA and testing. As a best mobile app development company, we test for performance, security, usability, and compatibility across devices to ensure your app is free of glitches and ready for launch.", color:"ind--cyan"},
    { title: "App Store Optimization (ASO) Services", icon: "/media/icons/app-settings.png", desc: "Building an app is only the first step; making it discoverable is equally important. Our mobile app development company offers App Store Optimization services that improve your app’s visibility, rankings, and downloads on both the Apple App Store and Google Play Store.", color:"ind--orange"},

];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
      { title: "UI/UX Development", icon: "/media/icons/ux.png", desc: "Our mobile app development company prioritizes design and usability. We craft interactive, engaging, and visually appealing interfaces that give your users a smooth and memorable experience. Every screen is designed with user flow and business goals in mind, making us a top mobile app development company for UI/UX services." , color:"ind--blue"},
  { title: "Native App Development", icon: "/media/icons/web.png", desc: "We specialize in building native applications for both iOS and Android platforms. As a leading mobile app development company, we focus on speed, performance, and device-specific features to create apps that feel natural and run flawlessly on every device.", color:"ind--purple"},
  { title: "Cross-Platform App Development", icon: "/media/icons/online-analysis.png", desc: "Businesses that want to reach wider audiences trust our mobile app development company for cross-platform development. Using frameworks like React Native and Flutter, we deliver apps that work seamlessly across iOS and Android while reducing development costs and time to market.", color:"ind--mint"},
  { title: "QA and Testing Services", icon: "/media/icons/technical-support.png", desc: "No app leaves our hands without passing through rigorous QA and testing. As a best mobile app development company, we test for performance, security, usability, and compatibility across devices to ensure your app is free of glitches and ready for launch.", color:"ind--cyan"},
    { title: "App Store Optimization (ASO) Services", icon: "/media/icons/app-settings.png", desc: "Building an app is only the first step; making it discoverable is equally important. Our mobile app development company offers App Store Optimization services that improve your app’s visibility, rankings, and downloads on both the Apple App Store and Google Play Store.", color:"ind--orange"},

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
      <h2 className={styles.sec3Heading}>Our Custom Mobile App Development Services</h2>
<p className={styles.sec3Text}>
 As a trusted mobile app development company, we go beyond standard solutions by offering end-to-end custom mobile app development services. From idea to deployment, our approach ensures your app is tailored, scalable, and ready to perform.
</p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
