"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";

export default function CoveredSection() {


  return (
    <section className={styles.wrap}>
      <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Left copy */}
          <div className="col-lg-7">
            <h2 className={styles.title}> Mobile App Development Company in RR Nagar – Build Powerful Digital Experiences</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
        At​‍​‌‍​‍‌​‍​‌‍​‍‌ present where life is moving fast, mobile applications are the main tool by which customers get engaged and business goes digital successfully. Nakshatra Namaha Creations, a top Mobile App Development Company in RR Nagar, builds feature-rich, user-friendly, and high-performing mobile apps that make your business grow beyond limits.
Our proficiency is in Android, iOS, and cross-platform app development that aligns with business objectives and goes beyond them. If you are a startup with your first product or an enterprise looking for customer experience optimization, our expert team in RR Nagar is there to provide you with innovative solutions that fit your unique vision.

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
