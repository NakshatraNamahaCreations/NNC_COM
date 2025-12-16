"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";


const ITEMS = [
 "E-commerce website development",
  "E-commerce website design",
  "E-commerce development company",
  "E-commerce web development services",
  "Custom e-commerce website development",
  "Online store development",
  "E-commerce website developers",
  "E-commerce web design company",
  "Best e-commerce development company",
  "Shopify website development",
  "WooCommerce website development",
  "Magento e-commerce development",
  "Headless e-commerce development",
  "B2B e-commerce website development"
];


export default function Trusted2() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
    {/* <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
        
     
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
        
          
               <div className="col-lg-7">
            <h2 className={styles.title}>Why Choose Nakshatra Namaha Creations?</h2>
            <p className={styles.lead}>
             Nakshatra​‍​‌‍​‍‌​‍​‌‍​‍‌ Namaha Creations is an e-commerce website development company that business owners can rely on to get a top-performing online store that genuinely expands with their business. We bring strategy, design, and technology together to create e-commerce platforms that attract customers, increase business, and provide measurable results. Every store we make is tightly packed with all the features that are necessary for it to run smoothly, appeal to users, and provide a buying experience that customers love.
             </p>
          <p className={styles.lead}>
             As a leading E-commerce website development company, we are empathetic with the entrepreneurs' pain due which is a high competitive market, increasing customer expectations, pressure from digital marketing, and the need for smooth operations. Therefore, your solutions are designed to assist you in a strong launch, consistent growth, and sustaining long-term ​‍​‌‍​‍‌​‍​‌‍​‍‌profitability.
                </p>
         
          </div>
        </div>
      </div>
    </section> */}
     <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
          <div className="col-lg-7">
            <h2 className={styles.title}>Our Mission as an E-commerce Website Development Company </h2>
            <p className={styles.lead}>
           To make your online business successful by helping you start it, develop it, and scale it.
It is not just a matter of creating a website, but we are making a money-making tool for your brand. We are 100% customer-focused in every step from product setup, user experience, backend systems to performance optimization. We deliver a complete e-commerce system that is available 24/7 and works for you

           </p>
             <p className={styles.lead}>
         We, Nakshatra Namaha Creations, as your long-term partner in E-commerce website development, are always there to support you through all the stages— the launch, updates, marketing integration, maintenance, and business ​‍​‌‍​‍‌​‍​‌‍​‍‌expansion.
            </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/media/tech29.jpg"
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
