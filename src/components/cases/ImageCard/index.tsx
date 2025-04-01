import { CARD_RADIUS, CARD_PADDING, CARD_SHADOW } from "@/constants";

interface ImageCardProps {
  children?: React.ReactNode;
}

const ImageCard = ({ children }: ImageCardProps) => {
  return (
    <div
      className={`${CARD_RADIUS} ${CARD_PADDING} ${CARD_SHADOW} bg-neutral-white`}
    >
      {children}
    </div>
  );
};

export default ImageCard;
