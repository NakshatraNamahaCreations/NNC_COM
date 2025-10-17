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
         
            <h2 className={styles.title}> Industries We Serve as Website Development Company in Jayanagar, Bangalore</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
         Startups, IT services, healthcare, e-commerce, education, real estate, restaurants, and local services—we strategize, design UX, and develop tech specifically for each sector. Being a Website Designing Company in Jayanagar, we don't just design, we integrate the design with the business goals: bookings, leads, and sales.
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
            <h2 className={styles.title}>Technologies We Work With as a Web Design Company in Jayanagar, Bangalore</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
     We select tools that fit your growth plan—another reason to partner with a Website Designing Company in Jayanagar that thinks long term. Our approach focuses on delivering Customized Website Solutions designed to align perfectly with your brand and objectives. With User-Friendly Designs and Mobile-Responsive Websites, we ensure that every visitor enjoys a seamless experience across all devices. Fast Loading Speeds and SEO-Optimized Content & Structure further enhance your site’s performance and visibility, helping your business reach a wider audience. Backed by Ongoing Support & Maintenance, these pillars guide our Website Designing Company in Jayanagar across every build, ensuring long-term success and reliability for your online presence.
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
            <h2 className={styles.title}>About Jayanagar, Bangalore</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
           Jayanagar mixes the past with the present. Companies and brands that we cater to at our Website Designing Company have successfully embraced the mobile-first, SEO-driven websites and scalable e-commerce which is a clear indication that a local and experienced Website Designing Company in Jayanagar can be a great facilitator of digital transformation.
             </p>
         
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}
