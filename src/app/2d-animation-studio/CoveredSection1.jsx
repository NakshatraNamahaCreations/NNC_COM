"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";

export default function CoveredSection1() {


  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
          <div className="col-lg-7">
            <h2 className={styles.title}>Leading 2D Animation Studios for Creative Storytelling</h2>
            <p className={styles.lead}>
         Visual storytelling is among the best means that can attract the attention of people and establish valuable relationships with them. As one of the most reliable 2D animation studios, we concentrate on the creation of animations that only attract the eye of the viewers but also have the practical use, thus helping businesses and brands to easily communicate complex ideas.
                         </p>
         <p className={styles.lead}>
          Since the team work of the creative professionals results in the production of animations that are both interesting and strategically designed to create a strong influence, these animations can be in the form of explainer videos and product demos, educational content and brand storytelling. By blending innovation with technical know-how, our 2D animation studios make certain that each and every one of your projects will be memorable to the audience while accomplishing your business objectives.
                      </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/media/icons/tech27.jpg"
                alt="Leading 2D Animation Studios"
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
