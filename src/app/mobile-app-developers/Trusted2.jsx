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
    src="/media/tech/tech1.jpg"
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
            <h2 className={styles.title}>Hire Mobile App Developers with Strong Focus</h2>
            <p className={styles.lead}>
             When you hire mobile app developers from our team, you get more than just coding expertise—you gain professionals who bring precision, creativity, and a results-driven mindset to every project. Our focus is on building secure, scalable, and user-friendly apps that align with your business goals and give you a competitive edge. Whether it’s iOS, Android, or cross-platform, our developers deliver solutions that perform seamlessly and grow with your brand.
             </p>
         
          </div>
        </div>
      </div>
    </section>
         <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
     
   <div className="col-lg-7">
            <h2 className={styles.title}>Expert Mobile App Developers for Your Business</h2>
            <p className={styles.lead}>
              A strong mobile presence has become essential for businesses that want to connect with customers and remain competitive. Our mobile app developers build secure, scalable, and innovative applications that help brands engage users, improve efficiency, and achieve measurable growth. Whether you need iOS, Android, or cross-platform solutions, our team ensures the final product is tailored to your goals and delivers a seamless user experience.
              </p>
          <p className={styles.lead}>
             From startups launching their first app to enterprises looking to modernize processes, we provide complete end-to-end services including design, development, testing, deployment, and maintenance. By working with our expert mobile app developers, you gain a strategic partner who combines technical expertise with creativity, ensuring your app is ready to scale with your business and stay competitive in a fast-changing digital landscape.
                </p>
         
          </div>
        
          {/* Right image */}

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
            
        </div>
      </div>
    </section>
    </>
  );
}
