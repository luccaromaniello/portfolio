import Tab from "@/components/cases/tabs/Tab";
import SectionHeading from "@/components/cases/typography/SectionHeading";
import UserFlow from "@/components/cases/anima/userFlow/UserFlow";

const Research = () => {
  const tabs = [
    {
      title: "User flow",
      type: 1,
      attributes: {
        description:
          "The user flow was created during the MVP definition, aligning with the current Ânima flow and Ministry of Education requirements.",
      },
      children: <UserFlow />,
    },
    {
      title: "Personas",
      type: 0,
      attributes: {
        description:
          "I conducted user interviews to create personas, highlighting their background, frustrations with the legacy process, and expectations. I also collaborated with developers to uncover undocumented business criteria in the code.",
        image: {
          url: "/images/cases/anima/personas-overview.png",
          alt: "Snapshot for Ânima's persona documentation, derived from thorough user research.",
        },
      },
    },
    {
      title: "User journey",
      type: 0,
      attributes: {
        description:
          "We mapped the user journey of the legacy certificate platform through interviews to understand user goals, actions, and potential adjustments for offering the product to other organizations. We also aimed to distinguish Ânima-specific steps from those required by the Ministry of Education.",
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
          "We defined the Minimum Viable Product (MVP) by prioritizing tasks based on user needs for issuing certificates. I facilitated methods with the team to determine the essentials for a version that Ânima could start using.",
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
