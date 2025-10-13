"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "UI/UX Development", icon: "/media/icons/ux.png", desc: "Great design and usability are the major points on which we lay our focus. As a mobile app development company in Mumbai, we aim at creating stunning, user-friendly, interfaces that allow easy navigation and keep users engaged. Credit goes to every layout being optimized for conversions and brand consistency due to which our company is a preferred UI/UX design company in Mumbai." , color:"ind--blue"},
  { title: "Native App Development", icon: "/media/icons/app-development.png", desc: "We are a native mobile app development company in Mumbai, who make sturdy iOS and Android apps that provide quick as a flash performance and allow complete device integration. If it is Swift for iOS or Kotlin for Android, we pretty much make sure that your app works like a charm on all the platforms.", color:"ind--purple"},
  { title: "Cross-Platform App Development", icon: "/media/icons/online-analysis.png", desc: "Our mobile app development company in Mumbai provides the most reliable cross-platform and hybrid app solutions. By employing technologies like Flutter and React Native, we create apps that are equally functional on both iOS and Android — hence saving the cost and time-to-market.", color:"ind--mint"},
  { title: "QA and Testing Services", icon: "/media/icons/technical-support.png", desc: "Quality is our top priority in every step of the journey. As one of the best mobile app development companies in Mumbai, we are into vigorous QA testing in all parameters of speed, usability, and security, before the launch. The app is verified on different devices to assure that there is no glitch in the user experience.", color:"ind--cyan"},
    { title: "App Store Optimization (ASO) Services", icon: "/media/icons/app-settings.png", desc: "Nakshatra Namaha Creations ensures visibility for your app without fail. Our mobile app development company in Mumbai provides App Store Optimization services which are directly linked to the number of people who see your app, download it, and the ranking that you achieve on Google Play and Apple’s App Store.", color:"ind--orange"},

];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "UI/UX Development", icon: "/media/icons/ux.png", desc: "Great design and usability are the major points on which we lay our focus. As a mobile app development company in Mumbai, we aim at creating stunning, user-friendly, interfaces that allow easy navigation and keep users engaged. Credit goes to every layout being optimized for conversions and brand consistency due to which our company is a preferred UI/UX design company in Mumbai." , color:"ind--blue"},
  { title: "Native App Development", icon: "/media/icons/app-development.png", desc: "We are a native mobile app development company in Mumbai, who make sturdy iOS and Android apps that provide quick as a flash performance and allow complete device integration. If it is Swift for iOS or Kotlin for Android, we pretty much make sure that your app works like a charm on all the platforms.", color:"ind--purple"},
  { title: "Cross-Platform App Development", icon: "/media/icons/online-analysis.png", desc: "Our mobile app development company in Mumbai provides the most reliable cross-platform and hybrid app solutions. By employing technologies like Flutter and React Native, we create apps that are equally functional on both iOS and Android — hence saving the cost and time-to-market.", color:"ind--mint"},
  { title: "QA and Testing Services", icon: "/media/icons/technical-support.png", desc: "Quality is our top priority in every step of the journey. As one of the best mobile app development companies in Mumbai, we are into vigorous QA testing in all parameters of speed, usability, and security, before the launch. The app is verified on different devices to assure that there is no glitch in the user experience.", color:"ind--cyan"},
    { title: "App Store Optimization (ASO) Services", icon: "/media/icons/app-settings.png", desc: "Nakshatra Namaha Creations ensures visibility for your app without fail. Our mobile app development company in Mumbai provides App Store Optimization services which are directly linked to the number of people who see your app, download it, and the ranking that you achieve on Google Play and Apple’s App Store.", color:"ind--orange"},

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
      <h2 className={styles.sec3Heading}>Our Custom Mobile App Development Services in Mumbai</h2>
<p className={styles.sec3Text}>
    Being a full-service mobile app development company in Mumbai, we do not limit ourselves to templates for completely customized app solutions. Strategy and design, coding and deployment all these services are provided by us to make sure that your app is powerful, secure, and ready for growth.
</p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
