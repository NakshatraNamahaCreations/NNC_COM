"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'How long does it take to develop an Android app?',
    a: 'Development timelines depend on complexity. A basic app may take 4–6 weeks, while feature-rich apps can take 3–4 months.',
  },
 
   {
    q: 'Will you help with launching the app on the Google Play Store?',
    a: 'Yes. We handle the Play Store deployment process including asset creation, testing, and publishing.',
  },
   {
    q: 'Do you offer post-launch support?',
    a: 'Absolutely. We offer maintenance packages that cover bug fixes, updates, and monitoring.',
  },
 
   {
    q: 'Can you integrate payment gateways like Razorpay or UPI?',
    a: 'Yes, we support payment gateway integrations including Razorpay, Stripe, Google Pay, and UPI.',
  },
 
   {
    q: 'What if I want to update the app later with more features?',
    a: 'No problem. We build apps with scalability in mind and offer version updates as part of our extended engagement.',
  },
 
   {
    q: 'Is the app compatible with all Android versions?',
    a: 'We target the most recent and widely used Android versions to ensure maximum compatibility across devices. ',
  },
 
   {
    q: 'Do you provide end-to-end Android app development services?',
    a: 'Yes, we manage the complete Android app development lifecycle — from strategy and UI/UX design to coding, testing, Play Store submission, and post-launch maintenance.',
  },
 
   {
    q: 'Can you migrate my existing iOS app to Android?',
    a: 'Definitely. Our team can seamlessly port your iOS app to Android while maintaining consistent design, performance, and functionality across platforms.',
  },
   {
    q: 'Will my Android app work on both phones and tablets?',
    a: 'Yes. We build responsive Android apps optimized for different screen sizes, ensuring a consistent user experience on both smartphones and tablets.',
  },
 
   {
    q: 'Do you help with app marketing and ASO (App Store Optimization)?',
    a: 'Yes. Along with development, we offer ASO support — optimizing app titles, descriptions, and visuals to help your Android app rank better on the Google Play Store.',
  },

];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.faqBox}>
          {faqs.map((item, i) => (
            <div className={styles.aligned} key={i}>
              <div className={styles.content} onClick={() => toggle(i)}>
                <div className={styles.question}>{item.q}</div>
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>
                    {openIndex === i ? "–" : "+"}
                  </span>
                </div>
              </div>

              {openIndex === i && (
                <div className={styles.answer}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
