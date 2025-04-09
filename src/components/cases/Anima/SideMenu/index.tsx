"use client";
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const SideMenu = () => {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting,
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 0.5,
      },
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="hidden sm:flex flex-col gap-4 fixed px-4 z-10">
      <a
        href="#overview"
        className={`side-link ${activeSection === "overview" ? "active" : ""}`}
      >
        Overview
      </a>
      <a
        href="#challenge"
        className={`side-link ${activeSection === "challenge" ? "active" : ""}`}
      >
        Challenge
      </a>
      <a
        href="#research"
        className={`side-link ${activeSection === "research" ? "active" : ""}`}
      >
        Research
      </a>
      <a
        href="#prototypes"
        className={`side-link ${activeSection === "prototypes" ? "active" : ""}`}
      >
        Prototypes
      </a>
      <a
        href="#solution"
        className={`side-link ${activeSection === "solution" ? "active" : ""}`}
      >
        Solution
      </a>
      <a
        href="#results"
        className={`side-link ${activeSection === "results" ? "active" : ""}`}
      >
        Results
      </a>
      <a
        href="#design-system"
        className={`side-link ${activeSection === "design-system" ? "active" : ""}`}
      >
        Design system
      </a>
      <a
        href="#design-documentation"
        className={`side-link ${activeSection === "design-documentation" ? "active" : ""}`}
      >
        Documentation
      </a>
    </div>
  );
};

export default SideMenu;
