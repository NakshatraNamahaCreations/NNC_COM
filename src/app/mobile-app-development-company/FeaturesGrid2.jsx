"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";
const FEATURES = [
  {
    icon: "/media/icons/ux.png",
    title: "Frontend",
    desc: "As a leading mobile app development company, we use modern frontend frameworks like React Native, Flutter, and Ionic to build interactive, visually appealing, and cross-platform applications. This ensures your users get a smooth, consistent experience on both iOS and Android devices.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/backend.png",
    title: "Backend",
    desc: "A reliable backend powers the entire app. Our mobile app development company specializes in Node.js, Python, PHP, .NET, and Ruby on Rails to create secure and high-performing backends capable of handling complex business logic and large-scale operations.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/backend (1).png",
    title: "Database",
    desc: "Data security and speed are critical for every app. At our mobile app development company, we work with MySQL, PostgreSQL, MongoDB, and Firebase to ensure seamless data management and real-time updates for your users.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/agile.png",
    title: "DevOps",
    desc: "As a top mobile app development company, we integrate AWS, Microsoft Azure, Google Cloud, and CI/CD pipelines to streamline deployments, improve scalability, and maintain app performance under heavy traffic.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/high-quality.png",
    title: "Quality Assurance",
    desc: "Every app goes through rigorous QA and testing before launch. Our mobile app development company ensures flawless performance, security, and usability across devices with automated and manual testing practices.",
    accent: "#6d8fa2",
  },


];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-3">
          App Development Technologies We Work On
        </h2>
    <p className={styles1.sec3Text} style={{width:"70%", margin:"0 auto"}}>
      At Nakshatra Namaha Creations Mobile App Development Company, we believe the right technology stack is the foundation of a successful mobile app. Our expertise spans across all layers of development, ensuring your app is robust, scalable, and user-friendly.
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
