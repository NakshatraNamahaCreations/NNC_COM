"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";


const ITEMS = [
  "Corporate Video Makers",
  "Corporate Video Production Company",
  "Corporate Film Makers",
  "Corporate Video Agency",
  "Professional Corporate Video Services",
  "Corporate Ad Film Makers",
  "Business Video Production Company",
  "Corporate Filmmaking Services",
  "Best Corporate Video Makers in Bangalore",
  "Corporate Film Production Studio",
  "Brand Storytelling Videos",
  "Promotional Video Production",
  "Product Demo Video Makers",
  "Company Profile Video Production",
  "Training and Educational Videos",
  "Corporate Event Coverage",
  "Testimonial Video Production",

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
      src="/media/corporateVdo/videoproduct14.jpg"
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
            <h2 className={styles.title}>Industries We Serve</h2>
            <p className={styles.lead}>
          Our Corporate Video Makers have worked across education, IT, healthcare, fashion, and real estate. From startups to enterprises, we adapt our storytelling style to fit every business environment. Whether for internal films or brand promotions, our Corporate Video Makers deliver visuals that create impact.
            </p>
        <br />
                <h2 className={styles.title}>We Collaborate With Excellent Brands</h2>
            <p className={styles.lead}>
          Our Corporate Video Makers have partnered with leading organizations, passionate founders, and creative teams. Every collaboration is built on trust, communication, and innovation. We treat your brand like our own — that’s what makes our Corporate Video Makers stand out.
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
