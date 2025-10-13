"use client";

import Image from "next/image";
import s from "../../styles/ServeClients.module.css";

const segments = [
{
  title: "iOS App Development",
  icon: "/media/icons/apple.png",
  alt: "iOS App Development",
  color: "blue",
  desc: "Build powerful, secure apps for Apple users."
},
{
  title: "Android App Development",
  icon: "/media/icons/android.png",
  alt: "Android App Development",
  color: "green",
  desc: "Reach millions with our Android expertise."
},
{
  title: "Cross-Platform Solutions",
  icon: "/media/icons/online-analysis.png",
  alt: "Cross-Platform Solutions",
  color: "purple",
  desc: "As a top mobile app development company, we deliver apps that run smoothly on multiple platforms."
},
{
  title: "Custom Mobile App Development",
  icon: "/media/icons/app-settings.png",
  alt: "Custom Mobile App Development",
  color: "amber",
  desc: "Unique features designed specifically for your business."
},
{
  title: "App Maintenance & Support",
  icon: "/media/icons/technical-support.png",
  alt: "App Maintenance & Support",
  color: "teal",
  desc: "Ongoing support ensures your app performs flawlessly."
}

];

export default function ServeClients() {
  return (
    <section className={s.section} aria-labelledby="serve-title">
      <div className={s.container}>
        <h2 id="serve-title" className={s.heading}>Services Offered by Our Mobile App Developers</h2>

        <div className={s.grid}>
          {segments.map((seg) => (
            <article key={seg.title} className={s.item}>
              <div className={s.iconWrap}>
                <Image
                  src={seg.icon}
                  alt={seg.alt}
                  width={88}
                  height={88}
                  className={s.icon}
                />
              </div>

              <h4 className={`${s.title} ${s[`clr_${seg.color}`]}`}>{seg.title}</h4>
              <p className={s.desc}>{seg.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
