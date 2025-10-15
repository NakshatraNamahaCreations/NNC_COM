"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";

const FEATURES = [
  {
    icon: "/media/icons/idea (1).png",
    title: "Creating User-Focused Web Platforms ",
    desc: "Just to name a few, experienced website developers guarantee your site will be user-friendly, eye-catching, and load in no time.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/responsive-design.png",
    title: "Embracing the Newest Technology",
    desc: "Within this Web 2.0 era, enterprises count on website developers implementing state-of-the-art frameworks and best coding practices for project sustainability.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/growth-chart.png",
    title: "Resulting in Business Outcome That Can Be Quantified",
    desc: "Top-notch website developers give priority to work out solutions regarding such performance measures as loading time, search engine visibility, and conversion rates.",
    accent: "#4a8ec4",
  },
  // {
  //   icon: "/media/icons/mobile.png",
  //   title: "Launch & Ongoing Support",
  //   desc: "You’ll have the assurance that website developers near me remain available to maintain, update, and improve your website over time.",
  //   accent: "#d64a8a",
  // },



];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-5">
         Why You Should Rely On Professional Website Designers
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
