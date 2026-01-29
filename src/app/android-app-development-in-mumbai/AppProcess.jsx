import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>Why Businesses Choose Us for Android App Development in Mumbai</h2>
          <p>
            Companies across Mumbai partner with us for Android app development because of our result-driven approach, clear communication, and focus on building reliable, scalable mobile applications that support long-term business growth.
          </p>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/24.jpg"
                alt="Android app development process in Mumbai"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Dedicated Android Development Team">
              A focused Android app development team in Mumbai that works exclusively on your project from start to launch.
            </Step>

            <Step number="02" title="Complete Android App Development Services">
              End-to-end Android app development including UI/UX design, backend integration, testing, and Play Store deployment.
            </Step>

            <Step number="03" title="Secure Android App Architecture">
              Security-first development practices with strong data protection, secure APIs, and compliance-ready app builds.
            </Step>

            <Step number="04" title="Scalable Android Applications">
              Android apps built to support future features, increasing users, and high performance without disruption.
            </Step>

            <Step number="05" title="Transparent Android App Pricing">
              Clear project estimates with no hidden costs, ensuring complete transparency throughout the development cycle.
            </Step>

            <Step number="06" title="Faster Android App Launch">
              Streamlined development workflows that help you release your Android app to market faster and more efficiently.
            </Step>

            <Step number="07" title="Industry-Focused Android Solutions">
              Custom Android apps developed for industries like healthcare, fintech, ecommerce, logistics, and education.
            </Step>

            <Step number="08" title="Full Source Code & Ownership">
              You receive complete ownership of the Android app source code and all related intellectual property.
            </Step>

            <Step number="09" title="Modern Android Technology Stack">
              Built using Kotlin, Java, modern Android frameworks, and cloud-ready backend technologies.
            </Step>

            <Step number="10" title="Custom-Built Android Applications">
              Every Android app is uniquely developed to match your business model, user flow, and growth objectives.
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
