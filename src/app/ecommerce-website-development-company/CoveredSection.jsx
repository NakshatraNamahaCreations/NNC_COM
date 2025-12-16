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
            <h2 className={styles.title}>Why Choose Nakshatra Namaha Creations? </h2>
            <p className={styles.lead}>
           Nakshatra​‍​‌‍​‍‌​‍​‌‍​‍‌ Namaha Creations is an e-commerce website development company that business owners can rely on to get a top-performing online store that genuinely expands with their business. We bring strategy, design, and technology together to create e-commerce platforms that attract customers, increase business, and provide measurable results. Every store we make is tightly packed with all the features that are necessary for it to run smoothly, appeal to users, and provide a buying experience that customers love.
            </p>
             <p className={styles.lead}>
          As a leading E-commerce website development company, we are empathetic with the entrepreneurs' pain due which is a high competitive market, increasing customer expectations, pressure from digital marketing, and the need for smooth operations. Therefore, your solutions are designed to assist you in a strong launch, consistent growth, and sustaining long-term ​‍​‌‍​‍‌​‍​‌‍​‍‌profitability.
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
