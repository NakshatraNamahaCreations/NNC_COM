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
            <h2 className={styles.title}>Graphic Designing Company </h2>
            <p className={styles.lead}>
            Design goes beyond appearance—it’s how your brand communicates without saying a word. In today’s dynamic market, a strong visual identity helps your brand stand apart. Every element, from color to composition, defines perception. As a leading Graphic Designing Company, we believe design should serve purpose, not trends. That’s why we emphasize clarity, creativity, and intent in every project.
             </p>
             <p className={styles.lead}>
            Our Graphic Designing Company blends imagination with brand understanding to create visuals that leave a lasting mark. Whether minimal or bold, our designs speak directly to your audience. From marketing campaigns to digital interfaces, each creation reflects meaning and purpose. With our Graphic Designing Company, design becomes more than visuals—it becomes strategy in motion.
            </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/media/icons/tech27.jpg"
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
