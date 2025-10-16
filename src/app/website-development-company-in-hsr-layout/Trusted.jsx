"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";


const ITEMS = [
  "Website Designing and Development",
  "Custom Designed Websites",
  "Revamping Existing Websites",
  "Responsive Web Design",
  "Domain Name Management",
  "E-commerce Website Development",
  "Web Hosting Services",
  "Content Management System (CMS)",
  "Website Maintenance",
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
            <h2 className={styles.title}>Industries We Serve as Website Development Company in HSR Layout</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
         Being a Website Development Company in HSR Layout that customers can rely on, we create websites that are not only technically strong and effective but also catchy to the eye for various industries like services, retail, healthcare, education, real estate, hospitality, and startups. No matter what your business is — a lead generation, catalog, or e-commerce one — we customize UX and technology in a way that helps increase your business and keep your customers engaged.
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
        <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          
         {/* Right image */}
               <div className="col-lg-7">
            <h2 className={styles.title}>About HSR Layout</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
        HSR Layout is a vibrant and expanding community that is beautifully interlinked with a nice combination of living quarters, workplaces, and commercial centers. Many new companies as well as big brands love it for its up-to-date facilities, parks, and lively community. Our Website Development Company in HSR Layout is geared to assist local businesses in creating mobile-first, SEO-friendly websites and the growth of e-commerce that can keep up with the speed and aspirations of the area.
          </p>
         
          </div>
          {/* Left copy */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
  <Image
    src="/media/tech/hsrlayout.jpg"
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
    
    </>
  );
}
