"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  {
    title: "Puppet Character Design",
    icon: "/media/icons/hand-puppet.png",
    desc: "We design expressive and visually engaging puppet characters that reflect your brand personality. From concept sketches to final models, every character is crafted to connect emotionally with your audience.",
    color: "ind--blue",
  },
  {
    title: "Custom Puppet Animation",
    icon: "/media/icons/puppet.png",
    desc: "Our puppet animation services are fully customized to your story and message. We create original animations from scratch, ensuring unique visuals and storytelling tailored to your campaign or brand goals.",
    color: "ind--purple",
  },
  {
    title: "Storyboarding & Concept Development",
    icon: "/media/icons/storytelling.png",
    desc: "Before animation begins, we develop clear storyboards and concepts that define flow, expressions, and scenes. This ensures the final puppet animation delivers a strong and engaging narrative.",
    color: "ind--mint",
  },
  {
    title: "Educational & Explainer Puppet Videos",
    icon: "/media/icons/education.png",
    desc: "We create puppet-based explainer and educational videos that simplify complex ideas. These animations are ideal for learning content, brand awareness, and audience engagement across platforms.",
    color: "ind--cyan",
  },
  {
    title: "Post-Production & Enhancement",
    icon: "/media/icons/production.png",
    desc: "Our work continues after animation completion. We provide editing, sound design, voice sync, and visual enhancements to ensure your puppet animation is polished and ready for distribution.",
    color: "ind--orange",
  },
];

// Bottom row (scrolls opposite)
const rowB = [
      {
    title: "Educational & Explainer Puppet Videos",
    icon: "/media/icons/education.png",
    desc: "We create puppet-based explainer and educational videos that simplify complex ideas. These animations are ideal for learning content, brand awareness, and audience engagement across platforms.",
    color: "ind--cyan",
  },
  {
    title: "Post-Production & Enhancement",
    icon: "/media/icons/production.png",
    desc: "Our work continues after animation completion. We provide editing, sound design, voice sync, and visual enhancements to ensure your puppet animation is polished and ready for distribution.",
    color: "ind--orange",
  },
   {
    title: "Puppet Character Design",
    icon: "/media/icons/hand-puppet.png",
    desc: "We design expressive and visually engaging puppet characters that reflect your brand personality. From concept sketches to final models, every character is crafted to connect emotionally with your audience.",
    color: "ind--blue",
  },
  {
    title: "Custom Puppet Animation",
    icon: "/media/icons/puppet.png",
    desc: "Our puppet animation services are fully customized to your story and message. We create original animations from scratch, ensuring unique visuals and storytelling tailored to your campaign or brand goals.",
    color: "ind--purple",
  },
  {
    title: "Storyboarding & Concept Development",
    icon: "/media/icons/storytelling.png",
    desc: "Before animation begins, we develop clear storyboards and concepts that define flow, expressions, and scenes. This ensures the final puppet animation delivers a strong and engaging narrative.",
    color: "ind--mint",
  },

];

function Row({ items, reverse = false }) {
  return (
    <div
      className={`${styles.marquee} ${
        reverse ? styles.marqueeB : styles.marqueeA
      }`}
    >
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
            <p className={`${styles.indDesc} ${styles.clamp3}`}>
              {card.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IndustriesSlider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(`.${styles.track}`)
        .forEach((el) => (el.style.animation = "none"));
    }
  }, []);

  return (
    <section className={styles.industries}>
      <div className="container">
        <h2 className={styles.sec3Heading}>
          Our Services on the Puppet Animation
        </h2>
        <p className={styles.sec3Text}>
          We specialize in a wide range of puppet animation services designed to
          bring stories to life. From creative planning to final delivery, our
          team ensures every animation is engaging, expressive, and impactful.
        </p>
        <br />
      </div>

      {/* Row A */}
      <Row items={rowA} />

      {/* Row B */}
      <Row items={rowB} reverse />
    </section>
  );
}
