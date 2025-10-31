"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";

const ITEMS = [
  "mobile app developers",
  "mobile app development company",
  "hire mobile app developers",
  "custom mobile app development",
  "native app development",
  "iOS app developers",
  "Android app developers",
  "cross-platform app developers",
  "React Native developers",
  "Flutter app developers",
  "enterprise mobile app developers",
  "startup app development",
];



const FEATURES = [

  
  {
    icon:"/media/icons/responsive-design.png",
    title: "Proven Experience",
    desc: "Delivered successful apps across industries like healthcare, retail, finance, and education.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/web.png",
    title: "Custom Solutions",
    desc: "Applications tailored to your business model and audience.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "Latest Technologies",
    desc: "Skilled in React Native, Flutter, Swift, Kotlin, and more.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/app-settings.png",
    title: "End-to-End Support",
    desc: "From initial planning to post-launch maintenance, we stay with you at every stage.",
    accent: "#6d8fa2",
  },
  // {
  //   icon: "/media/icons/handshake.png",
  //   title: "Transparent Communication",
  //   desc: "Clients trust us as a top mobile app development company because we believe in clear communication, regular updates, and a collaborative approach at every stage.",
  //   accent: "#55b047",
  // },


];

export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
 
         <section className={styles1.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-2" style={{width:"70%", margin:"0 auto"}}>
          Why Hire Our Mobile App Developers?
        </h2>
         <p className={styles1.sec3Text}>
    When you choose our mobile app developers, you’re not just hiring coders—you’re partnering with a team of strategists, designers, and problem-solvers who are dedicated to your success. We understand that every business has unique needs, so our approach focuses on creating applications that combine functionality, innovation, and user experience.
By working with experienced mobile app developers, you gain access to a wide range of expertise:
        </p>

      <div className={styles1.featuresGrid_grid}>
        {FEATURES.map((f, i) => (
          <article
            key={i}
            className={styles1.featuresGrid_card}
            style={{ "--accent": f.accent }}
          >
            <div className={styles1.featuresGrid_iconWrap} aria-hidden="true">
              {/* Replace with your exact sizes; keep 1:1 for best result */}
              <Image
                src={f.icon}
                alt=""
                width={72}
                height={72}
                className={styles1.featuresGrid_icon}
              />
            </div>

            <h3 className={styles1.featuresGrid_title}>
              {f.title.split("\n").map((line, idx) => (
                <span key={idx} className={idx === 0 ? styles1.featuresGrid_strong : ""}>
                  {line}
                  {idx < f.title.split("\n").length - 1 ? <br /> : null}
                </span>
              ))}
            </h3>

            <p className={styles1.featuresGrid_desc}>{f.desc}</p>

            {/* bottom bar */}
            <span className={styles1.featuresGrid_bar} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
 
        <section className={styles.keywordsMarquee_wrap} aria-label="Capabilities">
      <div className={styles.keywordsMarquee_inner}>
        <div className={styles.keywordsMarquee_marquee}>
          <ul className={styles.keywordsMarquee_track}>
            {track.map((label, i) => (
              <li key={i} className={styles.keywordsMarquee_item}>
                <span className={styles.keywordsMarquee_pill}>{label}</span>
                <span className={styles.keywordsMarquee_dot} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    
    </>
  );
}
