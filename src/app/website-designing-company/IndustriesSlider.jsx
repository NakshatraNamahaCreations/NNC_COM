"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Dynamic Website Designing", icon: "/media/icons/ux.png", desc: "As a Website Designing Company, we focus on dynamic web designs that allow the website owner to upload up-to-date news, add interactive features, and customize the template as per their needs. This approach is aimed at companies that not only want their content to be recent but also plan to actively involve their clients." , color:"ind--blue"},
  { title: "Responsive Website Designing", icon: "/media/icons/web.png", desc: "Working with a mobile-first paradigm, our Website Design Company crafts websites that easily adjust to computers, tablets, and smartphones. When designed by us, your responsive website will run smoothly on all screens with easy navigation, short load times, and stable functionality.", color:"ind--purple"},
  { title: "Professional Website Designing", icon: "/media/icons/online-analysis.png", desc: "We are a Website Designing Company that creates professional websites which are the perfect combination of your brand identity and user trust enhancement. By balancing aesthetics and functionality, our designs help you attract, involve, and convert visitors.", color:"ind--mint"},
  { title: "E-commerce Website Designing", icon: "/media/icons/shopping.png", desc: "Our Website Design Company makes it easy for businesses to sell online with e-commerce website designs that include product displays and secure payment gateways. We develop user-friendly e-stores that provide a delightful buying experience and generate more sales.", color:"ind--cyan"},
    { title: "Corporate Website Designing", icon: "/media/icons/profit-growth.png", desc: "As a Website Designing Company, we build corporate websites that reflect with full clarity the ideas, principles, and power of your company. With sophisticated designs and customized content, we help you gain trust and admiration in your sector.", color:"ind--orange"},
  { title: "WordPress Website Designing", icon: "/media/icons/wordpress.png", desc: "Our Website Design Company delivers made-to-measure WordPress solutions that are manageable, SEO-ready, and versatile for blogs, portfolios, or even complete business sites. Our skill and experience allow you to make the most of this flexible platform.", color:"ind--indigo"},
  { title: "Static Website Designing", icon: "/media/icons/web.png", desc: "For companies looking for a faster, more secure, and cost-effective solution, our Website Designing Company offers static websites that present your brand in a professional manner without complicated backend operations. These websites are simple yet highly effective.", color:"ind--teal"},
  { title: "Industrial Website Designing", icon: "/media/icons/growth-chart.png", desc: "Our Website Design Company has designed industrial websites with features such as product displays, technical data, and integration that allow manufacturers and distributors to communicate effectively with partners and customers.", color:"ind--pink"},
    { title: "SEO-Friendly Website Designing", icon: "/media/icons/search-engine-optimization.png", desc: "Every project completed by our Website Designing Company includes optimized structure, clean code, and enhanced speed to improve search engine visibility and attract qualified leads.", color:"ind--orange"},
];


const rowB = [
  { title: "Dynamic Website Designing", icon: "/media/icons/ux.png", desc: "As a Website Designing Company, we focus on dynamic web designs that allow the website owner to upload up-to-date news, add interactive features, and customize the template as per their needs. This approach is aimed at companies that not only want their content to be recent but also plan to actively involve their clients." , color:"ind--blue"},
  { title: "Responsive Website Designing", icon: "/media/icons/web.png", desc: "Working with a mobile-first paradigm, our Website Design Company crafts websites that easily adjust to computers, tablets, and smartphones. When designed by us, your responsive website will run smoothly on all screens with easy navigation, short load times, and stable functionality.", color:"ind--purple"},
  { title: "Professional Website Designing", icon: "/media/icons/online-analysis.png", desc: "We are a Website Designing Company that creates professional websites which are the perfect combination of your brand identity and user trust enhancement. By balancing aesthetics and functionality, our designs help you attract, involve, and convert visitors.", color:"ind--mint"},
  { title: "E-commerce Website Designing", icon: "/media/icons/shopping.png", desc: "Our Website Design Company makes it easy for businesses to sell online with e-commerce website designs that include product displays and secure payment gateways. We develop user-friendly e-stores that provide a delightful buying experience and generate more sales.", color:"ind--cyan"},
    { title: "Corporate Website Designing", icon: "/media/icons/profit-growth.png", desc: "As a Website Designing Company, we build corporate websites that reflect with full clarity the ideas, principles, and power of your company. With sophisticated designs and customized content, we help you gain trust and admiration in your sector.", color:"ind--orange"},
  { title: "WordPress Website Designing", icon: "/media/icons/wordpress.png", desc: "Our Website Design Company delivers made-to-measure WordPress solutions that are manageable, SEO-ready, and versatile for blogs, portfolios, or even complete business sites. Our skill and experience allow you to make the most of this flexible platform.", color:"ind--indigo"},
  { title: "Static Website Designing", icon: "/media/icons/web.png", desc: "For companies looking for a faster, more secure, and cost-effective solution, our Website Designing Company offers static websites that present your brand in a professional manner without complicated backend operations. These websites are simple yet highly effective.", color:"ind--teal"},
  { title: "Industrial Website Designing", icon: "/media/icons/growth-chart.png", desc: "Our Website Design Company has designed industrial websites with features such as product displays, technical data, and integration that allow manufacturers and distributors to communicate effectively with partners and customers.", color:"ind--pink"},
    { title: "SEO-Friendly Website Designing", icon: "/media/icons/search-engine-optimization.png", desc: "Every project completed by our Website Designing Company includes optimized structure, clean code, and enhanced speed to improve search engine visibility and attract qualified leads.", color:"ind--orange"},
];

function Row({ items, reverse=false }) {
  return (
    <div className={`${styles.marquee} ${reverse ? styles.marqueeB : styles.marqueeA}`}>
      <ul className={styles.track}>
        {[...items, ...items].map((card, i) => (
          <li
            key={`${card.title}-${i}`}
            className={`${styles.indCard} ${styles[card.color]}`}
            aria-hidden={i >= items.length ? "true" : "false"}
          >
            <Image
              src={card.icon}
              alt={i >= items.length ? "" : card.title}
              width={72}
              height={72}
              className={styles.indIcon}
            />
            <h4 className={styles.indTitle}>{card.title}</h4>
            <span className={styles.indLine} />
            <p className={`${styles.indDesc} ${styles.clamp3}`}>{card.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IndustriesSlider() {
  // Optional: pause when user prefers reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(`.${styles.track}`).forEach(el => (el.style.animation = "none"));
    }
  }, []);

  return (
    <section className={styles.industries}>
      <div className="container">
      <h2 className={styles.sec3Heading}>Our Services Website Designing Company</h2>
{/* <p className={styles.sec3Text}>
  We specialize in creating dynamic, responsive, and user-friendly websites that help businesses grow online. 
  From custom development and CMS integration to e-commerce solutions and performance optimization, 
  our services are designed to deliver websites that not only look great but also perform seamlessly across all devices.
</p> */}

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
