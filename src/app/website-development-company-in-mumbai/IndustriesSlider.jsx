"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
//   { title: "Dynamic Website Development", icon: "/media/icons/ux.png", desc: "Our web development agency specializes in dynamic websites that basically allow realtime updates, interactive features, and customer-friendly customization. These websites, powered by stable backend systems, are perfect for enterprises that seek flexibility, scalability, and improved relationships with their clients." , color:"ind--blue"},
  { title: "Responsive Website Development", icon: "/media/icons/web.png", desc: "We, as a dependable web solution provider in Mumbai, are responsible for the conception of responsive websites that can be adjusted to any device — desktop, tablet, or smartphone. The success of our mobile-first scheme guarantees no delay in customer service and smooth browsing, thus providing users with the same good quality of the customer journey on all screens.", color:"ind--purple"},
  { title: "Professional Website Development", icon: "/media/icons/online-analysis.png", desc: "Our website development company in Mumbai believes in the integration of art and practicality. We create professional websites that exhibit your brand identity, allure visitors, and produce the expected outcome by user-centric layouts and conversion-focused features.", color:"ind--mint"},

    { title: "Corporate Website Development", icon: "/media/icons/profit-growth.png", desc: "Nakshatra Namaha Creations is engaged in creating corporate websites that give a vibe of professionalism and reliability. We, as a corporate website development company in Mumbai, design platforms that convey the message of your brand values, draw the attention of investors, and deepen your company’s digital trustworthiness.", color:"ind--orange"},
  { title: "WordPress Website Development", icon: "/media/icons/wordpress.png", desc: "We, being a result-oriented WordPress website development company in Mumbai, create custom WordPress products that cater to the most. They are versatile for users, and are SEO-ready. Be it a portfolio, blog, or full business website, we modify WordPress to meet your business goals and to improve results.", color:"ind--indigo"},
  { title: "Static Website Development", icon: "/media/icons/web.png", desc: "Our static website development company in Mumbai is committed to building fast, reliable, and economical static websites — a great platform for companies that prefer a straightforward yet stylish online representation without having to deal with complex backend management.", color:"ind--teal"},
  { title: "Industrial Website Development", icon: "/media/icons/growth-chart.png", desc: "Moreover, Nakshatra Namaha Creations is one of the most trusted industrial website development companies in Mumbai. We develop websites that make it easy for manufacturers, distributors, and industrial firms to display products, technologies, and partnerships to the public in an efficient manner.", color:"ind--pink"},
    { title: "SEO-Friendly Website Development", icon: "/media/icons/search-engine-optimization.png", desc: "All projects handled by our Mumbai-based website development company are designed with complete SEO setups. The work includes writing clean code, optimizing images, and providing very quick performance — all of which make it easier for your business to get better rankings and attract more organic visitors.", color:"ind--orange"},
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Responsive Website Development", icon: "/media/icons/web.png", desc: "We, as a dependable web solution provider in Mumbai, are responsible for the conception of responsive websites that can be adjusted to any device — desktop, tablet, or smartphone. The success of our mobile-first scheme guarantees no delay in customer service and smooth browsing, thus providing users with the same good quality of the customer journey on all screens.", color:"ind--purple"},
  { title: "Professional Website Development", icon: "/media/icons/online-analysis.png", desc: "Our website development company in Mumbai believes in the integration of art and practicality. We create professional websites that exhibit your brand identity, allure visitors, and produce the expected outcome by user-centric layouts and conversion-focused features.", color:"ind--mint"},

    { title: "Corporate Website Development", icon: "/media/icons/profit-growth.png", desc: "Nakshatra Namaha Creations is engaged in creating corporate websites that give a vibe of professionalism and reliability. We, as a corporate website development company in Mumbai, design platforms that convey the message of your brand values, draw the attention of investors, and deepen your company’s digital trustworthiness.", color:"ind--orange"},
  { title: "WordPress Website Development", icon: "/media/icons/wordpress.png", desc: "We, being a result-oriented WordPress website development company in Mumbai, create custom WordPress products that cater to the most. They are versatile for users, and are SEO-ready. Be it a portfolio, blog, or full business website, we modify WordPress to meet your business goals and to improve results.", color:"ind--indigo"},
  { title: "Static Website Development", icon: "/media/icons/web.png", desc: "Our static website development company in Mumbai is committed to building fast, reliable, and economical static websites — a great platform for companies that prefer a straightforward yet stylish online representation without having to deal with complex backend management.", color:"ind--teal"},
  { title: "Industrial Website Development", icon: "/media/icons/growth-chart.png", desc: "Moreover, Nakshatra Namaha Creations is one of the most trusted industrial website development companies in Mumbai. We develop websites that make it easy for manufacturers, distributors, and industrial firms to display products, technologies, and partnerships to the public in an efficient manner.", color:"ind--pink"},
    { title: "SEO-Friendly Website Development", icon: "/media/icons/search-engine-optimization.png", desc: "All projects handled by our Mumbai-based website development company are designed with complete SEO setups. The work includes writing clean code, optimizing images, and providing very quick performance — all of which make it easier for your business to get better rankings and attract more organic visitors.", color:"ind--orange"},
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
      <h2 className={styles.sec3Heading}>Our Services – Website Development Company in Mumbai</h2>
    <br />

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
