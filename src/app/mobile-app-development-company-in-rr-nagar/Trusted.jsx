"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";


const ITEMS = [
  "Mobile App Design and Development",
  "Custom Mobile Applications",
  "Android App Development",
  "iOS App Development",
  "Cross-Platform App Development",
  "UI/UX Design for Mobile Apps",
  "App Maintenance and Support",
  "App Store Deployment and Optimization",
  "Enterprise Mobile Solutions",
  "Progressive Web App (PWA) Development",
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
          <h2 className={styles.title}>Industries We Serve as a Leading Mobile App Development Company in RR Nagar, Bangalore</h2>
<p className={styles.lead} style={{fontSize:"18px"}}>
  Recognized among the best Mobile App Development Companies in RR Nagar, Nakshatra Namaha Creations specializes in crafting high-performing, user-centric mobile applications for diverse industries. From Retail, Healthcare, and Education to Real Estate, Hospitality, and Startups — we help businesses in Bangalore build apps that drive engagement and growth. Our goal is to turn your ideas into seamless digital experiences through innovative design, intuitive interfaces, and reliable functionality. Whether you need an Android, iOS, or cross-platform solution, our Mobile App Development Company in RR Nagar delivers customized digital products that empower your business to stay ahead in today’s mobile-first world.
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
          {/* Left copy */}
       <div className="col-lg-7">
          <h2 className={styles.title}>Trying to Find the Best Mobile App Development Company in RR Nagar?</h2>
<p className={styles.lead} style={{fontSize:"18px"}}>
 In​‍​‌‍​‍‌​‍​‌‍​‍‌ case you require a Mobile App Development Company in RR Nagar, which mixes creativity with technology, Nakshatra Namaha Creations would be the best partner for you. By clever design, perfect development, and ongoing optimization, we make your ideas tangible.
If you aim at making an app for customers, employees, or partners, our proficient developers assure you that it will be a secure, attractive, and scalable app. Meet with us today to see the reason why companies all over Bangalore rely on Nakshatra Namaha Creations as their most trusted Mobile App Development Company in RR ​‍​‌‍​‍‌​‍​‌‍​‍‌Nagar.

 </p>

         
          </div>
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
        
          {/* Right image */}
             
        </div>
      </div>
    </section>
    </>
  );
}
