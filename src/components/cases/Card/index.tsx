import "@/styles/cards.css";
import { CustomImage } from "@/components/cases/images/utils";
import { formatCaseDescription } from "@/components/cases/utils";
import CaseImage from "@/components/cases/CaseImage";

interface CardProps {
  description?: string;
  decoration?: DecorationType;
  image?: CustomImage;
  children?: React.ReactNode;
}

enum DecorationType {
  NONE = 0,
  ABINBEV = 1,
}

const Card = ({ description, decoration = 0, image, children }: CardProps) => {
  return (
    <div
      className={`${description || children ? "flex flex-col gap-8 card" : "image-only-card"} ${decoration == DecorationType.ABINBEV ? "abinbev-highlight" : ""}`}
    >
      {description ? formatCaseDescription(description) : ""}
      {children}
      {image ? <CaseImage image={image} /> : ""}
    </div>
  );
};

export default Card;
