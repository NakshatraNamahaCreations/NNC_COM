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
            <h1 className={styles.title}>2D Animation Studio in Mumbai</h1>
            <p className={styles.lead}>
           Nakshatra Namaha Creations is a famous 2D animation studio in Mumbai that is recognized for making the groundbreaking visually engaging stories of your idea which gets the audience's attention and the idea gets inspiring. Our animation works are artistic, tactical, and are oriented towards achieving goals, which make them the perfect choice for your explanatory videos, product demos, educational modules, and brand storytelling. Supported by skilled illustrators, animators, and motion designers, our 2D animation studio in Mumbai delivers to you the idea that every single frame of your animation should be a combination of function and creativity.
            </p>
         <p className={styles.lead}>
           In fact, our 2D animation studio in Mumbai is always there with you to let you communicate with your target audience through attractive visuals and smooth storytelling, whether you are a business displaying a product, an educator making the subject easy to understand, or a brand that is in the process of building awareness.
             </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/tech24.gif"
                alt="2D Animation Studios"
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
