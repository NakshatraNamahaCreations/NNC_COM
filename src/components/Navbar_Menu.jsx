"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import RequestQuote from "./RequestQuote";
import ServicesDropdown from "./ServicesDropdown";
import "@/styles/Navbar_Menu.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Navbar_Menu({ isHomePage }) {
  const pathname = usePathname();
  const [linkColor, setLinkColor] = useState(isHomePage ? "white" : "black");
  const [showQuote, setShowQuote] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setLinkColor(isHomePage ? "white" : "black");
  }, [isHomePage]);

  const isActive = (p) =>
    p === "/" ? pathname === "/" : pathname === p || pathname.startsWith(p + "/");

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

  // ✅ Same hover animation from RequestQuote
  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    opacity: hovered ? 1 : 0.9,
    config: { tension: 300, friction: 20 },
  });

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
  
        padding: "10px 40px",
        boxShadow: isHomePage ? "none" : "0px 1px 10px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <Link href="/">
            <Image
              src="/media/nnclogo.png"
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

            {/* ✅ Animated Request Quote Button */}
            <li className="navbar__item">
              <animated.button
                style={springProps}
                className="navbar__quote-btn"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setShowQuote(true)}
              >
                Request A Quote
              </animated.button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Popup Form */}
      <RequestQuote showPopup={showQuote} setShowPopup={setShowQuote} />

      <style jsx global>{`
        .navbar__quote-btn {
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px 14px;
          font-weight: 500;
          letter-spacing: 1px;
          font-size: 14px;
          box-shadow: 2px 2px 1px 0px rgb(0, 0, 0);
          cursor: pointer;
          background-color: white;
          color: black;
          border: 1px solid black;
             display: none !important;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .navbar__quote-btn:hover {
          background-color: black;
          color: white;
        }
      `}</style>
    </header>
  );
}
