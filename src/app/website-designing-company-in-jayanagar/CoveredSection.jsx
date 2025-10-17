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
            <h2 className={styles.title}>Reliable Website Designing Company in Jayanagar</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
        In a world that goes digital first, a Jayanagar based website designing company that offers you both beauty and functionality is what you need. Nakshatra Namaha Creations is the go-to Website Designing Company in Jayanagar for companies that want a contemporary, easy-to-use, mobile-responsive site that attracts visitors and converts them into customers. 
           </p>
         <p className={styles.lead} style={{fontSize:"18px"}}>
        No matter if you are a new business or an established brand in Bangalore, Our Website Designing Company in Jayanagar promises you not only an attractive user interface but also fast loading speed along with easy-to-implement SEO strategies that give you an edge over your competitors and foster your business growth.
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
