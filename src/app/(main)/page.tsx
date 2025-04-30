"use client";
import Header from "@/components/Header";
import "@/styles/alignments.css";
import Solution from "@/components/cases/abinbev/Solution";
import TopNavigation from "@/components/navigation/TopNavigation";
import { useEffect, useState } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const backgroundContainer = document.getElementById("background-container");
    const handleMouseMove = (event: MouseEvent) => {
      if (!backgroundContainer) return;
      const x = event.pageX;
      const y = event.pageY;
      // const rect = backgroundContainer.getBoundingClientRect();
      // const relativeX = event.clientX - rect.left;
      // const relativeY = event.clientY - rect.top;
      // const percentX = (relativeX / rect.width) * 100;
      // const percentY = (relativeY / rect.height) * 100;

      setMousePosition({ x: x, y: y });
    };

    backgroundContainer?.addEventListener("mousemove", handleMouseMove);

    return () => {
      backgroundContainer?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col bg-content-primary">
      <div
        id="background-container"
        className="flex flex-col px-6 lg:px-56 2xl:px-96 w-full min-h-96 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/background-galaxy.png')] bg-cover bg-center bg-repeat z-0 brightness-50" />
        <div className="relative z-10">
          <div
            id="spotlight"
            style={{
              top: `${mousePosition.y - 64}px`,
              left: `${mousePosition.x - 64}px`,
              backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 50%, rgba(0, 0, 0, 0.6) 100%)`,
              pointerEvents: "none",
              mixBlendMode: "lighten",
            }}
            className="absolute w-full h-full z-10 rounded-full"
          />
          <TopNavigation darkTheme />
          <Header />
        </div>
      </div>
      <div className="pt-32 bg-background default-alignment">
        <Solution />
      </div>
    </div>
  );
};

export default Home;
