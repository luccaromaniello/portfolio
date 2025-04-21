import "@/styles/cards.css";
import Image from "next/image";
import { formatCaseDescription } from "@/components/cases/utils";
import {
  CustomImage,
  ImageFitType,
  ImagePositionType,
} from "@/components/cases/images/utils";

interface CaseImageProps {
  priority?: boolean;
  description?: boolean;
  image: CustomImage;
}

const CaseImage = ({
  priority = true,
  description = false,
  image,
}: CaseImageProps) => {
  return image.highlight ? (
    <div className="relative w-full h-full">
      <Image
        src={image.url}
        alt={image.alt}
        priority={priority}
        className={`
          pointer-events-none w-full filter brightness-75 hidden sm:block
          ${image.position == ImagePositionType.LEFT_TOP ? "object-left-top" : "object-top"}
          ${image.fit == ImageFitType.COVER ? "object-cover h-full" : "object-contain h-auto"}
          ${description ? "card-border" : "inner-card-border"} filter brightness-75 hidden sm:block`}
        quality={100}
        width={image.width}
        height={image.height}
        sizes="100%"
      />
      <div className="relative sm:absolute sm:top-2/5 sm:top-1/4 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:px-16 sm:mx-auto">
        <div className="flex flex-col gap-4 bg-neutral-white p-8 card-border">
          <h4 className="text-md sm:text-xl font-bold leading-snug sm:leading-normal">
            {image.highlight.title}
          </h4>
          {formatCaseDescription(image.highlight.description)}
        </div>
      </div>
    </div>
  ) : (
    <div className="relative w-full h-full">
      <Image
        src={image.url}
        alt={image.alt}
        priority={priority}
        className={`
          pointer-events-none w-full
          ${image.position == ImagePositionType.LEFT_TOP ? "object-left-top" : "object-top"}
          ${image.fit == ImageFitType.COVER ? "object-cover h-full" : "object-contain h-auto"}
          ${description ? "card-border" : "inner-card-border"}`}
        quality={100}
        width={image.width}
        height={image.height}
        sizes="100%"
      />
      {image.subtitle ? (
        <p
          className={`text-footer text-center ${description ? "pt-4" : "py-4"}`}
        >
          {image.subtitle}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default CaseImage;
