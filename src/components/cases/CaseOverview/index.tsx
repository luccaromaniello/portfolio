import Label from "@/components/cases/Label";
import Text from "@/components/cases/Text";

interface CaseOverviewProps {
  overview: string,
  date: string,
  role: string,
  keywords: string,
  results: string,
}

const CaseOverview = ({ overview, date, role, keywords, results }: CaseOverviewProps) => {
  return (
    <div className="flex flex-row gap-24">
      <div className="flex flex-col">
        <Label text="Overview"/>
        <Text text={overview}/>
      </div>
      <div className="flex flex-col basis-96 gap-8 shrink-0">
        <div className="flex flex-col">
          <Label text="Role and project duration"/>
          <Text text={date}/>
          <Text text={role}/>
          <Text text={keywords}/>
        </div>
        <div className="flex flex-col">
          <Label text="Results"/>
          <Text text={results}/>
        </div>
      </div>
    </div>
  )
};

export default CaseOverview;