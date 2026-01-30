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
              Animated Video Creators In Mumbai
            </h2>

            <p>
              Choosing the right animation partner plays a key role in how
              effectively your brand communicates ideas. Nakshatra Namaha
              Creations is trusted by businesses looking for animated video
              creators in Mumbai who understand visual storytelling, audience
              engagement, and brand communication.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Animated video creation process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced Animated Video Creators">
              Our team has hands-on experience in creating animated videos that
              visually communicate ideas clearly while maintaining brand
              consistency and professional quality.
            </Step>

            <Step number="02" title="Animation Concepts Aligned with Business Goals">
              Every animated video is planned around your objectives, audience,
              and messaging needs to ensure meaningful communication and
              measurable impact.
            </Step>

            <Step number="03" title="Clear & Structured Animated Storytelling">
              We follow a structured storytelling approach so complex ideas are
              broken down into simple, engaging animated visuals that are easy
              to understand.
            </Step>

            <Step number="04" title="High-Quality Animation & Post-Production">
              From motion design to final rendering, our animation and
              post-production process ensures consistent quality across all
              platforms and use cases.
            </Step>

            <Step number="05" title="Transparent Animation Process & Regular Updates">
              We keep you involved throughout the animation process with clear
              timelines, review stages, and regular progress updates.
            </Step>

            <Step number="06" title="Complete Ownership of Animated Video Content">
              Once the project is completed, you receive full ownership of all
              animated video files and final assets, with no usage restrictions.
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
