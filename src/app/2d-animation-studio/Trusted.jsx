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
            <h2 className={styles.title}>2D Animation Studios for Businesses and Brands</h2>
            <p className={styles.lead}>
             Locating the most effective 2D animation studios is synonymous with selecting a crew that has the ability to fuse the ingenuity with the strategy. Our studio differentiates itself by making animations that do not only visualize well, but also connect, instruct, and inspire to take action. The very first step to this, we are creating the animation of your audience and matching it with your company objectives whatever it be a product demo, brand story, or explainer video.
                 </p>
          <p className={styles.lead}>
           Our team of illustrators, designers, and storytellers ensures that every project is of the highest quality, unique, and includes the smallest details. Our studio has become one of the best 2D animation studios for businesses that want to be remembered in the digital world by creatively combining skill and using state-of-the-art animation tools.
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
