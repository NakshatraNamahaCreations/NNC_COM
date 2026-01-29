import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.header}>
            <h2>Why Choose Nakshatra Namaha Creations as a Node JS Development Company in Mumbai</h2>
            <p>
              Choosing the right Node JS development partner is critical for building secure, scalable, and high-performance backend systems. Nakshatra Namaha Creations is trusted by businesses looking for a reliable Node JS development company in Mumbai that delivers robust server-side solutions tailored to real-world business needs.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Node JS development process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced Node JS Development Team">
              Our Node JS developers in Mumbai have extensive experience building APIs, backend systems, and real-time applications using scalable and secure architectures.
            </Step>

            <Step number="02" title="High-Performance Node JS Architecture">
              We design Node JS applications optimized for speed, concurrency, and efficiency, ensuring smooth handling of high traffic and complex business logic.
            </Step>

            <Step number="03" title="Scalable & Secure Backend Codebase">
              Every Node JS project is built with modular code, strong security practices, and scalability in mind to support future growth and integrations.
            </Step>

            <Step number="04" title="Agile Node JS Development & Timely Delivery">
              Our agile development approach ensures transparent workflows, quick iterations, and on-time delivery without compromising code quality.
            </Step>

            <Step number="05" title="Clear Communication & Progress Tracking">
              You stay updated throughout the Node JS development lifecycle with regular progress reports, milestone tracking, and open communication.
            </Step>

            <Step number="06" title="Complete Ownership of Node JS Source Code">
              You receive full ownership of the Node JS backend source code and intellectual property, ensuring complete control and no vendor lock-in.
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
