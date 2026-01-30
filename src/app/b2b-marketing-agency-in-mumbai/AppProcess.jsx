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
              Why Choose Nakshatra Namaha Creations as
              <br />
              a B2B Marketing Agency In Mumbai
            </h2>

            <p>
              Choosing the right B2B marketing partner directly impacts lead quality,
              pipeline growth, and sales performance. Nakshatra Namaha Creations is
              trusted by businesses looking for a B2B marketing agency in Mumbai that
              understands decision-maker targeting, long sales cycles, and measurable
              growth strategies.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="B2B marketing strategy and lead generation process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced B2B Marketing Specialists">
              Our team brings hands-on experience in B2B marketing, helping businesses
              reach key decision-makers through focused lead generation and demand
              generation strategies.
            </Step>

            <Step number="02" title="B2B Strategies Aligned with Sales Goals">
              Every B2B marketing campaign is designed around your sales funnel,
              target accounts, and revenue objectives to ensure meaningful business
              outcomes.
            </Step>

            <Step number="03" title="Structured Lead & Demand Generation Approach">
              We follow a structured approach to B2B marketing that combines content,
              paid media, SEO, and account-based strategies to attract and nurture
              high-quality leads.
            </Step>

            <Step number="04" title="Performance-Driven Campaign Execution">
              From LinkedIn advertising to search campaigns and content distribution,
              our execution focuses on performance tracking, optimization, and ROI.
            </Step>

            <Step number="05" title="Transparent Process & Reporting">
              We keep you informed throughout the engagement with clear timelines,
              regular performance reports, and actionable insights.
            </Step>

            <Step number="06" title="Complete Ownership of B2B Marketing Assets">
              You retain full ownership of ad accounts, data, creatives, and campaign
              assets with complete transparency and no vendor lock-in.
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
