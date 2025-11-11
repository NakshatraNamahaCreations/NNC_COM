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
            <h2 className={styles.title}> Website Development Company in RR Nagar – Build a Strong Digital Identity</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
       In​‍​‌‍​‍‌​‍​‌‍​‍‌ a digital world today, a strong online presence is not an option - it is a must. Nakshatra Namaha Creations, a top-tier Website Development Company in RR Nagar, supports businesses in building customer-attracting and revenue-generating websites that are powerful, responsive, and SEO-optimized.

      Being a reliable Website Development Company in RR Nagar, we mix up-to-date frameworks, attractive UI/UX design, and coding for security to create websites that not only look great but also work efficiently on any device. Any type of website you want - a corporate site, e-commerce platform, or portfolio website, we guarantee it is your brand that gets the maximum recognition with style, speed, and substance.

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
