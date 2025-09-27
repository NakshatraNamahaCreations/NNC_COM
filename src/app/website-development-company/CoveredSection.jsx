"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";

export default function CoveredSection() {


  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
          <div className="col-lg-7">
            <h2 className={styles.title}>Best Website Development Company</h2>
            <p className={styles.lead}>
              Professional website development company that can help you develop a powerful digital platform to get noticed and grow your business. A competitive online environment means that your website is now the starting point for the success of your brand. We have the proficiency and experience to work with contemporary frameworks, create responsive designs and implement secure coding practices. Therefore, we create websites that are not only aesthetically pleasing but also perform their functions efficiently.
            </p>
  <p className={styles.lead}>
             Our concentration is not only on the design aspect of it - we ensure that every site that we build is quick, search engine optimized, mobile adapted, and that it follows the business objectives. As a reliable website development company, we are dedicated to providing you with the right solutions that will result in more visitors to your site, and higher conversion rates, and will help you become the leader in the online market.
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
