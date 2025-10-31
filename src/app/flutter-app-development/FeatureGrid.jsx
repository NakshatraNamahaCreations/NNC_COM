"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Skilled Flutter Developers",
    desc: "By the help of our committed team of Flutter App Development Company, we provide feature-rich, high-performance apps that meet complex business requirements.",
    img: "/media/icons/coding (1).png",
  },
  {
    title: "Client-Focused Process",
    desc: "We communicate with you openly, give you project updates regularly, and during the development, we consider your idea as the most important.",
     img: "/media/icons/customer-satisfaction.png",
  },
  {
    title: "Beautiful UI/UX Design",
    desc: "By the help of Flutter App Development Company creativity and functionality, we build intuitive app designs that user satisfaction and brand perception get enhanced.",
    img: "/media/icons/app-development.png",
  },
  {
    title: "On-Time Project Delivery",
    desc: "The delivery of every project on schedule is guaranteed by our efficient workflows and agile methodology — without quality being compromised.",
    img: "/media/icons/jigsaw.png",
  },
  {
    title: "Reliable Ongoing Support",
    desc: "The continuation of your app running seamlessly at all times is our post-launch maintenance, bug fixes, and feature ​‍​‌‍​‍‌​‍​‌‍​‍‌updates.",
    img: "/media/icons/technical-support.png",
  },
  
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
  Why Choose Nakshatra Namaha Creations as Your Flutter App Development Company
</h2>
        <p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
        Trust,​‍​‌‍​‍‌​‍​‌‍​‍‌ innovation, and consistent delivery are the main factors that have helped us at Nakshatra Namaha Creations to build our reputation as a Flutter App Development Company.
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
