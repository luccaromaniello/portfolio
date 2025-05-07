"use client";
import Header from "@/components/main/Header";
import "@/styles/alignments.css";
import TopNavigation from "@/components/navigation/TopNavigation";
import { useEffect, useState } from "react";
import DesignArchive from "@/components/main/DesignArchive/DesignArchive";

const Home = () => {
  const [renderedPosition, setRenderedPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // this eases the spotlight mouse movement
    let frame: number;
    const animate = () => {
      setRenderedPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15,
      }));
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [mousePosition]);

  useEffect(() => {
    const backgroundContainer = document.getElementById("background-container");
    const handleMouseMove = (event: MouseEvent) => {
      if (!backgroundContainer) return;
      const rect = backgroundContainer.getBoundingClientRect();
      const spotlightSize = 300;
      const x = event.clientX - rect.left - spotlightSize / 2;
      const y = event.clientY - rect.top - spotlightSize / 2;

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
        className="flex flex-col lg:px-56 2xl:px-96 w-full min-h-96 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/background-galaxy.png')] bg-cover bg-center bg-repeat z-0 brightness-50" />
        <div
          id="spotlight"
          style={{
            top: `${renderedPosition.y}px`,
            left: `${renderedPosition.x}px`,
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 50%, rgba(0, 0, 0, 0.6) 100%)`,
            pointerEvents: "none",
            mixBlendMode: "lighten",
            width: "300px",
            height: "300px",
          }}
          className="hidden sm:block absolute z-10 rounded-full"
        />
        <div className="px-6 sm:px-0 relative z-10">
          <TopNavigation darkTheme />
          <Header />
        </div>
      </div>
      <div className="pt-32 bg-background default-alignment">
        <div className="flex flex-col w-full text-center text-content-secondary font-medium">
          <p>
            🚧 I&apos;m actively updating my portfolio. Coding projects are
            coming soon!
          </p>
        </div>
        <DesignArchive />
      </div>
    </div>
  );
};

export default Home;
