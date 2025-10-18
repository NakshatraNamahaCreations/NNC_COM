"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Goal-Oriented Development", icon: "/media/icons/idea (1).png", desc: "Development and implementation of apps is done by us in such a way that these programs become the direct means of business, whether it is customer engagement, sales, or internal operations." , color:"ind--blue"},
  { title: "Skilled iOS Experts", icon: "/media/icons/app-development.png", desc: "Our team is proficient in Apple’s development tools that help your app to be in line with the newest standards both technically and functionally.", color:"ind--purple"},
  { title: "User-Focused Design", icon: "/media/icons/online-analysis.png", desc: "The interfaces we produce are not only easy-going in terms of use, eye-captivating, and user journey optimized, but also they assure the smoothness of the latter.", color:"ind--mint"},
  { title: "Clear and Timely Communication", icon: "/media/icons/technical-support.png", desc: "We provide support which is extended to regular updates and decision-making process participation from your side and our ensuring that you are always kept in the loop.", color:"ind--cyan"},
    { title: "Ongoing Support & Maintenance", icon: "/media/icons/app-settings.png", desc: "Even when your app is out of the box, we don’t vanish. We are still there with you and your app to bring new features, fix bugs, and improve the speed and smoothness of the app.", color:"ind--orange"},
//   { title: "", icon: "/media/icons/backend.png", desc: "", color:"ind--teal"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Goal-Oriented Development", icon: "/media/icons/idea (1).png", desc: "Development and implementation of apps is done by us in such a way that these programs become the direct means of business, whether it is customer engagement, sales, or internal operations." , color:"ind--blue"},
  { title: "Skilled iOS Experts", icon: "/media/icons/app-development.png", desc: "Our team is proficient in Apple’s development tools that help your app to be in line with the newest standards both technically and functionally.", color:"ind--purple"},
  { title: "User-Focused Design", icon: "/media/icons/online-analysis.png", desc: "The interfaces we produce are not only easy-going in terms of use, eye-captivating, and user journey optimized, but also they assure the smoothness of the latter.", color:"ind--mint"},
  { title: "Clear and Timely Communication", icon: "/media/icons/technical-support.png", desc: "We provide support which is extended to regular updates and decision-making process participation from your side and our ensuring that you are always kept in the loop.", color:"ind--cyan"},
    { title: "Ongoing Support & Maintenance", icon: "/media/icons/app-settings.png", desc: "Even when your app is out of the box, we don’t vanish. We are still there with you and your app to bring new features, fix bugs, and improve the speed and smoothness of the app.", color:"ind--orange"},
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
      <h2 className={styles.sec3Heading}>What Can You Expect from Us?</h2>
        <p className={styles.sec3Text}>
        At Nakshatra Namaha Creations, we are more than app developers — our objective is to produce mobile solutions that really become an aid to your business. The way we do it is a combination of the required technical skills, out-of-the-box thinking, and commutation with you that helps to deliver your iOS app not only as a tool of work but also as an intuitive and engaging one. Whatever it is, starting from scratch or upgrading an existing app, we are with you at every step of the way to the achievement of the desired results.
        </p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
