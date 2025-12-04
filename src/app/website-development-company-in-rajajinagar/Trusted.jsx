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
            <h2 className={styles.title}>Industries We Serve as a Website Development Company in Rajajinagar, Bangalore</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
          Ranking #1 among the best Website Development Companies in Rajajinagar, Nakshatra Namaha Creations is an adept firm that provides along with- Website Development, Digital Marketing, and Branding Services to various industries like Retail, Healthcare, Education, Real estate, Hospitality, and Startups, across Bangalore. Our intent behind the Website Designing is to increase the customer base of the company, by giving visual prominence to the company’s products and services. Our Website Development Company in Rajajinagar is at your service providing you with tailor-made digital solutions irrespective of your sector that will make your business climb to the next level.
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
            <h2 className={styles.title}>Technologies We Work With as a Web Design Company in Rajajinagar, Bangalore</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
     Being a technology-driven Website Development Company in Rajajinagar, we rely on cutting-edge tools such as React JS, Node JS, and WordPress to build websites that are not only visually attractive but also scalable and secure. 
          </p>
          <p className={styles.lead} style={{fontSize:"18px"}}>
     Our knowledge is instrumental in the process of integration going smoothly, the site being fast loading, and content management being user-friendly. Working with our Website Development Company in Rajajinagar is the surest way to get a trendy, spec-compliant, future-proof website made for your business objectives.
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
            <h2 className={styles.title}>About Rajajinagar, Bangalore</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
            Rajajinagar is a popular area that blends well with the lifestyle of the people, having both the residential and commercial characteristics. Nakshatra Namaha Creations — your neighborhood Website Development Company in Rajajinagar — is energizing the local businesses to create a strong digital presence. If you are a startup needing to make a brand or an enterprise that is already established and wants to expand, our team is always there to offer you the web solutions that are suitable for the market and audience of Rajajinagar.
              </p>
         
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}
