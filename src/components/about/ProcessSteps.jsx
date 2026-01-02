"use client";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

import styles from "../../styles/ProcessSteps.module.css";

const steps = [
  {
    step: "Step 1",
    title: "Focused on Your Business Needs",
    points: [
      "We listen carefully to your requirements and work closely with you to turn ideas into practical digital solutions. Your goals guide every decision we make, ensuring the final product aligns with your business needs. We take the time to understand your industry, target audience, and operational challenges before recommending solutions. By aligning technology choices with real business objectives, we ensure every feature delivers value and supports long-term growth rather than short-term fixes. ",
      "Our process is built on open communication and collaboration at every stage. We keep you involved through regular discussions, clear documentation, and progress updates, so there are no surprises and the final outcome reflects your vision accurately."
    
    ],
    image: "/media/casestudies/focused.jpg",
  },
  {
    step: "Step 2",
    title: "Attention to Detail",
    points: [
      "We pay close attention to every detail throughout the development process. From planning to final delivery, we take the time to ensure quality, accuracy, and consistency in everything we build. Every stage of our development process is handled with precision and care. From clear documentation and thoughtful design to clean code and thorough testing, we ensure that no detail is overlooked and the final product meets high quality standards.",
      "We believe that small details make a big difference in how digital products perform and feel. By maintaining consistency across design, functionality, and performance, we deliver solutions that are reliable, polished, and ready for real-world use."
    
    ],
   image: "/media/casestudies/attention.jpg",
  },
  {
    step: "Step 3",
    title: "Keeping Up With Trends and Needs",
    points: [
      "We stay updated with evolving digital trends and changing business needs to ensure our solutions remain relevant, practical, and effective over time. Our team continuously monitors emerging technologies, industry best practices, and user behavior trends. By adapting these insights thoughtfully, we help businesses stay competitive while avoiding unnecessary complexity or short-lived solutions.",
      "We focus on adopting trends that deliver real value rather than following changes for the sake of innovation. This ensures the solutions we build are modern, reliable, and aligned with current market expectations while remaining easy to maintain and scale"

    ],
   image: "/media/casestudies/trends.jpg",
  },
  {
    step: "Step 4",
    title: "Timely Delivery",
    points: [
      "We respect deadlines and follow a structured process to ensure projects are delivered on time without compromising on quality. By planning each phase carefully and setting clear expectations from the start, we minimize risks and avoid last-minute surprises. This disciplined approach allows us to deliver projects on schedule while maintaining quality standards. We believe timely delivery should never come at the cost of quality. Through efficient workflows and thorough testing, we ensure every project is completed on time and ready for real-world use. Meeting deadlines builds trust and confidence. Our commitment to timely delivery helps businesses launch on schedule, respond quickly to market demands, and maintain momentum without unnecessary delays.",

    ],
   image: "/media/casestudies/delivery.jpg",
  },

];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Why Choose Us?</h2>
      <p className={styles.para}>
        At Nakshatra Namaha Creations, we deliver meaningful digital solutions
        that help businesses grow with confidence.
      </p>

      {/* STEP BAR */}
      <div className={styles.flowBar}>
        {steps.map((item, i) => (
          <div key={i} className={styles.flowItem}>
            <button
              className={`${styles.stepBtn} ${
                active === i ? styles.active : ""
              }`}
              onClick={() => setActive(i)}
            >
              <span>{item.step}</span>
              {item.title}
            </button>

            {i !== steps.length - 1 && (
              <span className={styles.arrowIcon}>
                <HiChevronRight />
              </span>
            )}
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>{steps[active].title}</h3>
          {steps[active].points.map((point, idx) => (
            <p key={idx} className={styles.point}>
              {point}
            </p>
          ))}
        </div>

        <div className={styles.image}>
          <img src={steps[active].image} alt={steps[active].title} />
        </div>
      </div>
    </section>
  );
}