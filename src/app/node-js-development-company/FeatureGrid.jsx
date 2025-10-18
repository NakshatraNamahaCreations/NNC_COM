"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Requirement Gathering & Planning",
    desc: "Our Node Js Development Company starts by understanding your goals, user needs, and project scope to design a solid technical roadmap.",
    img: "/media/icons/idea (1).png",
  },
  // {
  //   title: "Android App Development",
  //   desc: "Secure and scalable apps for the Android ecosystem.",
  //    img: "/media/icons/android.png",
  // },
  {
    title: "Architecture & Tech Stack Finalization",
    desc: "We plan the right backend structure using Node.js and finalize frameworks, databases, and tools — a core strength of our Node Js Development Company.",
    img: "/media/icons/tools-and-utensils.png",
  },
  {
    title: "Backend & API Development",
    desc: "Our team builds fast, secure, and scalable backend systems. Every API developed by our Node Js Development Company enhances performance and reliability.",
    img: "/media/icons/backend.png",
  },
  {
    title: "Front-End Integration",
    desc: "We ensure seamless data flow between the backend and front-end for responsive, user-friendly experiences — a hallmark of our Node Js Development Company.",
    img: "/media/icons/ux.png",
  },
    {
    title: "Testing & Quality Assurance",
    desc: "Our Node Js Development Company conducts extensive unit and integration testing to ensure flawless functionality under all conditions.",
    img: "/media/icons/online-analysis.png",
  },
     {
    title: "Deployment & Optimization",
    desc: "We deploy your applications on AWS, Azure, or your preferred platform. As a Node Js Development Company, we monitor and optimize performance continuously.",
    img: "/media/icons/agile.png",
  },
     {
    title: "Ongoing Maintenance & Support",
    desc: "Our support team ensures your Node.js website stays secure and updated as your business grows — a commitment our Node Js Development Company stands by.",
    img: "/media/icons/technical-support.png",
  },
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
Our Node Js Website Development Process
</h2>
{/* <p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
  Our iOS app development services cover everything businesses need to create powerful, user-friendly, and high-performing iPhone and iPad applications. Whether you’re launching a new product or modernizing an existing one, our team focuses on design precision, speed, and long-term scalability. 
  We leverage the latest Apple technologies like Swift, SwiftUI, and Xcode to build apps that perform seamlessly across the iOS ecosystem.

  By partnering with our experts in iOS app development, you gain access to end-to-end solutions that span every stage of the app lifecycle—from concept and UI/UX design to development, testing, and App Store deployment.
</p> */}

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
