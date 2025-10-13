// ClientShell.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import WhatsAppButtons from "@/components/WhatsApp";
import Navbar_Menu1 from "@/components/Navbar_Menu1";

// Two distinct components (each file must be a client component) 
const PopularSearchesWebsiteMumbai = dynamic(() =>
  import("@/app/website-development-company-in-mumbai/PopularSearchesWebsite")
);
const PopularSearchesMobileMumbai = dynamic(() =>
  import("@/app/mobile-app-development-company-in-mumbai/PopularSearchesMobile")
);
const PopularSearchesWebHyd = dynamic(() =>
  import("@/app/website-development-company-in-hyderabad/PopularSearchesWebHyd")
);
const PopularSearchesWebBng = dynamic(() =>
  import("@/app/website-development-company-in-bangalore/PopularSearchesWebBng")
);
const PopularSearches2dAnimation = dynamic(() =>
  import("@/app/2d-animation-studio-in-mumbai/PopularSearches2dAnimation")
);


export default function ClientShell({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname === "/best-website-design-and-development-company-in-bangalore" ||
    pathname === "/best-mobile-app-company";

  const hideLoader = hideLayout;
  const [loading, setLoading] = useState(true);
  const didMount = useRef(false);

  useEffect(() => {
    if (hideLoader) { setLoading(false); return; }
    const done = () => setLoading(false);
    if (document.readyState === "complete") { done(); return; }
    window.addEventListener("load", done, { once: true });
    const fallback = setTimeout(done, 1200);
    return () => { window.removeEventListener("load", done); clearTimeout(fallback); };
  }, [hideLoader]);

  useEffect(() => {
    if (hideLoader) return;
    if (!didMount.current) { didMount.current = true; return; }
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [pathname, hideLoader]);

  // normalize trailing slash just in case
  const norm = (p) => (p?.endsWith("/") ? p.slice(0, -1) : p);

  const isMumbaiPage = norm(pathname) === "/website-development-company-in-mumbai";
  const isMumbaiMobilePage = norm(pathname) === "/mobile-app-development-company-in-mumbai";
  const isHyderabadPage = norm(pathname) === "/website-development-company-in-hyderabad";
  const isBanglorePage = norm(pathname) === "/website-development-company-in-bangalore";  
  const is2dmumbaiPage = norm(pathname) === "/2d-animation-studio-in-mumbai";  
  return (
    <>
      {!hideLayout && <Navbar_Menu1 />}
      {!hideLayout && <MobileNavbar />}

      <div aria-busy={loading}>{children}</div>

      {!hideLayout && (
        <div style={{ backgroundColor: "#002A3A" }}>
          <Footer />

          {isMumbaiPage && <PopularSearchesWebsiteMumbai />}
          {isMumbaiMobilePage && <PopularSearchesMobileMumbai />}
 {isHyderabadPage && <PopularSearchesWebHyd />}

  {isBanglorePage && <PopularSearchesWebBng />}
    {is2dmumbaiPage  && <PopularSearches2dAnimation />}
          <BottomNav />
          <WhatsAppButtons />
        </div>
      )}
    </>
  );
}
