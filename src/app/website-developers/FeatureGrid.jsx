"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Discovery & Strategy",
    desc: "We start by understanding your business objectives, target audience, and project scope to build a clear roadmap for success.",
    img: "/media/icons/mobile.png",
  },
  {
    title: "Design & Wireframing",
    desc: "Our creative team collaborates closely to create user-focused designs and detailed wireframes, ensuring a seamless transition from concept to development.",
      img: "/media/icons/growth-chart.png",
  },
  {
    title: "Development & Integration",
    desc: "The technical team brings the designs to life by writing clean, efficient code and integrating the necessary tools, features, and APIs.",
   img: "/media/icons/web.png",
  },
  {
    title: "Testing & Quality Checks",
    desc: "Rigorous testing is carried out to identify and resolve any issues, guaranteeing optimal performance, responsiveness, and security before launch.",
    img: "/media/icons/online-analysis.png",
  },
  {
    title: "Launch & Post-Launch Support",
    desc: "Once the site is live, we provide ongoing support, updates, and performance monitoring to ensure it continues to deliver a reliable user experience.",
    img: "/media/icons/technical-support.png",
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
         Our Proven Development Process
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
