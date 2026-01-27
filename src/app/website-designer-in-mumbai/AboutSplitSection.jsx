"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection() {
  return (
    <>
    <section className={styles.section} style={{padding:"10px 0"}}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
           Trusted Website Designer
          <span>     in Mumbai </span>


          </h2>

          <p className={styles.description}>
  Your website plays a critical role in how customers perceive and connect with your business. As a trusted website designer in Mumbai, we focus on creating websites that clearly communicate your brand, build trust, and encourage meaningful user engagement.
</p>

<p className={styles.description}>
  We design websites that are fast, responsive, and easy to navigate, ensuring a smooth experience across all devices. Whether you are launching a new business or improving an existing website, our design approach prioritizes usability, performance, and long-term scalability to support consistent digital growth.
</p>
          <br />

          <a href="/contact-us" className={styles.cta} >
            Book Free Consultation <FaArrowRight color="#fff" size={16} />
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <img
            src="/media/tech/website-mumbai9.png"
            alt="Website Designer in Mumbai"

            className={styles.image}
          />
        </div>

      </div>
    </section>
     <section
      className={styles.ctaWrapper}
      style={{
        backgroundImage: "url('/media/tech/banner34.png')",
      }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
     <div className={styles.content}>
<h2>
  <span>Design That Delivers</span> <br /> Trusted Website Designer in Mumbai
</h2>

<p>
  Partner with a Mumbai-based website designer focused on building reliable, user-friendly websites that support long-term business growth.
</p>

</div>


        <a href="/contact-us" className={styles.ctaBtn}>
          Book Free Call <FaArrowRight color="#fff" size={16} />
        </a>
      </div>
    </section>
    </>
  );
}
