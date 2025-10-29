"use client";

import Image from "next/image";
import s from "../../styles/ServeClients.module.css";

const segments = [
  { title: "Startups and SMEs",                icon: "/media/icons/shuttle.png", alt: "Startups and SMEs" },
  { title: "E-commerce Brands",                icon: "/media/icons/growth-chart.png", alt: "E-commerce Brands" },
  { title: "Real Estate Companies",            icon: "/media/icons/apartments.png", alt: "Real Estate Companies" },
  { title: "Healthcare & Diagnostics",         icon: "/media/icons/healthcare.png", alt: "Healthcare & Diagnostics" },
  { title: "Education & Training Institutes",  icon: "/media/icons/education.png", alt: "Education & Training Institutes" },
  { title: "Hospitality & Travel Businesses",  icon: "/media/icons/business-trip.png", alt: "Hospitality & Travel Businesses" },
  { title: "IT & Tech Enterprises",            icon: "/media/icons/ux.png", alt: "IT & Tech Enterprises" },
  { title: "Manufacturing & Industrial Sectors", icon: "/media/icons/online-analysis.png", alt: "Manufacturing & Industrial Sectors" },
];


export default function ServeClients() {
  return (
    <section className={s.section} aria-labelledby="serve-title">
      <div className={s.container}>
        <h2 id="serve-title" className={s.heading}>Industries We Serve as Search Engine Optimisation Experts</h2>

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
