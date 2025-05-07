import ProjectCard from "@/components/ProjectCard/ProjectCard";

const DesignArchive = () => {
  const projects = [
    {
      title: "Developer portal",
      company: "AB InBev",
      description:
        "A web portal used for mapping their APIs, facilitating integration with partners by enhancing documentation used by technical teams.",
      link: "/design/abinbev",
      image: {
        url: "/images/home/home-devportal.png",
        alt: "An overview of AB InBev's developer initial page, which mainly displays reasons for using the web portal as a marketing strategy.",
        width: 40,
        height: 40,
      },
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
  ];

  return (
    <div className="flex flex-col gap-12 items-center">
      <h3 className="2xl:text-lg uppercase text-content-secondary">
        Design archive
      </h3>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-y-12 gap-x-16 sm:gap-y-8 sm:justify-between">
        {projects.map(
          (
            { title, company, description, link, externalLink, image },
            index,
          ) => (
            <ProjectCard
              key={index}
              title={title}
              company={company}
              description={description}
              link={link}
              externalLink={externalLink ? externalLink : ""}
              image={image ?? image}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default DesignArchive;
