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
    desc: "With years of experience, our mobile app development company has successfully delivered projects across industries like healthcare, education, retail, and finance. We know what it takes to turn an idea into a powerful app.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/web.png",
    title: "Innovative & User-Centric Design",
    desc: "We don’t just build apps we craft experiences. Our design-first approach ensures that every app from our mobile app development company is intuitive, engaging, and aligned with your brand.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "End-to-End Solutions",
    desc: "From concept to launch, our mobile app development company manages the entire process—strategy, design, development, testing, and ongoing support. You get a single, reliable partner for your entire app journey.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/app-settings.png",
    title: "Focus on Performance & Scalability",
    desc: "We develop apps that are fast, secure, and scalable. Whether you’re a startup or an enterprise, our mobile app development company ensures your app grows with your business.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/handshake.png",
    title: "Transparent Communication",
    desc: "Clients trust us as a top mobile app development company because we believe in clear communication, regular updates, and a collaborative approach at every stage.",
    accent: "#55b047",
  },


];

export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
 
         <section className={styles1.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-2" style={{width:"70%", margin:"0 auto"}}>
          Why Choose Nakshatra Namaha Creations as your Mobile App Development Company?
        </h2>
         <p className={styles1.sec3Text}>
When businesses search for the best mobile app development company, they look for expertise, reliability, and proven results. At Nakshatra Namaha Creations, we combine technical innovation with user-focused design to deliver mobile apps that truly make an impact. Here’s why clients choose us as their trusted mobile app development company.
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
