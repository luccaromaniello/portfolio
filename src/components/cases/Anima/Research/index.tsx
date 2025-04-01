import Tab from "@/components/cases/Tab";
import SectionHeading from "@/components/cases/typography/SectionHeading";

const Research = () => {
  const tabs = [
    {
      title: "User flow",
      description:
        "The user flow was created during the MVP definition, aligning with the current Ânima flow and Ministry of Education requirements.",
      image: {
        url: null,
        alt: "",
      },
    },
    {
      title: "Personas",
      image: {
        url: null,
        alt: "",
      },
    },
    {
      title: "User journey",
      image: {
        url: null,
        alt: "",
      },
    },
    {
      title: "MVP definition",
      image: {
        url: "",
        alt: "",
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
