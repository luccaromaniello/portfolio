import Tab from "@/components/cases/TabItem";
import SectionHeading from "@/components/cases/typography/SectionHeading";

const Research = () => {
  const tabs = [
    {
      title: "User flow",
      image: {
        url: "",
        alt: "",
      },
    },
    {
      title: "Personas",
      image: {
        url: "",
        alt: "",
      },
    },
    {
      title: "User journey",
      image: {
        url: "",
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
    <div>
      <SectionHeading
        title="Research"
        text="We needed to understand how the process worked for Ânima since they had an internal platform for certificate emission and what could be considered to other companies."
      />
      <Tab tabs={tabs} />
    </div>
  );
};

export default Research;
