import Image from "next/image";
import { useRef } from "react";
import styles from "../../styles/ServiceCard.module.css";

export default function ServicesSection() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const services = [
    {
      image: "/media/tech/12.jpg",
      title: " Custom App Development",
      description:
        "We​‍​‌‍​‍‌​‍​‌‍​‍‌ construct mobile applications that are tailored to fit your business model, processes, and future goals. If you want just a few features or a complicated platform, our team makes applications that can grow without any difficulties and provide easy functionalities. Your business gets the perfect match in terms of every user interface, capability, and ​‍​‌‍​‍‌​‍​‌‍​‍‌connection.",
      points: [
        "Tailored architecture for unique business needs",
        "Flexible feature expansion as your product grows",
      ],
    },
    {
      image: "/media/tech/19.jpg",
      title: "Web App Development",
      description:
        "Web​‍​‌‍​‍‌​‍​‌‍​‍‌ app development is among the services in which we put major emphasis on delivering platforms that are fast, secure, and responsive, and by any browser or device can be accessed. We engineer the software that not only facilitate the operations but also increase the user interaction, whether it is the case of a dashboard, a portal, or a cloud-based ​‍​‌‍​‍‌​‍​‌‍​‍‌application.",
      points: [
        "Mobile-responsive layouts for all screen sizes",
        "High-performance backend and API integrations",
      ],
    },
    {
      image: "/media/tech/15.jpg",
      title: "Ecommerce App Development",
      description:
        "We​‍​‌‍​‍‌​‍​‌‍​‍‌ develop ecommerce applications that are quick, user-friendly, and designed to change the visitors into buyers. By easy navigation, safe payments, and live tracking, your customers will have a contemporary shopping experience. We facilitate single-vendor, multi-vendor, subscription-based, and marketplace ​‍​‌‍​‍‌​‍​‌‍​‍‌models.",
      points: ["Integrated payment gateways & order management", "Personalized shopping experience with smart recommendations"],
    },
    {
      image: "/media/tech/17.jpg",
      title: "Mobile App Consulting",
      description:
        "Confused​‍​‌‍​‍‌​‍​‌‍​‍‌ about the first step? We mobile app consulting service will clarify for you the most suitable technologies, features, and product roadmap for your idea. We explain development timelines, budgets, and technical requirements in such a way that you will be able to make informed ​‍​‌‍​‍‌​‍​‌‍​‍‌decisions.",
      points: ["Clear strategy + technical guidance from experts", "Cost and timeline planning with realistic projections"],
    },
        {
      image: "/media/tech/20.jpg",
      title: "Android App Development",
      description:
        "We​‍​‌‍​‍‌​‍​‌‍​‍‌ build powerful Android apps optimized for performance, battery efficiency, and device compatibility. Our team can deliver any app from a simple consumer app to a complex enterprise solution. Your app will run flawlessly on any Android phone or ​‍​‌‍​‍‌​‍​‌‍​‍‌tablet.",
      points: ["Built for all Android devices and OS versions", "Secure coding practices and high-performance architecture"],
    },
            {
      image: "/media/tech/21.jpg",
      title: "iOS App Development",
      description:
        "Our​‍​‌‍​‍‌​‍​‌‍​‍‌ iOS development team creates stylish, quick, and safe apps that provide a high-end experience on iPhones and iPads. Basically, it is all done to Apple’s performance standards, from the animations to the gesture-based ​‍​‌‍​‍‌​‍​‌‍​‍‌navigation.",
      points: ["Native iOS development using Swift", "Optimized for smooth UI interactions and high security"],
    },
            {
      image: "/media/tech/22.jpg",
      title: "Flutter App Development",
      description:
        "With Flutter, we create modern cross-platform apps that offer near-native performance and beautiful interfaces. A single codebase powers both Android and iOS, reducing development time and maintenance effort.",
      points: ["Faster development with expressive UI components", "Consistent performance across both Android and iOS"],
    },
              {
      image: "/media/tech/23.jpg",
      title: "React Native App Development",
      description:
        "React​‍​‌‍​‍‌​‍​‌‍​‍‌ Native is a perfect tool for startups and businesses that want to produce cool apps that can easily be scaled up and are packed with features without the need of spending twice on two separate ​‍​‌‍​‍‌​‍​‌‍​‍‌codes.",
      points: ["Cost-effective cross-platform development", "Smooth UI interactions with native-like performance"],
    },

  ];

  return (
    <>

         
    <section className={styles.servicesSection}>
          <div className="text-center">
       <h2 className={styles.heading} style={{marginBottom:"15px"}}>
           Our Mobile App
          <span> Development Services</span> </h2>
              <p className={styles.description} style={{width:"85%", margin:"0 auto", }}>
              We offer end-to-end mobile app development services for Android and iOS platforms.
Our team focuses on building secure, scalable, and user-friendly applications.
Every app is developed to support real business goals and long-term growth.     
                </p>
          </div>
           <br />
      {/* LEFT ARROW */}
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={slideLeft}
        aria-label="Scroll left"
      >
        ❮
      </button>

      {/* SLIDER */}
      <div className={styles.slider} ref={sliderRef}>
        {services.map((service, index) => (
          <div className={styles.slide} key={index}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={slideRight}
        aria-label="Scroll right"
      >
        ❯
      </button>
    </section>
    <br />
    </>
  );
}

/* ================= CARD ================= */

function ServiceCard({ image, title, description, points }) {
  return (
<>
  
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={title}
          width={420}
          height={260}
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>

        <ul className={styles.points}>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}
