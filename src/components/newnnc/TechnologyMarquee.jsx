"use client";
import React from "react";
import "@/styles/TechnologyMarquee.css"; // or your styles path

const techItems = [
  // Frontend
  "React.Js",
  "Next.js",
  "React Native",
  "Vue.js",
  "Angular",
  "TailwindCSS",
  "Bootstrap",
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",

  // Backend
  "NodeJs",
  "Express",
  "NestJS",
  "Laravel",
  "CakePHP",
  "PHP",
  "Django",
  "Fast API",
  "Python",

  "Strapi",

  "Flutter",
  "Android",
  "iOS",


  "MySQL",
  "MongoDB",
  "PostgreSQL",

  "AWS",

  
  "Nginx",
  "Apache",
  "Git",
 

  // CMS & E-Commerce
  "WordPress",
  "Shopify",
  "WooCommerce",
  "Magento",

  // Design
  "Figma",
  "Photoshop",
  "Illustrator",
  "Adobe XD",

  // OS / Environment
  "Linux"
];

const TechnologyMarquee = () => {
  return (
    <section className="tm-section">
      <div className="tm-marquee">
        <div className="tm-marquee-inner">
          {/* repeat list twice for seamless loop */}
          {techItems.concat(techItems).map((item, idx) => (
            <span className="tm-item" key={idx}>
              {item}
              <span className="tm-dot">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyMarquee;
