"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Business Website Development", icon: "/media/icons/ux.png", desc: "A Website Development Agency constructs typical business websites visually appealing to the target audience and at the same time communicate the fortes of the business with sound logic and trust. Such sites concentrate on brand messages, lead generation, and user-friendly navigation making it easy for the users to grasp what your business is all about in a short time." , color:"ind--blue"},
  { title: "Corporate Website Development", icon: "/media/icons/web.png", desc: "For such organizations as have complicated structures, a Website Development Agency builds corporate websites that are capable of handling numerous pages, departments, and content types while still being consistent and efficient in terms of performance.", color:"ind--purple"},
  { title: "E-commerce Website Development", icon: "/media/icons/shopping.png", desc: " A focused Website Development Agency can put together attractive and highly-functioning online shopping platforms that effortlessly lead the user through product discovery and checkout while also being expandable in the long run, i.e., as your store grows, the operations will remain smooth.", color:"ind--mint"},
  { title: "CMS-Based Website Development", icon: "/media/icons/cms.png", desc: "An up-to-date Website Development Agency collaborates with content management systems that are developed with the thought of enabling teams to update pages, blogs, and media independently thus making content management very easy and efficient", color:"ind--cyan"},
    { title: "Custom Website Development", icon: "/media/icons/growth-chart.png", desc: "If your needs can't be met by a template, a Website Development Agency will create a tailor-made solution designed specifically for your unique workflows, integrations, and business requirements without giving you the inconvenience of unnecessary ​‍​‌‍​‍‌​‍​‌‍​‍‌limitations", color:"ind--orange"},
  { title: "Landing Page  Development", icon: "/media/icons/profit-growth.png", desc: "A Website Development Agency creates high-impact landing pages built specifically for campaigns, product launches, and lead generation. These pages are structured to guide visitors toward action through clear messaging, fast load times, and conversion-optimized layouts.", color:"ind--indigo"},
//   { title: "", icon: "/media/icons/web.png", desc: "", color:"ind--teal"},
//   { title: "", icon: "/media/icons/growth-chart.png", desc: "", color:"ind--pink"},
//     { title: "", icon: "/media/icons/search-engine-optimization.png", desc: "", color:"ind--orange"},
];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
     { title: "Business Website Development", icon: "/media/icons/ux.png", desc: "A Website Development Agency constructs typical business websites visually appealing to the target audience and at the same time communicate the fortes of the business with sound logic and trust. Such sites concentrate on brand messages, lead generation, and user-friendly navigation making it easy for the users to grasp what your business is all about in a short time." , color:"ind--blue"},
  { title: "Corporate Website Development", icon: "/media/icons/web.png", desc: "For such organizations as have complicated structures, a Website Development Agency builds corporate websites that are capable of handling numerous pages, departments, and content types while still being consistent and efficient in terms of performance.", color:"ind--purple"},
  { title: "E-commerce Website Development", icon: "/media/icons/shopping.png", desc: " A focused Website Development Agency can put together attractive and highly-functioning online shopping platforms that effortlessly lead the user through product discovery and checkout while also being expandable in the long run, i.e., as your store grows, the operations will remain smooth.", color:"ind--mint"},
  { title: "CMS-Based Website Development", icon: "/media/icons/cms.png", desc: "An up-to-date Website Development Agency collaborates with content management systems that are developed with the thought of enabling teams to update pages, blogs, and media independently thus making content management very easy and efficient", color:"ind--cyan"},
    { title: "Custom Website Development", icon: "/media/icons/growth-chart.png", desc: "If your needs can't be met by a template, a Website Development Agency will create a tailor-made solution designed specifically for your unique workflows, integrations, and business requirements without giving you the inconvenience of unnecessary ​‍​‌‍​‍‌​‍​‌‍​‍‌limitations", color:"ind--orange"},
  { title: "Landing Page  Development", icon: "/media/icons/profit-growth.png", desc: "A Website Development Agency creates high-impact landing pages built specifically for campaigns, product launches, and lead generation. These pages are structured to guide visitors toward action through clear messaging, fast load times, and conversion-optimized layouts.", color:"ind--indigo"},
// 
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
      <h2 className={styles.sec3Heading}></h2>
<p className={styles.sec3Text}>
 Being​‍​‌‍​‍‌​‍​‌‍​‍‌ a full-service Website Development Agency, we provide end-to-end solutions to businesses at various stages of their growth. In any case, whether you are starting a new brand or elevating an existing platform, our offerings are created to be flexible with your requirements.
</p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
