"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'What makes good UI/UX design important for my business?',
    a: 'Good UI/UX design enhances usability, builds trust, and keeps users engaged. It directly influences how customers perceive your brand and interact with your product.',
  },
   {
    q: 'Can I request design revisions during the project?',
    a: 'Absolutely. We include feedback loops at every stage and allow multiple rounds of revisions until you’re satisfied.',
  },
   {
    q: ' Do you provide the source files after the project?',
    a: 'Yes. You’ll get the design files in Figma/Adobe XD along with PNGs, SVGs, and handoff specs for developers.',
  },
   {
    q: 'Do you offer development too?',
    a: 'Yes. We also offer web/app development, and our dev team can build exactly what we design ensuring design integrity.',
  },
   {
    q: 'Will my design be mobile responsive?',
    a: 'Every UI we create is built to perform beautifully across devices—from phones and tablets to desktops.',
  },
   {
    q: 'Can UI/UX design impact conversion rates?',
    a: 'Yes, intuitive design guides users toward actions more effectively. A seamless experience often leads to higher engagement and better conversion rates.',
  },
   {
    q: 'How long does the UI/UX design process take?',
    a: 'Timelines depend on the project scope, number of screens, and complexity. Most UI/UX projects take anywhere from a couple of weeks to a few months.',
  },
   {
    q: 'Can you redesign my existing app or website?',
    a: 'Absolutely. We audit your current UI/UX, identify usability gaps, and redesign the experience to make it modern, intuitive, and aligned with user expectations.',
  },
   {
    q: 'Do you conduct user research before designing?',
    a: 'Yes. Our process includes understanding your audience, their behaviors, and pain points to ensure the design is both visually strong and user-centered.',
  },
   {
    q: 'Will you provide prototypes or interactive previews?',
    a: 'Yes. We create clickable prototypes so you can experience the flow, interactions, and usability before development begins.',
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
