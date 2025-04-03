import Text from "@/components/cases/typography/Text";
import { CARD_RADIUS } from "@/constants";
import Image from "next/image";

interface UserFlowItemProps {
  heading: string;
  description?: string;
  personas: Persona[];
}

interface Persona {
  name: string;
  image: {
    url: string;
    alt: string;
  };
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
      className={`${CARD_RADIUS} flex flex-row gap-16 border border-dashed border-primary-main/35 items-center`}
    >
      <div className="flex flex-col gap-2 w-1/3 px-6">
        <h5 className="text-lg font-medium text-primary-main">{heading}</h5>
        <Text text={description ? description : ""} type={1} />
      </div>
      <div className="flex flex-row w-full">
        <div
          className={personas.length > 1 ? "flex flex-col" : "flex flex-row"}
        >
          {personas.map((persona, index) => (
            <div key={index} className="flex flex-row gap-12 w-full">
              <div className="flex flex-col items-center">
                <div className="h-full w-px bg-content-tertiary/40"></div>
                <Image
                  src={persona.image.url}
                  alt={persona.image.alt}
                  priority
                  width={72}
                  height={72}
                  className="object-contain object-top rounded-full border"
                  quality={100}
                />
                <div className="h-full w-px bg-content-tertiary/40"></div>
              </div>
              <div className="flex flex-col gap-1 py-6">
                <div className="flex flex-col">
                  <p className="font-medium">{persona.name}</p>
                  <p className="text-sm text-content-secondary">
                    {persona.role}
                  </p>
                </div>
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
