import { CARD_RADIUS, CARD_PADDING, CARD_SHADOW } from "@/constants";
import Text from "@/components/cases/typography/Text";

interface ImageCardProps {
  description?: string;
  children?: React.ReactNode;
}

const ImageCard = ({ description, children }: ImageCardProps) => {
  return (
    <div
      className={`${CARD_RADIUS} ${CARD_PADDING} ${CARD_SHADOW} bg-neutral-white`}
    >
      {description ? <Text text={description} /> : ""}
      {children}
    </div>
  );
};

export default ImageCard;
