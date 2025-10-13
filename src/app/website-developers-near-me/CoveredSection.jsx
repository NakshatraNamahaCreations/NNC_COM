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
            <h1 className={styles.title}>Website Developers Near Me </h1>
            <p className={styles.lead}>
              Usually, the first step for a business who want to build a strong online presence with no trouble or doubts is finding website developers near me. When working with local professionals, you can directly communicate, together with ideation face-to-face or virtually in the same time zone, and get throughout the project quick responses. This way, it allows that your website becomes the reflection of the brand goals while at the same time being the solution of target audience preferences.
            </p>
  <p className={styles.lead}>
             When you team up with website developers near me, you gain access to an elite group of professionals who are in tune with local markets, trends, and customer expectations. Moreover, having them close means that you will have a smooth partnership, on-time updates, reliable after-launch support, and thus your company will have a great performing website which is easy to use and designed for sustainable growth.
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
