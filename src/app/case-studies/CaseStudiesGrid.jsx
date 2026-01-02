"use client";

import Link from "next/link";
import styles from "../../styles/CaseStudiesGrid.module.css";

const caseStudies = [
  {
    title: "Vijay Home Services",
    desc: "Improved online visibility and engagement for a multi-service home solutions platform.",
    image: "/media/casestudies/vijayahome1.png",
    link: "https://www.vijayhomeservices.com/",
    results: [
      { value: "90%", label: "User Engagement" },
      { value: "70%", label: "Traffic Growth" },
      { value: "65%", label: "Service Enquiry Increase" },
    ],
  },
  {
    title: "Make My Documents™",
    desc: "Enhanced visibility and usability for an online document and application service platform.",
    image: "/media/casestudies/makemydocument.png",
    link: "https://www.makemydocuments.com/",
    results: [
      { value: "100%", label: "User Engagement" },
      { value: "70%", label: "Organic Traffic Growth" },
      { value: "55%", label: "Application Enquiry Increase" },
    ],
  },
  {
    title: "Lavish Eventzz",
    desc: "Strengthened online presence and booking enquiries for a balloon decoration service.",
    image: "/media/casestudies/lavish.png",
    link: "https://www.lavisheventzz.com/",
    results: [
      { value: "90%", label: "Customer Enquiries" },
      { value: "95%", label: "Organic Traffic Growth" },
      { value: "80%", label: "Booking Conversion Rate" },
    ],
  },
  {
    title: "Novus Health",
    desc: "Developed a clear and trustworthy website for a diagnostics and radiology center.",
    image: "/media/casestudies/novushealth.png",
    link: "https://www.novushealth.in/",
    results: [
      { value: "88%", label: "Patient Trust Improvement" },
      { value: "75%", label: "Appointment Enquiry Growth" },
      { value: "80%", label: "Service Information Accessibility" },
    ],
  },
  {
    title: "Medinovis Pharma",
    desc: "Designed a structured and compliance-ready website for a healthcare brand.",
    image: "/media/casestudies/medinovus.png",
    link: "https://medinovispharma.com/",
    results: [
      { value: "85%", label: "Improved User Trust" },
      { value: "70%", label: "Better Information Accessibility" },
      { value: "60%", label: "Increase in Enquiry Conversions" },
    ],
  },
];


export default function CaseStudiesGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Case Studies</h2>

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
