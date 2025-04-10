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
    <ul
      className="hidden sm:flex flex-col gap-4 fixed px-4 z-10"
      onClick={(event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLAnchorElement;
        const id = target.getAttribute("href")?.replace("#", "");
        const element = document.getElementById(String(id));
        element?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <li>
        <a
          href="#overview"
          className={`side-link ${activeSection === "overview" ? "active" : ""}`}
        >
          Overview
        </a>
      </li>
      <li>
        <a
          href="#challenge"
          className={`side-link ${activeSection === "challenge" ? "active" : ""}`}
        >
          Challenge
        </a>
      </li>
      <li>
        <a
          href="#research"
          className={`side-link ${activeSection === "research" ? "active" : ""}`}
        >
          Research
        </a>
      </li>
      <li>
        <a
          href="#prototypes"
          className={`side-link ${activeSection === "prototypes" ? "active" : ""}`}
        >
          Prototypes
        </a>
      </li>
      <li>
        <a
          href="#solution"
          className={`side-link ${activeSection === "solution" ? "active" : ""}`}
        >
          Solution
        </a>
      </li>
      <li>
        <a
          href="#results"
          className={`side-link ${activeSection === "results" ? "active" : ""}`}
        >
          Results
        </a>
      </li>
      <li>
        <a
          href="#design-system"
          className={`side-link ${activeSection === "design-system" ? "active" : ""}`}
        >
          Design system
        </a>
      </li>
      <li>
        <a
          href="#design-documentation"
          className={`side-link ${activeSection === "design-documentation" ? "active" : ""}`}
        >
          Documentation
        </a>
      </li>
    </ul>
  );
};

export default SideMenu;
