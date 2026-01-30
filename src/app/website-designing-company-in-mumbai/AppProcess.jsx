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
              Website Designing Company in Mumbai
            </h2>
            <p>
              Choosing the right website designing company in Mumbai plays a key
              role in how your brand is perceived online. Nakshatra Namaha
              Creations is trusted by businesses looking for visually appealing,
              user-focused, and performance-driven website designs that support
              long-term digital growth.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Website designing and user experience process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced Website Design Team">
              Our designers have hands-on experience creating modern, responsive,
              and visually engaging websites that enhance brand credibility and
              user experience.
            </Step>

            <Step
              number="02"
              title="User-Centric Website Design Approach"
            >
              We focus on usability, layout structure, and visual hierarchy to
              ensure your website is intuitive, engaging, and easy to navigate
              for visitors.
            </Step>

            <Step
              number="03"
              title="Responsive & Performance-Optimized Designs"
            >
              Every website design is optimized for mobile, tablet, and desktop
              devices, ensuring consistent performance and visual quality across
              all screen sizes.
            </Step>

            <Step
              number="04"
              title="On-Time Website Design Delivery"
            >
              Our structured design process ensures timely delivery without
              compromising creativity, quality, or attention to detail.
            </Step>

            <Step
              number="05"
              title="Transparent Communication & Design Reviews"
            >
              You stay involved throughout the design process with regular
              updates, review stages, and clear communication.
            </Step>

            <Step
              number="06"
              title="Complete Ownership of Website Design Assets"
            >
              Once the project is completed, you receive full ownership of all
              website design files and assets with no restrictions or lock-ins.
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
