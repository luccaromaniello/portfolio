import Text from "@/components/cases/typography/Text";
import { CARD_RADIUS } from "@/constants";

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
    <div
      className={`${CARD_RADIUS} flex flex-row gap-16 border border-dashed border-primary-main/35`}
    >
      <div className="flex flex-col w-1/3 px-6 justify-items-center">
        <h5>{heading}</h5>
        <Text text={description ? description : ""} type={1} />
      </div>
      <div className="flex flex-row w-full">
        <div
          className={personas.length > 1 ? "flex flex-col" : "flex flex-row"}
        >
          {personas.map((persona, index) => (
            <div key={index} className="flex flex-row w-full">
              <div>Avatar</div>
              <div className="flex flex-col">
                <p>{persona.name}</p>
                <p>{persona.role}</p>
                <Text text={persona.action} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFlowItem;
