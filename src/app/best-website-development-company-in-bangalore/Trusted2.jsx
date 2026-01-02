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
    src="/tech12banner.avif"
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
            <h2 className={styles.title}>Website Development Process for Business Owners </h2>
            <p className={styles.lead}>
          The best website development company in Bangalore follows a structured, result-oriented process designed to support business growth. It begins with understanding your business goals and target audience, followed by careful planning of the website structure to encourage conversions. Professional and clean layouts are then designed to reflect your brand identity, while development focuses on building fast, secure, and scalable websites. Before launch, thorough testing is carried out across devices and browsers to ensure smooth performance. The process concludes with deployment and ongoing support options to keep your website updated, secure, and effective over time.
           </p>
     
          </div>
        </div>
      </div>
    </section>

    
    </>
  );
}
