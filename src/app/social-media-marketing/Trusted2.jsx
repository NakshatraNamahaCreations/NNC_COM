"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";


export default function Trusted() {

  return (
    <>
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
     
          <div className="col-lg-5">
            <div className={styles.imageCard}>
  <Image
    src="/media/tech/tech1.jpg"
    alt="Ionic app development — UI graph and neural network illustration"
    fill
    sizes="(max-width: 992px) 100vw, 520px"
    priority
    className="object-fit-cover"
  />


</div>

          </div>
        
          {/* Right image */}
               <div className="col-lg-7">
            <h2 className={styles.title}>Industries We Serve as IOS App Developers </h2>
            <p className={styles.lead}>
            As leading iOS app developers, we work with businesses across a wide range of industries. From startups and enterprises to retail brands and service providers, our solutions are designed to match specific goals and user needs. Whether you're in healthcare, education, e-commerce, or real estate, we bring deep technical expertise and industry insight to every app we build.
             </p>
         
          </div>
        </div>
      </div>
    </section>

    
    </>
  );
}
