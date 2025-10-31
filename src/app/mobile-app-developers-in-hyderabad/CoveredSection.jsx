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
            <h2 className={styles.title}>Mobile App Developers in Hyderabad </h2>
            <p className={styles.lead}>
           We​‍​‌‍​‍‌​‍​‌‍​‍‌ at Nakshatra Namaha Creations are counted among the Best App Developers in Hyderabad as we deliver high-quality, performance-driven mobile applications that help businesses to engage their customers effectively. A mobile app is no longer a mere digital extension; it is the means that takes your brand directly to users wherever they might be.
            </p>
             <p className={styles.lead}>
         Our expert mobile App Developers in Hyderabad works on custom app projects that are scalable, fast, and smooth in functionality. If your objective is to enhance customer experience, increase sales, or facilitate your operations, we have the right apps for you.
Businesses all over Hyderabad and the neighboring areas are going mobile with app solutions to be digitally competitive. With a right app strategy and the perfect execution, your business will become more accessible, loyal to the brand, and will create new avenues for revenue.

           </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/media/tech28.jpg"
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
