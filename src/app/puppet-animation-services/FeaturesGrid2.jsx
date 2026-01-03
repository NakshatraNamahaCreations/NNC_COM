"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";

const FEATURES = [
  {
    icon: "/media/icons/reading-book.png",
    title: "Consult & Conceptualize",
    desc: "We begin by understanding your story, audience, and creative goals. Our puppet animation team plans characters, themes, and visual direction to ensure a strong foundation for the animation.",
    accent: "#09c2a3",
  },
  {
    icon: "/media/icons/animate (1).png",
    title: "Animate & Produce",
    desc: "Our team brings puppet characters to life through detailed animation, expressive movements, and scene composition. Each frame is crafted to deliver engaging and visually rich storytelling.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/agile.png",
    title: "Finalize & Deliver",
    desc: "After animation is complete, we refine visuals with sound design, voice sync, and final edits. We deliver high-quality puppet animation content optimized for digital platforms and campaigns.",
    accent: "#4a8ec4",
  },
];

export default function FeaturesGrid2() {
  return (
    <section
      className={styles.featuresGrid_wrap}
      aria-label="Puppet animation services"
    >
      <h2 className="text-center fw-bold mb-3">
        Our Puppet Animation Services
      </h2>

      <br />
      <br />

      <div className={styles.featuresGrid_grid}>
        {FEATURES.map((f, i) => (
          <article
            key={i}
            className={styles.featuresGrid_card}
            style={{ "--accent": f.accent }}
          >
            <div className={styles.featuresGrid_iconWrap} aria-hidden="true">
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
                <span
                  key={idx}
                  className={
                    idx === 0 ? styles.featuresGrid_strong : ""
                  }
                >
                  {line}
                  {idx < f.title.split("\n").length - 1 ? <br /> : null}
                </span>
              ))}
            </h3>

            <p className={styles.featuresGrid_desc}>{f.desc}</p>

            <span
              className={styles.featuresGrid_bar}
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
