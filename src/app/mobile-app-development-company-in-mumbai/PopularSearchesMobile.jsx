"use client";

import styles from "@/styles/PopularSearches.module.css";
const data = [
  {
    label: "MOBILE APP DEVELOPMENT SERVICES IN MUMBAI",
    links: [
      { text: "Mobile App Development Company in Mumbai", href: "/mobile-app-development-company-in-mumbai" },
      { text: "Mobile App Developers in Mumbai", href: "#" },
      { text: "Custom Mobile App Development", href: "#" },
      { text: "Android App Development", href: "#" },
      { text: "iOS App Development", href: "#" },
      { text: "Cross-Platform App Development", href: "#" },
      { text: "Hybrid App Development", href: "#" },
      { text: "Mobile Application Design", href: "#" },
      { text: "App Development Services", href: "#" },
      { text: "Enterprise App Development", href: "#" },
      { text: "Mobile App UI/UX Design", href: "#" },
      { text: "Flutter App Development", href: "#" },
      { text: "React Native App Development", href: "#" },
      { text: "Ecommerce App Development", href: "#" },
      { text: "On-Demand App Development", href: "#" },
      { text: "Fintech App Development", href: "#" },
      { text: "Healthcare App Development", href: "#" },
      { text: "Education App Development", href: "#" },
      { text: "Travel App Development", href: "#" },
      { text: "Real Estate App Development", href: "#" },
      { text: "Food Delivery App Development", href: "#" },
      { text: "Mobile App Maintenance", href: "#" },
      { text: "App Store Optimization (ASO)", href: "#" },
      { text: "App Testing and QA Services", href: "#" },
      { text: "Mobile App Development Process", href: "#" },
      { text: "Mobile App Development Solutions", href: "#" },
      { text: "Mobile App Development Agency in Mumbai", href: "#" },
      { text: "App Developers for Startups", href: "#" },
      { text: "Best Mobile App Development Company", href: "#" },
      { text: "Affordable App Development Services", href: "#" },
    ],
  },
];


export default function PopularSearchesMobile() {
  return (
    <section className={`${styles.bar} ${styles.themeTeal}`} aria-labelledby="popular-title">
      <div className={styles.inner}>
       
        <ul className={styles.list}>
          {data.map((row, i) => (
            <li className={styles.row} key={i}>
              {/* Removed the label span */}
              <nav className={styles.links} aria-label={row.label}>
                {row.links.map((link, j) => (
                  <a className={styles.link} href={link.href} key={j}>
                    {link.text}
                  </a>
                ))}
              </nav>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
