import "@/styles/cards.css";
import "@/styles/alignments.css";
import HighlightImage from "@/components/cases/media/HighlightImage";

interface SectionProps {
  id: string;
  size?: SectionSize;
  children?: React.ReactNode;
  image?: {
    url: string;
    alt: string;
  };
}

enum SectionSize {
  SHORT = 0,
  LONG = 1,
}

const Section = ({ id, size = 0, children, image }: SectionProps) => {
  return (
    <div
      data-section
      id={id}
      className={`${size == SectionSize.LONG ? "long-section" : "short-section"} section-container scroll-m-24`}
    >
      <div className="default-alignment">{children}</div>
      {image ? <HighlightImage url={image.url} alt={image.alt} /> : ""}
    </div>
  );
};

export default Section;
