"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import WhatsAppButtons from "@/components/WhatsApp";
import Navbar_Menu1 from "@/components/Navbar_Menu1";
// import LoaderGate from "@/components/LoaderGate";

export default function ClientShell({ children }) {
  const pathname = usePathname();

  // Layout hidden on these paths
  const hideLayout =
    pathname === "/best-website-design-and-development-company-in-bangalore" ||
    pathname === "/best-mobile-app-company";

  // Loader hidden on these paths (optional — use same list as layout if you want)
  const hideLoader = hideLayout;

  const [loading, setLoading] = useState(true); // show on first load
  const didMount = useRef(false);

  // (1) Initial page load: hide loader when fully ready (with a fallback)
  useEffect(() => {
    if (hideLoader) {
      setLoading(false);
      return;
    }

    const done = () => setLoading(false);

    if (document.readyState === "complete") {
      done();
      return;
    }

    window.addEventListener("load", done, { once: true });
    const fallback = setTimeout(done, 1200); // safety in case 'load' delays

    return () => {
      window.removeEventListener("load", done);
      clearTimeout(fallback);
    };
  }, [hideLoader]);

  // (2) Route changes: show a brief loader
  useEffect(() => {
    if (hideLoader) return;

    if (!didMount.current) {
      didMount.current = true; // skip first render (handled above)
      return;
    }

    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400); // tweak duration to taste
    return () => clearTimeout(t);
  }, [pathname, hideLoader]);

  return (
    <>
      {!hideLayout && <Navbar_Menu1 />}
      {!hideLayout && (
        <MobileNavbar /* ensure logo uses src="/media/nnclogo.png" */ />
      )}

      {/* Overlay loader lives here */}
      {/* <LoaderGate active={!hideLoader && loading} /> */}

      {/* Optional: prevent layout shift while loading */}
      <div aria-busy={loading}>{children}</div>

      {!hideLayout && (
        <div style={{ backgroundColor: "#002A3A" }}>
          <Footer />
          <BottomNav />
          <WhatsAppButtons />
        </div>
      )}
    </>
  );
}
