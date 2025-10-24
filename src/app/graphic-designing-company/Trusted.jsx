"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";

const ITEMS = [
  "graphic designing company",
  "professional graphic designers",
  "creative graphic design agency",
  "custom logo design services",
  "branding and identity design",
  "corporate graphic design services",
  "print and digital design solutions",
  "brochure and flyer design company",
  "social media graphic design services",
  "website and UI design company",
  "poster and banner design services",
  "illustration and artwork design",
  "packaging and label design company",
  "marketing collateral design",
  "business card and stationery design",
  "infographic design services",
  "creative visual design agency",
  "digital marketing graphic design",
];



const FEATURES = [

  
  {
    icon:"/media/icons/idea (1).png",
    title: "Creative & Professional Designs",
    desc: "Our Graphic Designing Company starts by building visually stunning, brand-driven designs that maintain both appeal and intent.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/growth-chart.png",
    title: "Market Research & Strategy Development",
    desc: "We study your audience and industry, ensuring every project from our Graphic Designing Company resonates effectively.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "Content Creation & Optimization",
    desc: "Combining visuals with storytelling, our Graphic Designing Company ensures designs perform across all platforms.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/brand (1).png",
    title: "Campaign Execution & Management",
    desc: "From social media to print, our Graphic Designing Company ensures consistency across campaigns.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/app-settings.png",
    title: "Performance Analysis & Optimization",
    desc: "We monitor the effectiveness of our designs and refine strategies to ensure continual improvement.",
    accent: "#c27b2e",
  },
  {
    icon: "/media/icons/shuttle.png",
    title: "Continuous Growth & Scaling",
    desc: "As your brand grows, our Graphic Designing Company scales its creative output to match evolving goals.",
    accent: "#55b047",
  },



];

export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
 
         <section className={styles1.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-2" style={{width:"70%", margin:"0 auto"}}>
         Our Graphic Designing Process
        </h2>
        <br />
         <p className={styles1.sec3Text}>
    Our Graphic Designing Company follows a process grounded in research, creativity, and purpose. From mood boards to final output, each stage aligns design and business strategy seamlessly.
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
