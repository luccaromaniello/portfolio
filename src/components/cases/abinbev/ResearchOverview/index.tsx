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

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row gap-8">
        <ListCard title="Methodology" list={methodology} />
        <ListCard title="Objective" list={objective} />
      </div>
    </div>
  );
};

export default ResearchOverview;
