"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why​‍​‌‍​‍‌​‍​‌‍​‍‌ would one consider Nakshatra Namaha Creations as their ideal provider of Paid Marketing Services?',
    a: 'Nakshatra Namaha Creations is a team that cares about results and return on investment (ROI). We are transparent and accessible at all times. We deliver comprehensive Paid Marketing Services tailored to every business type',
  },
  {
    q: 'By what means does Nakshatra Namaha Creations define success in Paid Marketing Services?',
    a: 'We employ sophisticated analytics along with conversion tracking to get a road map of engagement, leads, and thus, ROI.',
  },
     {
    q: 'Are the specialists in Nakshatra Namaha Creations certified Google Ads and Meta Partners?',
    a: 'The answer is affirmative. Paid Marketing Services specialists in our organization hold certifications from Google and Meta.',
  },
  {
    q: 'Do you agree to a consultation before proceeding with the execution of Paid Marketing Services?',
    a: 'Of course, we do! We essentially understand your objectives, budget, and target market and only then decide to what extent our strategy in the realm of Paid Marketing Services shall be tailored.',
  },
   {
    q: 'What aspects of Nakshatra Namaha Creations make it different from the rest of the agencies?',
    a: 'The secret of our success lies in the synergy between an integrated creative approach and transparent reporting, both of which are key drivers for brand growth and business performance in our Paid Marketing Services.',
  },
  {
    q: 'How long will it take to launch Paid Marketing Services?',
    a: 'A campaign can be scheduled to go live in as little as 3–5 working days after all the necessary assets and plans have been finalized.',
  },
    {
    q: 'As a part of your Paid Marketing Services, do you create ad creatives?',
    a: 'Certainly, we are responsible for all the parts of the whole process, from the creation of visuals to the targeting and the actual campaign management.',
  },
  {
    q: 'On which platforms do your Paid Marketing Services run?',
    a: 'We are able to run campaigns on Google, Facebook, Instagram, LinkedIn, YouTube, and Twitter (X) and manage them in a coordinated way.',
  },
   {
    q: 'Is there an ad spend minimum required to engage in Paid Marketing Services?',
    a: 'We suggest a minimum of Rs.15,000 per month to achieve a meaningful reach and to perform necessary tests.',
  },
  {
    q: 'Can Paid Marketing Services be transacted in local languages?',
    a: 'Most certainly! We are paving the way for multi-language ad campaigns in Kannada, Tamil, Hindi, and Telugu with the ultimate local audience engagement ​‍​‌‍​‍‌​‍​‌‍​‍‌goal.',
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
