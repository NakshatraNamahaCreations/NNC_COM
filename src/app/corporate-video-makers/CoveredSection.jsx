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
            <h1 className={styles.title}>Corporate Video Makers</h1>
            <p className={styles.lead}>
             Creating corporate films is more than just handling a camera — it’s about understanding a message and translating it visually. At Nakshatra Namaha Creations, our Corporate Video Makers collaborate with brands, startups, and enterprises to develop powerful stories that leave a lasting impact. Every project is built with creativity and clarity, ensuring that one compelling video speaks volumes — whether for the boardroom, broadcast, or digital campaigns.
                  </p>
  <p className={styles.lead}>
            Our Corporate Video Makers bring authenticity and emotion into every frame. Each shot is designed with purpose — to highlight achievements, launch ideas, or express a company’s vision. In a world full of visual noise, our goal as Corporate Video Makers is to craft content that truly stands out.
                    </p>
         
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/media/corporateVdo/videoproduct12.jpg"
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
