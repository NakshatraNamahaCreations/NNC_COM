"use client";

import Image from "next/image";
import s from "../../styles/ServeClients.module.css";

const segments = [
  { title: "WordPress & CMS for easy content control",                icon: "/media/icons/wordpress.png", alt: "WordPress & CMS for easy content control" },
  { title: "React JS for fast, modern interfaces",                icon: "/media/icons/science.png", alt:  "React JS for fast, modern interfaces"},
  { title: "Node JS for secure, scalable backends",            icon: "/media/icons/nodejs.png", alt: "Node JS for secure, scalable backends" },
  { title: "Mobile-First & Core Web Vitals optimization",         icon: "/media/icons/app-development.png", alt: "Mobile-First & Core Web Vitals optimization" },
  { title: "SEO-Optimized IA & Content for discoverability",  icon: "/media/icons/search-engine-optimization.png", alt: "SEO-Optimized IA & Content for discoverability" },
  { title: "Ongoing Maintenance for updates, uptime, and security",  icon: "/media/icons/technical-support.png", alt: "Ongoing Maintenance for updates, uptime, and security" },
 
];


export default function ServeClients() {
  return (
    <section className={s.section} aria-labelledby="serve-title">
      <div className={s.container}>
        <h2 id="serve-title" className={s.heading}>Technologies We Work as a Web Design Company in JP Nagar</h2>
<br />
        <div className={s.grid}>
          {segments.map((seg) => (
            <article key={seg.title} className={s.item}>
              <div className={s.iconWrap}>
                <Image
                  src={seg.icon}
                  alt=""
                  width={88}
                  height={88}
                  className={s.icon}
                />
              </div>
              <h4 className={`${s.title} ${s[`clr_${seg.color}`]}`}>{seg.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
