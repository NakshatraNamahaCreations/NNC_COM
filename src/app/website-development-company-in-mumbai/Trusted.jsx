"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";


const ITEMS = [
  "Website Design and Development ",
  "Custom Websites",
  "Responsive Web Design",
  "E-commerce Websites",
  "CMS Integration",
  "Website Revamp",
  "Domain & Hosting",
  "Website Maintenance",
  "SEO Optimization",
];


export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
     
          <div className="col-lg-5">
            <div className={styles.imageCard}>
  <Image
    src="/tech12banner.avif"
    alt="Ionic app development — UI graph and neural network illustration"
    fill
    sizes="(max-width: 992px) 100vw, 520px"
    priority
    className="object-fit-cover"
  />


</div>

          </div>
        
          {/* Right image */}
               <div className="col-lg-7">
            <h2 className={styles.title}>Looking for the Best Website Development Company in Mumbai?</h2>
            <p className={styles.lead}>
             It is crucial to find the right website development company in Mumbai which will decide the difference between a low-level digital platform and a high-end one. At Nakshatra Namaha Creations, we fuse technical exactness with the charm of visuals to come up with websites that are safe, scalable, and eye-catching and that also cater to your brand strategy.
             </p>
          <p className={styles.lead}>
            Our artistic website development company in Mumbai offers complete solutions to customer requirements digitally - conducting activities from the domain stage to CMS integration, E-commerce, remakes, and long-term maintenance. The fact is that we are your digital growth partner for life, be it a startup or a mature brand.
            </p>
         
          </div>
        </div>
      </div>
    </section>
        <section className={styles.keywordsMarquee_wrap} aria-label="Capabilities">
      <div className={styles.keywordsMarquee_inner}>
        <div className={styles.keywordsMarquee_marquee}>
          <ul className={styles.keywordsMarquee_track}>
            {track.map((label, i) => (
              <li key={i} className={styles.keywordsMarquee_item}>
                <span className={styles.keywordsMarquee_pill}>{label}</span>
                <span className={styles.keywordsMarquee_dot} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    
    </>
  );
}
