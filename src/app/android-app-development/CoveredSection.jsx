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
            <h2 className={styles.title}>Leading Android App Development Company </h2>
            <p className={styles.lead}>
            Android is the operating system of more than 80% of the smartphones worldwide and has become the number one platform in the mobile world. Developing an Android app is a must for any kind of business in the current rapidly changing digital world. The open-source nature of the platform and its being free of charge make it the most attractive option both to developers and users. More than 85% of the mobile users have an Android device which in turn means the reach is huge. Spending on Android is a way to be where the large and varied user base is.
            </p>
             <p className={styles.lead}>
            By working with a tailor-made Android App Development Company, your brand can get a huge boost in the market and engage with users on a deeper level. It is a great way for businesses to offer customers tailored experiences, simplify their operations, and increase the loyalty of their customers. At Nakshatra Namaha Creations, we don’t just develop Android applications, we make your ideas real with the help of our feature-rich mobile apps. Our crew is all about performance, design, and functionality to the extent that your app won’t be like the others. Don’t hesitate to share your idea with us and we’ll be happy to transform it into reality with accuracy and creativity.
            </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/media/tech28.avif"
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
