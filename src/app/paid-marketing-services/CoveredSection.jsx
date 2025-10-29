"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";

export default function CoveredSection() {


  return (
    <>
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
          <div className="col-lg-7">
            <h2 className={styles.title}> Paid Marketing Studio – Data-Driven Ad Excellence</h2>
            <p className={styles.lead}>
           Nakshatra Namaha Creations is a reliable paid marketing studio that provides expert Paid Marketing Services for brands seeking to reach the right audience at the right time. Our team creates and manages performance-driven campaigns via Google Ads and Instagram promotions, thus enabling customers to convert effectively. If you are launching a product, creating brand awareness, or increasing your growth, our Paid Marketing Services will still be the source of your measurable success across platforms.
                </p>

                   <p className={styles.lead}>
          At Nakshatra Namaha Creations, we focus on Paid Marketing Services that really produce ROI instead of vanity metrics. We are good at ad A/B testing, precise audience segmentation, and real-time analytics for continuous performance enhancement. Our strategy for Paid Marketing Services is to switch all the parts from keyword targeting to alluring creatives for the purpose of getting maximum conversions. Our wide-ranging experience is the main lever turning your ad budgets into tangible results — more clicks, leads, and ​‍​‌‍​‍‌​‍​‌‍​‍‌revenue.
                 </p>
          </div>

          {/* Right image  */}
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
    
            <section className={styles.spotlightSection}>
  <div className={`${styles.spotlightFull} ${styles.edgeToEdge}`}>
    <Image
      src="/media/spotlight4.png"
      alt="Social Media Marketing spotlight"
      fill
      className={styles.spotlightImg}
      /* Serve smaller images on small screens to improve LCP */
     
      priority
     
    />
  </div>
</section>
    </>
  );
}
