"use client";
import { useState } from "react";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideNavigation isOpen={isOpen} toggle={toggle} />
      <TopNavigation toggle={toggle} />
    </>
  );
};

export default Navigation;