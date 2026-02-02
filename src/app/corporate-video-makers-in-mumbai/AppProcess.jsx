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
              Corporate Video Makers in Mumbai
            </h2>

            <p>
              Choosing the right video production partner plays a key role in how
              your brand communicates its message. Nakshatra Namaha Creations is
              trusted by businesses seeking professional corporate video makers
              in Mumbai who understand storytelling, visuals, and business
              communication.
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
              Our team has hands-on experience creating professional corporate
              videos that reflect your brand identity and communicate your
              message clearly.
            </Step>

            <Step number="02" title="Video Concepts Aligned with Business Goals">
              Every corporate video is planned around your objectives, audience,
              and brand positioning to ensure relevance and impact.
            </Step>

            <Step number="03" title="Clear, Engaging & Structured Storytelling">
              We focus on well-structured storytelling that keeps viewers
              engaged while delivering your message in a simple and effective
              way.
            </Step>

            <Step number="04" title="Professional Filming & Post-Production">
              From filming to editing, we follow high production standards to
              deliver polished, visually strong corporate videos.
            </Step>

            <Step number="05" title="Transparent Video Production Process">
              You stay involved throughout the project with regular updates,
              review checkpoints, and clear communication at every stage.
            </Step>

            <Step number="06" title="Complete Ownership of Corporate Videos">
              After project completion, you receive full ownership of all
              corporate video files and final outputs with no usage restrictions.
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
