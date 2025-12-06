// "use client";

// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import { useRouter } from "next/navigation"; // Import the useRouter hook
// import "@/styles/MobileNavbar.css";

// export default function MobileNavbar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openAccordion, setOpenAccordion] = useState(null);
//   const router = useRouter(); // Create router instance

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//     setOpenAccordion(null);
//   };

//   const toggleAccordion = (section) => {
//     setOpenAccordion(openAccordion === section ? null : section);
//   };

//   const services = [
//     {
//       name: "Website Development",
//       link: "/website-development-company-in-bangalore",
//       items: [
//         "WordPress Website Development",
//         "React JS Website Development",
//         "Node JS Website Development",
//         // "Shopify Website Development",
//         "CMS Website Development",
//       ],
//     },
//     {
//       name: "Mobile App Development",
//       link: "/mobile-app-development-company-in-bangalore",
//       items: ["ReactJS", "WordPress", "E-commerce"],
//     },
//     {
//       name: "Graphic Design",
//       link: "/graphic-design-company-in-bangalore",
//       items: ["Logo Design", "Brochure", "Social Media"],
//     },
//     {
//       name: "Corporate Video Production",
//       link: "/corporate-video-production-company-in-bangalore",
//       items: ["Logo Design", "Brochure", "Social Media"],
//     },
//     {
//       name: "2d Animation",
//       link: "/2d-animation-studio-in-bangalore",
//       items: ["Logo Design", "Brochure", "Social Media"],
//     },
//     {
//       name: "Digital Marketing",
//       link: "/digital-marketing-agency-in-bangalore",
//       items: ["Logo Design", "Brochure", "Social Media"],
//     },
//     {
//       name: "B2B Marketing Services",
//       link: "/b2b-marketing-agency-in-bangalore",
//       items: ["Logo Design", "Brochure", "Social Media"],
//     },
//   ];

//   // Navigate to a specific page using the router
//   const navigateTo = (path) => {
//     router.push(path); // Use next.js's router.push to navigate
//     closeSidebar(); // Close the sidebar after navigation
//   };

//   return (
//     <Navbar className="d-lg-none mobile-navbar">
//       <Container>
//         <Navbar.Brand onClick={() => navigateTo("/")} style={{ cursor: "pointer" }}>
//           <img
//             src="media/nnclogo.png"
//             style={{ width: "60px", height: "auto" }}
//             className="d-inline-block align-top navbar-logo"
//             alt="Logo"
//           />
//         </Navbar.Brand>

//         {!sidebarOpen && (
//           <button className="menu-button" onClick={() => setSidebarOpen(true)}>
//             <Menu size={30} />
//           </button>
//         )}

//         {sidebarOpen && (
//           <div className="sidebar-menu" style={{ paddingBlock: "40px", height: "100%" }}>
//             <button className="close-button" onClick={closeSidebar}>
//               <X size={30} />
//             </button>

//             <div className="flex-column">
//               <div className="menu-item" onClick={() => navigateTo("/")}>
//                 Home
//               </div>
//               <div className="menu-item" onClick={() => navigateTo("/about-us")}>
//                 About Us
//               </div>
//               <div className="menu-item" onClick={() => navigateTo("/our-works")}>
//                 Our Works
//               </div>
//               <div className="menu-item" onClick={() => navigateTo("/services")}>
//                 Services
//               </div>

//               <div className="accordion-section mx-3">
//                 {services.map((service, i) => (
//                   <div key={i}>
//                     <div
//                       className="menu-item sub-accordion-toggle"
//                       onClick={() => toggleAccordion(service.name)}
//                     >
//                       - <span>{service.name}</span>
//                       {/* <ChevronDown
//                         className={openAccordion === service.name ? "rotate" : ""}
//                         size={14}
//                       /> */}
//                     </div>

//                     {openAccordion === service.name && (
//                       <div className="sub-accordion-content">
//                         {service.items.map((item, j) => (
//                           <div
//                             key={j}
//                             className="menu-item small"
//                             onClick={() => navigateTo(service.link)} // Navigate to the service link
//                           >
//                             {item}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="menu-item" onClick={() => navigateTo("/blog")}>
//                 Blogs
//               </div>
//               <div className="menu-item" onClick={() => navigateTo("/careers")}>
//                 Careers
//               </div>
//               <div className="menu-item" onClick={() => navigateTo("/contact-us")}>
//                 Contact Us
//               </div>
//             </div>
//           </div>
//         )}
//       </Container>
//     </Navbar>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import { useRouter } from "next/navigation"; // Import the useRouter hook
// import "@/styles/MobileNavbar.css";

// export default function MobileNavbar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openAccordion, setOpenAccordion] = useState(null);
//   const router = useRouter(); // Create router instance

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//     setOpenAccordion(null);
//   };

//   const toggleAccordion = (section) => {
//     setOpenAccordion(openAccordion === section ? null : section);
//   };

//   const services = [
//     {
//       name: "UI/UX Design",
//       link: "/graphic-design-company-in-bangalore",
//       items: ["Wireframing and Prototyping"],
//     },
//     {
//       name: "Ecommerce Development",
//       link: "/", // No direct page link provided
//       items: ["WooCommerce Development", "Ecommerce Web Development"],
//     },
//     {
//       name: "Web Development",
//       link: "/website-development-company-in-bangalore",
//       items: [
//         "Frontend Development",
//         "Full Stack Development",
//         "Static Website Development",
//         "Dynamic Website Development",
//         "PHP Web Development",
//         "Web Portal Development",
//         "WordPress Website Development",
//         "React JS Website Development",
//         "Node JS Website Development",
//         "CMS Website Development",
//       ],
//     },
//     {
//       name: "Software Development",
//       link: "", // No direct page link provided
//       items: [
//         "CRM Software Development",
//         "Enterprise Software Development",
//         "Software Product Development",
//         "Cloud Application Development",
//         "Software Support and Maintenance",
//         "Legacy Software Modernization",
//         "Software Consulting",
//       ],
//     },
//     {
//       name: "2D Animations",
//       link: "/2d-animation-studio-in-bangalore",
//       items: [
//         "Explainer Videos",
//         "Character Animation",
//         "Puppet Animation",
//         "Motion Graphics",
//       ],
//     },
//     {
//       name: "Mobile App Development",
//       link: "/mobile-app-development-company-in-bangalore",
//       items: [
//         "iOS Mobile App Development",
//         "Android Mobile App Development",
//         "Flutter Mobile App Development",
//         "React Native Mobile App Development",
//       ],
//     },
//     {
//       name: "Corporate Video Production",
//       link: "/corporate-video-production-company-in-bangalore",
//       items: [], // No sub-items provided in dropdown
//     },
//     {
//       name: "Solutions",
//       link: "/digital-marketing-agency-in-bangalore",
//       items: [
//         "Website Performance Optimization",
//         "Website Migration Service",
//         "Startup Solution",
//         "Search Engine Optimisation",
//         "Social Media Marketing",
//         "Paid Marketing",
//       ],
//     },
//     {
//       name: "B2B Marketing",
//       link: "/b2b-marketing-agency-in-bangalore",
//       items: [], // No sub-items provided
//     },
//   ];

//   // Navigate to a specific page using the router
//   const navigateTo = (path) => {
//     router.push(path); // Use next.js's router.push to navigate
//     closeSidebar(); // Close the sidebar after navigation
//   };

//   return (
//     <Navbar className="d-lg-none mobile-navbar">
//       <Container>
//         <Navbar.Brand
//           onClick={() => navigateTo("/")}
//           style={{ cursor: "pointer" }}
//         >
//           <img
//             src="/media/nnclogo.png"
//             style={{ width: "60px", height: "auto" }}
//             className="d-inline-block align-top navbar-logo"
//             alt="Logo"
//           />
//         </Navbar.Brand>

//         {!sidebarOpen && (
//           <button className="menu-button" onClick={() => setSidebarOpen(true)}>
//             <Menu size={30} />
//           </button>
//         )}

//         {sidebarOpen && (
//           <div
//             className="sidebar-menu"
//             style={{ paddingBlock: "40px", height: "100%" }}
//           >
//             <button className="close-button" onClick={closeSidebar}>
//               <X size={30} />
//             </button>

//             <div className="flex-column">
//               <div className="menu-item" onClick={() => navigateTo("/")}>
//                 Home
//               </div>
//               <div
//                 className="menu-item"
//                 onClick={() => navigateTo("/about-us")}
//               >
//                 About Us
//               </div>
//               <div
//                 className="menu-item"
//                 onClick={() => navigateTo("/our-works")}
//               >
//                 Our Works
//               </div>
//               <div
//                 className="menu-item"
//                 onClick={() => navigateTo("/services")}
//               >
//                 Services
//               </div>

//               <div className="accordion-section mx-3">
//                 {services.map((service, i) => (
//                   <div key={i}>
//                     <div
//                       className="menu-item sub-accordion-toggle"
//                       onClick={(e) => {
//                         e.stopPropagation();

//                         if (service.items.length > 0) {
//                           if (openAccordion === service.name) {
//                             // Second click redirects when dropdown is already open
//                             if (service.link) navigateTo(service.link);
//                           } else {
//                             // First click just toggles accordion
//                             setOpenAccordion(service.name);
//                           }
//                         } else {
//                           // No dropdown, navigate directly
//                           if (service.link) navigateTo(service.link);
//                         }
//                       }}
//                     >
//                       <span>{service.name}</span>
//                       {service.items.length > 0 && (
//                         <ChevronDown
//                           className={
//                             openAccordion === service.name ? "rotate" : ""
//                           }
//                           size={14}
//                         />
//                       )}
//                     </div>

//                     {openAccordion === service.name && (
//                       <div className="sub-accordion-content">
//                         {service.items.map((item, j) => (
//                           <div key={j} className="menu-item small">
//                             {item}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               <div className="menu-item" onClick={() => navigateTo("/blog")}>
//                 Blogs
//               </div>
//               <div className="menu-item" onClick={() => navigateTo("/careers")}>
//                 Careers
//               </div>
//               <div
//                 className="menu-item"
//                 onClick={() => navigateTo("/contact-us")}
//               >
//                 Contact Us
//               </div>
//             </div>
//           </div>
//         )}
//       </Container>
//     </Navbar>
//   );
// }


"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import "@/styles/MobileNavbar.css";

export default function MobileNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const router = useRouter(); // Create router instance

  const closeSidebar = () => {
    setSidebarOpen(false);
    setOpenAccordion(null);
  };

  const navigateTo = (path) => {
    if (path) {
      router.push(path);
      closeSidebar();
    }
  };

  const services = [
    {
      name: "UI/UX Design",
      link: "/graphic-design-company-in-bangalore",
      items: [
        { name: "Wireframing and Prototyping", link: "/graphic-design-company-in-bangalore" },
      ],
    },
    {
      name: "Ecommerce Development",
      link: "/",
      items: [
        { name: "WooCommerce Development", link: "/" },
        { name: "Ecommerce Web Development", link: "/" },
      ],
    },
    {
      name: "Web Development",
      link: "/website-development-company",
      items: [
        { name: "Frontend Development", link: "/website-development-company-in-bangalore"},
        { name: "Full Stack Development", link: "/website-development-company-in-bangalore" },
        { name: "Static Website Development", link: "/website-development-company-in-bangalore" },
        { name: "Dynamic Website Development", link: "/website-development-company-in-bangalore" },
        { name: "PHP Web Development", link: "/website-development-company-in-bangalore" },
        { name: "Web Portal Development", link: "/website-development-company-in-bangalore" },
        { name: "WordPress Website Development", link: "/website-development-company-in-bangalore" },
        { name: "React JS Website Development", link: "/website-development-company-in-bangalore" },
        { name: "Node JS Website Development", link: "/website-development-company-in-bangalore" },
        { name: "CMS Website Development", link: "/website-development-company-in-bangalore" },
      ],
    },
    {
      name: "Software Development",
      link: "/software-development-company-in-bangalore",
      items: [
        { name: "CRM Software Development", link: "/" },
        { name: "Enterprise Software Development", link: "/" },
        { name: "Software Product Development", link: "/" },
        { name: "Cloud Application Development", link: "/" },
        { name: "Software Support and Maintenance", link: "/" },
        { name: "Legacy Software Modernization", link: "/" },
        { name: "Software Consulting", link: "/" },
      ],
    },
    {
      name: "2D Animations",
      link: "/2d-animation-studio",
      items: [
        { name: "Explainer Videos", link: "/2d-animation-studio-in-bangalore" },
        { name: "Character Animation", link:"/2d-animation-studio-in-bangalore" },
        { name: "Puppet Animation", link: "/2d-animation-studio-in-bangalore" },
        { name: "Motion Graphics", link: "/2d-animation-studio-in-bangalore" },
      ],
    },
    {
      name: "Mobile App Development",
      link: "/mobile-app-development-company",
      items: [
        { name: "iOS Mobile App Development", link: "/mobile-app-development-company-in-bangalore" },
        { name: "Android Mobile App Development", link: "/mobile-app-development-company-in-bangalore" },
        { name: "Flutter Mobile App Development", link: "/mobile-app-development-company-in-bangalore" },
        { name: "React Native Mobile App Development", link: "/mobile-app-development-company-in-bangalore" },
      ],
    },
    {
      name: "Corporate Video Production",
      link: "/corporate-video-production-company-in-bangalore",
      items: [
        { name: "Corporate Film Makers", link: "/corporate-film-makers" },

      ],  
    },
    {
      name: "Solutions",
      link: "/digital-marketing-agency-in-bangalore",
      items: [
        { name: "Website Performance Optimization", link: "/digital-marketing-agency-in-bangalore" },
        { name: "Website Migration Service", link: "/digital-marketing-agency-in-bangalore" },
        { name: "Startup Solution", link: "/digital-marketing-agency-in-bangalore" },
        { name: "Search Engine Optimisation", link: "/digital-marketing-agency-in-bangalore" },
        { name: "Social Media Marketing", link: "/digital-marketing-agency-in-bangalore" },
        { name: "Paid Marketing", link: "/digital-marketing-agency-in-bangalore" },
      ],
    },
    {
      name: "B2B Marketing",
      link: "/b2b-marketing-agency-in-bangalore",
      items: [],
    },
  ];

  return (
    <Navbar className="d-lg-none mobile-navbar ">
      <Container>
        <Navbar.Brand
          onClick={() => navigateTo("/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/media/nnclog1.avif"
            style={{ width: "60px", height: "auto" }}
            className="d-inline-block align-top navbar-logo"
            alt="Logo"
          />
        </Navbar.Brand>

        {!sidebarOpen && (
          <button className="menu-button" onClick={() => setSidebarOpen(true)}>
            <Menu size={30} />
          </button>
        )}

        {sidebarOpen && (
          <div
            className="sidebar-menu"
            style={{ paddingBlock: "40px", height: "100%" }}
          >
            <button className="close-button" onClick={closeSidebar}>
              <X size={30} />
            </button>

            <div className="flex-column">
              <div className="menu-item" onClick={() => navigateTo("/")}>
                Home
              </div>
              <div className="menu-item" onClick={() => navigateTo("/about-us")}>
                About Us
              </div>
              <div className="menu-item" onClick={() => navigateTo("/our-works")}>
                Our Works
              </div>
              <div className="menu-item" onClick={() => navigateTo("/services")}>
                Services
              </div>

              <div className="accordion-section mx-3">
                {services.map((service, i) => (
                  <div key={i}>
                    <div
                      className="menu-item sub-accordion-toggle"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (service.items.length > 0) {
                          if (openAccordion === service.name) {
                            // second click redirects to main service page
                            if (service.link) navigateTo(service.link);
                          } else {
                            setOpenAccordion(service.name);
                          }
                        } else {
                          if (service.link) navigateTo(service.link);
                        }
                      }}
                    >
                      <span>{service.name}</span>
                      {service.items.length > 0 && (
                        <ChevronDown
                          className={openAccordion === service.name ? "rotate" : ""}
                          size={14}
                        />
                      )}
                    </div>

                    {openAccordion === service.name && (
                      <div className="sub-accordion-content">
                        {service.items.map((item, j) => (
                          <div
                            key={j}
                            className="menu-item small"
                            onClick={() => navigateTo(item.link)}
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="menu-item" onClick={() => navigateTo("/blog")}>
                Blogs
              </div>
              <div className="menu-item" onClick={() => navigateTo("/careers")}>
                Careers
              </div>
              <div className="menu-item" style={{paddingBottom:"60px"}} onClick={() => navigateTo("/contact-us")}>
                Contact Us
              </div>
            </div>
          </div>
        )}
      </Container>
    </Navbar>
  );
}
