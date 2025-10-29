"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";

export default function CoveredSection() {


  return (
    <>
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
          <div className="col-lg-7">
            <h2 className={styles.title}> Search Engine Optimisation Studio</h2>
            <p className={styles.lead}>
         Nakshatra​‍​‌‍​‍‌​‍​‌‍​‍‌ Namaha Creations is a Search Engine Optimisation studio that focuses on results and drives them by the means of SEO in a way that is completely organic. Our skilled team uses a blend of technical SEO, on-page strategies, and content alignment to make sure that your website is ranking well on all search engines. Every search engine optimisation plan is based on solid facts, understanding the audience and business goals for gaining success that can be measured.
          </p>
            <p className={styles.lead}>
        We employ Search Engine Optimisation techniques to achieve growth that is sustainable for startups and local businesses as well as for large enterprises looking for national domination. To begin with, our SEO strategy allows you to rise in keyword rankings, increase traffic through organic visitors, and gain more authority for your site which, in the end, will lead to lasting ​‍​‌‍​‍‌​‍​‌‍​‍‌results.
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
        <section className={styles.spotlightSection}>
  <div className={`${styles.spotlightFull} ${styles.edgeToEdge}`}>
    <Image
      src="/media/spotlight3.png"
      alt="Social Media Marketing spotlight"
      fill
      className={styles.spotlightImg}
      /* Serve smaller images on small screens to improve LCP */
     
      priority
     
    />
  </div>
</section>
    </>
  );
}
