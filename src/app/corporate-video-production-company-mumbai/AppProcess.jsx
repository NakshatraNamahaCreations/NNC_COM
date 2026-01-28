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
              Corporate Video Production Company in Mumbai
            </h2>

            <p>
              Choosing the right production partner can define how your brand
              communicates its message. Nakshatra Namaha Creations is trusted by
              businesses looking for a reliable corporate video production
              company in Mumbai that understands storytelling, visuals, and
              business communication.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Corporate video production process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced Corporate Video Production Team">
              Our production team brings hands-on experience in creating
              professional corporate videos that reflect your brand and deliver
              a strong first impression.
            </Step>

            <Step number="02" title="Video Concepts Aligned with Business Goals">
              We don’t just focus on visuals. Every corporate video is planned
              around your communication objectives, audience, and intended
              message.
            </Step>

            <Step number="03" title="Clear & Structured Storytelling Approach">
              Our videos are developed with clarity and structure, ensuring
              viewers can easily understand your message and stay engaged
              throughout.
            </Step>

            <Step number="04" title="High-Quality Filming & Post-Production">
              Each video is produced using professional filming techniques and
              editing standards to deliver consistent quality across platforms.
            </Step>

            <Step number="05" title="Transparent Production Process & Updates">
              We keep you involved throughout the production process with
              regular updates, review stages, and clear communication.
            </Step>

            <Step number="06" title="Complete Ownership of Corporate Video Content">
              Once the project is completed, you receive full ownership of all
              video files, edits, and final outputs—without restrictions.
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
