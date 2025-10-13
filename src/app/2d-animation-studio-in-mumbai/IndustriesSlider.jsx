"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Explainer Videos", icon: "/media/icons/multimedia.png", desc: "Our 2D animation studio in Mumbai creatively simplifies complex concepts into short and visually rich explainer videos, which audiences can grasp instantly. Such videos are perfect for startups, SaaS products, and marketing campaigns." , color:"ind--blue"},
  { title: "Product Demo Videos", icon: "/media/icons/business.png", desc: "Animated product demos that we make are visually stunning that clearly show the features and benefits of the products. Being a top 2D animation company in Mumbai, we take brands on the road to communications that are simple and engaging and, thus, brand conversions.", color:"ind--purple"},
  { title: "Educational Animations", icon: "/media/icons/animate.png", desc: "Interactive and fun learning! Our 2D animation studio in Mumbai creates educational videos and e-learning modules for kids and adults that explain complicated subjects research with simplicity and keep them engaged.", color:"ind--mint"},
  { title: "Brand Storytelling", icon: "/media/icons/storytelling.png", desc: "We, being the top 2D animation studios in Mumbai, help brands to convey their brand story through animation - thus, connecting with the consumers emotionally and gaining their trust and loyalty.", color:"ind--cyan"},
    { title: "Advertising & Marketing Animations", icon: "/media/icons/bullhorn.png", desc: "Our 2D animation studio in Mumbai is capable of producing promotional animations that can be easily seen on social media, TV, and digital ads - thus, letting your campaign's reach and engagement level increase by grabbing the attention of the people.", color:"ind--orange"},

  { title: "Character Animation", icon: "/media/icons/canadian.png", desc: "The characters are one of the main aspects that bring the soul of the storytellings. Our 2D animation studio in Mumbai creates expressive, on-brand animated characters that captivate, inform, and emotionally engage your audience.", color:"ind--cyan"},

];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Explainer Videos", icon: "/media/icons/multimedia.png", desc: "Our 2D animation studio in Mumbai creatively simplifies complex concepts into short and visually rich explainer videos, which audiences can grasp instantly. Such videos are perfect for startups, SaaS products, and marketing campaigns." , color:"ind--blue"},
  { title: "Product Demo Videos", icon: "/media/icons/business.png", desc: "Animated product demos that we make are visually stunning that clearly show the features and benefits of the products. Being a top 2D animation company in Mumbai, we take brands on the road to communications that are simple and engaging and, thus, brand conversions.", color:"ind--purple"},
  { title: "Educational Animations", icon: "/media/icons/animate.png", desc: "Interactive and fun learning! Our 2D animation studio in Mumbai creates educational videos and e-learning modules for kids and adults that explain complicated subjects research with simplicity and keep them engaged.", color:"ind--mint"},
  { title: "Brand Storytelling", icon: "/media/icons/storytelling.png", desc: "We, being the top 2D animation studios in Mumbai, help brands to convey their brand story through animation - thus, connecting with the consumers emotionally and gaining their trust and loyalty.", color:"ind--cyan"},
    { title: "Advertising & Marketing Animations", icon: "/media/icons/bullhorn.png", desc: "Our 2D animation studio in Mumbai is capable of producing promotional animations that can be easily seen on social media, TV, and digital ads - thus, letting your campaign's reach and engagement level increase by grabbing the attention of the people.", color:"ind--orange"},

  { title: "Character Animation", icon: "/media/icons/canadian.png", desc: "The characters are one of the main aspects that bring the soul of the storytellings. Our 2D animation studio in Mumbai creates expressive, on-brand animated characters that captivate, inform, and emotionally engage your audience.", color:"ind--cyan"},

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
      <h2 className={styles.sec3Heading}>Services Offered by Our 2D Animation Studio in Mumbai</h2>
<p className={styles.sec3Text}>
  Nakshatra Namaha Creations, as a full-service 2D animation studio in Mumbai, delivers to you everything that you require to turn your narratives into visual ones - right from concept development to the final render.
</p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
