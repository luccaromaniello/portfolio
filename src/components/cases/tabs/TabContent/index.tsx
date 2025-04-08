import { TabAttributes, TabType } from "../Tab";
import ImageCard from "@/components/cases/ImageCard";
import Image from "next/image";
import { formatCaseDescription } from "@/components/cases/anima/utils";
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
        <ImageCard padding={attributes.description ? true : false}>
          <div className="flex flex-col gap-8 h-full">
            {formatCaseDescription(attributes.description)}
            {attributes.image ? (
              attributes.image.highlight ? (
                <div className="relative w-full">
                  <Image
                    src={attributes.image.url}
                    alt={attributes.image.alt}
                    priority={index == 0 ? true : false}
                    className={`object-contain object-top ${attributes.description ? "" : "card-border"} filter brightness-75 hidden sm:block`}
                    quality={100}
                    layout="responsive"
                    width={50}
                    height={50}
                  />
                  <div className="relative sm:absolute sm:top-2/5 sm:top-1/4 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:px-16 sm:mx-auto">
                    <div className="flex flex-col gap-4 bg-neutral-white p-8 card-border">
                      <h4 className="text-md sm:text-xl font-bold leading-snug sm:leading-normal">
                        {attributes.image.highlight.title}
                      </h4>
                      {formatCaseDescription(
                        attributes.image.highlight.description,
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full">
                  <Image
                    src={attributes.image.url}
                    alt={attributes.image.alt}
                    priority={index == 0 ? true : false}
                    className={`object-contain object-top ${attributes.description ? "" : "card-border"}`}
                    quality={100}
                    layout="responsive"
                    width={50}
                    height={50}
                    // sizes="100vw"
                  />
                </div>
              )
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
