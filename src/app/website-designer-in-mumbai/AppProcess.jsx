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
    Website Designer in Mumbai
  </h2>

  <p>
    Choosing the right development partner can define how your brand performs
    online. Nakshatra Namaha Creations is trusted by businesses looking for
    reliable website designers in Mumbai who understand both technology and
    business growth.
  </p>
</div>


        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"   // 🔁 your image here
                alt="App development process illustration"
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
    Our design team brings hands-on experience in crafting visually strong, user-friendly websites that reflect your brand and create a positive first impression.
  </Step>

  <Step number="02" title="Designs Aligned with Business Goals">
    We don’t just focus on visuals. Every website design is planned around your business objectives, customer journey, and user engagement strategy.
  </Step>

  <Step number="03" title="User-Centered Website Design Approach">
    Our websites are designed with clarity and usability in mind, ensuring visitors can easily navigate, understand your offerings, and take action.
  </Step>

  <Step number="04" title="Responsive & Modern Website Design">
    Each website is designed to perform seamlessly across desktops, tablets, and mobile devices, delivering a consistent experience on every screen.
  </Step>

  <Step number="05" title="Clear Design Process & Communication">
    We keep you involved throughout the design process with regular updates, layout previews, and clear communication at every stage.
  </Step>

  <Step number="06" title="Complete Ownership of Website Design Assets">
    Once the project is complete, you receive full ownership of all website design files, layouts, and assets—no restrictions or lock-ins.
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
