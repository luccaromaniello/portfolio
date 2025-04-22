"use client";
import React, { useState, useEffect, useRef } from "react";
import "@/styles/navigation.css";

const SideMenu = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const shortSectionObserver = useRef<IntersectionObserver>(null);
  const longSectionObserver = useRef<IntersectionObserver>(null);

  useEffect(() => {
    shortSectionObserver.current = new IntersectionObserver(
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

    longSectionObserver.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting,
        )?.target;

        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 0.25,
      },
    );

    const shortSections = document.querySelectorAll(".short-section");
    const longSections = document.querySelectorAll(".long-section");

    shortSections.forEach((section) => {
      shortSectionObserver.current?.observe(section);
    });

    longSections.forEach((section) => {
      longSectionObserver.current?.observe(section);
    });

    return () => {
      shortSections.forEach((section) => {
        shortSectionObserver.current?.unobserve(section);
      });
      longSections.forEach((section) => {
        longSectionObserver.current?.unobserve(section);
      });
    };
  }, []);

  return (
    <ul
      className="side-menu-container"
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
          href="#context"
          className={`side-link ${activeSection === "context" ? "active" : ""}`}
        >
          Context
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
          href="#insights"
          className={`side-link ${activeSection === "insights" ? "active" : ""}`}
        >
          Insights
        </a>
      </li>
      <li>
        <a
          href="#metrics"
          className={`side-link ${activeSection === "metrics" ? "active" : ""}`}
        >
          Metrics
        </a>
      </li>
      <li>
        <a
          href="#user-testing"
          className={`side-link ${activeSection === "user-testing" ? "active" : ""}`}
        >
          User testing
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
    </ul>
  );
};

export default SideMenu;
