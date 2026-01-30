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
              Why Choose Nakshatra Namaha Creations as
              <br />
              2D Animation Service In Mumbai
            </h2>

            <p>
              Choosing the right 2D animation partner plays an important role in
              how effectively your brand communicates ideas. Nakshatra Namaha
              Creations is trusted by businesses looking for a professional 2D
              animation service in Mumbai that focuses on clarity, storytelling,
              and visual communication.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="2D animation creation process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced 2D Animation Team">
              Our team has hands-on experience in creating 2D animated videos
              that communicate ideas clearly while maintaining visual
              consistency and professional quality.
            </Step>

            <Step number="02" title="2D Animation Concepts Aligned with Business Goals">
              Every 2D animated video is planned around your objectives,
              audience, and messaging needs to ensure effective communication
              and meaningful impact.
            </Step>

            <Step number="03" title="Clear & Structured 2D Storytelling">
              We follow a structured storytelling approach so complex ideas are
              simplified into easy-to-understand and engaging 2D animated
              visuals.
            </Step>

            <Step number="04" title="High-Quality 2D Animation & Post-Production">
              From illustration and animation to final rendering, our
              post-production process ensures consistent quality across all
              platforms and use cases.
            </Step>

            <Step number="05" title="Transparent 2D Animation Process & Updates">
              We keep you involved throughout the animation process with clear
              timelines, review stages, and regular progress updates.
            </Step>

            <Step number="06" title="Complete Ownership of 2D Animated Content">
              Once the project is completed, you receive full ownership of all
              2D animated video files and final assets, with no usage
              restrictions.
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
