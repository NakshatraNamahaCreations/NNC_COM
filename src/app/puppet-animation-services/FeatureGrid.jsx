"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Emotion-Driven Storytelling",
    desc: "Puppet animation brings characters to life with expressive movements and handcrafted details, helping brands convey emotions and stories in a memorable way.",
    img: "/media/icons/reading-book.png",
  },
  {
    title: "Unique Visual Appeal",
    desc: "Our puppet animation services create a distinctive visual style that stands out from generic animations, making your brand instantly recognizable.",
    img: "/media/icons/cpm.png",
  },
  {
    title: "Stronger Audience Connection",
    desc: "With relatable characters and tactile visuals, puppet animation builds a deeper emotional connection with audiences across age groups.",
    img: "/media/icons/target-audience.png",
  },
  {
    title: "Versatile Across Platforms",
    desc: "Puppet animation works seamlessly for ads, explainer videos, social media content, educational videos, and brand storytelling campaigns.",
    img: "/media/icons/ux.png",
  },
  {
    title: "Timeless & Engaging",
    desc: "Unlike trend-driven visuals, puppet animation has a timeless charm that keeps content engaging and relevant for years.",
    img: "/media/icons/online-analysis.png",
  },
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-2">
          Benefits of Puppet Animation
        </h2>

        <p
          className={styles.sec3Text}
          style={{ width: "70%", margin: "0 auto" }}
        >
          Puppet animation combines craftsmanship and storytelling to create visually rich content that captures attention, builds emotional bonds, and leaves a lasting impact.
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
