"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";

export default function CoveredSection() {


  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
          <div className="col-lg-7">
            <h2 className={styles.title}> Puppet Animation Studio  </h2>
            <p className={styles.lead}>
          Nakshatra Namaha Creations is a creative puppet animation studio , focused on crafting unique, character-driven videos that stand out. Our work combines traditional artistry with digital techniques to create explainer videos that captivate audiences and leave a lasting impression. Whether you're targeting education, product demos, or storytelling, our puppet animation adds a vibrant, human touch to your message.
            
            
            
            </p>
            <p className={styles.lead}>

          Bring your stories to life with the charm of puppet animation. Our team blends handcrafted aesthetics with modern storytelling to deliver emotionally engaging explainer videos.   
            
            </p>
            
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/media/puppetvector.jpg"
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
  );
}
