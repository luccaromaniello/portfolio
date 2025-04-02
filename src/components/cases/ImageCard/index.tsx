import { CARD } from "@/constants";

interface ImageCardProps {
  children?: React.ReactNode;
}

const ImageCard = ({ children }: ImageCardProps) => {
  return <div className={`${CARD} bg-neutral-white p-10`}>{children}</div>;
};

export default ImageCard;
