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
            <h2 className={styles.title}>What a Website Development Agency Actually Does</h2>
            <p className={styles.lead}>
             A​‍​‌‍​‍‌​‍​‌‍​‍‌ Website Development Agency takes the planning, designing, building, and maintaining websites that help generate real business results as its main functions. In contrast to simple website builders or templates that anyone can use, an agency professionally installs the technical foundation, user experience, content structure, and scalability from the very first day.
               </p>
          <p className={styles.lead}>
             An effective Website Development Agency doesn't just consider the website to look good visually but concentrates on the way users interact with your website, how fast pages are loading, how secure the platform is, and how easily the site can be extended with your business. Hence, every decision—from layout to backend logic—is done to support the website's usability and ​‍​‌‍​‍‌​‍​‌‍​‍‌performance.
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
