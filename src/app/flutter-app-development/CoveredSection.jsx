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
            <h2 className={styles.title}>Top Flutter App Development Company Nakshatra Namaha Creations </h2>
            <p className={styles.lead}>
            Nakshatra​‍​‌‍​‍‌​‍​‌‍​‍‌ Namaha Creations is one of the best recognized top-notch worldwide mobile companies that are running on Flutter. Our team of skilled Flutter app developers is committed to delivering a powerful, extremely efficient, and easily extendable mobile application by the use of Google's Flutter framework.
              </p>
             <p className={styles.lead}>
          By being a full-service Flutter App Development Company, we, at the core, unite the three factors of creativeness, technical brilliance, and innovation to engineer the mobile apps that increase user engagement and, consequently, brand value. Our profound knowledge of cross-platform app development keeps no exceptions for us in giving the perfect solution for both Android and iOS devices users accepting the same consistent user experience, development time shortened, and costs optimized.
            </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/media/tech28.avif"
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
