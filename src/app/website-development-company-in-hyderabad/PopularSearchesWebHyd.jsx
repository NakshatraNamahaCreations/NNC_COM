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
  label: "HYDERABAD WEBSITE SERVICES",
  links: [
    { text: "Website Design Hyderabad", href: "#" },
    { text: "Web Development Hyderabad", href: "#" },
    { text: "E-commerce Website Development Hyderabad", href: "#" },
    { text: "Corporate Website Design Hyderabad", href: "#" },
    { text: "WordPress Development Hyderabad", href: "#" },
    { text: "Custom Web Development Hyderabad", href: "#" },
    { text: "SEO-Friendly Websites Hyderabad", href: "#" },
    { text: "Responsive Web Design Hyderabad", href: "#" },
    { text: "Digital Marketing Hyderabad", href: "#" },
    { text: "UI/UX Design Hyderabad", href: "#" },
    { text: "Mobile App Development Hyderabad", href: "#" },
    { text: "Business Websites Hyderabad", href: "#" },
    { text: "Startup Websites Hyderabad", href: "#" },
    { text: "Real Estate Websites Hyderabad", href: "#" },
    { text: "Healthcare Websites Hyderabad", href: "#" },
    { text: "Education Websites Hyderabad", href: "#" },
    { text: "Hospitality Websites Hyderabad", href: "#" },
    { text: "Manufacturing Websites Hyderabad", href: "#" },
    { text: "IT & Tech Websites Hyderabad", href: "#" },
    { text: "Portfolio Websites Hyderabad", href: "#" },
    { text: "CMS Development Hyderabad", href: "#" },
    { text: "Web Hosting Hyderabad", href: "#" },
    { text: "Website Maintenance Hyderabad", href: "#" },
    { text: "Landing Page Design Hyderabad", href: "#" },
    { text: "Branding & Design Hyderabad", href: "#" },
  ],
},
];

export default function PopularSearchesWebHyd() {
  return (
    <section className={`${styles.bar} ${styles.themeTeal}`} aria-labelledby="popular-title">
      <div className={styles.inner}>
       
         <ul className={styles.list}>
          {data.map((row, i) => (
            <li className={styles.row} key={i}>
              <span className={styles.label}>{row.label}:</span>
              <div className={styles.links} aria-label={row.label}>
                {row.links.map((link, j) => (
                  <a className={styles.link} href={link.href} key={j}>
                    {link.text}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
