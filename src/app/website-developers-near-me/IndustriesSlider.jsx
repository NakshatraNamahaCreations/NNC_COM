"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Dynamic Website Development", icon: "/media/icons/ux.png", desc: "Our web development agency specializes in dynamic websites that basically allow realtime updates, interactive features, and customer-friendly customization. These websites, powered by stable backend systems, are perfect for enterprises that seek flexibility, scalability, and improved relationships with their clients." , color:"ind--blue"},
  { title: "Responsive Website Development", icon: "/media/icons/web.png", desc: "We as a reliable web solution company work out and present the most effective responsive websites that adapt to any device: whether it is a desktop, a tablet, or a smartphone. By embracing a mobile-first strategy, we guarantee that your site will give the same high level of performance and easy navigation for all screen sizes, thus making it a convenient one.", color:"ind--purple"},
  { title: "Professional Website Development", icon: "/media/icons/online-analysis.png", desc: "Our website development company starts with designing the brand identity of your business as the center of creativity and practicality to deliver professional websites. We provide you with the most effective ways to attract visitors and engage of them through our platform designs and people-conversion features.", color:"ind--mint"},
  { title: "E-commerce Website Development", icon: "/media/icons/shopping.png", desc: "We are a web development company with the mission of supporting business in coming up with excellent, robust e-commerce sites. Everything from product catalogs to payment gateways of higher security are components of modern online stores, aimed at generating higher turnover rates and providing shopper's delight in the process of the sale.", color:"ind--cyan"},
    { title: "Corporate Website Development", icon: "/media/icons/profit-growth.png", desc: "Our web design company builds corporate websites that reflect the image and power of the company. These platforms are designed to express your brand's ideologies, at the same time making the company attractive to potential clients and generally establishing a sound digital presence in the competition industry.", color:"ind--orange"},
  { title: "WordPress Website Development", icon: "/media/icons/wordpress.png", desc: "As the most outstanding website development company, we provide WordPress solutions that are very versatile, user-friendly, and SEO-friendly. We tailor WordPress to be in harmony with your business goals whether you are building a blog, portfolio, or business website.", color:"ind--indigo"},
  { title: "Static Website Development", icon: "/media/icons/web.png", desc: "Our web agencies in general develop static sites which are extremely fast, reliable, and cost-effective. Ideal for companies whose primary need is the creation of a straightforward but still professional method of online representation, static websites guarantee both speed and dependability without the complications of software management.", color:"ind--teal"},
  { title: "Industrial Website Development", icon: "/media/icons/growth-chart.png", desc: "As part of the services of our website development company, we focus on industrial website design for the usability of the product, exhibition, and the technical part of integration as well. These websites can help industrial companies have effective communication with partners, distributors as well as customers.", color:"ind--pink"},
    { title: "SEO-Friendly Website Development", icon: "/media/icons/search-engine-optimization.png", desc: "Every project completed by our web solution company is a search engine-friendly one with neat codes, enhanced speed, and well-organized layouts. This step improves a company's chances of ranking better on search engines, and thereby attracting qualified leads in the amount more than before.", color:"ind--orange"},
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
     { title: "SEO-Friendly Website Development", icon: "/media/icons/search-engine-optimization.png", desc: "Every project completed by our web solution company is a search engine-friendly one with neat codes, enhanced speed, and well-organized layouts. This step improves a company's chances of ranking better on search engines, and thereby attracting qualified leads in the amount more than before.", color:"ind--orange"},

    { title: "Industrial Website Development", icon: "/media/icons/growth-chart.png", desc: "As part of the services of our website development company, we focus on industrial website design for the usability of the product, exhibition, and the technical part of integration as well. These websites can help industrial companies have effective communication with partners, distributors as well as customers.", color:"ind--pink"},
  
     { title: "Static Website Development", icon: "/media/icons/web.png", desc: "Our web agencies in general develop static sites which are extremely fast, reliable, and cost-effective. Ideal for companies whose primary need is the creation of a straightforward but still professional method of online representation, static websites guarantee both speed and dependability without the complications of software management.", color:"ind--teal"},
 
      { title: "WordPress Website Development", icon: "/media/icons/wordpress.png", desc: "As the most outstanding website development company, we provide WordPress solutions that are very versatile, user-friendly, and SEO-friendly. We tailor WordPress to be in harmony with your business goals whether you are building a blog, portfolio, or business website.", color:"ind--indigo"},
 
       { title: "Corporate Website Development", icon: "/media/icons/profit-growth.png", desc: "Our web design company builds corporate websites that reflect the image and power of the company. These platforms are designed to express your brand's ideologies, at the same time making the company attractive to potential clients and generally establishing a sound digital presence in the competition industry.", color:"ind--orange"},
 
      { title: "E-commerce Website Development", icon: "/media/icons/shopping.png", desc: "We are a web development company with the mission of supporting business in coming up with excellent, robust e-commerce sites. Everything from product catalogs to payment gateways of higher security are components of modern online stores, aimed at generating higher turnover rates and providing shopper's delight in the process of the sale.", color:"ind--cyan"},

     { title: "Professional Website Development", icon: "/media/icons/online-analysis.png", desc: "Our website development company starts with designing the brand identity of your business as the center of creativity and practicality to deliver professional websites. We provide you with the most effective ways to attract visitors and engage of them through our platform designs and people-conversion features.", color:"ind--mint"},
  
     { title: "Responsive Website Development", icon: "/media/icons/web.png", desc: "We as a reliable web solution company work out and present the most effective responsive websites that adapt to any device: whether it is a desktop, a tablet, or a smartphone. By embracing a mobile-first strategy, we guarantee that your site will give the same high level of performance and easy navigation for all screen sizes, thus making it a convenient one.", color:"ind--purple"},
 
 { title: "Dynamic Website Development", icon: "/media/icons/ui.png", desc: "Our web development agency specializes in dynamic websites that basically allow realtime updates, interactive features, and customer-friendly customization. These websites, powered by stable backend systems, are perfect for enterprises that seek flexibility, scalability, and improved relationships with their clients." , color:"ind--blue"},

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
      <h2 className={styles.sec3Heading}>Our Services – Website Development Company</h2>
<p className={styles.sec3Text}>
  We specialize in creating dynamic, responsive, and user-friendly websites that help businesses grow online. 
  From custom development and CMS integration to e-commerce solutions and performance optimization, 
  our services are designed to deliver websites that not only look great but also perform seamlessly across all devices.
</p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
