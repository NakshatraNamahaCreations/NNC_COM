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
            <h2 className={styles.title}> Reliable Website Development Company in Rajajinagar</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
         Are you in need of a reliable Website Development Company in Rajajinagar? Nakshatra Namaha Creations is your local partner for professional, responsive, and SEO-friendly websites. We emphasize the creation of new layouts that not only fit well with your brand but also help you achieve your marketing goals. Just give us a brief whether it is a mere business website or a feature-packed e-commerce platform and our skilled developers will provide vividness at every stage.
   
         Being the top Website Development Company in Rajajinagar, we make sure that your site is easy to use, loads quickly, and is totally mobile-friendly. Collaborate with us to materialize your digital dream and expand your online presence efficiently in Rajajinagar, Bangalore.
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
