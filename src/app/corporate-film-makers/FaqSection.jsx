"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why should I hire professional corporate film makers instead of freelancers?',
    a: ' Professional corporate film makers like Nakshatra Namaha Creations provide end-to-end services including concept creation, filming, editing, and delivery, ensuring quality and consistency.',
  },
 
   {
     q: 'How long does it take to produce a corporate film?',
    a: 'Most projects take between two to six weeks, depending on the complexity of the shoot and post-production needs.', 
  },
   {
     q: 'Do you provide scripting and creative direction as part of your service?',
    a: 'Yes. Our corporate film makers handle everything from scriptwriting to final edits.', 
  },
   {
     q: 'Can corporate films be customized for social media use?',
    a: 'Absolutely. We provide platform-specific cuts optimized for LinkedIn, Instagram, YouTube, and other channels.',  
  },
   {
     q: 'Do you offer corporate ad shoot services for product promotions?',
    a: 'Yes. Our corporate film makers specialize in both long-form films and ad-style promotional shoots.',  
  },
   {
     q: 'What industries do you serve with corporate film production?',
    a: 'We work with a wide range of industries including IT, healthcare, manufacturing, education, real estate, and retail.', 
  },
   {
     q: 'How do you ensure brand messaging is maintained throughout the film?',
    a: 'Our corporate film makers collaborate closely with your marketing team to ensure brand values and tone are reflected accurately.',  
  },
   {
    q: 'Can you produce high-quality films on a limited budget?',
    a: 'Yes. We offer scalable packages for startups and small businesses without compromising on professional standards.',
  },
   {
     q: 'Do you use advanced filming techniques like drone shots or 4K resolution?',
    a: 'Yes. Our corporate film makers use modern cameras, drones, and professional lighting setups for high-quality production.',  
  },
   {
     q: 'What makes Nakshatra Namaha Creations stand out as corporate film makers?',
    a: 'Our combination of creative storytelling, technical expertise, and industry experience makes us a trusted choice for businesses seeking impactful corporate films.',  
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
