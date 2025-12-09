"use client";

import React from "react";
import "@/styles/TechStackGrid.css";

import {
  SiNodedotjs,
  SiStrapi,
  SiWordpress,
  SiFlutter,
  SiAndroid,
  SiPython,
  SiMysql,
  SiLaravel,
  SiJavascript,
  SiCakephp,
  SiDjango,
  SiExpress,
  SiLinux,
  SiBootstrap,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

import { FaJava, FaCloud } from "react-icons/fa"; // ✅ Java + AWS icon

const technologies = [
  { name: "Node Js", icon: <SiNodedotjs />, color: "#3C873A" },
  { name: "Strapi", icon: <SiStrapi />, color: "#5338DF" },
  { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  { name: "Android", icon: <SiAndroid />, color: "#3DDC84" },
  { name: "Python", icon: <SiPython />, color: "#3673A5" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
  { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Java", icon: <FaJava />, color: "#5382A1" },
  { name: "CakePHP", icon: <SiCakephp />, color: "#D33C43" },
  { name: "Django", icon: <SiDjango />, color: "#092E20" },
  { name: "Express", icon: <SiExpress />, color: "#444444" },
  { name: "Linux", icon: <SiLinux />, color: "#000000" },

  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "AWS", icon: <FaCloud />, color: "#FF9900" }, // ✅ fixed
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  // { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
];

const TechStackGrid = () => {
  return (
    <section className="tech-section">
      <div className="container">
        <div className="tech-header">
          <h2 className="tech-title">
            Platforms We Work With
          </h2>
        </div>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <div className="tech-card" key={tech.name}>
              <div className="tech-logo-wrap">
                <div className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
              </div>
              {tech.showLabel !== false && (
                <div className="tech-name">{tech.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackGrid;
