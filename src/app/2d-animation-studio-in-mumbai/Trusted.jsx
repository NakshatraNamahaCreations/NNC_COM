"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";

const ITEMS = [
  "2D Character Animation",
  "Explainer Videos",
  "Motion Graphics & Infographics",
  "Cartoon Animation",
  "Whiteboard Animation",
  "Product Demo Animations",
  "Corporate Presentations",
  "Educational & E-learning Videos",
  "Animated Advertisements",
  "Logo Animation",
  "Storyboard Development",
  "2D Visual Effects (VFX)",
  "Social Media Animation Content",
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
                src="/media/icons/tech26.jpg"
                alt="2D Animation Studios for Businesses and Brands"
                fill
                sizes="(max-width: 992px) 100vw, 520px"
                priority
                className="object-fit-cover"
              />
            </div>
          </div>
        
          {/* Right image */}
               <div className="col-lg-7">
            <h2 className={styles.title}>Leading 2D Animation Studio in Mumbai for Creative Storytelling</h2>
            <p className={styles.lead}>
             Brand that wins over customers all times, rely on visual storytelling. We, the leading 2D animation studio in Mumbai, make your brand getting the desired attention and even, explain the easiest way of the complex ideas your customers understand to engage them.
             </p>
          <p className={styles.lead}>
          Our 2D animation studio in Mumbai is able to combine the idea with the technical proficiency no matter if it is product demos, explainer videos, educational content, or social campaigns. Every project is aimed at delighting, educating, and motivating a positive change that is consistent with your brand's goals.
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
