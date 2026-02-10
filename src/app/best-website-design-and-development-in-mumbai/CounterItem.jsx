"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./counter.module.css";

export default function CounterItem({
  end,
  label,
  suffix = "",
  direction = "left",
  duration = 2000,
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, end, duration]);

  return (
    <div
      ref={ref}
      className={`${styles.counterItem} ${
        inView ? styles.show : styles[direction]
      }`}
    >
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
}
