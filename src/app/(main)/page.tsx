"use client";
import Header from "@/components/Header";
import "@/styles/alignments.css";
import Solution from "@/components/cases/abinbev/Solution";
import TopNavigation from "@/components/navigation/TopNavigation";
import { useEffect, useState } from "react";

const Home = () => {
  // useEffect(() => {
  //   const spotlight = document.getElementById("spotlight");
  //   if (!spotlight) return;

  //   const spotlightSize = "40px, rgba(0,0,0,0.8)_30% 40px";

  //   const updateSpotlight = (e: MouseEvent) => {
  //     const x = e.pageX;
  //     const y = e.pageY;
  //     spotlight.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, ${spotlightSize})`;
  //   };

  //   spotlight?.addEventListener("mousemove", updateSpotlight);

  //   return () => {
  //     spotlight?.removeEventListener("mousemove", updateSpotlight);
  //   };
  // }, []);

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
    <div id="background-container" className="flex flex-col bg-content-primary">
      <div className="flex flex-col px-6 lg:px-56 2xl:px-96 w-full min-h-96 relative">
        <div className="absolute inset-0 bg-[url('/background-galaxy.png')] bg-cover bg-center bg-repeat z-0 hover:brightness-50" />
        <div className="relative z-10">
          <div
            id="spotlight"
            style={{
              top: `${mousePosition.y - 128}px`,
              left: `${mousePosition.x - 128}px`,
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%, rgba(0, 0, 0, 0.8) 100%)",
              pointerEvents: "none",
              mixBlendMode: "lighten",
            }}
            className="absolute w-48 h-48 z-10 rounded-full"
          />

          {/* <div
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 80px, rgba(0, 0, 0, 0.7) 120px)`,
              pointerEvents: "none",
            }}
            id="spotlight"
            className="absolute inset-0 z-10"
          >
            {mousePosition.x}
            {mousePosition.y}
          </div> */}
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
