"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Professional Expertise",
    desc: "Our mobile app development company in Mumbai combines designers, developers, and QA experts with deep technical know-how.",
    img: "/media/icons/briefcase.png",
  },
  {
    title: "Customized Solutions",
    desc: "We tailor apps around your workflow and audience.",
     img: "/media/icons/ui.png",
  },
  {
    title: "End-to-End Execution",
    desc: "All processes from concept to launch are handled by one team.",
    img: "/media/icons/smartphone.png",
  },
  {
    title: "Scalable Architecture",
    desc: "Every app from our mobile app development company in Mumbai is built to handle future upgrades and technologies.",
    img: "/media/icons/app-development.png",
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous testing guarantees a secure, glitch-free product.",
    img: "/media/icons/high-quality.png",
  },
  {
    title: "Post-Launch Maintenance",
    desc: "We provide long-term support to ensure performance and user satisfaction.",
   img: "/media/icons/technical-support.png",
  },
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-2">
       Benefits of Partnering with a Mobile App Development Company in Mumbai
        </h2> 
      <p className={styles.sec3Text}>
        Choosing a mobile app development company in Mumbai offers unmatched advantages over DIY or generic builders.
    </p>
<br />

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
