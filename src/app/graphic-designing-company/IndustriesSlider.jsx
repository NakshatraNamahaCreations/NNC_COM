"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Logo Design", icon: "/media/icons/logo.png", desc: "Unique, brand-representative logos crafted by our Graphic Designing Company, Memorable, versatile, and tailored for all platforms, Delivered in digital and print formats." , color:"ind--blue"},
  { title: "Brochures & Flyers", icon: "/media/icons/brochure.png", desc: "Promotional designs that elevate your brand, High readability, professional composition, and brand tone consistency, Ready for print or digital use, managed by our Graphic Designing Company.", color:"ind--purple"},
  { title: "Posters Design", icon: "/media/icons/poster.png", desc: "Eye-catching layouts built by expert designers from our Graphic Designing Company, Clear CTAs, bold typography, and professional finish.", color:"ind--mint"},
  { title: "Presentation Design", icon: "/media/icons/presentation.png", desc: "Powerful decks that turn data into visual stories, Our Graphic Designing Company ensures consistency and visual harmony across slides.", color:"ind--cyan"},
    { title: "Web Design or UI/UX", icon: "/media/icons/ux.png", desc: "Interactive and user-centered design experiences, The Graphic Designing Company team develops wireframes, mockups, and complete interfaces.", color:"ind--orange"},
  { title: "Customized Design", icon: "/media/icons/responsive-design.png", desc: "Creative assets that reflect your brand’s uniqueness, Our Graphic Designing Company handles event creatives, merch, and promotional graphics with originality.", color:"ind--teal"},
 
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Logo Design", icon: "/media/icons/logo.png", desc: "Unique, brand-representative logos crafted by our Graphic Designing Company, Memorable, versatile, and tailored for all platforms, Delivered in digital and print formats." , color:"ind--blue"},
  { title: "Brochures & Flyers", icon: "/media/icons/brochure.png", desc: "Promotional designs that elevate your brand, High readability, professional composition, and brand tone consistency, Ready for print or digital use, managed by our Graphic Designing Company.", color:"ind--purple"},
  { title: "Posters Design", icon: "/media/icons/poster.png", desc: "Eye-catching layouts built by expert designers from our Graphic Designing Company, Clear CTAs, bold typography, and professional finish.", color:"ind--mint"},
  { title: "Presentation Design", icon: "/media/icons/presentation.png", desc: "Powerful decks that turn data into visual stories, Our Graphic Designing Company ensures consistency and visual harmony across slides.", color:"ind--cyan"},
    { title: "Web Design or UI/UX", icon: "/media/icons/ux.png", desc: "Interactive and user-centered design experiences, The Graphic Designing Company team develops wireframes, mockups, and complete interfaces.", color:"ind--orange"},
  { title: "Customized Design", icon: "/media/icons/responsive-design.png", desc: "Creative assets that reflect your brand’s uniqueness, Our Graphic Designing Company handles event creatives, merch, and promotional graphics with originality.", color:"ind--teal"},
 
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
      <h2 className={styles.sec3Heading}>Our Services on the Digital Marketing Agency</h2>
        <p className={styles.sec3Text}>
        Every design tells a story. Our Graphic Designing Company ensures that story is told with precision and creativity. From brand identity to customer perception, our design services connect ideas to impact.
        </p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
