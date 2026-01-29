import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>Why Businesses Choose Us for React Native Mobile App Development in Mumbai</h2>
          <p>
            Businesses across Mumbai choose us for React Native Mobile App Development in Mumbai because of our cross-platform expertise, transparent communication, and focus on building fast, scalable mobile applications using a single codebase for Android and iOS.
          </p>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/24.jpg"
                alt="React Native Mobile App Development process in Mumbai"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Dedicated React Native Development Team">
              A focused React Native mobile app development team in Mumbai that works exclusively on your project from planning to Play Store and App Store launch.
            </Step>

            <Step number="02" title="End-to-End React Native App Development">
              Complete React Native Mobile App Development in Mumbai including UI/UX design, backend integration, testing, and deployment for Android and iOS.
            </Step>

            <Step number="03" title="High-Performance React Native Architecture">
              React Native apps built with optimized architecture for smooth UI interactions, fast loading, and consistent performance across platforms.
            </Step>

            <Step number="04" title="Scalable Cross-Platform Applications">
              React Native applications designed to scale with new features, growing users, and future updates without maintaining separate codebases.
            </Step>

            <Step number="05" title="Transparent React Native App Pricing">
              Clear project estimates with no hidden costs, ensuring full transparency throughout your React Native Mobile App Development journey in Mumbai.
            </Step>

            <Step number="06" title="Faster Time-to-Market">
              Single codebase development enables quicker releases while maintaining quality on both Android and iOS platforms.
            </Step>

            <Step number="07" title="Industry-Specific React Native Solutions">
              Custom React Native apps developed for industries such as healthcare, fintech, ecommerce, logistics, education, and startups.
            </Step>

            <Step number="08" title="Full Source Code & Ownership">
              Complete ownership of your React Native app, including full source code and intellectual property rights.
            </Step>

            <Step number="09" title="Modern React Native Technology Stack">
              Built using React Native, JavaScript/TypeScript, native modules, and cloud-ready backend technologies for long-term reliability.
            </Step>

            <Step number="10" title="Custom React Native App Solutions">
              Every React Native mobile application is custom-built to match your business goals, user experience expectations, and future growth plans.
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
