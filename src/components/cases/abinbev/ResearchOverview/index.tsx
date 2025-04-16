import ListCard from "@/components/cases/abinbev/ListCard";

const ResearchOverview = () => {
  const methodology = [
    { text: "Qualitative research", highlight: "User interviews (10 users)" },
    { text: "Quantitative research", highlight: "Survey (34 users)" },
    { text: "External benchmark" },
  ];

  const objective = [
    { text: "Identify key user features" },
    {
      text: "Identify user challenges and improve governance of current pages",
    },
    { text: "Improve information access control for compliance" },
  ];

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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h4 className="text-lg sm:text-2xl font-bold leading-snug sm:leading-normal">
          Overview
        </h4>
        <div className="flex flex-col sm:flex-row gap-8">
          <ListCard title="Methodology" list={methodology} />
          <ListCard title="Objective" list={objective} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-lg sm:text-2xl font-bold leading-snug sm:leading-normal">
          Insights
        </h4>
        <div className="flex flex-row gap-4">
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
    </div>
  );
};

export default ResearchOverview;
