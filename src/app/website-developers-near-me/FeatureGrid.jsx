"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Business Website Development",
    desc: "Our experienced website developers near me create responsive, user-friendly business websites designed to highlight your brand and generate leads.",
    img: "/media/icons/mobile.png",
  },
  {
    title: "E-Commerce Website Development",
    desc: "Work with website developers near me to build secure online stores with smooth checkout experiences, product catalogs, and fast-loading product pages.",
      img: "/media/icons/shopping.png",
  },
  {
    title: "CMS Website Solutions",
    desc: "We offer flexible CMS-based websites through website developers near me, allowing you to manage and update your content without technical challenges.",
   img: "/media/icons/cms.png",
  },
  {
    title: "Custom Web Applications",
    desc: "Get powerful and scalable custom solutions with the help of website developers near me who understand your unique business requirements.",
    img: "/media/icons//online-analysis.png",
  },
  {
    title: "Website Redesign & Upgrades",
    desc: "Our professional website developers near me revamp outdated websites with modern designs, improved navigation, and better performance.",
    img: "/media/icons/responsive-design.png",
  },
//   {
//     title: "Performance, SEO & CWV",
//     desc: "Core Web Vitals, technical SEO, schema, and image optimization to rank higher and load faster.",
//    img: "/media/icons/search-engine-optimization.png",
//   },
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
         Services We Provide
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
