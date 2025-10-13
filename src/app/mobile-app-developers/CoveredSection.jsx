"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";

export default function CoveredSection() {


  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
          <div className="col-lg-7">
            <h1 className={styles.title}>Mobile App Developers</h1>
            <p className={styles.lead}>
            In today’s digital-first world, businesses need more than just a website—they need powerful mobile apps to connect with their customers. Our expert mobile app developers specialize in creating secure, scalable, and user-friendly applications for iOS, Android, and cross-platform environments. Whether you’re a startup or an enterprise, our team of mobile app developers ensures your app idea turns into a reality that drives results.
             </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/media/tech28.jpg"
                alt="Ionic app development — UI graph and neural network illustration"
                fill
                sizes="(max-width: 992px) 100vw, 520px"
                priority
                className="object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
