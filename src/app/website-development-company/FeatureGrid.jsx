"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Custom Website Development",
    desc: "Robust, scalable websites tailored to your business goals using modern stacks and best practices.",
    img: "/media/icons/mobile.png",
  },
  {
    title: "UX/UI Design & Prototyping",
    desc: "User-first interfaces, wireframes, and clickable prototypes that turn visitors into customers.",
     img: "/media/icons/ui.png",
  },
  {
    title: "Responsive & Mobile-First",
    desc: "Pixel-perfect layouts that adapt to every device for faster loading and better engagement.",
    img: "/media/icons/smartphone.png",
  },
  {
    title: "CMS & Headless Builds",
    desc: "Easy content management with WordPress or headless CMS (Strapi, Sanity) for speed and flexibility.",
    img: "/media/icons/cms.png",
  },
  {
    title: "E-commerce Solutions",
    desc: "Conversion-ready storefronts with Shopify or WooCommerce, secure checkout, and key integrations.",
    img: "/media/icons/shopping.png",
  },
  {
    title: "Performance, SEO & CWV",
    desc: "Core Web Vitals, technical SEO, schema, and image optimization to rank higher and load faster.",
   img: "/media/icons/search-engine-optimization.png",
  },
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          WEBSITE DEVELOPMENT SERVICES
        </h2>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <h4 className={styles.title}>{f.title}</h4>
              <p className={styles.desc}>{f.desc}</p>
              <br />
              
              <div className={styles.imgWrap}>
                <Image
                  src={f.img}
                  alt={f.title}
                  width={80}
                  height={80}
                  className={styles.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
