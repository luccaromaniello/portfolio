import Tab from "@/components/cases/Tab";
import SectionHeading from "@/components/cases/typography/SectionHeading";

const Research = () => {
  const tabs = [
    {
      title: "User flow",
      type: 0,
      attributes: {
        description:
          "The user flow was created during the MVP definition, aligning with the current Ânima flow and Ministry of Education requirements.",
        image: {
          url: "",
          alt: "",
        },
      },
    },
    {
      title: "Personas",
      type: 0,
      attributes: {
        description: "teste 2",
        image: {
          url: "",
          alt: "",
        },
      },
    },
    {
      title: "User journey",
      type: 0,
      attributes: {
        description: "teste 3",
        image: {
          url: "",
          alt: "",
        },
      },
    },
    {
      title: "MVP definition",
      type: 0,
      attributes: {
        description: "teste 4",
        image: {
          url: "",
          alt: "",
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
