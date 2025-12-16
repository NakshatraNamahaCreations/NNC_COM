"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";
const FEATURES = [
  {
    icon: "/media/icons/idea (1).png",
    title: "Requirement Understanding",
    desc: "We learn your business vision, customer type, and platform needs.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/backend.png",
    title: " Store Design",
    desc: "Our UI/UX experts design a modern storefront that builds trust and boosts sales.",
    accent: "#c99a14",
  },
  {
      icon: "/media/icons/agile.png",
    title: "Development & Integration",
    desc: "We build the complete online store with advanced features, secure checkout, and essential integrations.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/ux.png",
    title: " Testing & Quality Check",
    desc: "We ensure your website runs smoothly on all devices and browsers.",
    accent: "#d64a8a",
  },
  {
     icon: "/media/icons/app-settings.png",
    title: "Launch & Support",
    desc: "Your store goes live—fully optimized, secure, and ready to generate income.",
    accent: "#6d8fa2",
  },


];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-3">
          Why Do Business Owners Trust Us?
        </h2>
 
     <br />
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
