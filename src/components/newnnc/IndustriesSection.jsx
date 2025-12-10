import React from "react";
import "@/styles/IndustriesSection.css";

const industries = [
  { name: "Service Industries", img: "/media/industries/global-business.png" },
  { name: "Education Industries", img: "/media/industries/atom.png" },
  { name: "Entertainment", img: "/media/industries/cinema.png" },
  { name: "Automobile", img: "/media/industries/car-machine.png" },

  { name: "Finance", img: "/media/industries/financial-profit (2).png" },
  { name: "Fitness", img: "/media/industries/ball.png" },
  { name: "Health", img: "/media/industries/healthcare.png" },
  { name: "Hospitality", img: "/media/industries/building.png" },
  { name: "Real Estate", img: "/media/industries/house.png" },
  { name: "Logistics", img: "/media/industries/distribution.png" },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section">

      {/* Title + Subtitle */}
      <h2 className="i-title">Industry Specializations</h2>
      <p className="i-sub">
        Leading start-ups, SMEs and global brands trust us for high-quality solutions.
      </p>

      {/* Grid */}
      <div className="industries-grid">
        {industries.map((item, index) => (
          <div className="industry-cell" key={index}>
            <img src={item.img} alt={item.name} className="industry-logo" />
            <p className="industry-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
