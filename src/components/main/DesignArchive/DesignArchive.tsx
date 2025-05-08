import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";
import projects from "./projects";

const DesignArchive = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-12 items-center">
      <h3 className="2xl:text-lg uppercase text-content-secondary">
        Design archive
      </h3>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-y-12 gap-x-16 sm:gap-y-8 sm:justify-between">
        {projects.map(
          (
            { title, company, description, link, externalLink, image, locked },
            index,
          ) => (
            <div
              key={index}
              className={`relative transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-40" : "opacity-100"}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard
                title={title}
                company={company}
                description={description}
                link={link}
                externalLink={externalLink}
                image={image ?? image}
                locked={locked ?? locked}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default DesignArchive;
