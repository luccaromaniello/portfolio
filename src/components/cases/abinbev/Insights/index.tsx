import SectionHeading from "@/components/cases/typography/SectionHeading";
import "@/styles/alignments.css";
import ListCard from "@/components/cases/abinbev/ListCard";

const Insights = () => {
  const insights = [
    [
      { text: "Most API docs lacked business rules." },
      {
        text: "Access permission issues for both internal and external users.",
      },
      { text: "Time-consuming process for granting new user access." },
    ],
    [
      {
        text: "Business rules are in platforms like Confluence but not universally accessible.",
      },
      {
        text: "Security issues and outdated data from sharing knowledge via PDFs.",
      },
    ],
    [
      {
        text: "Unclear authorization process for access.",
      },
      {
        text: "API updates shared only in a specific Slack channel, not widely accessible.",
      },
      {
        text: "Users learn about API changes only when facing application issues.",
      },
    ],
  ];

  return (
    <div className="section-container">
      <SectionHeading
        title="Insights"
        text="Our findings highlighted key user difficulties and helped identify specific problem areas within the current documentation."
      />
      <div className="flex flex-col sm:flex-row gap-8">
        <ListCard
          title="Documentation and access challenges"
          list={insights[0]}
          color={1}
        />
        <ListCard
          title="Information accessibility and security"
          list={insights[1]}
          color={1}
        />
        <ListCard
          title="Communication and update issues"
          list={insights[2]}
          color={1}
        />
      </div>
    </div>
  );
};

export default Insights;
