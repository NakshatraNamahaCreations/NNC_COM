"use client";

import Link from "next/link";
import styles from "../../../styles/CaseStudiesGrid.module.css";

const caseStudies = [
  {
    title: "Vijay Home Services",
    desc: "Improved online visibility and engagement for a multi-service home solutions platform.",
    image: "/media/casestudies/vijayahome1.png",
    link: "/case-studies/home-services/vijay-home-services",
    results: [
      { value: "90%", label: "User Engagement" },
      { value: "70%", label: "Traffic Growth" },
      { value: "65%", label: "Service Enquiry Increase" },
    ],
  },
{
  title: "Shreem Marmo",
  desc: "Enhanced digital presence and lead generation for a premium marble and natural stone manufacturer.",
  image: "/media/casestudies/shreemarmoo2.png",
  link: "/case-studies/home-services/shreem-marmo",
  results: [
    { value: "85%", label: "Brand Visibility" },
    { value: "60%", label: "Qualified Leads" },
    { value: "70%", label: "Project Enquiry Growth" },
  ],
},
{
  title: "Ganesh Interior Designs",
  desc: "Strengthened digital presence and enquiry flow for a residential and commercial interior design and renovation studio.",
  image: "/media/casestudies/ganesh-interiors.png",
  link: "/case-studies/home-services/ganesh-interior",
  results: [
    { value: "High", label: "Design Visibility" },
    { value: "Consistent", label: "Qualified Enquiries" },
    { value: "Strong", label: "Client Engagement" },
  ],
},
{
  title: "Avyakth Roofing Solutions",
  desc: "Enhanced brand visibility and lead flow for a premium roofing solutions provider serving residential, commercial, and institutional projects.",
  image: "/media/casestudies/avyakthroofing.png",
  link: "/case-studies/home-services/avyakthroofing",
  results: [
    { value: "High", label: "Brand Trust" },
    { value: "Steady", label: "Project Enquiries" },
    { value: "Strong", label: "Market Presence" },
  ],
}


];


export default function CaseStudiesGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Home Services</h2>

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
