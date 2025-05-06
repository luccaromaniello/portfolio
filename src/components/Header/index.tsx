"use client";
import HeaderLogo from "@/components/HeaderLogo";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const container = document.getElementById("header-container");

    const preventRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    container?.addEventListener("contextmenu", preventRightClick);

    return () => {
      container?.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);

  return (
    <div
      id="header-container"
      className="flex flex-row gap-24 items-center relative h-full pt-8 pb-16 text-center sm:text-left"
    >
      <div className="hidden w-full sm:flex sm:w-1/3"></div>
      <div className="flex flex-col gap-6 sm:gap-8 sm:z-10 absolute left-0 top-0 sm:top-1/2 sm:-translate-y-1/2">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-6xl leading-tight sm:leading-snug 2xl:leading-tight font-medium text-neutral-white">
            Lucca Romaniello
          </h1>
          <h2 className="text-xl sm:text-2xl leading-tight text-content-tertiary">
            Frontend Engineer and former Product Designer
          </h2>
        </div>
        <p className="text-base sm:text-lg text-content-tertiary w-full sm:w-2/3">
          Blending design sensibility and engineering expertise across startups
          and global teams for 6+ years.
        </p>
        <p className="text-footer text-content-tertiary w-full sm:w-2/3">
          Based in Brazil, working globally. Open to full-time and freelance
          opportunities.
        </p>
      </div>
      <div className="relative hidden w-full sm:block sm:w-2/3 h-full">
        <HeaderLogo />
      </div>
    </div>
  );
};

export default Header;
