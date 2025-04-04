import "@/styles/cards.css";

interface ImageCardProps {
  children?: React.ReactNode;
}

const ImageCard = ({ children }: ImageCardProps) => {
  return <div className={`image-card`}>{children}</div>;
};

export default ImageCard;
