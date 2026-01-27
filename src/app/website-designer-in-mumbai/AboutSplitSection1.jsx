"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection1() {
  return (
    <>
   <section className={styles.section}>
  <div className={styles.container1}>

    {/* LEFT IMAGE */}
    <div className={styles.right1}>
      <img
        src="/media/tech/website-mumbai10.png"
        alt="Website Designer in Mumbai"
        className={styles.image}
      />
    </div>

    {/* RIGHT CONTENT */}
  <div className={styles.left1}>
<h2 className={styles.heading}>
  Build High-Impact <span>Websites with an Experienced</span> Website Designer in Mumbai
</h2>

<p className={styles.description}>
  Working with a professional website designer in Mumbai means more than getting a good-looking website. We focus on creating designs that communicate your brand clearly, guide users naturally, and build trust from the first interaction.
</p>

<p className={styles.description}>
  From layout planning and visual design to responsive behavior and usability testing, every element is carefully crafted to deliver a smooth experience across devices. Our design approach ensures your website remains relevant, easy to use, and aligned with your long-term business growth.
</p>

</div>


  </div>
</section>

    
    </>
  );
}
