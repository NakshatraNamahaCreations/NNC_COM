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
              Why Choose Nakshatra Namaha Creations as a Digital Marketing Agency in Mumbai
            </h2>
            <p>
              Choosing the right digital marketing partner is essential for building visibility, generating leads, and driving consistent business growth. Nakshatra Namaha Creations is trusted by brands looking for a reliable digital marketing agency in Mumbai that delivers measurable results through strategy-driven campaigns.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Digital marketing strategy and execution process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced Digital Marketing Team">
              Our digital marketing specialists in Mumbai bring hands-on experience across SEO, Google Ads, social media marketing, content marketing, and performance-driven campaigns.
            </Step>

            <Step number="02" title="Result-Oriented Marketing Strategies">
              We create customized digital marketing strategies focused on lead generation, brand visibility, and measurable ROI aligned with your business objectives.
            </Step>

            <Step number="03" title="Data-Driven Campaign Optimization">
              Every campaign is continuously monitored, analyzed, and optimized using performance data to improve conversions and maximize marketing efficiency.
            </Step>

            <Step number="04" title="Timely Campaign Execution & Scaling">
              Our structured digital marketing process ensures campaigns are launched on time and scaled effectively without compromising quality or performance.
            </Step>

            <Step number="05" title="Transparent Reporting & Communication">
              You receive regular performance reports, clear insights, and consistent communication throughout your digital marketing journey.
            </Step>

            <Step number="06" title="Complete Ownership of Marketing Assets">
              You retain full ownership of ad accounts, creatives, data, and digital assets with zero vendor lock-in.
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
