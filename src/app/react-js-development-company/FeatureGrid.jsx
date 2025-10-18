"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "High Performance",
    desc: "The Virtual DOM technology allows our React JS Development Company to deliver web apps that are responsive, smooth, and fast.",
    img: "/media/icons/idea (1).png",
  },
  // {
  //   title: "Android App Development",
  //   desc: "Secure and scalable apps for the Android ecosystem.",
  //    img: "/media/icons/android.png",
  // },
  {
    title: "Reusable Components",
    desc: "Our React JS Development Company takes advantage of React’s component-based architecture to reduce development time and ensure consistency in design.",
    img: "/media/icons/tools-and-utensils.png",
  },
  {
    title: "SEO-Friendly",
    desc: "Being an experienced React JS Development Company, we implement server-side rendering (SSR) to make React apps easily indexable by search engines.",
    img: "/media/icons/search-engine-optimization.png",
  },
  {
    title: "Strong Ecosystem",
    desc: "We, as a React JS Development Company, integrate tools like Redux, Next.js, and TypeScript for maximum flexibility and power.",
    img: "/media/icons/ux.png",
  },
    {
    title: "Fast Development",
    desc: "Our React JS Development Company leverages modular architecture and modern developer tools to ensure faster delivery without compromising quality.",
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
Benefits of React JS Development
</h2>
<p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
  As a React JS Development Company, we understand the power of using React’s Virtual DOM to achieve high performance and fast rendering speeds.
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
