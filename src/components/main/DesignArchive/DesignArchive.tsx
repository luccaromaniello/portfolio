import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";

const DesignArchive = () => {
  const projects = [
    {
      title: "Developer Portal",
      company: "AB InBev",
      description:
        "A web portal used for mapping ABI's APIs, facilitating integration with partners by enhancing documentation used by technical teams.",
      link: "/design/abinbev",
      image: {
        url: "/images/home/home-devportal.png",
        alt: "An overview of AB InBev's developer initial page, which mainly displays reasons for using the web portal as a marketing strategy.",
        width: 40,
        height: 40,
      },
      locked: true,
    },
    {
      title: "Certificate Emission Platform",
      company: "Ânima Educação",
      description:
        "A web platform that is used to generate Bachelor's and Master's certificates for more than 350.000 students in Brazil.",
      link: "/design/anima-educacao",
      image: {
        url: "/images/home/home-animaeducacao.png",
        alt: "An overview of Anima's initial page, which displays a list of diplomas waiting to be validated by the user.",
        width: 40,
        height: 40,
      },
    },
    {
      title: "Government Website Usability Audit",
      company: "Secretary of Finance of Minas Gerais",
      description:
        "An academic research on the usability of Brazilian public-sector websites using SUS, heuristic evaluation, and UX surveys to identify design issues and user experience improvements.",
      link: "/design/anima-educacao",
      image: {
        url: "/images/home/home-animaeducacao.png",
        alt: "An overview of Anima's initial page, which displays a list of diplomas waiting to be validated by the user.",
        width: 40,
        height: 40,
      },
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-12 items-center">
      <h3 className="2xl:text-lg uppercase text-content-secondary">
        Design archive
      </h3>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-y-12 gap-x-16 sm:gap-y-8 sm:justify-between">
        {projects.map(
          ({ title, company, description, link, image, locked }, index) => (
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
                // externalLink={externalLink ? externalLink : ""}
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
