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
            <h1 className={styles.title}> React Native Mobile App Developers for High-Performance Android & iOS Apps </h1>
            <p className={styles.lead}>
         React​‍​‌‍​‍‌​‍​‌‍​‍‌ Native ranks as a top-tier framework by which one can fathom the creation of the freshest smart mobile applications operable both on Android and iOS with such a smooth manner. The enterprises, through the utilization of one single codebase, get to minimize the time consumption of the development phase, have a reduction in expenses and still, be able to offer their customers an impeccable, native-like mobile experience.
            </p>
              <p className={styles.lead}>
         Our team of skilled React Native developers at Nakshatra Namaha Creations are committed to creating reliable, speedy, and scalable mobile applications that are in line with your business objectives, be it the initiation of a brand-new product or the enhancement of an existing ​‍​‌‍​‍‌​‍​‌‍​‍‌one.
            </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/tech23(1).avif"
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
