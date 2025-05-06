"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeaderLogo = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const container = document.getElementById("header-logo-container");

    const handleMouseMove = (event: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const relativeX = event.clientX - rect.left;
      const relativeY = event.clientY - rect.top;
      const percentX = (relativeX / rect.width) * 100;
      const percentY = (relativeY / rect.height) * 100;

      setMousePosition({
        x: percentX,
        y: percentY,
      });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: -100, y: -100 });
    };

    container?.addEventListener("mousemove", handleMouseMove);
    container?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
      container?.addEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="header-logo-container" className="relative">
      <Image
        style={{
          WebkitMaskImage: `url('/mask.svg')`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: `${mousePosition.x.toFixed(0)}% ${mousePosition.y.toFixed(0)}%`,
          WebkitMaskComposite: "exclude",
          maskImage: `url('/mask.svg')`,
          maskRepeat: "no-repeat",
          maskPosition: `${mousePosition.x.toFixed(0)}% ${mousePosition.y.toFixed(0)}%`,
          maskComposite: "exclude",
        }}
        src="/lucca-overlay-bw.png"
        alt="Picture of Lucca Romaniello."
        priority
        className="object-contain rounded-lg object-top w-full h-full relative cursor-default z-10"
        width={360}
        height={480}
        sizes="100%"
      />
      <Image
        src="/lucca-icon.png"
        alt="Illustration of Lucca Romaniello."
        priority
        className="object-contain rounded-lg object-top w-full h-full absolute top-0 left-0"
        width={360}
        height={480}
        sizes="100%"
      />
    </div>
  );
};

export default HeaderLogo;
