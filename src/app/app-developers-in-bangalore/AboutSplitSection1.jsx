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
        src="/media/tech/25.png"
        alt="Mobile App Development"
        className={styles.image}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className={styles.left1}>
      <h2 className={styles.heading}>
        Build High-Performance <span>Mobile Apps With</span>  Experienced Developers
      </h2>

      <p className={styles.description}>
        Being​‍​‌‍​‍‌​‍​‌‍​‍‌ our partner, you get the benefit of working with a committed team of mobile app developers in Bangalore who not only know the technical aspects but are also well-versed with the business strategy, design principles, and scalability factors. We don't just do coding; our chief concern is apps that meet your business objectives and offer excellent user experiences.
      </p>

      <p className={styles.description}>
       We do it thoroughly. It runs from choosing the right tech stack for the product, feature planning, coding the core functionalities, and making sure your app works smoothly across various devices and platforms. Our team is there with you at every step, preparing you for the launch of a powerful mobile app that will be able to handle the real-world scenario and future ​‍​‌‍​‍‌​‍​‌‍​‍‌expansion.
      </p>

      {/* <button className={styles.cta}>
        Book Free Consultation <FaArrowRight color="#fff" size={16} />
      </button> */}
    </div>

  </div>
</section>

    
    </>
  );
}
