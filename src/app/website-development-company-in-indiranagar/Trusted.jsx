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
            <h2 className={styles.title}>Industries We Serve as a Website Development Company in Indiranagar, Bangalore</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
       Nakshatra Namaha Creations, a reputed Website Development Company in Indiranagar, offers customized web solutions through the different sectors like healthcare, education, retail, real estate, and startups. 
         </p>
         <p className={styles.lead} style={{fontSize:"18px"}}>
       We know the problems of each industry and make the websites that help to get the credibility, engagement, and conversions increased. Our every project of a Website Development Company in Indiranagar is a creative idea to make the businesses digitally strong and to let them grow in a proper way.
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
            <h2 className={styles.title}>Technologies We Work With as a Web Design Company in Indiranagar, Bangalore</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
        Our tech-savvy Website Development Company in Indiranagar is leveraging the most advanced and effective frameworks such as React JS, Node JS, and WordPress to develop websites that are not only modern but also secure and scalable. 
We bring advanced CMS systems and APIs integrations for the ease and luxury of supreme functionality. By selecting our Website Development Company in Indiranagar, you are making sure that your website is a future-ready one and is constructed in line with the topmost performance standards.

          </p>
          </div>
          {/* Left copy */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
  <Image
   src="/media/tech/tech1.jpg" 
    alt="Ionic app development — UI graph and neural network illustration"
    fill
    sizes="(max-width: 992px) 100vw, 520px"
    priority
    className="object-fit-cover"
  />


</div>

          </div>
        
      <br />
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
               <div className="col-lg-7">
            <h2 className={styles.title}>About Indiranagar, Bangalore</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
            One of the prominent features of Indiranagar is its vivaciousness that comes from the energy, freshness of ideas, and indomitable entrepreneurial spirit with which the locality thrives. Nakshatra Namaha Creations — a locally trusted Website Development Company in Indiranagar — makes it possible for the companies in this vibrant region to have an impressive presence in the digital world. No matter what business you operate, a boutique, café, or tech startup, our Website Development Company in Indiranagar has the creative web solutions to express not only the life of Indiranagar but also its potential for growth.
             </p>
         
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}
