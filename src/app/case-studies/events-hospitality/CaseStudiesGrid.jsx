"use client";

import Link from "next/link";
import styles from "../../../styles/CaseStudiesGrid.module.css";

const caseStudies = [

  {
    title: "Lavish Eventzz",
    desc: "Strengthened online presence and booking enquiries for a balloon decoration service.",
    image: "/media/casestudies/lavish.png",
    link: "/case-studies/events-hospitality/lavisheventzz",
    results: [
      { value: "90%", label: "Customer Enquiries" },
      { value: "95%", label: "Organic Traffic Growth" },
      { value: "80%", label: "Booking Conversion Rate" },
    ],
  }
];


export default function CaseStudiesGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Events Hospitality </h2>

      <div className={styles.grid}>
        {caseStudies.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={styles.card}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Hover Results */}
            <div className={styles.results}>
              <h4>Results We Got</h4>

              <div className={styles.resultsRow}>
                {item.results.map((res, i) => (
                  <div key={i} className={styles.resultItem}>
                    <span>{res.value}</span>
                    <p>{res.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Content */}
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
