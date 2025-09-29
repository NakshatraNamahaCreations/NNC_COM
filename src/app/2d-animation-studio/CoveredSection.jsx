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
            <h1 className={styles.title}>2D Animation Studios</h1>
            <p className={styles.lead}>
           Our 2D animation studios are known for creating visually engaging stories that attract the attention of the people with whom they connect. We make animations that are not only innovative but also officially designed to bring the intended results in the form of explainer videos, product demos, educational content, and brand storytelling. Our studio powered by a team of talented illustrators, motion designers, and storytellers guarantees that every project will be done with accuracy, originality, and intention. 
                        </p>
         <p className={styles.lead}>
           The animations from our 2D animation studios are the ones that impress you permanently whether you are a business that wants to market a product, an educator who wants to make the difficult concepts easier for students, or a brand that is seeking to become stronger.
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
