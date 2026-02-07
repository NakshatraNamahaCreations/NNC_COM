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
              a B2B Marketing Company In Mumbai
            </h2>

            <p>
              Choosing the right B2B marketing company directly influences lead
              quality, pipeline growth, and overall sales performance. Nakshatra
              Namaha Creations is trusted by businesses looking for a B2B marketing
              company in Mumbai that understands decision-maker targeting, complex
              buying journeys, and performance-driven marketing strategies built for
              measurable business growth.
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
            <Step number="01" title="Experienced B2B Marketing Professionals">
              Our team brings practical experience in B2B marketing, helping
              businesses reach decision-makers through focused lead generation,
              demand generation, and structured marketing execution.
            </Step>

            <Step number="02" title="Strategies Built Around Business Goals">
              Every B2B marketing campaign is aligned with your sales funnel,
              target audience, and revenue objectives to ensure marketing efforts
              contribute directly to business growth.
            </Step>

            <Step number="03" title="Structured Lead Generation Approach">
              As a B2B marketing company in Mumbai, we follow a structured approach
              that combines content marketing, paid campaigns, SEO, and account-based
              strategies to attract and nurture qualified leads.
            </Step>

            <Step number="04" title="Performance-Focused Campaign Execution">
              From LinkedIn advertising to search and performance campaigns, our
              execution focuses on continuous optimization, performance tracking,
              and improving return on investment.
            </Step>

            <Step number="05" title="Transparent Communication & Reporting">
              We maintain transparency through clear timelines, regular performance
              updates, and actionable insights that help you understand campaign
              progress and outcomes.
            </Step>

            <Step number="06" title="Complete Ownership & Data Transparency">
              You retain full ownership of ad accounts, campaign data, creatives,
              and marketing assets, ensuring complete transparency and long-term
              control over your marketing investments.
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
