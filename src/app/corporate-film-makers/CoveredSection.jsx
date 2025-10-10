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
            <h1 className={styles.title}>Corporate Film Makers</h1>
            <p className={styles.lead}>
             Nakshatra Namaha Creations is one of the best corporate film makers, who are solely responsible for producing films of the highest quality which are the brands' perfect communicators. We make the corporate films that are both visually appealing and professional which embody your brand ideals, achievements, and values. Our method is to mix art with the core brand to create the closest bond possible between your project and your audience. This dedication to sincere storytelling is the reason why we are a preferred option by companies that are looking for a powerful brand communication solution.
                  </p>
  <p className={styles.lead}>
            Our creative team uses the latest story-telling and production skills to make each project stand out from the rest, they are just like us, experienced corporate film makers. We do not merely inform the audience through our films, rather, we attract them. The processes we use are very thorough, starting from the conceptual stage to post-production hence the final work is of excellent quality and truly polished. We make the brand narratives simple and understandable for those who are not keen on complex business. This way, companies get to build their brands and still compete in the market.
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
