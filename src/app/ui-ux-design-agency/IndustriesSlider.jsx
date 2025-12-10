"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Strategic​‍​‌‍​‍‌​‍​‌‍​‍‌ Thinking First", icon: "/media/icons/idea (1).png", desc: "Our UI/UX Design Agency is the one that businesses rely on to design with purpose. Before putting anything to design, we look at goals, user patterns, and brand direction." , color:"ind--blue"},
  { title: "User-Centric Approach", icon: "/media/icons/app-development.png", desc: "Every design choice is a reflection of empathy and clarity which is the basic understanding of a strong UI/UX Design Agency. We concentrate on usability, easing, and leading users to the most important actions.", color:"ind--purple"},
  { title: "Cross-Platform Consistency", icon: "/media/icons/ui.png", desc: "With us, your branding will be cohesive looking on all the different devices. Being a professional UI/UX Design Agency, consistency is what we put first.", color:"ind--mint"},
  { title: "Developer-Friendly Handoffs", icon: "/media/icons/responsive-design.png", desc: "It is our organized files that the developers appreciate and this is what sets a great UI/UX Design Agency apart from the rest. We offer spacing guides, color tokens, and component sets that are ready for building.", color:"ind--cyan"},
    { title: "Transparent Revisions", icon: "/media/icons/technical-support.png", desc: "We engage with each other closely at every phase. A well-functioning UI/UX team agency acknowledges the value of communication which is not only frequent but also transparent. You give the go-ahead for each milestone before proceeding.", color:"ind--orange"},
  { title: "Focus on Results", icon: "/media/icons/profit-growth.png", desc: "Your business goals are the ones that direct our design strategy. As a performance-oriented UI/UX Design Agency, we operate through measurable results. These are the goals that we set: lower bounce rates, higher conversions, stronger engagement.", color:"ind--teal"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Strategic​‍​‌‍​‍‌​‍​‌‍​‍‌ Thinking First", icon: "/media/icons/idea (1).png", desc: "Our UI/UX Design Agency is the one that businesses rely on to design with purpose. Before putting anything to design, we look at goals, user patterns, and brand direction." , color:"ind--blue"},
  { title: "User-Centric Approach", icon: "/media/icons/app-development.png", desc: "Every design choice is a reflection of empathy and clarity which is the basic understanding of a strong UI/UX Design Agency. We concentrate on usability, easing, and leading users to the most important actions.", color:"ind--purple"},
  { title: "Cross-Platform Consistency", icon: "/media/icons/ui.png", desc: "With us, your branding will be cohesive looking on all the different devices. Being a professional UI/UX Design Agency, consistency is what we put first.", color:"ind--mint"},
  { title: "Developer-Friendly Handoffs", icon: "/media/icons/responsive-design.png", desc: "It is our organized files that the developers appreciate and this is what sets a great UI/UX Design Agency apart from the rest. We offer spacing guides, color tokens, and component sets that are ready for building.", color:"ind--cyan"},
    { title: "Transparent Revisions", icon: "/media/icons/technical-support.png", desc: "We engage with each other closely at every phase. A well-functioning UI/UX team agency acknowledges the value of communication which is not only frequent but also transparent. You give the go-ahead for each milestone before proceeding.", color:"ind--orange"},
  { title: "Focus on Results", icon: "/media/icons/profit-growth.png", desc: "Your business goals are the ones that direct our design strategy. As a performance-oriented UI/UX Design Agency, we operate through measurable results. These are the goals that we set: lower bounce rates, higher conversions, stronger engagement.", color:"ind--teal"},
 
 
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
      <h2 className={styles.sec3Heading}>Our UI/UX Process — The Method Behind Our Design Expertise</h2>
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
