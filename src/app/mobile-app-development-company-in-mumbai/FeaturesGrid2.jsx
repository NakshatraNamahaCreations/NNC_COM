"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";
const FEATURES = [
  {
    icon: "/media/icons/ux.png",
    title: "Frontend",
    desc: "We leverage React Native, Flutter, and Ionic to create visually rich, cross-platform interfaces. As an innovative mobile app development company in Mumbai, we ensure consistent user experiences across devices.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/backend.png",
    title: "Backend",
    desc: "Our mobile app development company in Mumbai uses Node.js, Python, and PHP for secure, scalable, and high-performing backends capable of complex workflows.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/backend (1).png",
    title: "Database",
    desc: "We work with MySQL, Firebase, and MongoDB to deliver fast, reliable, and real-time database solutions for mobile applications.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/agile.png",
    title: "DevOps & Cloud",
    desc: "As a technologically advanced mobile app development company in Mumbai, we integrate AWS, Azure, and Google Cloud to ensure smooth CI/CD pipelines and optimal app uptime.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/high-quality.png",
    title: "Quality Assurance",
    desc: "Our QA team runs multiple automated and manual tests, making Nakshatra Namaha Creations a trusted mobile app development company in Mumbai for quality and security assurance.   ",
    accent: "#6d8fa2",
  },


];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-3">
        Technologies We Work On
        </h2>
    <p className={styles1.sec3Text} style={{width:"70%", margin:"0 auto"}}>
      Nakshatra Namaha Creations, a mobile app development company in Mumbai, builds apps powered by modern tech stacks.
        </p>
    <br /> <br />
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
