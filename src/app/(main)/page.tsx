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
      const { left, top } = backgroundContainer.getBoundingClientRect();
      const spotlightSize = 300;
      const x = event.pageX - left - spotlightSize / 2;
      const y = event.pageY - top - spotlightSize / 2;

      setMousePosition({
        x: Math.max(
          0,
          Math.min(x, backgroundContainer.offsetWidth - spotlightSize),
        ),
        y: Math.max(
          0,
          Math.min(y, backgroundContainer.offsetHeight - spotlightSize),
        ),
      });
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
        <div className="absolute inset-0 bg-[url('/background-galaxy.png')] bg-cover bg-center bg-repeat z-0 brightness-50 hover:cursor-[url()]" />
        <div
          id="spotlight"
          style={{
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 50%, rgba(0, 0, 0, 0.6) 100%)`,
            pointerEvents: "none",
            mixBlendMode: "lighten",
            width: "300px",
            height: "300px",
          }}
          className="absolute z-10 rounded-full"
        />
        <div className="relative z-10">
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
