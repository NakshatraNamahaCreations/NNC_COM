"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import RequestQuote1 from "./RequestQuote1"; // adjust path if needed
import ServicesDropdown from "./ServicesDropdown";
import "@/styles/Navbar_Menu.css";
import { useState, useEffect } from "react";

export default function Navbar_Menu1({ isHomePage }) {
  const pathname = usePathname();

  // start correct to avoid flash of wrong color
  const [linkColor, setLinkColor] = useState(isHomePage ? "white" : "black");

  useEffect(() => {
    setLinkColor(isHomePage ? "white" : "black");
  }, [isHomePage]);

  // helper: treat /x and /x/... as active
  const isActive = (p) => (p === "/" ? pathname === "/" : pathname === p || pathname.startsWith(p + "/"));

  const linkStyle = (p) => ({
    color: isActive(p) ? "#007bff" : linkColor,
    fontWeight: 600,
  });

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/our-works", label: "Our Works" },
    { path: "/blog", label: "Blogs" },
    { path: "/careers", label: "Careers" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header
      className="navbar"
      style={{
        backgroundColor: isHomePage ? "transparent" : "white",
        position: isHomePage ? "absolute" : "sticky",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        padding: "10px 0",
        boxShadow: isHomePage ? "none" : "0px 1px 10px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <Link href="/">
            <Image
              src="/media/nnclog1.avif"
              width={70}
              height={70}
              alt="NNC logo"
              className="navbar__logo-image"
              style={{
                filter: isHomePage ? "brightness(100%)" : "none",
              }}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="navbar__links">
          <ul className="navbar__menu">
            {navItems.slice(0, 3).map(({ path, label }) => (
              <li key={path} className="navbar__item">
                <Link
                  href={path}
                  className="navbar__link"
                  style={linkStyle(path)}
                  aria-current={isActive(path) ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Dropdown stays where you want it between groups */}
            <li className="navbar__item">
              <ServicesDropdown textColor={linkColor} />
            </li>

            {navItems.slice(3).map(({ path, label }) => (
              <li key={path} className="navbar__item">
                <Link
                  href={path}
                  className="navbar__link"
                  style={linkStyle(path)}
                  aria-current={isActive(path) ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="navbar__item">
              <RequestQuote1 textColor={linkColor} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
