import { TabAttributes, TabType } from "../Tab";
import Card from "@/components/cases/Card";
import "@/styles/cards.css";

interface TabContentProps {
  index: number;
  type: TabType;
  attributes: TabAttributes;
  children?: React.ReactNode;
}

const TabContent = ({ index, type, attributes, children }: TabContentProps) => {
  switch (type) {
    case TabType.IMAGE: {
      return (
        <Card
          description={
            attributes.description ? attributes.description : undefined
          }
          image={
            attributes.image
              ? {
                  priority: index == 0 ? true : false,
                  url: attributes.image.url,
                  alt: attributes.image.alt,
                  width: 50,
                  height: 50,
                  subtitle: attributes.image.subtitle,
                  highlight: attributes.image.highlight,
                }
              : undefined
          }
        ></Card>
      );
    }
    case TabType.CUSTOM: {
      return (
        <Card
          description={
            attributes.description ? attributes.description : undefined
          }
        >
          <div className="flex flex-col gap-8 h-full">
            <div>{children}</div>
          </div>
        </Card>
      );
    }
    default: {
      return <div>{children}</div>;
    }
  }
};

export default TabContent;
