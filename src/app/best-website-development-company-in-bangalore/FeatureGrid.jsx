"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [

  {
    title: "New Business Website Development",
    desc: "Designed for startups and growing businesses that need a professional online presence to attract customers and build trust from day one.",
     img: "/media/icons/idea (1).png",
  },
   {
    title: "Website Redesign & Revamp Services",
    desc: "If your current website is slow, outdated, or not converting, a strategic revamp improves performance, structure, and user engagement.",
    img: "/media/icons/online-analysis.png",
  },
   {
    title: "Custom Website Development",
    desc: "Tailored development solutions for businesses that need specific features, integrations, or workflows aligned with operations.",
  img: "/media/icons/mobile.png",
  },
   {
    title: "CMS-Based Website Development",
    desc: "Flexible websites that allow business owners to manage content independently while maintaining security and performance.",
    img: "/media/icons/cms.png",
  },
   {
    title: "Conversion-Driven Website Development",
    desc: "Websites structured with enquiry-focused layouts, strong calls-to-action, and clear service positioning",
  img: "/media/icons/profit-growth.png",
  },

];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
Business-Focused Website Development Services
</h2>
<p className={styles.sec3Text} style={{ width: "100%", margin: "0 auto" }}>
The best website development company in Bangalore offers services that align with real business needs instead of generic packages.
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
