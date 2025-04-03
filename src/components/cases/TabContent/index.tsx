import { TabAttributes, TabType } from "../Tab";
import ImageCard from "@/components/cases/ImageCard";
import Image from "next/image";
import { formatCaseDescription } from "@/components/cases/anima/utils";

interface TabContentProps {
  type: TabType;
  attributes: TabAttributes;
  children?: React.ReactNode;
}

const TabContent = ({ type, attributes, children }: TabContentProps) => {
  switch (type) {
    case TabType.IMAGE: {
      return (
        <ImageCard>
          <div className="flex flex-col gap-8 h-full">
            {formatCaseDescription(attributes.description)}
            {attributes.image ? (
              <div className="relative w-full">
                <Image
                  src={attributes.image.url}
                  alt={attributes.image.alt}
                  priority
                  className="object-contain object-top"
                  quality={100}
                  layout="responsive"
                  width={50}
                  height={50}
                  // sizes="100vw"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </ImageCard>
      );
    }
    case TabType.CUSTOM: {
      return (
        <ImageCard>
          <div className="flex flex-col gap-8 h-full">
            {formatCaseDescription(attributes.description)}
            <div>{children}</div>
          </div>
        </ImageCard>
      );
    }
    default: {
      return <div>{children}</div>;
    }
  }
};

export default TabContent;
