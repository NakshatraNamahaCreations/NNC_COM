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
            <h2 className={styles.title}> Social Media Marketing Studio</h2>
            <p className={styles.lead}>
         Nakshatra​‍​‌‍​‍‌​‍​‌‍​‍‌ Namaha Creations is a creative-first social media marketing studio that is committed to building meaningful digital connections. We develop platform-specific strategies that are in line with your brand voice and business objectives, thus enabling you to be visible in the crowded feeds. By means of curated content calendars and optimized posts, our social media marketing strategy is the way your brand will be able to remain consistent and engaging on Instagram, Facebook, LinkedIn, YouTube, and the like.
           </p>
            <p className={styles.lead}>
         Our crew does not concentrate on only likes and shares — the chief aim is to make business through social media marketing. Creative storytelling and insights are some of the things we use to accomplish measurable growth whenever you decide to launch a product, nurture a community or run ad campaigns for lead ​‍​‌‍​‍‌​‍​‌‍​‍‌generation.
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
