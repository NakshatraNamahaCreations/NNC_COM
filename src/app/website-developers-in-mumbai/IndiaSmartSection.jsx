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
              src="/media/tech/website-mumbai5.png"
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
  Our Website <span>Development Process in Mumbai
</span>
</h2>

<p className={styles.subText}>
  Our website development process is designed to help Mumbai businesses build reliable, high-performing websites. From planning and design to development, testing, and launch, we follow a structured approach that ensures clarity, quality, and long-term value at every stage.
</p>

          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
  icon={<FaSearch />}
  title="Requirement Analysis"
  text="We begin by understanding your business objectives, target audience, and functional requirements. This stage helps us identify the right technology stack, features, and integrations needed to support your website’s purpose and long-term goals."
/>

<Step
  icon={<FaPencilRuler />}
  title="Planning & Structure"
  text="Once requirements are clear, we plan the website’s sitemap, page hierarchy, and content flow. This ensures intuitive navigation, logical structure, and a smooth user journey across all sections of the website."
/>

<Step
  icon={<FaCode />}
  title="Design & Development"
  text="Our team designs responsive layouts that reflect your brand identity while focusing on usability and accessibility. Development follows clean coding practices to build a scalable, secure, and high-performing website."
/>

<Step
  icon={<FaBug />}
 title="Testing & Launch"
  text="Before going live, the website undergoes thorough testing for performance, security, responsiveness, and browser compatibility. Final checks ensure everything works as expected before deployment."
/>

<Step
  icon={<FaRocket />}
  title="Ongoing Support"
  text="After launch, we provide continuous support including updates, performance monitoring, security checks, and feature enhancements to keep your website running smoothly as your business evolves."
/>
{/* 
<Step
  icon={<FaTools />}
 title=""
  text=""
/> */}


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
