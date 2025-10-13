"use client";

import styles from "@/styles/PopularSearches.module.css";
const data = [
  {
    label: "WEBSITE DESIGN & DEVELOPMENT",
    links: [
      { text: "Website Design", href: "#" },
      { text: "Web Development", href: "#" },
      { text: "E-commerce Websites", href: "#" },
      { text: "Corporate Websites", href: "#" },
      { text: "WordPress Websites", href: "#" },
      { text: "Custom Web Applications", href: "#" },
      { text: "SEO-Friendly Websites", href: "#" },
      { text: "Responsive Web Design", href: "#" },
      { text: "Digital Marketing", href: "#" },
      { text: "UI/UX Design", href: "#" },
      { text: "Mobile App Development", href: "#" },
      { text: "Business Websites", href: "#" },
      { text: "Startup Websites", href: "#" },
      { text: "Real Estate Websites", href: "#" },
      { text: "Healthcare Websites", href: "#" },
      { text: "Education Websites", href: "#" },
      { text: "Hospitality Websites", href: "#" },
      { text: "Manufacturing Websites", href: "#" },
      { text: "IT & Tech Websites", href: "#" },
      { text: "Portfolio Websites", href: "#" },
      { text: "Branding & Design", href: "#" },
      { text: "CMS Development", href: "#" },
      { text: "Web Hosting", href: "#" },
      { text: "Landing Page Design", href: "#" },
      { text: "Website Maintenance", href: "#" },
    ],
  },
  {
    label: "MUMBAI WEBSITE SERVICES",
    links: [
      { text: "Website Design Mumbai", href: "#" },
      { text: "Web Development Mumbai", href: "#" },
      { text: "E-commerce Website Development Mumbai", href: "#" },
      { text: "Corporate Website Design Mumbai", href: "#" },
      { text: "WordPress Development Mumbai", href: "#" },
      { text: "Custom Web Development Mumbai", href: "#" },
      { text: "SEO-Friendly Websites Mumbai", href: "#" },
      { text: "Responsive Web Design Mumbai", href: "#" },
      { text: "Digital Marketing Mumbai", href: "#" },
      { text: "UI/UX Design Mumbai", href: "#" },
      { text: "Mobile App Development Mumbai", href: "#" },
      { text: "Business Websites Mumbai", href: "#" },
      { text: "Startup Websites Mumbai", href: "#" },
      { text: "Real Estate Websites Mumbai", href: "#" },
      { text: "Healthcare Websites Mumbai", href: "#" },
      { text: "Education Websites Mumbai", href: "#" },
      { text: "Hospitality Websites Mumbai", href: "#" },
      { text: "Manufacturing Websites Mumbai", href: "#" },
      { text: "IT & Tech Websites Mumbai", href: "#" },
      { text: "Portfolio Websites Mumbai", href: "#" },
      { text: "CMS Development Mumbai", href: "#" },
      { text: "Web Hosting Mumbai", href: "#" },
      { text: "Website Maintenance Mumbai", href: "#" },
      { text: "Landing Page Design Mumbai", href: "#" },
      { text: "Branding & Design Mumbai", href: "#" },
    ],
  },
];

export default function PopularSearchesWebsite() {
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
