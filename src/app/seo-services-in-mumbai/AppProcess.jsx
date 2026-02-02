import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.header}>
            <h2>Why Choose Nakshatra Namaha Creations for SEO Services in Mumbai</h2>
            <p>
              Choosing the right SEO partner directly impacts your online visibility and lead generation. Nakshatra Namaha Creations is a trusted provider of SEO services in Mumbai, helping businesses improve search rankings, attract qualified traffic, and achieve consistent organic growth.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="SEO services process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced SEO Specialists in Mumbai">
              Our SEO experts in Mumbai bring hands-on experience in optimizing websites across industries, focusing on sustainable rankings and long-term organic growth.
            </Step>

            <Step number="02" title="Data-Driven SEO Strategy">
              We build SEO strategies based on in-depth keyword research, competitor analysis, and search intent to ensure your website targets the right audience.
            </Step>

            <Step number="03" title="Technical & On-Page SEO Excellence">
              From site structure and page speed to content optimization and metadata, we strengthen every technical and on-page SEO factor that impacts rankings.
            </Step>

            <Step number="04" title="Scalable SEO Solutions for Business Growth">
              Our SEO campaigns are designed to scale as your business grows, supporting new pages, services, and markets without compromising performance.
            </Step>

            <Step number="05" title="Transparent Reporting & Performance Tracking">
              You receive clear SEO reports with keyword rankings, traffic insights, and measurable progress, keeping you informed at every stage.
            </Step>

            <Step number="06" title="Ethical SEO Practices & Long-Term Results">
              We follow white-hat SEO practices aligned with Google guidelines, ensuring stable rankings and long-lasting search visibility without risk.
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
