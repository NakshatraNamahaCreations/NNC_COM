"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "iOS App Development",
    desc: "High-performance applications for Apple devices.",
    img: "/media/icons/apple (1).png",
  },
  {
    title: "Android App Development",
    desc: "Secure and scalable apps for the Android ecosystem.",
     img: "/media/icons/android.png",
  },
  {
    title: "Cross-Platform Development",
    desc: "Apps that run seamlessly across multiple platforms.",
    img: "/media/icons/online-analysis.png",
  },
  {
    title: "UI/UX Design",
    desc: "Clean, user-friendly designs that maximize engagement.",
    img: "/media/icons/app-development.png",
  },
  {
    title: "App Maintenance & Updates",
    desc: "Continuous support to keep your app running smoothly.",
    img: "/media/icons/technical-support.png",
  },
  
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-2">
         Services Offered by Our Mobile App Developers
        </h2> 
      <p className={styles.sec3Text}>
        Our mobile app developers deliver a complete range of services to help businesses create impactful mobile applications. Whether you need a native iOS app, an Android solution, or a cross-platform product, our team ensures that every app is designed for performance, security, and scalability. We combine technology with creativity to deliver mobile experiences that truly engage users.
By working with skilled mobile app developers, you gain access to services that cover every stage of the app lifecycle:
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
