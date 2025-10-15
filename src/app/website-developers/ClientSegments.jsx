"use client";

import Image from "next/image";
import s from "../../styles/ClientSegments.module.css";

const segments = [
//   { title: "Startups and SMEs",                color: "indigo",  icon: "/media/icons/search-engine-optimization.png" },
  { title: "E-commerce Brands",                color: "purple",  icon: "/media/icons/ecommerce.png" },
  { title: "Real Estate Companies",            color: "orange",  icon: "/media/icons/real-estate.png" },
  { title: "Healthcare & Diagnostics",         color: "green",   icon: "/media/icons/healthcare.png" },
  { title: "Education & Training Institutes",  color: "blue",    icon: "/media/icons/education.png" },
  { title: "Hospitality & Travel Businesses",  color: "rose",    icon: "/media/icons/hospitality.png" },
  { title: "IT & Tech Enterprises",            color: "teal",    icon: "/media/icons/tech.png" },
  { title: "Manufacturing & Industrial Sectors", color: "amber", icon: "/media/icons/industry.png" },
];

export default function ClientSegments() {
  return (
    <section className={s.section} aria-labelledby="clients-title">
      <div className={s.container}>
        <h3 id="clients-title" className={s.h3}>We Serve Clients Across</h3>

        <div className={s.grid}>
          {segments.map((seg, i) => (
            <article key={i} className={s.card}>
              {/* image option (hide if no icon provided) */}
              {seg.icon ? (
                <div className={`${s.iconCircle} ${s[`ring_${seg.color}`]}`}>
                  <Image src={seg.icon} alt="" width={28} height={28} />
                </div>
              ) : (
                <div className={`${s.iconCircle} ${s[`ring_${seg.color}`]}`} />
              )}

              <div className={s.texts}>
                <h4 className={`${s.title} ${s[`clr_${seg.color}`]}`}>{seg.title}</h4>
                <ul className={s.points}>
                  <li>Custom sites, landing pages & funnels</li>
                  <li>SEO, growth campaigns & analytics</li>
                  <li>Web apps, integrations & automations</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
