"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'What does an E-commerce website development company do?',
    a: 'An E-commerce website development company does the following: it builds online stores with secure architecture, product management, payment integration, mobile optimization, and user-friendly designs. Nakshatra Namaha Creations is the company that manages the whole process starting from the design to the development, testing, and finally the launch',
  },
   {
    q: ' How long does it take to develop an e-commerce website?',
    a: 'The deadline for completing a project depends on the features of the store and how complicated it is. Most of the projects are completed within 2–6 weeks. Nakshatra Namaha Creations announces the delivery dates clearly and also follows a structured workflow to assure that the work is done on time.',
  },
   {
    q: 'Will my e-commerce website be mobile-friendly?',
    a: 'Of course. We build online stores that are fully responsive to mobile devices, thus providing fast and smooth shopping experiences on all platforms. As a present-day E-commerce website development company, this is one of our major concerns',
  },
   {
    q: 'Do you integrate secure payment gateways?',
    a: 'Yes, we do. We allow the use of several payment methods such as cards, UPI, wallets, subscriptions, and international gateways in order to make the checkout process easy and error-free.',
  },
   {
    q: 'Can I manage products and orders myself?',
    a: 'Indeed. We offer a simple-to-use admin panel through which you can perform activities like updating products, order-tracking, inventory-managing, and offer-handling without requiring technical skills.',
  },
   {
    q: 'Will my E-commerce website be optimized for SEO?',
    a: 'Yes, certainly. Any store we setup is equipped with SEO-friendly features such as logical structure, quick loading, standards compliant code, and friendly URLs. Nakshatra Namaha Creations is the company that makes sure your website is good to go for the first page of search results from day one.',
  },
    {
    q: ' Do you provide support after my website goes live?',
    a: 'Definitely. Being a long-term partner E-commerce website development company, we are always there with support, new features, security checking, and upkeep to guarantee that your online store is performing well and without any ​‍​‌‍​‍‌​‍​‌‍​‍‌issues.',
  },
   {
    q: 'Can you integrate third-party tools like shipping, CRM, or marketing platforms?',
    a: 'Yes. We integrate popular third-party tools such as Shiprocket, Delhivery, Zoho CRM, HubSpot, Google Analytics, Meta Pixel, mailers, marketing automation systems, and more. Our goal is to ensure your online store runs smoothly with all the tools you need for growth.',
  },
   {
    q: 'What if I need new features or changes after development is completed?',
    a: 'No problem at all. We offer continuous improvement and feature enhancement services. Whether you need new pages, advanced filters, coupon systems, subscription models, or new payment methods, our team can add them anytime. Your website will always be scalable to support your business as it grows.',
  },
   {
    q: 'Can my e-commerce website handle high traffic and large numbers of products?',
    a: 'Absolutely. We build online stores with scalable architecture that can smoothly manage thousands of products and handle high visitor traffic without performance issues. With optimized code, caching, CDN integration, and efficient database structure, your store will remain fast even during peak sale seasons or marketing campaigns.',
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
