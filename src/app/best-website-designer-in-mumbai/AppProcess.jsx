import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <h2>
            Why Choose Nakshatra Namaha Creations as
            <br />
            the Best Website Designer in Mumbai
          </h2>

          <p>
            Choosing the best website designer in Mumbai plays a key role in how
            your brand is perceived online. Nakshatra Namaha Creations is trusted
            by businesses for creating visually refined, user-friendly websites
            that build credibility and support long-term growth.
          </p>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Best Website Designer in Mumbai Process"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced Website Designer in Mumbai">
              Our design team brings hands-on experience in creating modern,
              visually appealing websites that reflect your brand identity and
              leave a strong first impression.
            </Step>

            <Step
              number="02"
              title="Designs Aligned with Business Goals"
            >
              Every website design is planned around your business objectives,
              customer journey, and engagement strategy—not just visual appeal.
            </Step>

            <Step number="03" title="User-Centric Website Design Approach">
              We focus on usability, clarity, and navigation to ensure visitors
              can easily explore your website and take meaningful action.
            </Step>

            <Step number="04" title="Responsive & Modern Website Design">
              All websites are designed to work seamlessly across desktops,
              tablets, and mobile devices, delivering a consistent experience on
              every screen size.
            </Step>

            <Step number="05" title="Clear Design Process & Communication">
              You stay involved throughout the design process with regular
              updates, design previews, and transparent communication.
            </Step>

            <Step number="06" title="Complete Ownership of Website Design Assets">
              Once the project is completed, you receive full ownership of all
              website design files, layouts, and assets—no restrictions or
              lock-ins.
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
