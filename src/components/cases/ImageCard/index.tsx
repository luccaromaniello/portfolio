import "@/styles/cards.css";

interface ImageCardProps {
  padding?: boolean;
  highlight?: HighlightType;
  children?: React.ReactNode;
}

enum HighlightType {
  NONE = 0,
  ABINBEV = 1,
}

const ImageCard = ({
  padding = true,
  highlight = 0,
  children,
}: ImageCardProps) => {
  return padding ? (
    highlight == HighlightType.ABINBEV ? (
      <div className={`image-card abinbev-highlight`}>{children}</div>
    ) : (
      <div className={`image-card`}>{children}</div>
    )
  ) : (
    <div className={`image-only-card`}>{children}</div>
  );
};

export default ImageCard;
