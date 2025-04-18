import Text from "@/components/cases/typography/Text";

interface ReviewCardProps {
  emoji: string;
  percentage: string;
  title: string;
  description: string;
}

const ReviewCard = ({
  emoji,
  percentage,
  title,
  description,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 w-full bg-background rounded-lg border border-content-secondary/25">
      <div className="flex flex-row gap-2 text-2xl items-center">
        <span>{emoji}</span>
        <h4 className="font-bold leading-snug sm:leading-normal">
          {percentage}%
        </h4>
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-lg font-bold leading-snug sm:leading-normal">
          {title}
        </h5>
        <Text text={description} />
      </div>
    </div>
  );
};

export default ReviewCard;
