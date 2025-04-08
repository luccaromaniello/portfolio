import "@/styles/cards.css";

interface ImageCardProps {
  padding?: boolean;
  children?: React.ReactNode;
}

const ImageCard = ({ padding = true, children }: ImageCardProps) => {
  return padding ? (
    <div className={`image-card`}>{children}</div>
  ) : (
    <div className={`image-only-card`}>{children}</div>
  );
};

export default ImageCard;
