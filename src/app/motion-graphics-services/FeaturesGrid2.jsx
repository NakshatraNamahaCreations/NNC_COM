"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";
const FEATURES = [
  {
    icon: "/media/icons/animate (1).png",
   title: "Motion Graphics for Marketing & Branding",
    desc: "We offer a full array of Motion Graphics Services that can be customized for marketing, branding, education, and entertainment, helping you communicate with clarity and impact.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/backend.png",
    title: "Explainer Video Motion Graphics",
    desc: "Our team uses Motion Graphics Services to create explainer videos that simplify complex ideas through visual storytelling, animated icons, and character-based sequences.",
    accent: "#c99a14",
  },
  {
      icon: "/media/icons/motion-graphic (1).png",
    title: "Motion Graphics for Startups & SaaS",
    desc: "Startups, SaaS brands, and training teams rely on our Motion Graphics Services to educate users, onboard customers, and keep audiences engaged through dynamic visual content.",
   accent: "#6d8fa2",
  },
  {
      icon: "/media/icons/bullhorn.png",
    title: "Product Promos & Launch Reels",
    desc: "If you’re launching a new product, our Motion Graphics Services include product promos and launch reels that use dynamic animation to highlight features and benefits effectively.",
      accent: "#d64a8a",
  },
  {
      icon: "/media/icons/ux.png",
    title: "UI Animations & 3D Mockups",
    desc: "As part of our Motion Graphics Services, we also create UI animations and 3D mockups so your apps, dashboards, and digital products look polished and premium across platforms.",
    accent: "#4a8ec4",
  },



];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-3">
       Our Services on Motion Graphics
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
