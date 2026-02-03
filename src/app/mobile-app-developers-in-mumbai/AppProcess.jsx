import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>Why Businesses Choose Mobile App Developers in Mumbai Like Us</h2>
          <p>
            Businesses across Mumbai work with our mobile app developers because of our structured development approach, clear communication, and focus on building scalable mobile applications that support real business goals.
          </p>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/24.jpg"
                alt="Mobile app development process in Mumbai"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Dedicated Mobile App Development Team">
              A focused team of mobile app developers in Mumbai that works closely with you from planning to final delivery.
            </Step>

            <Step number="02" title="End-to-End Mobile App Development Services">
              Complete mobile app development services covering UI/UX design, development, testing, and app store deployment.
            </Step>

            <Step number="03" title="Secure Mobile App Architecture">
              Strong security practices with protected data flow, secure APIs, and stability across mobile platforms.
            </Step>

            <Step number="04" title="Scalable Mobile Applications">
              Mobile apps designed to support future feature expansion, increasing users, and consistent performance.
            </Step>

            <Step number="05" title="Transparent Mobile App Pricing">
              Clear and upfront pricing with no hidden costs throughout the mobile app development process.
            </Step>

            <Step number="06" title="Faster Mobile App Launch">
              Optimized workflows that help launch your mobile application quickly without compromising quality.
            </Step>

            <Step number="07" title="Industry-Specific Mobile Solutions">
              Custom mobile apps developed for industries such as healthcare, fintech, ecommerce, logistics, and education.
            </Step>

            <Step number="08" title="Complete Source Code Ownership">
              Full ownership of the mobile app source code and intellectual property upon project completion.
            </Step>

            <Step number="09" title="Modern Mobile Technology Stack">
              Development using modern frameworks, scalable backend systems, and cloud-ready technologies.
            </Step>

            <Step number="10" title="Custom-Built Mobile Applications">
              Every mobile app is developed to match your business workflow, user experience, and long-term goals.
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
