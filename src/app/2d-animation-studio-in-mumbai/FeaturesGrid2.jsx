"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";

const FEATURES = [
  {
    icon: "/media/icons/education.png",
    title: "Education",
     alt: "Education",
    desc: "Interactive lessons and training content.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/healthcare.png",
    title: "Healthcare",
     alt: "Healthcare",
    desc: "Patient education and awareness campaigns.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/growth-chart.png",
    title: "Corporate & Business",
     alt:"Corporate & Business",
    desc: "Internal training, presentations, and brand videos.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/responsive-design.png",
    title: "Entertainment & Media",
    alt:"Entertainment & Media",
    desc: "Animated series, YouTube content, and social media.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/shopping.png",
    title: "E-commerce & Retail",
     alt:"E-commerce & Retail",
    desc: "Product showcases and ad campaigns.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/web-browser.png",
    title: "Nonprofits",
     alt:"Nonprofits",
    desc: "Awareness and fundraising campaigns.",
    accent: "#55b047",
  },

];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-5">
          Industries We Serve
        </h2>

      <div className={styles.featuresGrid_grid}>
        {FEATURES.map((f, i) => (
          <article
            key={i}
            className={styles.featuresGrid_card}
            style={{ "--accent": f.accent }}
          >
            <div className={styles.featuresGrid_iconWrap} aria-hidden="true">
              {/* Replace with your exact sizes; keep 1:1 for best result */}
              <Image
                src={f.icon}
                alt=""
                width={72}
                height={72}
                className={styles.featuresGrid_icon}
              />
            </div>

            <h3 className={styles.featuresGrid_title}>
              {f.title.split("\n").map((line, idx) => (
                <span key={idx} className={idx === 0 ? styles.featuresGrid_strong : ""}>
                  {line}
                  {idx < f.title.split("\n").length - 1 ? <br /> : null}
                </span>
              ))}
            </h3>

            <p className={styles.featuresGrid_desc}>{f.desc}</p>

            {/* bottom bar */}
            <span className={styles.featuresGrid_bar} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
 
    
    </>
  );
}
