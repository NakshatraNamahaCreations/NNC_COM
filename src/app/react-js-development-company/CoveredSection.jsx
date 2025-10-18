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
            <h2 className={styles.title}> Reliable React JS Development Company </h2>
            <p className={styles.lead}>
          React JS is an amazing front-end library developed by Facebook that enables the creation of fast, dynamic, and user-friendly websites. It is widely used by global enterprises to build advanced, reliable, and high-performing interfaces. At Nakshatra Namaha Creations, we are a React JS Development Company offering scalable solutions that meet the needs of modern businesses. Our React JS developers combine creativity with technology to elevate your digital presence and deliver seamless user experiences.
           </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/tech23.jpg"
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
