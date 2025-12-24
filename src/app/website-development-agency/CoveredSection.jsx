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
            <h1 className={styles.title}>  Website Development Agency</h1>
            <p className={styles.lead}>
            Choosing​‍​‌‍​‍‌​‍​‌‍​‍‌ the right Website Development Agency that matches your requirements is a big factor in determining how your business will be seen online. A website is most likely the very first people to come into contact with your brand and the experience thus obtained influences directly trust, engagement, and conversions. A good website is merely not about the looks, but rather it should be about the site’s performance, usability, scalability, and growth over time.
            </p>
  <p className={styles.lead}>
          As a skilled and competent Website Development Agency, our main focus is on creating websites which are in line with the client’s business objectives, facilitate the marketing efforts, and provide users with the same experience without regard to the device used. Our method is a combination of strategy, design, development, and optimization which is done to assure that your site is a business asset that is dependable and not just a simple online ​‍​‌‍​‍‌​‍​‌‍​‍‌brochure.
                </p>
         
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/tech23(1).avif"
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
