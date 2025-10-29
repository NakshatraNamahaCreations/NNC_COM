"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Collaborative Approach",
    desc: "Transparent communication throughout every stage of Search Engine Optimisation.",
    img: "/media/icons/report.png",
  },

  {
    title: "Custom Strategies",
    desc: " Each SEO plan is crafted for your unique goals never generic.",
    img: "/media/icons/ux.png",
  },
  {
    title: "Transparent Metrics",
    desc: "Monthly reports and dashboards for easy tracking.",
    img: "/media/icons/growth-chart.png",
  },
  {
    title: "Global and Multilingual SEO:",
    desc: "Our Search Engine Optimisation extends to both local and international markets.",
    img: "/media/icons/languages.png",
  },
    {
    title: "Continuous Optimization",
    desc: "We adapt your Search Engine Optimisation plan based on algorithm changes and trends",
    img: "/media/icons/online-analysis.png",
  },

];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
What Can You Expect from Nakshatra Namaha Creations?
</h2>
<p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
We deliver more than rankings — we deliver consistent progress through quality Search Engine Optimisation practices.
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
