"use client";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";
import styles from "../../styles/IndiaSmart.module.css";

export default function CorporateFilmMakersMumbai() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT – STICKY IMAGE */}
        <div className={styles.left}>
          <div className={styles.stickyImage}>
            <img
              src="/media/tech/corporate8.png"
              alt="Corporate Film Making Process in Mumbai"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our CRM <span>Implementation Process</span>
            </h2>

           <p className={styles.subText}>
  Our CRM implementation process follows a clear and structured approach to ensure smooth adoption and long-term usability. Each stage focuses on understanding business workflows, configuring the system to match operational needs, and ensuring teams can manage leads, customers, and communication efficiently from a single platform.
</p>

          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Understanding Business Needs & Customer Journey"
              text="We analyze your current processes, challenges, and goals to define the right CRM structure."
            />

            <Step
              icon={<FaPencilRuler />}
              title="CRM Planning & Workflow Design"
              text="We design workflows, automation rules, and customer data structures for efficient management."
            />

            <Step
              icon={<FaCode />}
              title="CRM Setup & Configuration"
              text="The CRM platform is configured based on your operational requirements and team usage."
            />

            <Step
              icon={<FaBug />}
              title="Testing & Optimization"
              text="The system is tested and refined to ensure smooth performance and accurate data flow."
            />

            <Step
              icon={<FaRocket />}
             title="Deployment & Ongoing Support"
              text="After implementation, we provide ongoing guidance and optimization support."
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
