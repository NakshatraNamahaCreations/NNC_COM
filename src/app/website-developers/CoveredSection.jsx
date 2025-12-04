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
            <h1 className={styles.title}>Expert Website Developers for High-Performance Websites </h1>
            <p className={styles.lead}>
            New online business's wins and the start of their online journey is all about the workers that will do the site for them, these workers will take your idea and turn it into a working and attractive website. A professionally built website is not just about the beauty of it but also about the creation of a safe, quick, and easy transaction for your clients. Our dedicated team of website developers is committed to mixing up the latest technologies with tried and tested strategies to deliver websites that captivate visitors and increase conversions.
             </p>
  <p className={styles.lead}>
            Being in the online market that is fiercely competitive and highly digitalized, it is always wise to have the support of top web developers who will bring a big plus to the branding of your company. Our specialists are masters in developing a mobile-friendly and flexible website that any user can switch from one gadget to another without experiencing a hassle in navigating and loading the site quickly that is always the case with them. Working with competent website developers, you are guaranteed that your digital footprint is reliable, user-friendly, and sustainable for your business.
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
