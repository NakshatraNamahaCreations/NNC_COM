"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";


const ITEMS = [
  "Corporate Video Production",
  "Ad Film Making",
  "Brand Storytelling Videos",
  "Promotional Video Production",
  "Product Demo Videos",
  "Business Profile Videos",
  "Training and Educational Videos",
  "Corporate Event Coverage",
  "Testimonial Video Production",
  "Company Introduction Videos",
  "Explainer Videos",
  "Industrial and Manufacturing Videos",
  "Commercial Video Production",
  "Branded Content Filming",
  "Corporate Documentary Films",
  "Social Media Video Campaigns",

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
            <h2 className={styles.title}>Comprehensive Corporate Ad Shoot</h2>
            <p className={styles.lead}>
           Our professional corporate film makers team is exceptional in producing complete ad shoots that effectively promote business products, services, or events. Through our initiative, we aim to incorporate creativity and strategy which will have every advertisement not only grab the attention but also convey the brand message with the right choice and impact.                    </p>
          <p className={styles.lead}>
           
           By hiring Nakshatra Namaha Creations as your corporate film makers, you get a professional team that takes over concept design, scriptwriting, location scouting, production, and post-production. Our smooth flow makes your idea into refined, top-notch ad content that arouses audience engagement and elevates your brand presence.

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
