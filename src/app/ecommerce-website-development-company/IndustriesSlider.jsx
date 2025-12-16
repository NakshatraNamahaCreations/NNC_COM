"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Conversion-Focused​‍​‌‍​‍‌​‍​‌‍​‍‌ Design That Drives Sales", icon: "/media/icons/growth-chart.png", desc: "Your website is not simply a digital store—it is your online salesperson. We create layouts, product pages, and checkout flows that are the most effective in purchases and are the least likely to have drop-offs. Conversion psychology is the branch of psychology that influences every single one of the design choices made." , color:"ind--blue"},
  {  title: "Fast Loading, Secure Architecture",  icon: "/media/icons/ui.png", desc: "Without speed and security, an online store might fail. Being a top-class E-commerce website development company, we make sure that your site is doing the following: loading very fast, taking the traffic without any problem, and staying protected by the different security layers and encrypted transactions.", color:"ind--purple"},
  {  title: "100% Mobile-Responsive Development",  icon: "/media/icons/mobile.png",  desc: "It has been found that more than 70% of buyers use mobile devices to make purchases. We take care of your e-commerce platform by making it compatible with any device in terms of display size and thus, the customer enjoys a smooth shopping experience that is like using an app and as a result, sales and customer satisfaction go up.", color:"ind--mint"},
  { title: "Scalable Structure for Future Growth",  icon: "/media/icons/online-analysis.png", desc: "An online store of yours is supposed to extend like a business does. Regardless of whether you intend to add new products, open up new categories, turn on multi-vendor functionality, or start using new technologies—we don’t just construct, but construct in such a way that your foundation can scale without any difficulty.", color:"ind--cyan"},
    {  title: "Seamless Product & Inventory Management",  icon: "/media/icons/technical-support.png", desc: "We make dashboards that are easy for users to understand and help you manage stock, orders, categories, and pricing without effort. There are no technical skills needed—everything has been constructed with a view to simplicity and speed.", color:"ind--orange"},
  { title: "Smooth Checkout and Payment Integration", icon: "/media/icons/handshake.png", desc: "One of the main reasons for major revenue losses is the problems customers face during checkout. Being an expert E-commerce website development company, we provide our customers with a wide range of payment options such as UPI, cards, wallets, COD, and international payments through which transactions can be carried out quickly, simply, and without any friction.", color:"ind--teal"},
  { title: "SEO-Friendly Build for High Organic Visibility", icon: "/media/icons/search-engine-optimization.png", desc: "An e-commerce business like yours can only thrive if the public is aware of it. We take measures for the site to be search engine optimization-friendly in terms of architecture, URLs, schema, page speed, and coding thus, it is at the very base that a website is ranked by ​‍​‌‍​‍‌​‍​‌‍​‍‌Google." , color:"ind--blue"},

  

];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Conversion-Focused​‍​‌‍​‍‌​‍​‌‍​‍‌ Design That Drives Sales", icon: "/media/icons/growth-chart.png", desc: "Your website is not simply a digital store—it is your online salesperson. We create layouts, product pages, and checkout flows that are the most effective in purchases and are the least likely to have drop-offs. Conversion psychology is the branch of psychology that influences every single one of the design choices made." , color:"ind--blue"},
  {  title: "Fast Loading, Secure Architecture",  icon: "/media/icons/ui.png", desc: "Without speed and security, an online store might fail. Being a top-class E-commerce website development company, we make sure that your site is doing the following: loading very fast, taking the traffic without any problem, and staying protected by the different security layers and encrypted transactions.", color:"ind--purple"},
  {  title: "100% Mobile-Responsive Development",  icon: "/media/icons/mobile.png",  desc: "It has been found that more than 70% of buyers use mobile devices to make purchases. We take care of your e-commerce platform by making it compatible with any device in terms of display size and thus, the customer enjoys a smooth shopping experience that is like using an app and as a result, sales and customer satisfaction go up.", color:"ind--mint"},
  { title: "Scalable Structure for Future Growth",  icon: "/media/icons/online-analysis.png", desc: "An online store of yours is supposed to extend like a business does. Regardless of whether you intend to add new products, open up new categories, turn on multi-vendor functionality, or start using new technologies—we don’t just construct, but construct in such a way that your foundation can scale without any difficulty.", color:"ind--cyan"},
    {  title: "Seamless Product & Inventory Management",  icon: "/media/icons/technical-support.png", desc: "We make dashboards that are easy for users to understand and help you manage stock, orders, categories, and pricing without effort. There are no technical skills needed—everything has been constructed with a view to simplicity and speed.", color:"ind--orange"},
  { title: "Smooth Checkout and Payment Integration", icon: "/media/icons/handshake.png", desc: "One of the main reasons for major revenue losses is the problems customers face during checkout. Being an expert E-commerce website development company, we provide our customers with a wide range of payment options such as UPI, cards, wallets, COD, and international payments through which transactions can be carried out quickly, simply, and without any friction.", color:"ind--teal"},
  { title: "SEO-Friendly Build for High Organic Visibility", icon: "/media/icons/search-engine-optimization.png", desc: "An e-commerce business like yours can only thrive if the public is aware of it. We take measures for the site to be search engine optimization-friendly in terms of architecture, URLs, schema, page speed, and coding thus, it is at the very base that a website is ranked by ​‍​‌‍​‍‌​‍​‌‍​‍‌Google." , color:"ind--blue"},

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
      <h2 className={styles.sec3Heading} style={{width:"60%", margin:"0 auto"}}>What Makes Us the Right E-commerce Website Development Company for You?</h2>
        {/* <p className={styles.sec3Text}>
        Nakshatra​‍​‌‍​‍‌​‍​‌‍​‍‌ Namaha Creations, being a reputed Flutter App Development Company, provides you with the best mobile app solutions that fit perfectly with your business requirements. We are one of the best in the industry with our excellent support for the Flutter ecosystem - be it UI/UX design, testing, maintenance, or deployment.
        </p> */}
        <br />
      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
