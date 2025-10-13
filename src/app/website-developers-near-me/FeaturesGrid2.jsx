"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";

const FEATURES = [
  {
    icon: "/media/icons/idea (1).png",
    title: "Discovery & Planning",
    desc: "We start with in-depth discussions to understand your goals and what you expect from working with website developers near me.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/responsive-design.png",
    title: "Design & Development",
    desc: "We craft visually appealing, responsive designs and ensure our local team codes with best practices to deliver quality results.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/web.png",
    title: "Testing & Quality Assurance",
    desc: "Our process includes thorough testing to make sure your website works smoothly across all devices and browsers.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "Launch & Ongoing Support",
    desc: "You’ll have the assurance that website developers near me remain available to maintain, update, and improve your website over time.",
    accent: "#d64a8a",
  },



];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-5">
          Our Development Process
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
