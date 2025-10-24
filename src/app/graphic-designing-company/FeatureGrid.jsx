"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Creative & Professional Designs",
    desc: "We create designs that reflect your brand’s identity and resonate with your audience.",
    img: "/media/icons/design-thinking.png",
  },
  // {
  //   title: "Android App Development",
  //   desc: "Secure and scalable apps for the Android ecosystem.",
  //    img: "/media/icons/android.png",
  // },
  {
    title: "Custom Design Solutions",
    desc: "Our Graphic Designing Company tailors every project to your marketing needs.",
    img: "/media/icons/online-analysis.png",
  },
  {
    title: "Experienced Design Team",
    desc: "A skilled team of experts ensures visual consistency, brand integrity, and creative innovation.",
    img: "/media/icons/jigsaw.png",
  },
  {
    title: "On-Time Delivery",
    desc: "Our Graphic Designing Company values deadlines and delivers without compromising quality.",
    img: "/media/icons/animate.png",
  },
  
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
  What Can You Expect from Nakshatra Namaha Creations?
</h2>
        <p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
        As a trusted Graphic Designing Company, we ensure every project delivers results that align with your business goals. Our collaborative process ensures quality, creativity, and precision from start to finish.
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
