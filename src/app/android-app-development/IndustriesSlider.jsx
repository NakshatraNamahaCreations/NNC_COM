"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Focused Business Understanding", icon: "/media/icons/idea (1).png", desc: "We understand the goal behind your business and we build the app accordingly to serve the outcomes which can be measured in terms of business." , color:"ind--blue"},
  { title: "Experienced Android Developers", icon: "/media/icons/app-development.png", desc: "Our team members are highly skilled in Java, Kotlin, Android SDKs, and also they keep using the newest tools to guarantee the standard of the work.", color:"ind--purple"},
  { title: "Clean UI/UX Execution", icon: "/media/icons/ui.png", desc: "We architect user-friendly interfaces that are attractive, and because of our user-centric approach, these interfaces are easy to use.", color:"ind--mint"},
  { title: "Collaborative Process", icon: "/media/icons/onboarding.png", desc: "You are always a part of the project whereby there is organizing of communication, involvement, and updates with your help.", color:"ind--cyan"},
    { title: "Long-Term Support", icon: "/media/icons/technical-support.png", desc: "We are with you not only at the point of the first release but also through the software updates, scaling, and changes where we work together to keep your app evolving and performing.", color:"ind--orange"},
//   { title: "", icon: "/media/icons/backend.png", desc: "", color:"ind--teal"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Focused Business Understanding", icon: "/media/icons/idea (1).png", desc: "We understand the goal behind your business and we build the app accordingly to serve the outcomes which can be measured in terms of business." , color:"ind--blue"},
  { title: "Experienced Android Developers", icon: "/media/icons/app-development.png", desc: "Our team members are highly skilled in Java, Kotlin, Android SDKs, and also they keep using the newest tools to guarantee the standard of the work.", color:"ind--purple"},
  { title: "Clean UI/UX Execution", icon: "/media/icons/ui.png", desc: "We architect user-friendly interfaces that are attractive, and because of our user-centric approach, these interfaces are easy to use.", color:"ind--mint"},
  { title: "Collaborative Process", icon: "/media/icons/onboarding.png", desc: "You are always a part of the project whereby there is organizing of communication, involvement, and updates with your help.", color:"ind--cyan"},
    { title: "Long-Term Support", icon: "/media/icons/technical-support.png", desc: "We are with you not only at the point of the first release but also through the software updates, scaling, and changes where we work together to keep your app evolving and performing.", color:"ind--orange"},
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
      <h2 className={styles.sec3Heading}>What can you expect from Nakshatra Namaha Creations?</h2>
        <p className={styles.sec3Text}>
        At Nakshatra Namaha Creations, we blend our experience, thoughtful planning, and technical expertise to create Android apps that are not only business-friendly on the day of the launch but also for a long period after. If you are a startup or an existing brand, we don't lose our focus on developing dependable, scalable, and customer-friendly apps that will be of assistance to your business growth.
        </p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
