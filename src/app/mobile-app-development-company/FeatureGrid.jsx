"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Professional Expertise",
    desc: "A mobile app development company brings together skilled designers, developers, and testers who understand the latest technologies and industry best practices. This ensures your app is built to high professional standards.",
    img: "/media/icons/briefcase.png",
  },
  {
    title: "Customized Solutions",
    desc: "Unlike pre-built templates, a mobile app development company develops apps tailored to your specific business goals, workflows, and customer needs—giving you a competitive edge.",
     img: "/media/icons/ui.png",
  },
  {
    title: "End-to-End Development",
    desc: "From ideation to launch, a mobile app development company covers the entire process: planning, design, coding, testing, deployment, and support. You get everything under one roof.",
    img: "/media/icons/smartphone.png",
  },
  {
    title: "Scalability & Future-Readiness",
    desc: "Working with a top mobile app development company means your app is built to scale, handle future updates, and integrate with advanced technologies as your business grows.",
    img: "/media/icons/app-development.png",
  },
  {
    title: "Quality Assurance",
    desc: "A mobile app development company ensures thorough QA and testing to deliver bug-free, secure, and high-performing apps—reducing downtime and post-launch issues.",
    img: "/media/icons/high-quality.png",
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "With a leading mobile app development company, you get long-term support, updates, and monitoring to keep your app performing at its best.",
   img: "/media/icons/technical-support.png",
  },
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-2">
         OUR CUSTOM MOBILE APP DEVELOPMENT SERVICES
        </h2> 
      <p className={styles.sec3Text}>
        As a trusted mobile app development company, we go beyond standard solutions by offering end-to-end custom mobile app development services. From idea to deployment, our approach ensures your app is tailored, scalable, and ready to perform.
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
