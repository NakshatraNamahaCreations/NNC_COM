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
            <h2 className={styles.title}> Industries We Serve as Web Design Company in JP Nagar</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
        Being a reliable web development company in JP Nagar, we extend our services to the various industries. These industries include IT/Startups, healthcare, education, e-commerce, real estate, hospitality, and local services. Our perfect knowledge of UX, content, and technology enables us to meet the user requirements and KPIs of each sector, thus, making every website a tool for value delivery.
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
            <h2 className={styles.title}>Technologies We Work as a Web Designing Company in JP Nagar</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
            We are a top Web Designing Company in JP Nagar, Bangalore, and thus we rely on contemporary stacks to deliver websites that are not only fast and trustworthy but also attractive to the eye. Our builds are supported by clean code, responsive design, and UX optimization. Whatever be the nature of your website, whether it is a static site or a dynamic app, we primarily focus on performance, scalability, and smooth functionality, i.e., the kind of work you would anticipate from a website development company in JP Nagar.
             </p>
          </div>
          {/* Left copy */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
  <Image
   src="/media/tech/tech23.jpg" 
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
            <h2 className={styles.title}>About JP Nagar, Bangalore</h2>
            <p className={styles.lead} style={{fontSize:"18px"}}>
      JP Nagar (Jayaprakash Narayan Nagar) is a prime residential-commercial hub with excellent connectivity to Jayanagar, Bannerghatta Road, and BTM Layout. With parks, institutions, and vibrant businesses, it’s a sought-after destination—and a smart place to scale your digital presence with a seasoned website development company in JP Nagar.
             </p>
         
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}
