import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>Why Businesses Choose Us for Flutter App Development in Mumbai</h2>
          <p>
            Businesses across Mumbai choose us for Flutter App Development in Mumbai because of our cross-platform expertise, transparent communication, and focus on building fast, scalable applications using a single codebase for Android and iOS.
          </p>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/24.jpg"
                alt="Flutter App Development process in Mumbai"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Dedicated Flutter Development Team">
              A focused Flutter app development team in Mumbai that works exclusively on your project from planning to Play Store and App Store launch.
            </Step>

            <Step number="02" title="End-to-End Flutter App Development">
              Complete Flutter App Development in Mumbai including UI/UX design, backend integration, testing, and deployment for Android and iOS.
            </Step>

            <Step number="03" title="High-Performance Flutter Architecture">
              Flutter apps built with optimized architecture for smooth animations, fast loading, and consistent performance across platforms.
            </Step>

            <Step number="04" title="Scalable Cross-Platform Applications">
              Flutter applications designed to scale easily with new features, growing users, and future updates without rewriting code.
            </Step>

            <Step number="05" title="Transparent Flutter App Pricing">
              Clear project estimates with no hidden costs, ensuring full transparency throughout your Flutter App Development journey in Mumbai.
            </Step>

            <Step number="06" title="Faster Time-to-Market">
              Single codebase development enables quicker launches while maintaining quality on both Android and iOS platforms.
            </Step>

            <Step number="07" title="Industry-Specific Flutter Solutions">
              Custom Flutter apps developed for industries like healthcare, fintech, ecommerce, logistics, education, and startups.
            </Step>

            <Step number="08" title="Full Source Code & Ownership">
              Complete ownership of your Flutter app, including full source code and intellectual property rights.
            </Step>

            <Step number="09" title="Modern Flutter Technology Stack">
              Built using Flutter, Dart, Firebase, and cloud-ready backend technologies for long-term reliability and performance.
            </Step>

            <Step number="10" title="Custom Flutter App Solutions">
              Every Flutter app is uniquely built to match your business goals, user experience expectations, and future growth plans.
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
