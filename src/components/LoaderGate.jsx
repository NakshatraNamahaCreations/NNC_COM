"use client";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

export default function LoaderGate({ active }) {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (active) {
      setVisible(true);
      setFadeOut(false);
    } else if (visible) {
      setFadeOut(true);
      const t = setTimeout(() => setVisible(false), 400); // match transition
      return () => clearTimeout(t);
    }
  }, [active, visible]);

  if (!visible) return null; // SSR will see nothing

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#fff",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.4s ease",
      }}
      aria-hidden="true"
    >
      <Preloader />
    </div>
  );
}
