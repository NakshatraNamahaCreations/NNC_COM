"use client";
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
              Social Media Marketing In Mumbai
            </h2>

            <p>
              Choosing the right graphic design partner plays an important role
              in how effectively your brand communicates visually. Nakshatra
              Namaha Creations is trusted by businesses looking for a
              professional Social Media Marketing In Mumbai that focuses on
              creativity, brand consistency, and clear visual communication.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Graphic design process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced Graphic Design Team">
              Our team has hands-on experience in creating visually compelling
              designs that communicate brand messages clearly while maintaining
              consistency and professional quality.
            </Step>

            <Step
              number="02"
              title="Design Concepts Aligned with Business Goals"
            >
              Every design is created around your objectives, target audience,
              and brand identity to ensure meaningful and effective visual
              communication.
            </Step>

            <Step
              number="03"
              title="Clear & Structured Visual Communication"
            >
              We follow a structured design approach so complex ideas are
              transformed into clean, easy-to-understand, and engaging visual
              designs.
            </Step>

            <Step
              number="04"
              title="High-Quality Design & Final Output"
            >
              From concept creation and layout to final artwork delivery, our
              design process ensures high-quality visuals suitable for digital
              and print platforms.
            </Step>

            <Step
              number="05"
              title="Transparent Design Process & Regular Updates"
            >
              We keep you informed throughout the design process with clear
              timelines, review stages, and regular progress updates.
            </Step>

            <Step
              number="06"
              title="Complete Ownership of Design Assets"
            >
              Once the project is completed, you receive full ownership of all
              design files and final assets with no usage limitations.
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
