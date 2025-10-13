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
            <h2 className={styles.title}>Best 2D Animation Studio in Mumbai for Businesses and Brands</h2>
            <p className={styles.lead}>
         It is essential that you find a perfect 2D animation studio in Mumbai that understands the value of creativity and marketing in equal measure. At Nakshatra Namaha Creations, we make animations that visually impress your audience. Besides, they also engage, educate, and convert.

The artists, the designers, and the narrators at Nakshatra Namaha Creations work closely with each other to create unique and quality-packed animations. Being a 2D animation Studio in Mumbai, we have been instrumental in enabling mounds of businesses to get noticed amidst the fierce competition of the online world by attracting their target audience through engaging visuals and well-planned storytelling.
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
