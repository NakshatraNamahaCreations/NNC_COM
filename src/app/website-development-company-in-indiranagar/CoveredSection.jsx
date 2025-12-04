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
            <h2 className={styles.title}> Reliable Website Development Company in Indiranagar</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
          Are you in need of a proficient Website Development Company in Indiranagar. Nakshatra Namaha Creations is the perfect partner for you in constructing responsive, custom, SEO-friendly websites. We know that your site is the root of your online identity, hence our crew architects every work to mirror your brand and captivate your target market. 
           </p>
  <p className={styles.lead}>
         Being a top Website Development Company in Indiranagar, we offer websites that are not only scalable and secure but also aesthetically appealing and compatible with all devices. In short, we change the face of your company on the web if you are a startup or a mature business with our creative, technological, and accurate approach.
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
