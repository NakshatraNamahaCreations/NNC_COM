"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Discovery & Planning",
    desc: "Understanding the audience, objectives, and technical requirements is the very first step of any project with a Website Development Agency.",
    img: "/media/icons/idea (1).png",
  },
  {
    title: "Design & User Experience",
    desc: "An expert Website Development Agency designs the layouts that are not only visually attractive but also easy for the users to navigate.",
     img: "/media/icons/mobile.png",
  },
  {
    title: "Development & Integration",
    desc: "As an internally involved Website Development Agency, we write the code that is neat and can be easily scaled and at the same time.",
    img: "/media/icons/ux.png",
  },
  {
    title: "Testing & Optimization",
    desc: "In charge of the last pre-launch step, a considerate Website Development Agency tests the functionalities, responsiveness, loading speed, and compatibility to guarantee.",
    img: "/media/icons/growth-chart.png",
  },
  {
    title: "Launch & Ongoing Support",
    desc: "A trustworthy Website Development Agency is always there to assist the post-launch period with the staff working on further improvements, updates, and enhancements",
    img: "/media/icons/technical-support.png",
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
