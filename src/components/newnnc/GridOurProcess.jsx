import React from "react";
import "@/styles/GridOurProcess.css";

// React Icons
import { FiSearch, FiClipboard, FiPenTool, FiCode, FiCheckCircle, FiSend } from "react-icons/fi";

const processSteps = [
  {
    icon: <FiSearch />,
    title: "Analyze",
    description:
      "We understand your business needs and study your audience for effective solutions.",
  },
  {
    icon: <FiClipboard />,
    title: "Plan",
    description:
      "We outline a clear strategy to meet your objectives and deliver results.",
  },
  {
    icon: <FiPenTool />,
    title: "Design",
    description:
      "We create appealing and user-friendly designs that resonate with your audience.",
  },
  {
    icon: <FiCode />,
    title: "Development",
    description:
      "We transform ideas into functional and reliable digital solutions.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Testing",
    description:
      "We thoroughly test to ensure everything works smoothly and efficiently.",
  },
  {
    icon: <FiSend />,
    title: "Launch",
    description:
      "We execute your project with precision to make an impactful start.",
  },
];

const GridOurProcess = () => {
  return (
    <section className="process-section">
      <div className="container">
        <div className="process-header">
          <h2 className="process-title">Our Process</h2>
          <p className="process-subtitle">
            A clear and structured workflow that ensures quality delivery.
          </p>
        </div>

        <div className="row">
          {processSteps.map((step, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div className="process-card">
                <div className="process-icon">{step.icon}</div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridOurProcess;
