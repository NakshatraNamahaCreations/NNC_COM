// ClientShell.jsx
"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import WhatsAppButtons from "@/components/WhatsApp";
import Navbar_Menu1 from "@/components/Navbar_Menu1";

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

function normalizePath(p) {
  if (!p) return "/";
  return p.endsWith("/") && p !== "/" ? p.slice(0, -1) : p;
}

export default function ClientShell({ children }) {
  const pathname = normalizePath(usePathname());

  // pages with completely custom layout (no navbar/footer)
  const hideLayout =
    pathname === "/best-website-design-and-development-company-in-bangalore" ||
    pathname === "/best-mobile-app-company";

  const isMumbaiPage =
    pathname === "/website-development-company-in-mumbai";
  const isMumbaiMobilePage =
    pathname === "/mobile-app-development-company-in-mumbai";
  const isHyderabadPage =
    pathname === "/website-development-company-in-hyderabad";
  const isBangalorePage =
    pathname === "/website-development-company-in-bangalore";
  const is2dMumbaiPage =
    pathname === "/2d-animation-studio-in-mumbai";

  return (
    <>
      {!hideLayout && (
        <>
          <Navbar_Menu1 />
          <MobileNavbar />
        </>
      )}

      {/* No loader – just render children */}
      {children}

      {!hideLayout && (
        <div style={{ backgroundColor: "#002A3A" }}>
          <Footer />

          {isMumbaiPage && <PopularSearchesWebsiteMumbai />}
          {isMumbaiMobilePage && <PopularSearchesMobileMumbai />}
          {isHyderabadPage && <PopularSearchesWebHyd />}
          {isBangalorePage && <PopularSearchesWebBng />}
          {is2dMumbaiPage && <PopularSearches2dAnimation />}

          <BottomNav />
          <WhatsAppButtons />
        </div>
      )}
    </>
  );
}
