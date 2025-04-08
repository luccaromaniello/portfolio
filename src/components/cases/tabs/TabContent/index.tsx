import { TabAttributes, TabType } from "../Tab";
import ImageCard from "@/components/cases/ImageCard";
import Image from "next/image";
import { formatCaseDescription } from "@/components/cases/anima/utils";
import "@/styles/cards.css";

interface TabContentProps {
  type: TabType;
  attributes: TabAttributes;
  children?: React.ReactNode;
}

const TabContent = ({ type, attributes, children }: TabContentProps) => {
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
                    priority
                    className={`object-contain object-top ${attributes.description ? "" : "card-border"} filter brightness-75`}
                    quality={100}
                    layout="responsive"
                    width={50}
                    height={50}
                  />
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-3/4 w-full px-16 mx-auto">
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
                    priority
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
