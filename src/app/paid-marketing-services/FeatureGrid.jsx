"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Transparent Reporting",
    desc: "real-time dashboards and monthly performance analytics.",
    img: "/media/icons/report.png",
  },
  // {
  //   title: "Android App Development",
  //   desc: "Secure and scalable apps for the Android ecosystem.",
  //    img: "/media/icons/android.png",
  // },
  {
    title: "Goal-Oriented Strategy",
    desc: " In our Paid Marketing Services, each rupee has a defined goal.",
    img: "/media/icons/goal.png",
  },
  {
    title: "Collaborative Execution",
    desc: "Strategy calls, reviews, and creative feedback loops.",
    img: "/media/icons/handshake.png",
  },
  {
    title: "Constant A/B Testing",
    desc: "Always getting better through testing of headlines, creatives, and landing pages.",
    img: "/media/icons/test.png",
  },
    {
    title: "Ongoing Optimization",
    desc: "efficient bid changes, retargeting adjustments, and ad refresh cycles.",
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
    What to Expect from Nakshatra Namaha Creations
</h2>
<p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
  Paid​‍​‌‍​‍‌​‍​‌‍​‍‌ Marketing Services in our opinion should do more than just deliver impressions — they should have a measurable business impact. Working with us provides you with
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
