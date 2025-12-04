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
            <h2 className={styles.title}>Trying to Find the Website Development Company?</h2>
            <p className={styles.lead}>
              Finding a credible Website Development Company is what separates an average online presence from a highly interactive digital platform that can ensure the increase of your business. The technical side of things, paired with the artistic side of things, is what sets us apart. It results in websites that are visually stunning, tightly secured, and perform well. The team here is able to adapt the style of every project to your goals whether first website of the startup or complete brand revamp.
              </p>
          <p className={styles.lead}>
             The Creative Website Development Company is the answer to all of your worries as they offer solutions covering the whole gamut starting from domain and hosting to mobile-friendly design and advanced CMS integration. The firm also provides you with services like E-commerce, website maintenance, and professional redesigns, thus making it easier for you to access all your digital needs in one place. We don’t want to limit the scope of what you get to just a website. We want to be partners in your long-term strategy for online success.
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
