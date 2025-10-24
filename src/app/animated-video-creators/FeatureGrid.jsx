"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
//   {
//     title: "iOS App Development",
//     desc: "High-performance applications for Apple devices.",
//     img: "/media/icons/apple (1).png",
//   },
  {
    title: "Planning & Research",
    desc: "We start by understanding your goals, target audience, and brand values to build the foundation for your Animated Video Production project.",
     img: "/media/icons/idea (1).png",
  },
  {
    title: "Design & Development",
    desc: "Our team creates characters, storyboards, and environments each element carefully crafted as part of our Animated Video Production process.",
    img: "/media/icons/online-analysis.png",
  },
  {
    title: "Final Edits & Delivery",
    desc: "We add sound design, perform revisions, and finalize export formats. Every frame in your Animated Video Production meets quality standards before delivery.",
    img: "/media/icons/mobile.png",
  },
//   {
//     title: "App Maintenance & Updates",
//     desc: "Continuous support to keep your app running smoothly.",
//     img: "/media/icons/technical-support.png",
//   },
  
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
  Our Animated Video Creation Process
</h2>
<p className={styles.sec3Text} style={{ width: "100%", margin: "0 auto" }}>
  We follow a structured and flexible Animated Video Production workflow that ensures clarity, collaboration, and timely delivery.
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
