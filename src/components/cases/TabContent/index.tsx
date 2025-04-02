import { TabAttributes, TabType } from "../Tab";
import ImageCard from "@/components/cases/ImageCard";
import Text from "@/components/cases/typography/Text";
import Image from "next/image";

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
          <div className="flex flex-col gap-8">
            {attributes.description ? (
              <Text text={attributes.description} />
            ) : (
              ""
            )}
            {attributes.image ? (
              <div className="h-[296px] sm:h-[840px] 2xl:h-[1048px] relative">
                <Image
                  src={attributes.image.url}
                  alt={attributes.image.alt}
                  priority
                  fill
                  className="object-contain object-top"
                  quality={100}
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
      // statements;
      break;
    }
    default: {
      return <div>{children}</div>;
    }
  }
};

export default TabContent;
