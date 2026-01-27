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
  Best Website Designer
  <span> in Mumbai </span>
</h2>

<p className={styles.description}>
  Your website is often the first impression customers have of your business. As one of the best website designers in Mumbai, we create websites that reflect professionalism, build credibility, and clearly communicate your brand value.
</p>

<p className={styles.description}>
  Our design process focuses on clarity, speed, and user experience. From responsive layouts to intuitive navigation, every website is designed to perform smoothly across devices while supporting long-term business growth and customer engagement.
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
  <span>Design Excellence That Performs</span> <br />
  Best Website Designer in Mumbai
</h2>

<p>
  Work with a Mumbai-based website designer trusted by businesses for creating modern, responsive, and conversion-focused websites that deliver real results.
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
