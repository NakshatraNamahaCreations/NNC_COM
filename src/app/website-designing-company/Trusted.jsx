"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";


const ITEMS = [
 "web design company",
  "website development company",
  "web designing services",
  "website design agency",
  "professional web designers",
  "responsive web design",
  "custom website design",
  "website redesign services",
  "e-commerce website design",
  "WordPress website development",
  "affordable website design",
  "creative web design solutions",
  "corporate website design",
  "UI/UX web design",
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
    src="/tech12banner.jpg"
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
            <h2 className={styles.title}>Need Help to Find the Best Website Designing Company?</h2>
            <p className={styles.lead}>
              A great Website Designing Company can be the difference between an average digital presence and a powerful online platform. Our team blends creativity and technology to create websites that are secure, user-friendly, and aligned with your goals. It is now possible to have all of the services you might require with regard to web hosting, domain registration, mobile-friendly design, and advanced CMS integration all under one roof. Whether you are a startup looking for initial web presence or an enterprise undergoing a brand refresh, we can be relied upon as your partner.
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
