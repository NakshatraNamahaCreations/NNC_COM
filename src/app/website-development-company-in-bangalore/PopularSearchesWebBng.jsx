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
  { text: "Website Design Bangalore", href: "#" },
  { text: "Web Development Bangalore", href: "#" },
  { text: "E-commerce Website Development Bangalore", href: "#" },
  { text: "Corporate Website Design Bangalore", href: "#" },
  { text: "WordPress Development Bangalore", href: "#" },
  { text: "Custom Web Development Bangalore", href: "#" },
  { text: "SEO-Friendly Websites Bangalore", href: "#" },
  { text: "Responsive Web Design Bangalore", href: "#" },
  { text: "Digital Marketing Bangalore", href: "#" },
  { text: "UI/UX Design Bangalore", href: "#" },
  { text: "Mobile App Development Bangalore", href: "#" },
  { text: "Business Websites Bangalore", href: "#" },
  { text: "Startup Websites Bangalore", href: "#" },
  { text: "Real Estate Websites Bangalore", href: "#" },
  { text: "Healthcare Websites Bangalore", href: "#" },
  { text: "Education Websites Bangalore", href: "#" },
  { text: "Hospitality Websites Bangalore", href: "#" },
  { text: "Manufacturing Websites Bangalore", href: "#" },
  { text: "IT & Tech Websites Bangalore", href: "#" },
  { text: "Portfolio Websites Bangalore", href: "#" },
  { text: "CMS Development Bangalore", href: "#" },
  { text: "Web Hosting Bangalore", href: "#" },
  { text: "Website Maintenance Bangalore", href: "#" },
  { text: "Landing Page Design Bangalore", href: "#" },
  { text: "Branding & Design Bangalore", href: "#" },
],

},
];

export default function PopularSearchesWebBng() {
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
