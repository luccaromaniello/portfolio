import Text from "@/components/cases/typography/Text";

interface UserFlowItemProps {
  heading: string;
  description?: string;
  personas: Persona[];
}

interface Persona {
  name: string;
  role: string;
  action: string;
}

const UserFlowItem = ({
  heading,
  description,
  personas,
}: UserFlowItemProps) => {
  return (
    <div className="flex flex-row gap-16">
      <div className="flex flex-col w-1/3">
        <h5>{heading}</h5>
        <Text text={description ? description : ""} />
      </div>
      <div className="flex flex-row">
        <div>Avatar</div>
        <div className="flex flex-col">
          <Text text={personas.action} />
        </div>
      </div>
    </div>
  );
};

export default UserFlowItem;
