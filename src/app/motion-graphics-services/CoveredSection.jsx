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
            <h2 className={styles.title}>Motion Graphics Studio </h2>
            <p className={styles.lead}>
           We​‍​‌‍​‍‌​‍​‌‍​‍‌ at Nakshatra Namaha Creations provide motion graphics services that literally change the look of your idea-stories. Our one and only belief is that movement conveys feeling and understanding much more than words alone ever could.

Our creative team combines the artistry with the technical skill to provide the Motion Graphics Services that not only simplify complicated concepts but also make content more attractive to different platforms.
Just take a look at our Motion Graphics Services if you want to be a step ahead of the competition with eye-catching videos that tell your story in the most effective way: explainer videos, product showcases, brand intros, or promotional reels.

            </p>
             <p className={styles.lead}>
          We at Motion Graphics Services understand your brand deeply and thus, our Motion Graphics Services resonate with your identity and customer base. Every project we embark on is a testament to this understanding.


           </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/tech24.gif"
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
