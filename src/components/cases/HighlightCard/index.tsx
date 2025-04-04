import Text from "@/components/cases/typography/Text";
import "@/styles/cards.css";

interface HighlightCardProps {
  title: string;
  description: string;
}

const HighlightCard = ({ title, description }: HighlightCardProps) => {
  return (
    <div
      className={`flex flex-col gap-6 p-6 sm:p-16 sm:my-12 bg-primary-main/5 card-border`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold leading-snug sm:leading-normal">
        {title}
      </h2>
      <Text text={description} />
    </div>
  );
};

export default HighlightCard;
