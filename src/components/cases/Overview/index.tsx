import Label from "@/components/cases/typography/Label";
import Text from "@/components/cases/typography/Text";

interface OverviewProps {
  description: string;
  date: string;
  role: string;
  keywords: string;
  results: string;
}

const Overview = ({
  description,
  date,
  role,
  keywords,
  results,
}: OverviewProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
      <div className="flex flex-col">
        <Label text="Overview" />
        <Text text={description} />
      </div>
      <div className="flex flex-col sm:basis-96 gap-8 sm:shrink-0">
        <div className="flex flex-col">
          <Label text="Role and project duration" />
          <Text text={date} />
          <Text text={role} />
          <Text text={keywords} />
        </div>
        <div className="flex flex-col">
          <Label text="Results" />
          <Text text={results} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
