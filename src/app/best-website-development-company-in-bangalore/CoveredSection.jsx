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
            <h1 className={styles.title}> Best Website Development Company in Bangalore </h1>
            <p className={styles.lead}>
         If you own a business and are looking for the best website development company in Bangalore, then your main concern would be a website that generates leads, creates brand loyalty, and is conducive to business growth that can be measured. A website is no longer just a digital presence; it is the first and foremost way customers make their decisions when they are about to contact you or not
             </p>
  <p className={styles.lead}>
         In a market as competitive as Bangalore, businesses are scrutinized online way before talking to them. Getting the best website development company in Bangalore is what makes your site being the reflection of your business not only visually but also turning the visitors into real leads.
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
