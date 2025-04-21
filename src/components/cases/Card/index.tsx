import "@/styles/cards.css";
import { CustomImage } from "@/components/cases/images/utils";
import { formatCaseDescription } from "@/components/cases/utils";
import CaseImage from "@/components/cases/CaseImage";
import CaseVideo from "@/components/cases/CaseVideo";

interface CardProps {
  description?: string;
  decoration?: DecorationType;
  image?: CustomImage;
  video?: {
    url: string;
  };
  children?: React.ReactNode;
}

enum DecorationType {
  NONE = 0,
  ABINBEV = 1,
}

const Card = ({
  description,
  decoration = 0,
  image,
  video,
  children,
}: CardProps) => {
  return (
    <div
      className={`w-full ${description || children ? "flex flex-col gap-8 card" : "image-only-card"} ${decoration == DecorationType.ABINBEV ? "abinbev-highlight" : ""}`}
    >
      {description ? formatCaseDescription(description) : ""}
      {children}
      {image ? (
        <CaseImage description={description ? true : false} image={image} />
      ) : (
        ""
      )}
      {video ? (
        <CaseVideo description={description ? true : false} url={video.url} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
