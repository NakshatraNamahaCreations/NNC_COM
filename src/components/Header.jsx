
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const hideLayout = pathname === "/best-website-design-and-development-company-in-bangalore" || pathname === "/best-mobile-app-company";

  let contactDisplayStyle = "flex";  // Default style
  if (pathname === "/best-mobile-app-company") {
    contactDisplayStyle = "block";  // Style for /best-mobile-app-company
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={navStyle}
    >
      <div className="nav-container" style={navContainerStyle}>
        {/* Logo */}
        <div className="logo" style={logoStyle}>
          <a
            href="https://www.nakshatranamahacreations.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={logoLinkStyle}
          >
            <Image
              src="/nnc.png"
              alt="Company Logo"
              width={70}
              height={70}
              priority
              className="object-contain"
            />
          </a>
        </div>

        {/* Contact Info */}
        <div className="contact-info" style={{ ...contactInfoStyle, display: contactDisplayStyle }}>
          {/* Phone */}
          <div className="contact-item" style={contactItemStyle}>
            <a
              href="tel:+919900566466"
              style={{ ...contactTextStyle, display: "flex", alignItems: "center", gap: "8px", color: "#0689CF", textDecoration: "none" }}
            >
              <FaPhoneAlt style={contactIconStyle} /> +91 9900566466
            </a>
          </div>

          {/* Email */}
          <div className="contact-item" style={contactItemStyle}>
            <a
              href="mailto:info@nakshatranamahacreations.com"
              style={{ ...contactTextStyle, display: "flex", alignItems: "center", gap: "8px", color: "#0689CF", textDecoration: "none" }}
            >
              <FaEnvelope style={contactIconStyle} /> info@nakshatranamahacreations.com
            </a>
          </div>
        </div>

        {/* Mobile Menu Button (hidden on desktop) */}
        <div className="mobile-menu-btn" style={mobileMenuBtnStyle}>
          <i className="fas fa-bars"></i>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 5%;
          transition: all 0.3s ease;
          z-index: 1000;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .navbar.scrolled {
          background-color: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 10px 5%;
        }
        
        .navbar.scrolled .logo a {
          color: #2c3e50;
        }
        
        .navbar.scrolled .contact-item {
          color: #2c3e50;
        }
        
        .nav-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          transition: color 0.3s ease;
        }
        
        .contact-info {
          display: flex;
          gap: 30px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          transition: color 0.3s ease;
        }
        
        .mobile-menu-btn {
          display: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .contact-info {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .navbar {
            padding: 12px 4%;
          }
          
          .navbar.scrolled {
            padding: 8px 4%;
          }
        }
        
        @media (max-width: 480px) {
          .logo a span {
            font-size: 1.2rem;
          }
          .contact-info {
            flex-direction: column;  
            gap: 5px !important;            
          }
        }
      `}</style>
    </nav>
  );
};

// Inline styles for the component
const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 5%',
  transition: 'all 0.3s ease',
  zIndex: 1000,
};

const navContainerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  flex: 1,
};

const logoLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  transition: 'color 0.3s ease',
};

const contactInfoStyle = {
  display: 'flex',
  gap: '30px',
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: 'white',
  transition: 'color 0.3s ease',
};

const contactIconStyle = {
  fontSize: '1.1rem',
};

const contactTextStyle = {
  fontSize: '0.95rem',
  color: "#000",
};

const mobileMenuBtnStyle = {
  display: 'none',
  color: 'white',
  fontSize: '1.5rem',
  cursor: 'pointer',
};

export default Header;
