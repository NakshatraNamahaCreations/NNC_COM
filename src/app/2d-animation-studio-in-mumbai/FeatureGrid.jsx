"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Creative Excellence",
    
    desc: "We make animations that are visually stunning and exhilarating, which not only elevates your brand identity but also effectively communicates the ideas.",
    img: "/media/icons/design-thinking.png",
  },
  {
    title: "Tailored Solutions",
    desc: "By Our 2D Animation Studio in Mumbai, Every Project is Designed to Synergize with Your Brand’s Message and Target Audience.",
     img: "/media/icons/jigsaw.png",
  },
  {
    title: "Industry Experience",
    desc: "The team has done animations for educational institutes, healthcare, retail, entertainment, and e-commerce sectors.",
    img: "/media/icons/industry.png",
  },
  {
    title: "Advanced Tools",
    desc: "Our 2D animation company in Mumbai operates with top-of-the-line equipment like Adobe Animate, Toon Boom, and After Effects.",
    img: "/media/icons/app-development.png",
  },
  {
    title: "Collaborative Process",
    desc: "The 2D animation studio in Mumbai transfers the concept to the confirmed and final product stage with your involvement in every step to make sure that your idea is visually represented.",
    img: "/media/icons/onboarding.png",
  },

];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-2">
         Why Choose Nakshatra Namaha Creations as Your 2D Animation Studio in Mumbai?
        </h2> 
      <p className={styles.sec3Text}>
       Your brand gets the benefit of greatest creative talents and expert storytelling skills across the globe by teaming up with a 2D professional animation studio in Mumbai.
        </p>
<br />

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <h4 className={styles.title}>{f.title}</h4>
              <p className={styles.desc}>{f.desc}</p>
              <br />
              
              <div className={styles.imgWrap}>
                <Image
                  src={f.img}
                  alt={f.title}
                  width={80}
                  height={80}
                  className={styles.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
