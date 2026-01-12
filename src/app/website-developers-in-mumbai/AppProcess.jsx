import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.header}>
  <h2>Why Choose Nakshatra Namaha Creations as Website Developers in Mumbai</h2>
  <p>
    Choosing the right development partner can define how your brand performs online. Nakshatra Namaha Creations is trusted by businesses looking for reliable website developers in Mumbai who understand both technology and business growth.
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
           <Step number="01" title="Experienced Website Development Team">
 Our team brings proven experience in building high-performance websites across industries, ensuring technical stability and long-term scalability.
</Step>

<Step number="02" title="Business-Focused Website Development Approach">
 We don’t just build websites  we develop digital platforms aligned with your brand goals, customer journey, and conversion strategy.
</Step>

<Step number="03" title="Scalable & Secure Website Architecture">
  Every website is built with a future-ready structure, strong security practices, and the ability to scale as your business grows.
</Step>

<Step number="04" title="On-Time Website Project Delivery">
  Our streamlined development process ensures timely delivery without compromising quality or performance.
</Step>

<Step number="05" title="Clear Communication & Transparent Reporting">
   You stay informed at every stage with regular updates, milestone tracking, and open communication.
</Step>

<Step number="06" title="Complete Ownership of Website Source Code">
  You receive full ownership of your website, including source code and intellectual property, with no vendor lock-in.
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
