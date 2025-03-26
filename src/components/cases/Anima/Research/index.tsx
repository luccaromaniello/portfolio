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
