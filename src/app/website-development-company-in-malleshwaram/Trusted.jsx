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
            <h2 className={styles.title}>Our Commitment to Quality and Support</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
        Nakshatra Namaha Creations is a leading Website Development Company in Malleshwaram which distinguishes itself by its quality and long-term relationships with clients. Delivering a website is merely the first step — we keep on support, maintenance, and upgrading your site so that it runs smoothly.
          </p>
         <p className={styles.lead} style={{fontSize:"18px"}}>
        We, the team, offer security patches, technical support, and regular updates so that your business is free of downtime at all times. As your dependable Website Development Company in Malleshwaram, we assure you of honest communication, efficient service, and ongoing progress for your online success.
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
            <h2 className={styles.title}>Industries We Serve as a Website Development Company in Malleshwaram</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
        Being a focused Website Development Company in Malleshwaram, Nakshatra Namaha Creations is providing customized digital solutions for various industries. We have created websites for businesses in the areas of retail, healthcare, real estate, education, and manufacturing to name a few. 
            </p>
          <p className={styles.lead} style={{fontSize:"18px"}}>
        Our knowledge of the local market as a Website Development Company in Malleshwaram allows us to grasp not only the distinct requirements of your market but also the expectations of the customers. Thus, each of our work is designed to raise the interaction, trustworthiness, and conversions that are giving the businesses in Malleshwaram the digital advantage they have been longing.
            </p>
          </div>
          {/* Left copy */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
  <Image
   src="/media/tech/tech23(1).avif" 
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
            <h2 className={styles.title}>About Malleshwaram</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
      Malleshwaram, a highly lively and historic area of Bangalore, nicely mixes the old with the new. Being the residence of a variety of businesses, educational institutions, and cultural landmarks, it is an ideal place for digital advancement. Nakshatra Namaha Creations, a neighborhood Website Development Company in Malleshwaram, is proud to be the instrumental in business promotion through building them strong online identities. We, as a brand, are the power that fuels your company with professional web solutions if you are a startup or an already existing business, which are just the right fit for the tech-savvy spirit of Malleshwaram.
             </p>
         
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}
