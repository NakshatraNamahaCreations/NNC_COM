import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.header}>
            <h2>Why Choose Nakshatra Namaha Creations as an Ecommerce Website Development Company in Mumbai</h2>
            <p>
              Choosing the right ecommerce website development partner plays a key role in your online sales success. Nakshatra Namaha Creations is trusted by businesses looking for a reliable ecommerce website development company in Mumbai that builds secure, scalable, and conversion-focused online stores.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Ecommerce website development process illustration"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Experienced Ecommerce Development Team">
              Our ecommerce developers in Mumbai have hands-on experience building online stores, marketplaces, and custom ecommerce platforms across multiple industries.
            </Step>

            <Step number="02" title="Conversion-Focused Ecommerce Design">
              We design ecommerce websites with clear navigation, optimized product pages, and smooth checkout flows that encourage visitors to complete purchases.
            </Step>

            <Step number="03" title="Secure & Scalable Ecommerce Architecture">
              Every ecommerce website is built with strong security practices, reliable payment integration, and scalable architecture to handle traffic growth and sales spikes.
            </Step>

            <Step number="04" title="On-Time Ecommerce Project Delivery">
              Our structured ecommerce development process ensures timely delivery without compromising performance, usability, or quality.
            </Step>

            <Step number="05" title="Transparent Communication & Reporting">
              You stay informed throughout the ecommerce website development lifecycle with regular updates, milestone tracking, and clear communication.
            </Step>

            <Step number="06" title="Complete Ownership of Ecommerce Website">
              You receive full ownership of your ecommerce website, including source code and intellectual property, with no vendor lock-in.
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
