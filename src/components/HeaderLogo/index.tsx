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

    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="header-logo-container" className="relative">
      <Image
        src="/lucca-icon.png"
        alt="Picture of Lucca Romaniello."
        priority
        className="object-contain rounded-lg object-top w-full h-full relative cursor-default z-1"
        width={360}
        height={480}
        sizes="100%"
      />
      {/* <Image
        src="/lucca-overlay-bw.png"
        alt="Picture of Lucca Romaniello."
        priority
        className="object-contain rounded-lg object-top w-full h-full absolute top-0 left-0"
        width={360}
        height={480}
        sizes="100%"
      /> */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "black",
          pointerEvents: "none",
          clipPath: `circle(10% at ${mousePosition.x.toFixed(0)}% ${mousePosition.y.toFixed(0)}%)`,
        }}
      ></div>
    </div>
  );
};

export default HeaderLogo;
