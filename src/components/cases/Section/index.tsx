import "@/styles/cards.css";
import "@/styles/alignments.css";
import HighlightImage from "@/components/cases/HighlightImage";

interface SectionProps {
  id: string;
  children?: React.ReactNode;
  image?: {
    url: string;
    alt: string;
  };
}

const Section = ({ id, children, image }: SectionProps) => {
  return (
    <div data-section id={id} className="section-container scroll-m-24">
      <div className="default-alignment">{children}</div>
      {image ? <HighlightImage url={image.url} alt={image.alt} /> : ""}
    </div>
  );
};

export default Section;
