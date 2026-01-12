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
           Trusted Website Developers
          <span>     in Mumbai </span>


          </h2>

          <p className={styles.description}>
           A business website is no longer just an online presence — it is a core growth asset. If you are looking for experienced website developers in Mumbai, you need a team that understands performance, scalability, and conversion-driven design.
           </p>

          <p className={styles.description}>
          We help businesses in Mumbai build fast, secure, and scalable websites that support branding, lead generation, and long-term digital growth. From early-stage companies to established enterprises, our websites are engineered to handle traffic, adapt to changing business needs, and deliver consistent user experiences across devices.
Our development approach combines technical precision with business understanding, ensuring your website is not just functional but commercially effective.

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
            alt="Mobile App Development"
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
    <span>Build What Matters</span> <br /> Trusted Website Developers in Mumbai
  </h2>

  <p>
    Bring your business online with a Mumbai-based website development team focused on usability, performance, and long-term digital growth.
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
