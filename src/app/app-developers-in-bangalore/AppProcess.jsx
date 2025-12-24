import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>Why Businesses Choose Nakshatra Namaha Creations</h2>
          <p>
           Businesses choose Nakshatra Namaha Creations for our practical approach to design and development, transparent communication, and commitment to delivering solutions that support long-term growth.
          </p>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/24.jpg"   // 🔁 your image here
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
            <Step number="01" title="Dedicated Project Team">
             A focused team that works exclusively on your app until completion.
            </Step>

            <Step number="02" title="End-to-End Development Expertise">
             From UI/UX to backend architecture everything handled in-house.
            </Step>

            <Step number="03" title="Security-First Development">
            Every layer is built with strict security protocols and data protection.
            </Step>

            <Step number="04" title="Quality That Scales">
            Apps designed to handle growth, new features, and high user traffic.    
            </Step>

           <Step number="05" title="Honest & Transparent Pricing">
            Clear estimates, no surprises, no hidden fees ever.
            </Step>
             <Step number="06" title="Faster Go-to-Market Delivery  ">
             Streamlined processes that help you launch quicker without setbacks.
            </Step>
             <Step number="07" title="Industry-Specific Solutions">
            Development tailored for your niche healthcare, fintech, ecommerce & more.
            </Step>
             <Step number="08" title="Full Ownership & Source Code Rights">
             You get complete control over your app and intellectual property.
            </Step>
             <Step number="09" title="Future-Proof Technology Stack">
            Built using modern frameworks that keep your app relevant for years.
            </Step>
             <Step number="10" title="Fully Customized App Solutions">
             Every feature and screen is crafted uniquely for your business goals.
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
