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
            <h2 className={styles.title}> Leading Node Js Development Company</h2>
            <p className={styles.lead}>
           At Nakshatra Namaha Creations, we proudly stand as a Node Js Development Company that helps businesses build scalable, high-performance web applications and backend systems. Our Node.js developers design fast, event-driven, and secure applications that consume minimal resources and deliver maximum performance. Whether you’re a startup, small business, or large enterprise, our Node Js Development Company can help transform your ideas into robust digital products.
            </p>
             <p className={styles.lead}>
           Once your requirements are clear, our Node Js Development Company becomes the architect of your vision. We build custom APIs and deliver full-stack solutions using Express.js, MongoDB, and cloud integrations that make your application powerful and future-ready.
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
