"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";

const ITEMS = [
  "Best website development company in Bangalore",
  "Website developers in Bangalore",
  "Professional website development services",
  "Business website development company",
  "Custom website development Bangalore",
  "Corporate website developers",
  "Responsive website design services",
  "SEO-friendly website development",
  "Ecommerce website development Bangalore",
  "WordPress website developers",
  "Web application development company",
  "UI UX website design services",
  "High-performance business websites",
  "Website redesign and optimization",
  "Secure website development services",
  "Scalable website solutions for businesses",
];




const FEATURES = [
  {
    icon: "/media/icons/idea (1).png",
    title: "Business-Focused Website Strategy",
    desc: "As the best website development company in Bangalore, we design websites that align with your business goals and support long-term growth.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/brand (1).png",
    title: "Strong Brand Representation",
    desc: "Every website we build reflects your brand identity through clean design, clear messaging, and consistent visual structure.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/web.png",
    title: "Structured Development Process",
    desc: "Our website development process follows a clear roadmap—from planning and design to development, testing, and launch.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/responsive-design.png",
    title: "Collaborative & Transparent Approach",
    desc: "We involve clients at every stage of website development to ensure clarity, feedback alignment, and the right outcomes.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/badge (2).png",
    title: "Performance & SEO Ready Websites",
    desc: "Our websites are fast, secure, mobile-friendly, and SEO-optimized to perform well across all devices and search engines.",
    accent: "#c27b2e",
  },
];


export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
 
         <section className={styles1.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-2" style={{width:"70%", margin:"0 auto"}}>
        What to Expect from the Best Website Development Company in Bangalore
        </h2>
        <br />
         <p className={styles1.sec3Text}>
  We deliver professional website development solutions with clarity, precision, and a strong business focus. As the best website development company in Bangalore, our goal is to build high-performing websites that improve visibility, user engagement, and long-term digital growth.
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
