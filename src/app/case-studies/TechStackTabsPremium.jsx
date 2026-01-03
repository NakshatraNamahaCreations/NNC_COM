"use client";

import { useState } from "react";
import styles from "../../styles/TechStackTabsPremium.module.css";

/* ===== ICON IMPORTS ===== */
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiFastapi,
  SiStrapi,
  SiFlutter,
  SiAndroid,
  SiApple,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";

import { FaAws, FaServer } from "react-icons/fa";

/* ===== TECH STACK DATA ===== */
const techData = {
  frontend: {
    label: "Frontend",
    items: [
      { name: "React.js", icon: <SiReact />, color: "#61dafb" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38bdf8" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952b3" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572b6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
    ],
  },

  backend: {
    label: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express", icon: <SiExpress />, color: "#444444" },
      { name: "PHP", icon: <SiPhp />, color: "#777bb4" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "Strapi", icon: <SiStrapi />, color: "#4945ff" },
    ],
  },

  mobile: {
    label: "Mobile",
    items: [
      { name: "Flutter", icon: <SiFlutter />, color: "#02569b" },
      { name: "Android", icon: <SiAndroid />, color: "#3ddc84" },
      { name: "iOS", icon: <SiApple />, color: "#000000" },
    ],
  },

  database: {
    label: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    ],
  },

  cloud: {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: <FaAws />, color: "#ff9900" },
      { name: "GitHub", icon: <SiGithub />, color: "#000000" },
      { name: "Server / Nginx", icon: <FaServer />, color: "#009639" },
    ],
  },
};

/* ===== FLATTEN ALL ITEMS FOR "ALL" TAB ===== */
const allItems = Object.values(techData).flatMap(cat => cat.items);

/* ===== COMPONENT ===== */
export default function TechStackTabsPremium() {
  const [active, setActive] = useState("all");

  const getItems = () => {
    if (active === "all") return allItems;
    return techData[active].items;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}
        <h2 className={styles.heading}>Technology Stack We Used</h2>

        {/* TABS */}
        <div className={styles.tabs}>
          <button
            onClick={() => setActive("all")}
            className={active === "all" ? styles.active : ""}
          >
            All
          </button>

          {Object.entries(techData).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={active === key ? styles.active : ""}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {getItems().map((tech, index) => (
            <div key={index} className={styles.card}>
              <div
                className={styles.icon}
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
