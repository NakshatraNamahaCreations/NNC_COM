"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "iOS App Development",
    desc: "High-performance applications for Apple devices.",
    img: "/media/icons/apple (1).png",
  },
  // {
  //   title: "Android App Development",
  //   desc: "Secure and scalable apps for the Android ecosystem.",
  //    img: "/media/icons/android.png",
  // },
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
  Services Offered in Our iOS App Development
</h2>
<p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
  Our iOS app development services cover everything businesses need to create powerful, user-friendly, and high-performing iPhone and iPad applications. Whether you’re launching a new product or modernizing an existing one, our team focuses on design precision, speed, and long-term scalability. 
  We leverage the latest Apple technologies like Swift, SwiftUI, and Xcode to build apps that perform seamlessly across the iOS ecosystem.

  By partnering with our experts in iOS app development, you gain access to end-to-end solutions that span every stage of the app lifecycle—from concept and UI/UX design to development, testing, and App Store deployment.
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
