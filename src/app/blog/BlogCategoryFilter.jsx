"use client";
import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";

const DEFAULT_CATEGORIES = [
  "All",
  "Web Development",
  "App Development",
  "Corporate Video Production",
  "Digital Marketing",
  "Graphic Designing",
  "3D Animations",
  "B2B Marketing Service",
  "Others",
];

function BlogCategoryFilter({ items = DEFAULT_CATEGORIES, onChange }) {
  const [selected, setSelected] = useState("All");
  const [show, setShow] = useState(false);

  const handleSelect = (cat) => {
    setSelected(cat);
    onChange?.(cat);
    setShow(false);
  };

  const handleReset = () => {
    setSelected("All");
    onChange?.("All");
  };

  return (
    <div
      className="d-flex flex-wrap justify-content-between align-items-center mb-4 p-3 blog-category-container"
      style={{
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div className="d-flex align-items-center flex-wrap gap-3 category-filter-left">
        <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)} autoClose="inside">
          <Dropdown.Toggle
            variant="outline-primary"
            className="rounded-pill px-4 py-2 category-dropdown-btn"
            id="dropdown-categories"
            style={{
              border: "1.5px solid #24a8e3",
              color: "#24a8e3",
              fontWeight: "600",
              background: "#fff",
              fontSize: "15px",
            }}
          >
            {selected === "All" ? "Select Category" : selected}
          </Dropdown.Toggle>

          <Dropdown.Menu
            className="category-menu"
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              borderRadius: "10px",
            }}
          >
            {items.map((cat) => (
              <Dropdown.Item
                as="div"
                key={cat}
                onClick={() => handleSelect(cat)}
                style={{
                  borderRadius: "6px",
                  fontWeight: selected === cat ? "700" : "500",
                  backgroundColor: selected === cat ? "#24a8e3" : "transparent",
                  color: selected === cat ? "#fff" : "#333",
                  padding: "10px 14px",
                  marginBottom: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {cat}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Button
        variant="outline-primary"
        className="rounded-pill px-4 py-2 reset-btn"
        style={{
          border: "1.5px solid #24a8e3",
          color: "#24a8e3",
          fontWeight: "600",
          background: "#fff",
          fontSize: "15px",
        }}
        onClick={handleReset}
      >
        Reset Filter
      </Button>

      {/* Inline mobile styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .blog-category-container {
            flex-direction: column;
            align-items: stretch !important;
            gap: 12px;
            padding: 16px;
          }

          .category-filter-left {
            width: 100%;
            justify-content: space-between;
          }

          .category-dropdown-btn,
          .reset-btn {
            width: 100%;
            text-align: center;
            font-size: 14px !important;
            padding: 10px 12px !important;
          }

          .category-menu {
            width: 100%;
            max-height: 250px;
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  );
}

export default BlogCategoryFilter;
