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
            <h1 className={styles.title}>Mobile App Development Company</h1>
            <p className={styles.lead}>
             In today’s digital-first world, every business needs an app to stay connected with its audience. If you are searching for a mobile app development company that combines innovation with functionality, you are in the right place. Our team of experts specializes in creating feature-rich, scalable, and user-friendly applications that help brands reach new heights. As a top mobile app development company, we ensure every project is aligned with your business goals.
                    </p>
         <p className={styles.lead}>
             Whether you need Android app development, iOS app development, or cross-platform app development with React Native/Flutter, we build on scalable, secure architectures with analytics, push notifications, and third-party integrations. As a trusted mobile app development company in Bangalore and Mumbai, our mobile app developers handle API design, performance tuning, and App Store/Play launch. Post-release, our app maintenance and support plans keep features fresh and reliability high for real business growth.         </p>
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
