import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.header}>
            <h2>
              Why Choose Nakshatra Namaha Creations for Paid Marketing Services in Mumbai
            </h2>
            <p>
              Choosing the right paid marketing partner is critical for generating qualified leads, maximizing ad spend, and achieving measurable business growth. Nakshatra Namaha Creations is trusted by businesses looking for reliable paid marketing services in Mumbai that deliver consistent ROI through performance-driven advertising strategies.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Paid marketing strategy and performance advertising process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Certified Paid Marketing Specialists">
              Our paid marketing experts in Mumbai have hands-on experience managing Google Ads, social media advertising, display campaigns, and high-converting performance marketing strategies.
            </Step>

            <Step number="02" title="ROI-Focused Campaign Planning">
              We design paid marketing strategies based on your business goals, target audience, and budget to ensure maximum return on investment with minimal wasted ad spend.
            </Step>

            <Step number="03" title="Advanced Targeting & Conversion Tracking">
              Every campaign is set up with precise audience targeting, conversion tracking, and performance analytics to continuously improve lead quality and sales outcomes.
            </Step>

            <Step number="04" title="Continuous Optimization & Scaling">
              Our team actively monitors campaign performance, refines bidding strategies, and scales winning ads to drive consistent growth across platforms.
            </Step>

            <Step number="05" title="Transparent Performance Reporting">
              You receive clear, easy-to-understand reports with insights on clicks, conversions, cost-per-lead, and ROI—no confusing metrics or hidden data.
            </Step>

            <Step number="06" title="Full Ownership of Ad Accounts & Data">
              You maintain complete ownership of all ad accounts, creatives, and performance data, ensuring full transparency and zero vendor lock-in.
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
}

/* STEP COMPONENT */
function Step({ number, title, children }) {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepNumber}>{number}</div>
      <div>
        <span className={styles.stepLabel}>Step</span>
        <h4 className={styles.stepTitle}>{title}</h4>
        <p className={styles.stepDesc}>{children}</p>
      </div>
    </div>
  );
}
