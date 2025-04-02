import Tab from "@/components/cases/Tab";
import SectionHeading from "@/components/cases/typography/SectionHeading";

const Research = () => {
  const tabs = [
    {
      title: "User flow",
      type: 1,
      attributes: {
        description:
          "The user flow was created during the MVP definition, aligning with the current Ânima flow and Ministry of Education requirements.",
        image: {
          url: "/images/cases/anima/anima-overview.png",
          alt: "Teste",
        },
      },
    },
    {
      title: "Personas",
      type: 0,
      attributes: {
        description:
          "I conducted user interviews that helped us create personas by mapping their background, frustrations of the legacy process, and expectations. I also had the help from developers to identify within the code business criteria that were not previously documented.",
        image: {
          url: "/images/cases/anima/personas.png",
          alt: "Snapshot for Ânima's persona documentation, derived from thorough user research.",
        },
      },
    },
    {
      title: "User journey",
      type: 0,
      attributes: {
        description:
          "The user journey within the legacy certificate emission platform was mapped based on interviews. We aimed to understand user goals, actions, and potential adjustments to offer the product to other organizations. We also wanted to differentiate steps exclusive to Ânima from those reflecting Ministry of Education requirements.",
        image: {
          url: "/images/cases/anima/user-journey.png",
          alt: "Snapshot for Ânima's user journey in certificate generation.",
        },
      },
    },
    {
      title: "MVP definition",
      type: 0,
      attributes: {
        description:
          "To meet the project's demands, we determined the Minimum Viable Product (MVP) for the platform by prioritizing tasks based on user needs in issuing certificates. I helped to facilitate a series of methods with the team to guide us to the minimum we should build in a way that Ânima could already start using the new platform.",
        image: {
          url: "/images/cases/anima/mvp.png",
          alt: "Visual representation of the outcomes of Ânima's MVP Prioritization Workshop in the discovery phase. Post-it notes meticulously arranged in prioritization matrices, capturing key decisions and insights.",
        },
      },
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        title="Research"
        text="We needed to understand Ânima's certificate emission process on their internal platform and what could be applied to other companies."
      />
      <Tab tabs={tabs} />
    </div>
  );
};

export default Research;
