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
            <h1 className={styles.title}> Website Development Company in Mumbai</h1>
            <p className={styles.lead}>
             Nakshatra Namaha Creations is a Top web design company in Mumbai that is committed to assisting companies in creating a powerful digital presence that is different from the rest. In today's competitive online world, your website is the first brand impression that your customers get. As a professional website development company in Mumbai, we creatively blend technology and user experience to create websites that are responsive, perform well, and visually appealing, thus leading to business expansion.
            </p>
  <p className={styles.lead}>
             Design is not the sole focus of our attention-we make sure that each site we develop is fast, SEO-optimized, mobile-adaptive, and that it reflects your business goals. Being a well-known website development company in Mumbai, we bring you closer to your target audience and thus increase your engagements and elevate your brand status in the market by making you the leader in your industry online.
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
