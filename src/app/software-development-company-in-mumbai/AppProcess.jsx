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
              Why Choose Nakshatra Namaha Creations as a
              <br />
              Software Development Company in Mumbai
            </h2>
            <p>
              Choosing the right software development company in Mumbai is critical
              for building reliable, scalable, and future-ready digital solutions.
              Nakshatra Namaha Creations partners with businesses to develop
              custom software that supports growth, efficiency, and long-term
              operational success.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Software development process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced Software Development Team">
              Our developers have hands-on experience delivering custom software
              solutions that are secure, scalable, and aligned with real business
              requirements across industries.
            </Step>

            <Step
              number="02"
              title="Business-Centric Software Architecture"
            >
              We design software architectures that focus on performance,
              scalability, and seamless integration with your existing systems
              and workflows.
            </Step>

            <Step
              number="03"
              title="Scalable & Performance-Optimized Solutions"
            >
              Every software solution is built to handle growth—whether it’s
              increased users, data volume, or feature expansion—without
              compromising performance.
            </Step>

            <Step
              number="04"
              title="On-Time Software Delivery"
            >
              Our structured development process ensures timely project delivery
              while maintaining code quality, testing standards, and clarity at
              every stage.
            </Step>

            <Step
              number="05"
              title="Transparent Communication & Project Tracking"
            >
              You stay informed throughout the development process with regular
              updates, milestone reviews, and clear communication.
            </Step>

            <Step
              number="06"
              title="Complete Ownership of Software & Source Code"
            >
              Once the project is completed, you receive full ownership of the
              software solution, including source code and intellectual property
              rights.
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
