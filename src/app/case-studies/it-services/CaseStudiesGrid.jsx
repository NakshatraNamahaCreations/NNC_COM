"use client";

import Link from "next/link";
import styles from "../../../styles/CaseStudiesGrid.module.css";

const caseStudies = [

  {
    title: "Make My Documents™",
    desc: "Enhanced visibility and usability for an online document and application service platform.",
    image: "/media/casestudies/makemydocument.png",
    link: "/case-studies/it-services/makemydocuments",
    results: [
      { value: "100%", label: "User Engagement" },
      { value: "70%", label: "Organic Traffic Growth" },
      { value: "55%", label: "Application Enquiry Increase" },
    ],
  },

];


export default function CaseStudiesGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>It Services</h2>

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
