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
            <h2 className={styles.title}>Reliable IOS App Development Company </h2>
            <p className={styles.lead}>
            The Apple App Store has more than 2.2 million apps available for download. Several key reasons are responsible for users choosing iOS. Firstly, the system is very easy and user-friendly. Secondly, the App Store submission process is so stringent that only top-quality app products are made available to the users. Besides, Apple has always been putting user privacy at the top of its list of priorities. So, app developers have to be very diligent all through the iOS app development process if they want to have their products be the ones that will be of high quality and great performance in the market.
            </p>
             <p className={styles.lead}>
            Apple is offering a full set of instruments and means for the creation of iOS apps as well as for the extension of its devices. As a top mobile app development company, Nakshatra Namaha Creations is the perfect partner for custom iOS app development that not only attracts the users but also achieves great performance and stays up-to-date with the ever-changing digital market.
            </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/media/tech28.jpg"
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
