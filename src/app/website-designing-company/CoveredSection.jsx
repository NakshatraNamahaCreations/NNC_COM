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
            <h2 className={styles.title}>Top Website Designing Company</h2>
            <p className={styles.lead}>
              As a creative website designing company, we develop websites that not only look captivating but are also a strategic digital platform that gets businesses noticed and to grow online. In the digitally competitive market, your website is the face of your brand. Our team combines the three main factors i.e. creativity, user experience, and tech precision to create websites that are up to date with the latest trend but also function properly.
                 </p>
  <p className={styles.lead}>
            We do not stop at the forefront of technology, but we also develop fast, mobile-friendly, SEO-friendly, and business-aligned websites. As a reliable website designing firm, we ensure every job leads to better online visibility, higher interaction rates, and conversions that can be tracked.
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
