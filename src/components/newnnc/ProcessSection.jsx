"use client";

import React from "react";
import "@/styles/ProcessSection.css";
import {
  MdEventNote,
  MdCode,
  MdChecklistRtl,
  MdRocketLaunch,
  MdSecurity,
} from "react-icons/md";

// 1,3,5 on TOP  |  2,4 on BOTTOM  (like the reference)
const steps = [
  {
    id: 1,
    position: "top",
    title: "Analyze",
    description:
      "We understand your business needs and study your audience for effective solutions.",
    Icon: MdEventNote,
  },
  {
    id: 2,
    position: "bottom",
  
     title: "Plan",
    description:
      "We outline a clear strategy to meet your objectives and deliver results.",
    Icon: MdCode,
  },

  {
    id: 3,
    position: "top",
  title: "Design",
    description:
      "We create appealing and user-friendly designs that resonate with your audience.",
    Icon: MdRocketLaunch,
  },
  {
    id: 4,
    position: "bottom",
     title: "Development",
    description:
      "We transform ideas into functional and reliable digital solutions.",
    Icon: MdSecurity,
  },
  
    {
    id: 5,
    position: "top",
   title: "Testing",
    description:
      "We thoroughly test to ensure everything works smoothly and efficiently.",
    Icon: MdRocketLaunch,
  },
    {
    id: 6,
    position: "bottom",
     title: "Launch",
    description:
      "We execute your project with precision to make an impactful start.",
    Icon: MdChecklistRtl,
  },
];

const ProcessSection = () => {
  return (
    <section className="proc-section">
      <div className="proc-container">
        {/* Heading */}
        <div className="proc-heading">
          <h2 className="proc-title">OUR WORK PROCESS</h2>
          {/* <p className="proc-subtitle">
            Our structured process to move your project from concept to launch and
            beyond.
          </p> */}
        </div>

        {/* DESKTOP / TABLET LAYOUT */}
        <div className="proc-desktop">
          {/* Blue bar across */}
          <div className="proc-bar" />

          <div className="proc-steps">
            {steps.map(({ id, position, title, description, Icon }) => (
              <div
                key={id}
                className={`proc-step proc-step--${position}`}
              >
                {/* TOP content (for 1,3,5) */}
                {position === "top" && (
                  <div className="proc-block proc-block--top">
                    <p className="proc-text">{description}</p>
                    <h4 className="proc-label">{title}</h4>

                    {/* connector from text to icon */}
                    <div className="proc-line proc-line--down" />
                    <div className="proc-icon-circle">
                      <Icon className="proc-icon" />
                    </div>
                  </div>
                )}

                {/* Center number on the bar */}
                {/* <div className="proc-center">
                  <div className="proc-number-circle">{id}</div>
                </div> */}

                {/* BOTTOM content (for 2,4) */}
                {position === "bottom" && (
                  <div className="proc-block proc-block--bottom">
                    <div className="proc-icon-circle">
                      <Icon className="proc-icon" />
                    </div>
                    <div className="proc-line proc-line--up" />
                    <h4 className="proc-label">{title}</h4>
                    <p className="proc-text">{description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE LAYOUT – simple stacked cards */}
        <div className="proc-mobile">
          {steps.map(({ id, title, description, Icon }) => (
            <div key={id} className="proc-mobile-item">
              <div className="proc-mobile-icon">
                <Icon className="proc-icon" />
              </div>
              <div>
                <p className="proc-mobile-step">{id}.</p>
                <p className="proc-mobile-title">{title}</p>
                <p className="proc-mobile-text">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
