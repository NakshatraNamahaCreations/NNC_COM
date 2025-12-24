"use client";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
  FaTools,
} from "react-icons/fa";
import styles from "../../styles/IndiaSmart.module.css";

export default function IndiaSmartSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT – STICKY IMAGE */}
        <div className={styles.left}>
          <div className={styles.stickyImage}>
            <img
              src="/media/tech/27.jpg"
              alt="App Development Process"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* CENTERED HEADER */}
          <div className={styles.header}>
            {/* <h2 className={styles.heading}>
              Delivering Region-Smart Digital Solutions for India
            </h2> */}
                  <h2 className={styles.heading}>
        Our App  <span> Development Process</span>  
      </h2>
            <p className={styles.subText}>
              Our app development process is designed to turn ideas into reliable, high-performing applications. From discovery and design to development, testing, and launch, we follow a structured approach that ensures clarity, quality, and measurable results at every stage.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Discovery & Planning"
              text="The first step we take is knowing the app concept, comprehending the company goals, and the users you want to influence. Our team sketches the main functions, technological aspects, and the general plan. This phase is like setting the foundations to ensure that your product is made with a clear vision and purpose."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Wireframes & UI/UX Design"
            text="We define user flows, wireframes, and straightforward navigation patterns for the user's interaction. The design elements, colors, and brand components are produced to reflect your brand identity. The result is a customer-centric interface that your users will love to interact with daily."
            />
            <Step
              icon={<FaCode />}
              title="Development Phase"
             text="Our developers are dividing the tasks into agile sprints, and they are coding in a clean and organized manner feature-by-feature your app. The server-side, APIs, and web components are being integrated for the perfect functioning of the app. You are given the information about the progress on a regular basis so that you can be up-to-date in real-time."
            />

            <Step
              icon={<FaBug />}
              title="Testing & Quality Check"
            text="We confirm through extensive testing that the app maintains visual and functional consistency in all devices, resolutions, and platforms. Errors, slowness, and minor issues of the user interface are addressed to offer a seamless user experience. Our quality assurance team is there to make sure that your app is stable and fulfills all the criteria for release."
            />

            <Step
              icon={<FaRocket />}
              title="Launch & Deployment"
              text="In​‍​‌‍​‍‌​‍​‌‍​‍‌ fact, your application will be available on both Play Store and App Store after you have carried out all the required steps. We do the last verifications, prepare the store listings, and write the technical documentation for the approval. There is no stoppage at the time of the release, which means your app goes live as ​‍​‌‍​‍‌​‍​‌‍​‍‌planned."
            />

            <Step
              icon={<FaTools />}
              title="Long-Term Maintenance"
             text="We​‍​‌‍​‍‌​‍​‌‍​‍‌ are always keeping an eye on the speed of the app, the demands of the users, and the needs of the host. In a similar manner to your work, we will continue to upgrade, bug fix, and feature announce the app. Thus, your app will be running smoothly, safe, and in line with the constantly changing ​‍​‌‍​‍‌​‍​‌‍​‍‌market."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* STEP COMPONENT */
function Step({ icon, title, text }) {
  return (
    <div className={styles.item}>
      <div className={styles.iconBox}>{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
