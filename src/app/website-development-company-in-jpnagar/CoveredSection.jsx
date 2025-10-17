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
            <h2 className={styles.title}> Leading Website Development Company in JP Nagar</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
           The right website development company in JP Nagar can be the factor that changes the way customers see your brand online. We at Nakshatra Namaha Creations, are the ideal mix of strategy, design, and technology to deliver websites that have a great performance, thus winning the trust of the users and encouraging them to take action. Being a website development company in JP Nagar, which is result-focused, we create sites that are professional, responsive, and user-friendly, and thus suitable for any business. Our approach from a neat UI to a website that loads quickly and is SEO-friendly at the on-page level not only makes your digital presence look up-to-date but also gives the users a sense of trust and will most likely lead to conversions.
            </p>
  <p className={styles.lead}  style={{fontSize:"18px"}}>
          Such services as designing a website from scratch, the development of e-commerce, SEO integration, and maintenance are some of what we offer. A website development company in JP Nagar like us, combining the design expertise with the current web standards can help you increase your visibility, acquire new customers, and be comfortable in your operations. Of course, with a perfect functionality, good performance, and ease of use, we will be the reason behind your growth and will allow you to stay relevant in a market that is rapidly changing.
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
