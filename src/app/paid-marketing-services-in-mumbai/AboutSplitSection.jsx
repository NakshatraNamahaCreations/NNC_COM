"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection() {
  return (
    <>
      <section className={styles.section} style={{ padding: "10px 0" }}>
        <div className={styles.container}>

          {/* LEFT CONTENT */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
             Trusted Paid Marketing Services
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              Paid marketing is one of the fastest and most effective ways to reach your target audience, generate high-quality leads, and drive measurable business growth. As a trusted provider of paid marketing services in Mumbai, we help brands scale through strategically planned advertising campaigns across search engines, social platforms, and premium ad networks.
            </p>

            <p className={styles.description}>
              Our paid marketing experts in Mumbai specialize in Google Ads, social media advertising, display ads, remarketing, and performance-driven campaigns focused on conversions. Every campaign is optimized to reduce wasted ad spend, improve click-through rates, and deliver maximum ROI.
              Whether your goal is lead generation, eCommerce sales, or brand visibility, our paid advertising strategies are built for precision targeting, scalability, and long-term profitability.
            </p>

            <br />

            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <img
              src="/media/tech/website-mumbai9.png"
              alt="Paid Marketing Services in Mumbai"
              className={styles.image}
            />
          </div>

        </div>
      </section>

      {/* CTA BANNER SECTION */}
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
  <span>High-ROI Campaigns</span> <br />
  Paid Marketing in Mumbai
</h2>


            <p>
              Work with a Mumbai-based paid marketing agency that delivers high-impact advertising campaigns, conversion-focused strategies, and measurable ROI for your business.
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
