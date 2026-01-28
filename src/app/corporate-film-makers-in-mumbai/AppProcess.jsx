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
              Corporate Film Makers in Mumbai
            </h2>

            <p>
              Choosing the right film-making partner can shape how your brand
              tells its story. Nakshatra Namaha Creations is trusted by businesses
              looking for professional corporate film makers in Mumbai who
              understand storytelling, visuals, and business communication.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Corporate film making process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced Corporate Film Making Team">
              Our film-making team brings hands-on experience in producing
              professional corporate films that reflect your brand and create a
              strong first impression.
            </Step>

            <Step number="02" title="Film Concepts Aligned with Business Goals">
              We don’t just focus on visuals. Every corporate film is planned
              around your communication objectives, target audience, and brand
              message.
            </Step>

            <Step number="03" title="Clear & Engaging Storytelling Approach">
              Our corporate films are developed with clear structure and flow,
              ensuring viewers can easily understand your message and stay
              engaged.
            </Step>

            <Step number="04" title="Professional Filming & Post-Production">
              Each film is created using professional filming techniques and
              high-quality editing standards to deliver polished results.
            </Step>

            <Step number="05" title="Transparent Film Production Process">
              We keep you involved throughout the film-making process with
              regular updates, review stages, and clear communication.
            </Step>

            <Step number="06" title="Complete Ownership of Corporate Films">
              Once the project is completed, you receive full ownership of all
              corporate film files and final edits, with no restrictions.
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
