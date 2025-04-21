import Text from "@/components/cases/typography/Text";

interface ReviewCardProps {
  emoji: string;
  percentage: string;
  increase?: string;
  title: string;
  description: string;
}

const ReviewCard = ({
  emoji,
  percentage,
  increase,
  title,
  description,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 w-full bg-background rounded-lg border border-content-secondary/25">
      <div
        className={`flex ${increase ? "flex-col" : "flex-row gap-2 items-center"} text-2xl`}
      >
        <h4 className="font-bold leading-snug sm:leading-normal">
          {percentage}%{" "}
          {increase ? (
            <span className="text-lg font-medium text-feedback-success">
              (+{increase}%)
            </span>
          ) : (
            ""
          )}
        </h4>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-lg">{emoji} </span>
        <h5 className="text-lg font-bold leading-snug sm:leading-normal">
          {title}
        </h5>
        <Text text={description} />
      </div>
    </div>
  );
};

export default ReviewCard;
