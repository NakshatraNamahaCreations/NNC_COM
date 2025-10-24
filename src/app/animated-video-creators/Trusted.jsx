"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";

const ITEMS = [
  "Animated video creators",
  "Animated video production company",
  "2D animated video makers",
  "3D animated video production",
  "Explainer video creators",
  "Corporate animation video services",
  "Animated marketing video production",
  "Custom animated video services",
  "Motion graphics video production",
  "Whiteboard animation creators",
  "Product animation videos",
  "Business animation video production",
  "Brand storytelling animation videos",
  "Animated promotional videos",
  "Social media animation videos",
  "Animated explainer video company",
  "Professional animation video creators",
];



const FEATURES = [

  
  {
    icon:"/media/icons/idea (1).png",
    title: "Visual-Driven Storytelling",
    desc: "We turn abstract ideas into visually compelling stories through seamless Animated Video Production.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/brand (1).png",
    title: "Branded Visual Identity",
    desc: "Every Animated Video Production reflects your brand’s tone, message, and personality.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/web.png",
    title: "Organized Workflow",
    desc: "From concept to completion, our Animated Video Production process follows a transparent and organized path.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/responsive-design.png",
    title: "Collaborative Edits",
    desc: "Clients are involved in every stage of Animated Video Production, ensuring your input shapes the outcome.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/badge (2).png",
    title: "Cross-Platform Ready",
    desc: "Our Animated Video Production is optimized for all platforms — YouTube, social media, apps, and websites.",
    accent: "#c27b2e",
  },
 


];

export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
 
         <section className={styles1.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-2" style={{width:"70%", margin:"0 auto"}}>
         What Can You Expect from Nakshatra Namaha Creations?
        </h2>
        <br />
         <p className={styles1.sec3Text}>
  We work with creativity, clarity, and precision in every Animated Video Production project. Our animations aren’t just attractive — they’re strategically built to support business goals.
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
