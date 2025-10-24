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
    src="/media/icons/tech26.jpg"
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
            <h2 className={styles.title}> Industries We Serve</h2>
            <p className={styles.lead}>
            Our Graphic Designing Company works with brands across retail, healthcare, technology, fashion, education, and more. Each industry has unique design language, and we understand how to tailor creativity to fit those tones. Whatever your sector, our Graphic Designing Company helps you stand out with thoughtful, impactful visuals.
             </p>
         <h2 className={styles.title}> We Work with Remarkable Brands</h2>
            <p className={styles.lead}>
            Our Graphic Designing Company has partnered with leading and emerging brands to shape distinct identities. Over the years, we’ve helped businesses build lasting impressions through creative visual storytelling.
             </p>
          </div>
        </div>
      </div>
    </section>

    
    </>
  );
}
