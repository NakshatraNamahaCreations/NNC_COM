"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "What is the cost of ecommerce website development in Mumbai?",
    a: "The cost of ecommerce website development in Mumbai depends on factors such as website features, number of products, design complexity, payment gateway integration, and custom functionalities. Basic ecommerce websites cost less, while advanced marketplaces and custom solutions require higher investment. Contact us for a detailed quote.",
  },
  {
    q: "How long does it take to develop an ecommerce website in Mumbai?",
    a: "Most ecommerce website development projects in Mumbai take between 3 to 8 weeks. The timeline depends on the platform, design requirements, integrations, and testing scope. We share a clear project timeline before starting development.",
  },
  {
    q: "Do you provide post-launch support for ecommerce websites?",
    a: "Yes. Our ecommerce website development services in Mumbai include post-launch support such as bug fixes, performance optimization, security updates, and feature enhancements to keep your online store running smoothly.",
  },
  {
    q: "Do you build custom ecommerce websites or platform-based stores?",
    a: "We develop both custom ecommerce websites and platform-based stores. Depending on your business needs, we work with solutions like custom-built ecommerce platforms, Shopify, WooCommerce, and other scalable ecommerce frameworks.",
  },
  {
    q: "Will I get complete ownership and source code of my ecommerce website?",
    a: "Yes. After project completion, you receive full ownership of your ecommerce website, including source code, admin access, documentation, and intellectual property rights.",
  },
  {
    q: "Do you handle payment gateway integration and launch support?",
    a: "Yes. As part of our ecommerce website development services in Mumbai, we integrate secure payment gateways, configure shipping and tax settings, and assist with testing and launch to ensure a smooth go-live experience.",
  },
];



export default function FaqSection() {
  const [active, setActive] = useState(null);

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className="text-center mb-4">
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
        </div>
        <br />

        {faqs.map((item, i) => (
          <div
            key={i}
            className={`${styles.item} ${active === i ? styles.active : ""}`}
          >
            <button
              className={styles.question}
              onClick={() => setActive(active === i ? null : i)}
            >
              <span className={styles.left}>
                <FaQuestionCircle />
                {item.q}
              </span>

              <span className={styles.icon}>
                {active === i ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            <div className={styles.answer}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
