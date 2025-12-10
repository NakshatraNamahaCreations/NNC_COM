
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
            <h1 className={styles.title}> Designing Interfaces That Truly Engage Users </h1>
            <p className={styles.lead}>
         In​‍​‌‍​‍‌​‍​‌‍​‍‌ a world where countless apps and websites are available digitally, companies depend on a UI/UX Design Agency to invent experiences that are different and have a real impact. At Nakshatra Namaha Creations, we do not limit our attention to the visuals only—we design with clarity, purpose, and emotion.
We make it so the users want to stay longer, explore deeper, and return more often through every layout, interaction, and transition. Our style is a mix of creativity and strategy, thus making us a reliable UI/UX design company for contemporary brands.

            </p>
              <p className={styles.lead}>
         We realize that digital experiences have to be nonchalant. Hence, our interface design agency makes sure that every screen is in line not only with the user's expectations but also with the business outcomes. 
If you are a mobile app or web platform builder, then our digital product design studio is the right place for you to get the most user-friendly designs that will be your engagement and loyalty drivers for the long ​‍​‌‍​‍‌​‍​‌‍​‍‌term.

             </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/tech23(1).avif"
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
