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
        <div>
          {attributes.description ? <Text text={attributes.description} /> : ""}
        </div>
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
