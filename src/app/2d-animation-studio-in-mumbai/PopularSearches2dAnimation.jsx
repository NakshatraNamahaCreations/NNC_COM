"use client";

import styles from "@/styles/PopularSearches.module.css";
const data = [
  {
    label: "2D ANIMATION STUDIO IN MUMBAI",
    links: [
      { text: "2D Animation Studio in Mumbai", href: "/2d-animation-studio-in-mumbai" },
      { text: "2D Animation Company in Mumbai", href: "#" },
      { text: "Animation Video Makers in Mumbai", href: "#" },
      { text: "Motion Graphics Studio in Mumbai", href: "#" },
      { text: "Explainer Video Company in Mumbai", href: "#" },
      { text: "Animated Video Production in Mumbai", href: "#" },
      { text: "Product Demo Videos in Mumbai", href: "#" },
      { text: "Corporate Animation Services in Mumbai", href: "#" },
      { text: "2D Animation Services in Mumbai", href: "#" },
      { text: "Creative Animation Studio in Mumbai", href: "#" },
      { text: "Brand Storytelling Animation in Mumbai", href: "#" },
      { text: "Best 2D Animation Studio in Mumbai", href: "#" },
      { text: "Animation Agency in Mumbai", href: "#" },
      { text: "Professional 2D Animation Company", href: "#" },
      { text: "Custom 2D Animation Videos", href: "#" },
      { text: "Business Animation Videos", href: "#" },
      { text: "Marketing Animation Videos", href: "#" },
      { text: "Educational Animation Videos", href: "#" },
      { text: "Character Animation Studio", href: "#" },
      { text: "Animation for Social Media", href: "#" },
      { text: "Motion Design Services", href: "#" },
      { text: "2D Animation Experts", href: "#" },
      { text: "Affordable Animation Studio", href: "#" },
      { text: "Explainer Video Production Company", href: "#" },
      { text: "Video Animation Services", href: "#" },
      { text: "Animation Studio for Brands", href: "#" },
    ],
  },
];



export default function PopularSearches2dAnimation() {
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
