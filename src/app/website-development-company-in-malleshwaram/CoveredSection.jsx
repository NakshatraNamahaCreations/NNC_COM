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
            <h2 className={styles.title}> Reliable Website Development Company in Malleshwaram</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
           Are you searching for a Website Development Company in Malleshwaram that really gets your business goals? Nakshatra Namaha Creations is the perfect local partner for you when it comes to the creation of custom, responsive, and SEO-friendly websites. We don't just bring the beauty of art, but also the latest technology, to produce internet platforms that are a true reflection of your brand's personality. 
           </p>
  <p className={styles.lead}  style={{fontSize:"18px"}}>
           You can count on the skilled team at Nakshatra Namaha Creations to provide you with portfolio sites, which are straightforward, or e-commerce solutions that are extensively professional. We, as a Website Development Company in Malleshwaram, are committed to on-time delivery, support for the future, and tangible digital growth to let your brand make the mark online.
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
