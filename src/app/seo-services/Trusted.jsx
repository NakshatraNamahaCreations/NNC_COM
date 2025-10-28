"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";

const ITEMS = [
  "Node.js development company",
  "hire Node.js developers",
  "custom Node.js development",
  "Node.js web application development",
  "enterprise Node.js development",
  "Node.js backend development",
  "Node.js API development",
  "Node.js full stack development",
  "Node.js app development services",
  "Node.js software development company",
  "Node.js application maintenance and support",
  "Node.js migration services",
  "Node.js integration services",
  "real-time application development with Node.js",
  "Node.js development agency",
  "scalable Node.js web applications",
  "Node.js developers for hire",
];



const FEATURES = [

  
  {
    icon: "/media/icons/backend.png",
   title: "Backend Excellence",
    desc: "Our Node Js Development Company creates highly efficient backend systems with smooth API integrations and fast database operations.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/ux.png",
   title: "Full-Stack Support",
    desc: "Skilled in using Node.js with React, Angular, and other modern frameworks, our Node Js Development Company delivers complete end-to-end solutions.",
    accent: "#c99a14",
  },
  {
      icon: "/media/icons/high-quality.png",
  title: "Agile & Transparent Process",
    desc: "With regular updates, sprint-based delivery, and collaborative project management, our Node Js Development Company maintains momentum and clarity.",
   
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/agile.png",
   title: "Cloud-Ready Architecture",
    desc: "Applications built by our Node Js Development Company can be deployed effortlessly on AWS, Azure, or Google Cloud.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/technical-support.png",
    title: "Post-Launch Support",
    desc: "Continuous monitoring, upgrades, and optimization make our Node Js Development Company a long-term technology partner for growth.",
    accent: "#6d8fa2",
  },

];

export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
 
         <section className={styles1.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-2" style={{width:"70%", margin:"0 auto"}}>
         Benefits of Having Node Js Development for Your Business
        </h2>
        <br />
         {/* <p className={styles1.sec3Text}>
    When you choose our mobile app developers, you’re not just hiring coders—you’re partnering with a team of strategists, designers, and problem-solvers who are dedicated to your success. We understand that every business has unique needs, so our approach focuses on creating applications that combine functionality, innovation, and user experience.
By working with experienced mobile app developers, you gain access to a wide range of expertise:
        </p> */}

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
