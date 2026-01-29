import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.header}>
            <h2>Why Choose Nakshatra Namaha Creations as a React JS Development Company in Mumbai</h2>
            <p>
              Selecting the right React JS development partner plays a critical role in how your web application performs and scales. Nakshatra Namaha Creations is trusted by businesses looking for a reliable React JS development company in Mumbai that delivers performance-driven, scalable, and maintainable frontend solutions.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="React JS development process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced React JS Development Team">
              Our React developers in Mumbai have hands-on experience building single-page applications, dashboards, and complex frontend systems using modern React practices.
            </Step>

            <Step number="02" title="Performance-Driven React Architecture">
              We design React applications with optimized component structures, efficient state management, and fast rendering to ensure smooth user experiences.
            </Step>

            <Step number="03" title="Scalable & Maintainable React Codebase">
              Every React project is built with clean, reusable components and modular architecture, making future updates and feature expansion easy.
            </Step>

            <Step number="04" title="Agile React Development & Timely Delivery">
              Our structured React development process ensures predictable timelines, rapid iterations, and on-time delivery without sacrificing quality.
            </Step>

            <Step number="05" title="Transparent Communication & Progress Updates">
              You stay informed throughout the React development lifecycle with regular updates, sprint reviews, and clear project milestones.
            </Step>

            <Step number="06" title="Complete Ownership of React Source Code">
              You receive full ownership of the React application source code and intellectual property, ensuring flexibility and zero vendor dependency.
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
