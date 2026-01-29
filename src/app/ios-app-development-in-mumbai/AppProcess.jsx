import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>Why Businesses Choose Us for iOS App Development in Mumbai</h2>
          <p>
            Businesses across Mumbai choose us for iOS App Development in Mumbai because of our deep Apple ecosystem expertise, transparent communication, and focus on building secure, high-performance iOS applications that deliver long-term business value.
          </p>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/24.jpg"
                alt="iOS App Development in Mumbai process"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Dedicated iOS Development Team">
              A focused team for iOS App Development in Mumbai that works exclusively on your project from planning to Apple App Store launch.
            </Step>

            <Step number="02" title="End-to-End iOS App Development Services">
              Complete iOS App Development in Mumbai including UI/UX design, backend integration, testing, and App Store submission.
            </Step>

            <Step number="03" title="Security-First iOS Architecture">
              iOS applications built with Apple-approved security practices, including data encryption, secure APIs, and privacy compliance.
            </Step>

            <Step number="04" title="Scalable iOS Applications">
              iOS apps designed to scale seamlessly with new features, updates, and increasing user demand without performance issues.
            </Step>

            <Step number="05" title="Transparent Pricing for iOS Projects">
              Clear cost estimates with no hidden charges, ensuring full transparency throughout your iOS App Development journey in Mumbai.
            </Step>

            <Step number="06" title="Faster iOS App Launch">
              Streamlined workflows that help you launch your iOS app faster while meeting Apple’s quality and review standards.
            </Step>

            <Step number="07" title="Industry-Specific iOS Solutions">
              Custom iOS apps developed for healthcare, fintech, ecommerce, logistics, education, and other industries.
            </Step>

            <Step number="08" title="Full Ownership & Source Code">
              Complete ownership of your iOS app, including full source code and intellectual property rights.
            </Step>

            <Step number="09" title="Modern iOS Technology Stack">
              Built using Swift, SwiftUI, UIKit, and cloud-ready backend technologies for reliability and long-term performance.
            </Step>

            <Step number="10" title="Custom iOS App Solutions">
              Every iOS application is custom-built to match your business goals, user expectations, and future growth plans.
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
