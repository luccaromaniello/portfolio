import Label from "@/components/cases/Label";

interface CaseOverviewProps {
  overview: string,
  date: string,
  role: string,
  keywords: string,
  results: string,
}

const CaseOverview = ({ overview, date, role, keywords, results }: CaseOverviewProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <Label text="Overview"/>
        <p>{overview}</p>
        <p>This was possible since the Ministry of Education requirements should be followed by any organization that provides certificates to their students.</p>
      </div>
      <div className="flex flex-col">
        <Label text="Role and project duration"/>
        <p>{date}</p>
        <p>{role}</p>
        <p>{keywords}</p>
        <div>
          <Label text="Results"/>
          <p>{results}</p>
        </div>
      </div>
    </div>
  )
};

export default CaseOverview;