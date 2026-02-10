import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <h2>
            Why Choose Nakshatra Namaha Creations for
            <br />
           for CRM Solutions
          </h2>

          <p>
            Choosing the right CRM partner helps businesses implement systems that actually improve productivity and customer management. Our approach focuses on practical implementation, clear workflows, and measurable results.
          </p>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Best Website Design and Development In Mumbai Process"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Business-Focused CRM Implementation">
              Every CRM system is built around your sales process, customer journey, and operational needs
            </Step>

            <Step number="02" title="Automation That Saves Time">
              We reduce repetitive manual tasks through structured CRM automation and workflow optimization.
            </Step>

            <Step number="03" title="Clear Sales & Customer Visibility">
              CRM dashboards and reporting help teams track performance and make informed decisions.
            </Step>

            <Step number="04" title="Reliable CRM Integration">
              We ensure seamless integration with existing tools and platforms used by your business.
            </Step>

            <Step number="05" title="Transparent Implementation Process">
               Clear timelines, review stages, and regular updates keep projects aligned with expectations.
            </Step>

            <Step number="06" title="Full Ownership & Flexibility">
               You retain complete ownership of your CRM system, data, and workflows.
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
