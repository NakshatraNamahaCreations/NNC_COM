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
            <h2 className={styles.title}> Reliable Website Development Company in HSR Layout</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
             Nakshatra Namaha Creations presents an extensive array of website development services to help you create a compelling online presence. Our team is capable of delivering any kind of website such as a plain informative site, a lively e-commerce platform, or a tailor-made web application with every feature perfectly coordinated to your objectives. We, as a Website Development Company in HSR Layout, pride ourselves on making websites that are easy to use, responsive, and secure, thus, attractive and efficient. 
             </p>
  <p className={styles.lead}>
            Our cooperation process, from the initial stage to the support after the launch, is your guarantee that the end product is a reflection of your idea and a source of joy for your target group. Collaborate with a Website Development Company in HSR Layout that helps you to the next level of your digital presence.
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
