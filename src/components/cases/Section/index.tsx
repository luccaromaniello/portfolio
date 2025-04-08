import "@/styles/cards.css";
import HighlightImage from "@/components/cases/HighlightImage";

interface SectionProps {
  children?: React.ReactNode;
  image?: {
    url: string;
    alt: string;
  };
}

const Section = ({ children, image }: SectionProps) => {
  return (
    <div>
      <div className="default-alignment flex flex-col gap-8">{children}</div>
      {image ? <HighlightImage url={image.url} alt={image.alt} /> : ""}
    </div>
  );
};

export default Section;
