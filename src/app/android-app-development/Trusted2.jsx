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
            <h2 className={styles.title}>Industries We Serve as Android App Developers </h2>
            <p className={styles.lead}>
           Being Android app developers, we serve the industires a diversified spectrum with mobile solutions that are scalable and reliable. Our team has developed applications for different industries such as healthcare, education, logistics, retail, travel, and many more. Thus, we enable you, either a startup or an established enterprise, to tap into the massive Android user base with apps customized to meet your industry requirements.
            </p>
         
          </div>
        </div>
      </div>
    </section>

    
    </>
  );
}
