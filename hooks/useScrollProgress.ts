"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const current =
        window.scrollY;

      setProgress((current / total) * 100);
    };

    update();

    window.addEventListener("scroll", update);

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return progress;
}