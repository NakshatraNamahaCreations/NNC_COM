import React, { useState } from "react";
import "@/styles/FaqSectionNew.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What types of websites do you develop?",
    answer:
      "We develop static, dynamic, e-commerce, portfolio and custom web applications based on your business requirements.",
  },
  {
    question: "Can you help with Google Ads and Facebook Ads?",
    answer:
      "Yes, we create and manage Google Ads, Facebook Ads and Instagram campaigns to maximize your brand visibility.",
  },
  {
    question: "Do you offer website maintenance and support?",
    answer:
      "Yes, we provide website maintenance, security updates, bug fixes and performance optimization.",
  },
  {
    question: "Can you produce corporate videos and advertisements?",
    answer:
      "Yes, we offer scriptwriting, video shooting, editing, motion graphics and voice-over services for corporate promotions.",
  },
  {
    question: "Will I own the source code and rights to my project?",
    answer:
      "Yes, once the project is completed and full payment is made, you will have full ownership of the source code and intellectual property.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">

        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-wrapper">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                <span>{item.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>

              <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
                <br />
                {item.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
