"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Custom​‍​‌‍​‍‌​‍​‌‍​‍‌ App Development",
    desc: "We transform your concepts into complete mobile applications—starting from the idea stage to the final release. Each app is custom-built to align with your strategic objectives and provide a superior user experience.",
   img: "/media/icons/mobile.png",
  },
  {
    title: "UI/UX Design",
    desc: "The mobile-first design principle of our work results in user-friendly navigation through the clean layouts and attractive, engaging interfaces that entice users to keep returning.",
    img: "/media/icons/ui.png",  // img: "/media/icons/idea (1).png", ui.png
  },
  {
     title: "API Integration & Backend Connectivity",
    desc: "To make your app a robust and efficient tool, we connect it with reliable backend systems, cloud services, and third-party APIs.",
    img: "/media/icons/tools-and-utensils.png",
  },
  {
    title: "App Maintenance & Support",
    desc: "Your app doesn't stop evolving with the release. We provide it with updates, enhancements, and support to keep the performance at a high level and secure.",
    img: "/media/icons/app-development.png",
  },
  {
    title: "Migration to React Native",
    desc: "We can take your native app and convert it to React Native to enable easier maintenance, quicker updates, and overall cost ​‍​‌‍​‍‌​‍​‌‍​‍‌savings.",
    img: "/media/icons/android.png",
  },
    
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
Our React Native App Development Services
</h2>
<p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
  We build high-performance React Native apps that run smoothly on both Android and iOS with a single codebase. Our team focuses on speed, scalability, and user-friendly experiences tailored to your business goals.
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
