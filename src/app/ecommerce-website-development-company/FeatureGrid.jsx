"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Custom E-commerce Website Development",
    desc: "We design online stores that are not only visually appealing with your brand colors but also carry the essence of your brand and are aligned with how users move through your site. ",
    img: "/media/icons/profit-growth.png",
  },
  {
        title: "Custom Modules, Plugins & Integrations  ",
    desc: "Turn on the power of your shop platform with user-enabled features, effortless operation tools, and vendor-side integrations that are all constructed by professionals.",
    img: "/media/icons/tools-and-utensils.png",
  },
  {
       title: "E-commerce Mobile App Development",
    desc: "Selling can be made very easy and on-the-go with mobile apps for both Android and iOS platforms that are specially designed to give the users the fastest, smoothest, and most intuitive shopping experiences.",
    img: "/media/icons/app-development.png",
  },
  {
      title: "Multi-Vendor Marketplace Development",
    desc: "You can create a totally functional marketplace platform with the features such as vendor dashboards, commissions, payout, and product management systems ",
    img: "/media/icons/jigsaw.png",
  },

  
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
  Our E-commerce Development Services
</h2>
        <p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
       Being​‍​‌‍​‍‌​‍​‌‍​‍‌ an E-commerce website development company, which provides all the necessary services, we are the one-stop solution that can build digitally powerful E-commerce websites for any business, be it small or large.
        </p>

<br />

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <h4 className={styles.title}>{f.title}</h4>
              <p className={styles.desc}>{f.desc}</p>
              <br />
              
              <div className={styles.imgWrap}>
                <Image
                  src={f.img}
                  alt={f.title}
                  width={80}
                  height={80}
                  className={styles.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
