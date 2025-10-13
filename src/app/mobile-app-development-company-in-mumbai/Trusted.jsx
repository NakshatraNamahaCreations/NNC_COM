"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";

const ITEMS = [
  "iOS App Development",
  "Android App Development",
  "Cross-Platform App Development",
  "Custom Mobile App Solutions",
  "Mobile UI/UX Design",
  "App Testing and Quality Assurance",
  "App Deployment on App Store & Play Store",
  "App Maintenance and Support",
  "Mobile App Integration with APIs",
  "Enterprise Mobile App Development"
];



const FEATURES = [

  
  {
    icon:"/media/icons/responsive-design.png",
    title: "Proven Experience",
    desc: "Our mobile app development company in Mumbai has not only gained valuable industry experience over the years but has also been successful in building apps in healthcare, education, finance, retail, and logistics.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/web.png",
    title: "Innovative & User-Centric Design",
    desc: "Creating designs that matter is our focus. Being a creative mobile app development company in Mumbai, we ensure that each app is brand identity-consistent, and visually stimulating, and that the customer can easily go through it without any obstruction.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "End-to-End Solutions",
    desc: "The mobile app development company in Mumbai which we are completely competent in handling the entire software development lifecycle from designing to wireframing to actual coding to testing to launching and even ongoing maintenance.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/app-settings.png",
    title: "Performance & Scalability",
    desc: "We provide the features like speed security and are ready for the future. If you are a startup or a large company, our mobile app development company in Mumbai keeps the loading of the device at any time to be easy and thus your app will run smoothly on it.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/handshake.png",
    title: "Transparent Communication",
    desc: "One of the reasons business organizations consider Nakshatra Namaha Creations as a reliable mobile app development company in Mumbai is that we keep clients informed through our regular updates, milestone tracking, and collaborative workflow.",
    accent: "#55b047",
  },


];

export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
 
         <section className={styles1.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-2" style={{width:"70%", margin:"0 auto"}}>
        Why Choose Nakshatra Namaha Creations as Your Mobile App Development Company in Mumbai?
        </h2>
         <p className={styles1.sec3Text}>
        When companies look for the top mobile app development company in Mumbai, they pick Nakshatra Namaha Creations for the reason that we are known for our innovative ideas, dependability, and results that are on the dot.
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
