"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Faster​‍​‌‍​‍‌​‍​‌‍​‍‌ Development & Launch", icon: "/media/icons/app-settings.png", desc: "The app with shared code for Android and iOS will be in your hand of market quicker and with less development challenges." , color:"ind--blue"},
  { title: "Cost Efficiency", icon: "/media/icons/app-development.png", desc: "One team + one codebase = a great deal of money can be saved both in development and in the product's maintenance.", color:"ind--purple"},
  { title: "Native-Like Performance", icon: "/media/icons/ui.png", desc: "React Native implements real native components, thus, it can deliver fast performance and smooth animations.", color:"ind--mint"},
  { title: "Easy Maintenance & Updates", icon: "/media/icons/responsive-design.png", desc: "It is possible to perform updates on all platforms at the same time thereby, saving the effort and time.", color:"ind--cyan"},
    { title: "Rich Ecosystem & Community Support", icon: "/media/icons/technical-support.png", desc: "React Native is a very attractive proposition for developers as it is a project of Meta and has the support of a huge community that provides an unlimited array of tools, plugins, and solutions for the fast development of an ​‍​‌‍​‍‌​‍​‌‍​‍‌app.", color:"ind--orange"},
//   { title: "", icon: "/media/icons/backend.png", desc: "", color:"ind--teal"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
 { title: "Faster​‍​‌‍​‍‌​‍​‌‍​‍‌ Development & Launch", icon: "/media/icons/app-settings.png", desc: "The app with shared code for Android and iOS will be in your hand of market quicker and with less development challenges." , color:"ind--blue"},
  { title: "Cost Efficiency", icon: "/media/icons/app-development.png", desc: "One team + one codebase = a great deal of money can be saved both in development and in the product's maintenance.", color:"ind--purple"},
  { title: "Native-Like Performance", icon: "/media/icons/ui.png", desc: "React Native implements real native components, thus, it can deliver fast performance and smooth animations.", color:"ind--mint"},
  { title: "Easy Maintenance & Updates", icon: "/media/icons/responsive-design.png", desc: "It is possible to perform updates on all platforms at the same time thereby, saving the effort and time.", color:"ind--cyan"},
    { title: "Rich Ecosystem & Community Support", icon: "/media/icons/technical-support.png", desc: "React Native is a very attractive proposition for developers as it is a project of Meta and has the support of a huge community that provides an unlimited array of tools, plugins, and solutions for the fast development of an ​‍​‌‍​‍‌​‍​‌‍​‍‌app.", color:"ind--orange"},

 
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
      <h2 className={styles.sec3Heading}>Benefits of Having a React Native Mobile App for Your Business</h2>
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
