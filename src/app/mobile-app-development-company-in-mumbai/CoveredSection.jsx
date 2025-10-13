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
            <h1 className={styles.title}>Mobile App Development Company in Mumbai</h1>
            <p className={styles.lead}>
           In the current mobile-centric environment, an app is essential for brands if they want to keep in touch with their customers and maintain their market position.  The best combination of utility and innovation for your mobile app please take help of a reliable partner like Nakshatra Namaha Creations. We are experts in designing mobile applications that have high efficiency, are scalable, and put the user first, which in turn, allow business to have better customer engagement and increase their growth rate. 
                </p>
         <p className={styles.lead}>
            Every project that we take at Nakshatra Namaha Creations, as one of the best mobile app development company in Mumbai, is always done keeping your objectives in mind so as to guarantee success that can be quantified.
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
