"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Custom Flutter App Development", icon: "/media/icons/app-settings.png", desc: "Our team of Flutter App Development Company has the skills and knowledge required to build mobile apps that are goal-oriented and tailor-made for your business. To get high performing, scalable, and secure apps, we use one codebase of the Flutter for the apps that we build. We ensure that each product goes a long way in both engaging users and contributing to the growth of the business." , color:"ind--blue"},
  { title: "Flutter UI/UX Design", icon: "/media/icons/ui.png", desc: "It is obvious that an excellent app user experience is the starting point of any successful mobile app. Our company that is well known for Flutter App Development Company makes the design of the product not only attractive but also user-centric UI/UX, and it reflects your brand identity. Our usage of Flutter's reusable widgets results in the creation of beautiful and functional UI interactions that guarantee easy handling and increased customer loyalty.", color:"ind--purple"},
  { title: "Migration to Flutter", icon: "/media/icons/mobile.png", desc: "With​‍​‌‍​‍‌​‍​‌‍​‍‌ your desire to update your app, our Flutter App Development Company services will be the reason for a smooth app transition. We don't only move your app to Flutter, but also do it with a great performance, functionality, and design of the app without any compromise. As a result, your application is able to keep the top standards of device compatibility and can also grow with the coming ​‍​‌‍​‍‌​‍​‌‍​‍‌years.", color:"ind--mint"},
  { title: "Flutter App Testing & Quality Assurance", icon: "/media/icons/online-analysis.png", desc: "Every successful Flutter app is build with quality at the core. Being a leading and trusted Flutter App Development Company, we practice QA to the fullest extent so as to deliver safe, high-performing and user-friendly apps. We implement different testing methods to guarantee a perfect user experience and to ensure that your app will work smoothly in any condition.", color:"ind--cyan"},
    { title: "Maintenance & Support", icon: "/media/icons/technical-support.png", desc: "It does not stop with the launch of the app. Nakshatra Namaha Creations continues to provide assistance and local services long after the dramatic rollout of your Flutter App Development Company. We always keep tabs on the execution, give the finishing touches whenever needed, and release brand-new features that are tailored to your business growth.", color:"ind--orange"},
  { title: "Collaborative Development Approach", icon: "/media/icons/handshake.png", desc: "Throughout the different stages of your Flutter app project, we pledge complete transparency to you. Our Flutter App Development Company carries out the client-agency collaboration process - clients are consistently briefed and get an overview of the work done, plus iterative feedback is sought. This ensures that there is a match between the expected goals and the delivery of great-time ​‍​‌‍​‍‌​‍​‌‍​‍‌applications.", color:"ind--teal"},

];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
  { title: "Custom Flutter App Development", icon: "/media/icons/app-settings.png", desc: "Our team of Flutter App Development Company has the skills and knowledge required to build mobile apps that are goal-oriented and tailor-made for your business. To get high performing, scalable, and secure apps, we use one codebase of the Flutter for the apps that we build. We ensure that each product goes a long way in both engaging users and contributing to the growth of the business." , color:"ind--blue"},
  { title: "Flutter UI/UX Design", icon: "/media/icons/ui.png", desc: "It is obvious that an excellent app user experience is the starting point of any successful mobile app. Our company that is well known for Flutter App Development Company makes the design of the product not only attractive but also user-centric UI/UX, and it reflects your brand identity. Our usage of Flutter's reusable widgets results in the creation of beautiful and functional UI interactions that guarantee easy handling and increased customer loyalty.", color:"ind--purple"},
  { title: "Migration to Flutter", icon: "/media/icons/mobile.png", desc: "With​‍​‌‍​‍‌​‍​‌‍​‍‌ your desire to update your app, our Flutter App Development Company services will be the reason for a smooth app transition. We don't only move your app to Flutter, but also do it with a great performance, functionality, and design of the app without any compromise. As a result, your application is able to keep the top standards of device compatibility and can also grow with the coming ​‍​‌‍​‍‌​‍​‌‍​‍‌years.", color:"ind--mint"},
  { title: "Flutter App Testing & Quality Assurance", icon: "/media/icons/online-analysis.png", desc: "Every successful Flutter app is build with quality at the core. Being a leading and trusted Flutter App Development Company, we practice QA to the fullest extent so as to deliver safe, high-performing and user-friendly apps. We implement different testing methods to guarantee a perfect user experience and to ensure that your app will work smoothly in any condition.", color:"ind--cyan"},
    { title: "Maintenance & Support", icon: "/media/icons/technical-support.png", desc: "It does not stop with the launch of the app. Nakshatra Namaha Creations continues to provide assistance and local services long after the dramatic rollout of your Flutter App Development Company. We always keep tabs on the execution, give the finishing touches whenever needed, and release brand-new features that are tailored to your business growth.", color:"ind--orange"},
  { title: "Collaborative Development Approach", icon: "/media/icons/handshake.png", desc: "Throughout the different stages of your Flutter app project, we pledge complete transparency to you. Our Flutter App Development Company carries out the client-agency collaboration process - clients are consistently briefed and get an overview of the work done, plus iterative feedback is sought. This ensures that there is a match between the expected goals and the delivery of great-time ​‍​‌‍​‍‌​‍​‌‍​‍‌applications.", color:"ind--teal"},

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
      <h2 className={styles.sec3Heading}>Our Flutter App Development Services</h2>
        <p className={styles.sec3Text}>
        Nakshatra​‍​‌‍​‍‌​‍​‌‍​‍‌ Namaha Creations, being a reputed Flutter App Development Company, provides you with the best mobile app solutions that fit perfectly with your business requirements. We are one of the best in the industry with our excellent support for the Flutter ecosystem - be it UI/UX design, testing, maintenance, or deployment.
        </p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
