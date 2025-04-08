import Tab from "@/components/cases/tabs/Tab";
import SectionHeading from "@/components/cases/typography/SectionHeading";

const Solution = () => {
  const tabs = [
    {
      title: "1. University",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v2-1.png",
          alt: "Second version of the prototype showcasing a menu component for selecting the university view.",
        },
      },
    },
    {
      title: "2. Institution type",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v2-2.png",
          alt: "Second version of the prototype showcasing a secondary menu component for selecting between the certificates list, reports, and admin views.",
        },
      },
    },
    {
      title: "3. Views",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v2-3.png",
          alt: "Second version of the prototype showcasing a inner tab component for selecting the between Issuer or Registry Institution view.",
        },
      },
    },
    {
      title: "4. Certificates",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v2-4.png",
          alt: "Second version of the prototype displaying a table view of certificates pending validation.",
        },
      },
    },
    {
      title: "5. Validation",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v2-5.png",
          alt: "Second version of the prototype displaying a table view of certificates pending validation, with a highlighted 'Validate' button for each certificate.",
        },
      },
    },
    {
      title: "6. Documentation",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v2-6.png",
          alt: "Second version of the prototype displaying a table view of certificates pending validation, highlighting user documentation, visual changes of certificates status, and table actions.",
        },
      },
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        title="Solution"
        text={
          "Improvements were made and another navigation hierarchy was tested. Minor changes included adding documentation so users could understand the flow clearly. These changes were tested again and navigation issues were fixed."
        }
      />
      <Tab tabs={tabs} />
    </div>
  );
};

export default Solution;
