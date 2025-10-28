"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "The collaboration and transparency in the process",
    desc: "Strategy calls, reviews, and updates for every stage of Social Media Marketing. ",
    img: "/media/icons/report.png",
  },

  {
    title: "Fully Custom Designs",
    desc: "No templates every post and reel is uniquely designed.",
    img: "/media/icons/ux.png",
  },
  {
    title: "Timely Delivery",
    desc: "Clear schedules ensure seamless Social Media Marketing execution.",
    img: "/media/icons/growth-chart.png",
  },
  {
    title: "Multilingual & Global Ready",
    desc: "Content crafted in regional and international formats.",
    img: "/media/icons/languages.png",
  },
    {
    title: "Post-Delivery Support",
    desc: "Continuous optimization and monthly performance tracking.",
    img: "/media/icons/online-analysis.png",
  },
  //    {
  //   title: "Deployment & Optimization",
  //   desc: "We deploy your applications on AWS, Azure, or your preferred platform. As a Node Js Development Company, we monitor and optimize performance continuously.",
  //   img: "/media/icons/agile.png",
  // },
  //    {
  //   title: "Ongoing Maintenance & Support",
  //   desc: "Our support team ensures your Node.js website stays secure and updated as your business grows — a commitment our Node Js Development Company stands by.",
  //   img: "/media/icons/technical-support.png",
  // },
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
What Can You Expect from Nakshatra Namaha Creations?
</h2>
<p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
  Our​‍​‌‍​‍‌​‍​‌‍​‍‌ growth is largely determined by the innovative, synergistic, and consistent manner of our Social Media Marketing. 
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
