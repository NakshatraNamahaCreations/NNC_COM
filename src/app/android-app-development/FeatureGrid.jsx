"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
//   {
//     title: "iOS App Development",
//     desc: "High-performance applications for Apple devices.",
//     img: "/media/icons/apple (1).png",
//   },
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
  Services Offered in Our Android App Development
</h2>
<p className={styles.sec3Text} style={{ width: "100%", margin: "0 auto" }}>
  Our Android app development services empower businesses to build dynamic, feature-rich, and performance-driven mobile applications that reach users across all major devices. Whether you’re creating a brand-new app or enhancing an existing one, our developers focus on innovation, functionality, and scalability.
  We utilize the latest Android technologies such as Kotlin, Java, and Android Studio to craft apps that deliver seamless experiences across smartphones, tablets, and wearables.

  By partnering with our experts in Android app development, you gain access to end-to-end solutions covering every stage of your project — from concept and UI/UX design to coding, testing, deployment on Google Play Store, and ongoing support.
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
