"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";


export default function Trusted() {

  return (
    <>
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
     
          <div className="col-lg-5">
            <div className={styles.imageCard}>
  <Image
    src="/media/icons/tech27.jpg"
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
            <h2 className={styles.title}>Industries We Serve as Animated Video Creators </h2>
            <p className={styles.lead}>
           We create impactful Animated Video Production for diverse industries — from education and healthcare to technology and retail. Each animation is tailored for marketing, training, onboarding, or promotions. Whatever your niche, our Animated Video Production approach brings your ideas to life with purpose.
            </p>
            <h2 className={styles.title}>We Work with Remarkable Brands </h2>
            <p className={styles.lead}>
           We’ve collaborated with startups, enterprises, and creative agencies across industries. Our Animated Video Production has powered ad campaigns, product launches, training modules, and YouTube content — always focused on achieving real results.
            </p>
          </div>
        </div>
      </div>
    </section>

    
    </>
  );
}
