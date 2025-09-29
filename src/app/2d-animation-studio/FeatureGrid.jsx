"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Creative Excellence",
    
    desc: "Our studio produces visually captivating animations that enhance brand identity.",
    img: "/media/icons/design-thinking.png",
  },
  {
    title: "Tailored Solutions",
    desc: "Every project is customized to align with your message and target audience.",
     img: "/media/icons/jigsaw.png",
  },
  {
    title: "Industry Experience",
    desc: "We have delivered animations for education, healthcare, entertainment, e-commerce, and more.",
    img: "/media/icons/industry.png",
  },
  {
    title: "Advanced Tools",
    desc: "Using leading animation software, our team ensures high-quality, smooth, and modern designs.",
    img: "/media/icons/app-development.png",
  },
  {
    title: "Collaborative Process",
    desc: "We work closely with you from concept to final delivery, ensuring your vision is realized",
    img: "/media/icons/onboarding.png",
  },

];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-2">
         WHY CHOOSE OUR 2D ANIMATION STUDIOS?
        </h2> 
      <p className={styles.sec3Text}>
       Working with professional 2D animation studios means gaining a team of creative thinkers, illustrators, and motion designers who understand how to capture attention and communicate ideas effectively.
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
