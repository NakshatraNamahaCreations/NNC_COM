"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "User​‍​‌‍​‍‌​‍​‌‍​‍‌ Interface (UI) Design",
    desc: "Our UI/UX Design Agency develops high-fidelity mockups that effectively communicate the visual identity of your product. By using established design systems, we craft visually appealing web and mobile screens that are responsive to various screen sizes.",
   img: "/media/icons/mobile.png",
  },
  {
      title: "User Experience (UX) Design",
    desc: "Understanding behavior of users is the main focus of our UI/UX Design Agency. We measure usability to remove the points where users get stuck. Our UX design services help brands increase their customer base and lower drop-off rates.",
        img: "/media/icons/ui.png",  // img: "/media/icons/idea (1).png", ui.png
  },
  {
      title: "Prototyping & Testing",
    desc: "We, as a futuristic UI/UX Design Agency, are capable of creating dynamic prototypes demonstrating actual user flows. Those clickable samples engage the stakeholders to have the early visualization of the end product.",
    img: "/media/icons/tools-and-utensils.png",
  },
  {
     title: "Design for Platforms",
    desc: "We provide multi-platform design as a full-scale UI/UX Design Agency that caters to both startups and enterprises. Our website interfaces are not only clean and sharp but also conversion-driven.",
    img: "/media/icons/app-development.png",
  },
//   {
//        title: "",
//     desc: "",
//    img: "/media/icons/android.png",
//   },
    
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
Our Services as a UI/UX Design Agency
</h2>
{/* <p className={styles.sec3Text}style={{width:"70%", margin:"0 auto"}}>
  We build high-performance React Native apps that run smoothly on both Android and iOS with a single codebase. Our team focuses on speed, scalability, and user-friendly experiences tailored to your business goals.
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
