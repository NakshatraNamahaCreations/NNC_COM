"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";
const FEATURES = [
  {
    icon: "/media/icons/ux.png",
   title: "Consult & Plan",
    desc: "As a trusted Node Js Development Company, we start by understanding your business requirements and creating a scalable Node.js roadmap aligned with your goals.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/backend.png",
   title: "Develop & Integrate",
    desc: "Our Node Js Development Company specializes in building high-performing web applications and APIs with seamless third-party integrations that enhance efficiency.",
    accent: "#c99a14",
  },
  {
      icon: "/media/icons/agile.png",
 title: "Deploy & Support",
    desc: "Beyond launching your app, our Node Js Development Company provides long-term support to keep your system secure, updated, and optimized for future scalability.",
    accent: "#4a8ec4",
  },



];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-3">
         Our Node Js Development Company Services
        </h2>
    {/* <p className={styles1.sec3Text} style={{width:"70%", margin:"0 auto"}}>
      Choosing experienced mobile app developers gives your business a significant advantage. Instead of just building apps, they bring strategic insights, technical expertise, and user-focused design that help you deliver real value to your customers. With the right team, your app becomes more than a digital tool—it becomes a growth engine for your business.
By working with professional mobile app developers, you gain benefits such as:
        </p> */}
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
