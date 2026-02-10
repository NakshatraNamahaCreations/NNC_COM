import Image from "next/image";
import styles from "../../styles/AppProcess.module.css";

export default function AppProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <h2>
            Why Choose Nakshatra Namaha Creations for
            <br />
            the Best Website Design and Development In Mumbai
          </h2>

          <p>
            Choosing the best website design and development in Mumbai directly
            impacts your online visibility, user engagement, and business
            growth. Nakshatra Namaha Creations helps businesses build
            well-designed, high-performing websites that combine visual quality
            with strong technical foundations.
          </p>
        </div>

        <div className={styles.layout}>
          {/* LEFT – STICKY IMAGE */}
          <div className={styles.left}>
            <div className={styles.stickyMedia}>
              <Image
                src="/media/tech/website-mumbai4.png"
                alt="Best Website Design and Development In Mumbai Process"
                width={400}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className={styles.right}>
            <Step number="01" title="Expert Website Design and Development Team">
              Our team brings hands-on experience in delivering complete website
              design and development solutions, combining clean UI design with
              reliable backend implementation.
            </Step>

            <Step number="02" title="Design and Development Aligned with Business Goals">
              Every website is planned around your business objectives, user
              journey, and conversion goals—ensuring both design and development
              work together effectively.
            </Step>

            <Step number="03" title="User-Focused UI/UX and Functional Development">
              We prioritize intuitive navigation, fast load times, and smooth
              interactions so users can easily engage with your website across
              all devices.
            </Step>

            <Step number="04" title="Responsive, Scalable Website Development">
              Websites are built to perform seamlessly on desktops, tablets, and
              mobiles, with scalable architecture that supports future growth
              and feature expansion.
            </Step>

            <Step number="05" title="Transparent Process and Ongoing Collaboration">
              You stay informed throughout the design and development process
              with regular updates, previews, and clear communication at every
              stage.
            </Step>

            <Step number="06" title="Complete Ownership of Website Code and Assets">
              After project completion, you receive full ownership of all
              website design files, source code, and assets—giving you complete
              control without limitations.
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
