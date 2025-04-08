import Tab from "@/components/cases/tabs/Tab";
import SectionHeading from "@/components/cases/typography/SectionHeading";

const Prototypes = () => {
  const tabs = [
    {
      title: "1. University",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v1-1.png",
          alt: "First version of the prototype showcasing a menu component for selecting the university view.",
        },
      },
    },
    {
      title: "2. Institution type",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v1-2.png",
          alt: "First version of the prototype showcasing a secondary menu component for selecting between the certificates list, reports, and admin views.",
        },
      },
    },
    {
      title: "3. Views",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v1-3.png",
          alt: "First version of the prototype showcasing a inner tab component for selecting the between Issuer or Registry Institution view.",
        },
      },
    },
    {
      title: "4. Certificates",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v1-4.png",
          alt: "First version of the prototype displaying a table view of certificates pending validation.",
        },
      },
    },
    {
      title: "5. Validation",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v1-5.png",
          alt: "First version of the prototype displaying a table view of certificates pending validation, with a highlighted 'Validate' button for each certificate.",
        },
      },
    },
    {
      title: "6. Issues",
      type: 0,
      attributes: {
        image: {
          url: "/images/cases/anima/prototype-v1-6.png",
          alt: "First version of the prototype displaying a table view of certificates pending validation, with a highlighted 'Validate' button for each certificate.",
          highlight: {
            title: "The first prototype was visually confusing.",
            description: `Usability tests revealed users struggled with the information hierarchy, as the screen followed a right-to-left, top-to-bottom layout. This was my first project, and I was unfamiliar with key UI principles like information hierarchy.
            \nThe validation page, being just a document check, didn’t present any issues during testing.`,
          },
        },
      },
    },
  ];

  return (
    <div>
      <SectionHeading
        title="Prototypes and user testing"
        text={`A2S had an ongoing Design System, which I actively contributed to. It enabled efficient creation of high fidelity prototypes using predefined components. Low fidelity prototypes were also made, they were less frequent.
          \nWhen finished, I conducted usability tests with our users. Tests showed about 10 possible improvements, but we found out that the navigation hierarchy was visually confusing, as described below.`}
      />
      <Tab tabs={tabs} />
    </div>
  );
};

export default Prototypes;
