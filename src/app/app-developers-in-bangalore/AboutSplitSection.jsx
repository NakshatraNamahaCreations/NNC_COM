"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection() {
  return (
    <>
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
           App Development 
          <span> Company  in Bangalore</span>


          </h2>

          <p className={styles.description}>
           ​‍​‌‍​‍‌​‍​‌‍​‍‌ A powerful mobile app is not only about the programming code but also about building an experience that the users would love every day. Being a top-rated App Development Company in Bangalore, Nakshatra Namaha Creations emphasizes on developing mobile apps that are user-friendly, rapid, and scalable, and which really help to achieve your business goals. Our team creates apps which not only make a good visual impression but also run smoothly on different devices, thus enabling brands to attract users and keep up with the competitive markets. 
          </p>

          <p className={styles.description}>
            Regardless​‍​‌‍​‍‌​‍​‌‍​‍‌ of whether you are a startup preparing to launch your first version or a seasoned business that is updating its digital ecosystem, we will make your app idea a live product that influences the real world. Our offerings cover the entire wheel from strategy and design to development and deployment. We make the promise that your app will be able to operate, grow, and deliver tangible ​‍​‌‍​‍‌​‍​‌‍​‍‌results.
          </p>

          <a href="/contact-us" className={styles.cta} >
            Book Free Consultation <FaArrowRight color="#fff" size={16} />
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <img
            src="/media/tech/mobileapp.png"
            alt="Mobile App Development"
            className={styles.image}
          />
        </div>

      </div>
    </section>
     <section
      className={styles.ctaWrapper}
      style={{
        backgroundImage: "url('/media/tech/banner32.jpg')",
      }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2>
       <span>Build What Matters</span> A Trusted Mobile App Development Partner in Bangalore

        </h2>

        <p>
         Turn your product idea into a powerful mobile application with a Bangalore-based team that focuses on performance, scalability, and long-term business value.

        </p>

        <a href="/contact-us" className={styles.ctaBtn}>
          Book Free Call <FaArrowRight color="#fff" size={16} />
        </a>
      </div>
    </section>
    </>
  );
}
